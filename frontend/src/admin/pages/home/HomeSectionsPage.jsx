import React, { useState, useEffect } from 'react';
import { useHomeSection, useUpdateHomeSection } from '../../hooks/useHome';
import { useForm, useFieldArray } from 'react-hook-form';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import Button from '../../components/ui/Button';
import { PageLoader } from '../../components/ui/LoadingSpinner';
import TagInput from '../../components/ui/TagInput';
import { Plus, Trash2, Save } from 'lucide-react';
import { getErrorMessage } from '../../utils/helpers';
import toast from 'react-hot-toast';

const TAB_SECTIONS = ['hero', 'metrics', 'about', 'howWeWork', 'contactInfo'];
const TAB_LABELS   = { hero: 'Hero', metrics: 'Metrics', about: 'About', howWeWork: 'How We Work', contactInfo: 'Contact Info' };

// ── Hero Section Form ─────────────────────────────────────────────
const HeroSectionForm = ({ section, onSave }) => {
  const { data, isLoading } = useHomeSection(section);
  const updateMut = useUpdateHomeSection(section);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => { if (data) reset(data); }, [data]);

  const onSubmit = async (values) => {
    try { await updateMut.mutateAsync(values); toast.success('Hero section updated'); onSave?.(); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  if (isLoading) return <PageLoader />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input id="hero-headline"    label="Headline *"    {...register('headline')} />
      <Input id="hero-subheadline" label="Sub-headline"  {...register('subheadline')} />
      <div className="grid grid-cols-2 gap-4">
        <Input id="hero-cta-text"  label="CTA Text"      {...register('ctaText')} />
        <Input id="hero-cta-link"  label="CTA Link"      {...register('ctaLink')} />
      </div>
      <Input id="hero-badge"      label="Badge Text"     {...register('badgeText')} />
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" {...register('isActive')} className="w-4 h-4 accent-brand-500 rounded" />
        <span className="text-sm text-slate-300">Active</span>
      </label>
      <Button type="submit" icon={Save} loading={updateMut.isPending}>Save Hero</Button>
    </form>
  );
};

// ── Metrics Section Form ──────────────────────────────────────────
const MetricsSectionForm = ({ section }) => {
  const { data, isLoading } = useHomeSection(section);
  const updateMut = useUpdateHomeSection(section);
  const { register, handleSubmit, control, reset } = useForm({ defaultValues: { metrics: [] } });
  const { fields, append, remove } = useFieldArray({ control, name: 'metrics' });

  useEffect(() => { if (data) reset(data); }, [data]);

  const onSubmit = async (values) => {
    try { await updateMut.mutateAsync(values); toast.success('Metrics updated'); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  if (isLoading) return <PageLoader />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input id="metrics-title" label="Section Title" {...register('sectionTitle')} />
      <div className="space-y-2">
        <p className="form-label">Metrics</p>
        {fields.map((f, i) => (
          <div key={f.id} className="flex gap-2 items-center">
            <Input id={`m-label-${i}`} placeholder="Label"  {...register(`metrics.${i}.label`, { required: true })} />
            <Input id={`m-value-${i}`} placeholder="Value"  {...register(`metrics.${i}.value`, { required: true })} />
            <Input id={`m-suffix-${i}`} placeholder="Suffix" {...register(`metrics.${i}.suffix`)} />
            <button type="button" onClick={() => remove(i)} className="text-red-400 shrink-0"><Trash2 className="w-4 h-4" /></button>
          </div>
        ))}
        <button type="button" onClick={() => append({ label: '', value: '', suffix: '' })}
          className="flex items-center gap-1.5 text-sm text-brand-400 hover:text-brand-300">
          <Plus className="w-4 h-4" /> Add Metric
        </button>
      </div>
      <Button type="submit" icon={Save} loading={updateMut.isPending}>Save Metrics</Button>
    </form>
  );
};

// ── About Section Form ────────────────────────────────────────────
const AboutSectionForm = ({ section }) => {
  const { data, isLoading } = useHomeSection(section);
  const updateMut = useUpdateHomeSection(section);
  const { register, handleSubmit, reset, setValue, watch } = useForm({ defaultValues: { highlights: [] } });
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    if (data) { reset(data); setHighlights(data.highlights || []); }
  }, [data]);

  const onSubmit = async (values) => {
    try { await updateMut.mutateAsync({ ...values, highlights }); toast.success('About section updated'); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  if (isLoading) return <PageLoader />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input id="about-heading"    label="Heading *"    {...register('heading')} />
      <Input id="about-subheading" label="Sub-heading"  {...register('subheading')} />
      <Textarea id="about-desc"    label="Description *" rows={4} {...register('description')} />
      <TagInput label="Highlights" value={highlights} onChange={setHighlights} placeholder="Add highlight..." />
      <div className="grid grid-cols-2 gap-4">
        <Input id="about-cta-text" label="CTA Text" {...register('ctaText')} />
        <Input id="about-cta-link" label="CTA Link" {...register('ctaLink')} />
      </div>
      <Button type="submit" icon={Save} loading={updateMut.isPending}>Save About</Button>
    </form>
  );
};

