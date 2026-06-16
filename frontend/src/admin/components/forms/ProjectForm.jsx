import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import ImageUpload from '../ui/ImageUpload';
import TagInput from '../ui/TagInput';
import Button from '../ui/Button';

const ProjectForm = ({ defaultValues, onSubmit, loading }) => {
  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm({
    defaultValues: defaultValues || {
      title: '', client: '', category: '', shortDescription: '',
      problem: '', solution: '', results: '', isFeatured: false, isPublished: false, metrics: [],
    },
  });
  
  const { fields, append, remove } = useFieldArray({ control, name: 'metrics' });
  const [coverImage, setCoverImage] = useState(defaultValues?.coverImage?.url || null);
  const [tags, setTags] = useState(defaultValues?.tags || []);

  const submit = (data) => {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (k === 'metrics') fd.append(k, JSON.stringify(v));
      else if (v !== undefined && v !== null) fd.append(k, v);
    });
    tags.forEach((t) => fd.append('tags', t));
    if (coverImage instanceof File) fd.append('coverImage', coverImage);
    onSubmit(fd);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <ImageUpload label="Cover Image" value={coverImage} onChange={setCoverImage} />

      <Input id="proj-title" label="Title *" error={errors.title?.message}
        {...register('title', { required: 'Title is required', maxLength: { value: 150, message: 'Max 150' } })} />

      <div className="grid grid-cols-2 gap-4">
        <Input id="proj-client" label="Client" {...register('client')} />
        <Input id="proj-category" label="Category" {...register('category')} />
      </div>

      <TagInput label="Tags" value={tags} onChange={setTags} placeholder="Add tags..." />

      <Textarea id="proj-short" label="Short Description *" rows={2} error={errors.shortDescription?.message}
        {...register('shortDescription', { required: 'Required', maxLength: { value: 500, message: 'Max 500' } })} />
      <Textarea id="proj-problem" label="Problem *" rows={3} error={errors.problem?.message}
        {...register('problem', { required: 'Required' })} />
      <Textarea id="proj-solution" label="Solution *" rows={3} error={errors.solution?.message}
        {...register('solution', { required: 'Required' })} />
      <Textarea id="proj-results" label="Results" rows={2} {...register('results')} />

      {/* Metrics */}
      <div>
        <p className="form-label">Metrics</p>
        <div className="space-y-2">
          {fields.map((field, idx) => (
            <div key={field.id} className="flex gap-2 items-center">
              <Input id={`metric-label-${idx}`} placeholder="Label" {...register(`metrics.${idx}.label`, { required: true })} />
              <Input id={`metric-value-${idx}`} placeholder="Value" {...register(`metrics.${idx}.value`, { required: true })} />
              <button type="button" onClick={() => remove(idx)} className="text-red-400 hover:text-red-300 shrink-0">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => append({ label: '', value: '' })}
          className="mt-2 flex items-center gap-1.5 text-sm text-brand-400 hover:text-brand-300">
          <Plus className="w-4 h-4" /> Add Metric
        </button>
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" {...register('isFeatured')} className="w-4 h-4 accent-brand-500 rounded" />
          <span className="text-sm text-slate-300">Featured</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" {...register('isPublished')} className="w-4 h-4 accent-brand-500 rounded" />
          <span className="text-sm text-slate-300">Published</span>
        </label>
      </div>

      <div className="flex gap-3 justify-end pt-2 border-t border-surface-border">
        <Button type="submit" loading={loading}>{defaultValues ? 'Update Project' : 'Create Project'}</Button>
      </div>
    </form>
  );
};

export default ProjectForm;
