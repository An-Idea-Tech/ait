import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import TagInput from '../ui/TagInput';
import Button from '../ui/Button';
import { useState } from 'react';

const jobTypes = [
  { value: 'full-time',   label: 'Full-Time' },
  { value: 'part-time',   label: 'Part-Time' },
  { value: 'contract',    label: 'Contract' },
  { value: 'internship',  label: 'Internship' },
  { value: 'remote',      label: 'Remote' },
];

const ArrayField = ({ label, value, onChange, placeholder }) => {
  const [input, setInput] = useState('');
  const add = () => {
    const v = input.trim();
    if (!v) return;
    onChange([...value, v]);
    setInput('');
  };
  return (
    <div>
      <p className="form-label">{label}</p>
      <div className="space-y-1.5 mb-2">
        {value.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="flex-1 text-sm text-slate-300 bg-surface px-3 py-1.5 rounded-lg border border-surface-border">{item}</span>
            <button type="button" onClick={() => onChange(value.filter((_, j) => j !== i))} className="text-red-400 hover:text-red-300">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); add(); } }}
          placeholder={placeholder}
          className="form-input flex-1 text-sm" />
        <button type="button" onClick={add} className="btn-secondary px-3">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const JobForm = ({ defaultValues, onSubmit, loading }) => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: defaultValues || {
      title: '', department: '', location: '', type: '', experience: '',
      description: '', applyDeadline: '', isOpen: true,
      salary: { min: '', max: '', currency: 'INR', isVisible: false },
      responsibilities: [], requirements: [], niceToHave: [], benefits: [],
    },
  });

  const [responsibilities, setResponsibilities] = useState(defaultValues?.responsibilities || []);
  const [requirements,     setRequirements]     = useState(defaultValues?.requirements || []);
  const [niceToHave,       setNiceToHave]       = useState(defaultValues?.niceToHave || []);
  const [benefits,         setBenefits]         = useState(defaultValues?.benefits || []);

  const submit = (data) => {
    const body = {
      ...data,
      responsibilities,
      requirements,
      niceToHave,
      benefits,
      salary: {
        min: data.salary?.min ? Number(data.salary.min) : undefined,
        max: data.salary?.max ? Number(data.salary.max) : undefined,
        currency: data.salary?.currency,
        isVisible: data.salary?.isVisible,
      },
    };
    onSubmit(body);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <Input id="job-title" label="Job Title *" error={errors.title?.message}
        {...register('title', { required: 'Title is required', maxLength: { value: 150, message: 'Max 150' } })} />

      <div className="grid grid-cols-2 gap-4">
        <Input id="job-dept" label="Department" {...register('department')} />
        <Input id="job-loc" label="Location *" error={errors.location?.message}
          {...register('location', { required: 'Location is required' })} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Select id="job-type" label="Job Type *" options={jobTypes} placeholder="Select type"
          error={errors.type?.message}
          {...register('type', { required: 'Type is required' })} />
        <Input id="job-exp" label="Experience" {...register('experience')} placeholder="e.g. 2-4 years" />
      </div>

      {/* Salary */}
      <div className="bg-surface rounded-xl border border-surface-border p-4 space-y-3">
        <p className="text-sm font-medium text-slate-300">Salary</p>
        <div className="grid grid-cols-3 gap-3">
          <Input id="job-sal-min" label="Min" type="number" {...register('salary.min')} />
          <Input id="job-sal-max" label="Max" type="number" {...register('salary.max')} />
          <Input id="job-sal-curr" label="Currency" {...register('salary.currency')} />
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" {...register('salary.isVisible')} className="w-4 h-4 accent-brand-500 rounded" />
          <span className="text-sm text-slate-300">Show salary to applicants</span>
        </label>
      </div>

      <Textarea id="job-desc" label="Description *" rows={4} error={errors.description?.message}
        {...register('description', { required: 'Description is required' })} />

      <ArrayField label="Responsibilities" value={responsibilities} onChange={setResponsibilities} placeholder="Add responsibility..." />
      <ArrayField label="Requirements" value={requirements} onChange={setRequirements} placeholder="Add requirement..." />
      <ArrayField label="Nice to Have" value={niceToHave} onChange={setNiceToHave} placeholder="Add nice-to-have skill..." />
      <ArrayField label="Benefits" value={benefits} onChange={setBenefits} placeholder="Add benefit..." />

      <div className="grid grid-cols-2 gap-4">
        <Input id="job-deadline" label="Apply Deadline" type="date" {...register('applyDeadline')} />
        <div className="flex items-end pb-2.5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" {...register('isOpen')} className="w-4 h-4 accent-brand-500 rounded" />
            <span className="text-sm text-slate-300">Position Open</span>
          </label>
        </div>
      </div>

      <div className="flex gap-3 justify-end pt-2 border-t border-surface-border">
        <Button type="submit" loading={loading}>{defaultValues ? 'Update Job' : 'Create Job'}</Button>
      </div>
    </form>
  );
};

export default JobForm;