// ── How We Work Section Form ──────────────────────────────────────
const HowWeWorkForm = ({ section }) => {
  const { data, isLoading } = useHomeSection(section);
  const updateMut = useUpdateHomeSection(section);
  const { register, handleSubmit, control, reset } = useForm({ defaultValues: { steps: [] } });
  const { fields, append, remove } = useFieldArray({ control, name: 'steps' });

  useEffect(() => { if (data) reset(data); }, [data]);

  const onSubmit = async (values) => {
    try { await updateMut.mutateAsync(values); toast.success('How We Work updated'); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  if (isLoading) return <PageLoader />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input  id="hww-title"    label="Section Title"    {...register('sectionTitle')} />
      <Input  id="hww-subtitle" label="Section Subtitle" {...register('sectionSubtitle')} />
      <div className="space-y-3">
        <p className="form-label">Steps</p>
        {fields.map((f, i) => (
          <div key={f.id} className="bg-surface p-3 rounded-lg border border-surface-border space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Step {i + 1}</span>
              <button type="button" onClick={() => remove(i)} className="text-red-400"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input id={`step-n-${i}`} placeholder="Step #" type="number" {...register(`steps.${i}.step`, { valueAsNumber: true })} />
              <Input id={`step-icon-${i}`} placeholder="Icon" {...register(`steps.${i}.icon`)} />
            </div>
            <Input id={`step-title-${i}`} placeholder="Title" {...register(`steps.${i}.title`, { required: true })} />
            <Textarea id={`step-desc-${i}`} placeholder="Description" rows={2} {...register(`steps.${i}.description`, { required: true })} />
          </div>
        ))}
        <button type="button" onClick={() => append({ step: fields.length + 1, title: '', description: '', icon: '' })}
          className="flex items-center gap-1.5 text-sm text-brand-400 hover:text-brand-300">
          <Plus className="w-4 h-4" /> Add Step
        </button>
      </div>
      <Button type="submit" icon={Save} loading={updateMut.isPending}>Save Steps</Button>
    </form>
  );
};

// ── Contact Info Section Form ─────────────────────────────────────
const ContactInfoForm = ({ section }) => {
  const { data, isLoading } = useHomeSection(section);
  const updateMut = useUpdateHomeSection(section);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => { if (data) reset(data); }, [data]);

  const onSubmit = async (values) => {
    try { await updateMut.mutateAsync(values); toast.success('Contact info updated'); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  if (isLoading) return <PageLoader />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input id="ci-email"   label="Email"   type="email" {...register('email')} />
        <Input id="ci-phone"   label="Phone"              {...register('phone')} />
      </div>
      <Textarea id="ci-address" label="Address" rows={2} {...register('address')} />
      <Input id="ci-map"       label="Map Embed URL" type="url" {...register('mapEmbedUrl')} />
      <div className="space-y-2">
        <p className="form-label">Social Links</p>
        <Input id="ci-li"  placeholder="LinkedIn URL"  {...register('socialLinks.linkedin')} />
        <Input id="ci-tw"  placeholder="Twitter URL"   {...register('socialLinks.twitter')} />
        <Input id="ci-ig"  placeholder="Instagram URL" {...register('socialLinks.instagram')} />
        <Input id="ci-fb"  placeholder="Facebook URL"  {...register('socialLinks.facebook')} />
        <Input id="ci-gh"  placeholder="GitHub URL"    {...register('socialLinks.github')} />
      </div>
      <Button type="submit" icon={Save} loading={updateMut.isPending}>Save Contact Info</Button>
    </form>
  );
};

// ── Forms map ─────────────────────────────────────────────────────
const SECTION_FORMS = {
  hero:        HeroSectionForm,
  metrics:     MetricsSectionForm,
  about:       AboutSectionForm,
  howWeWork:   HowWeWorkForm,
  contactInfo: ContactInfoForm,
};

// ── Main Page ─────────────────────────────────────────────────────
const HomeSectionsPage = () => {
  const [activeTab, setActiveTab] = useState('hero');
  const SectionForm = SECTION_FORMS[activeTab];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="page-title">Home Sections</h2>
        <p className="text-sm text-slate-400 mt-1">Manage content for each section of the home page</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-surface-card border border-surface-border rounded-xl w-fit">
        {TAB_SECTIONS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-100 hover:bg-surface-hover'
            }`}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      {/* Section form */}
      <div className="card max-w-2xl">
        <h3 className="section-title mb-5">{TAB_LABELS[activeTab]} Section</h3>
        <SectionForm key={activeTab} section={activeTab} />
      </div>
    </div>
  );
};

export default HomeSectionsPage;
