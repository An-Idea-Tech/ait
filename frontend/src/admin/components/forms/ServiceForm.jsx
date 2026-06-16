import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import ImageUpload from '../ui/ImageUpload';
import Button from '../ui/Button';

const ServiceForm = ({ defaultValues, onSubmit, loading }) => {
  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm({
    defaultValues: defaultValues || { title: '', shortDescription: '', description: '', icon: '', order: 0, isPublished: false, features: [] },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'features' });
  const [image, setImage] = useState(defaultValues?.image?.url || null);

  const submit = (data) => {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (k === 'features') {
        fd.append(k, JSON.stringify(v));
      } else if (v !== undefined && v !== null) {
        fd.append(k, v);
      }
    });
    if (image instanceof File) fd.append('image', image);
    onSubmit(fd);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <ImageUpload label="Service Image" value={image} onChange={setImage} />

      <Input
        id="svc-title" label="Title *"
        error={errors.title?.message}
        {...register('title', { required: 'Title is required', maxLength: { value: 120, message: 'Max 120 chars' } })}
      />
      <Textarea
        id="svc-short" label="Short Description *" rows={2}
        error={errors.shortDescription?.message}
        {...register('shortDescription', { required: 'Required', maxLength: { value: 300, message: 'Max 300 chars' } })}
      />
      <Textarea
        id="svc-desc" label="Full Description *" rows={4}
        error={errors.description?.message}
        {...register('description', { required: 'Required' })}
      />
      <Input id="svc-icon" label="Icon (class or emoji)" {...register('icon')} placeholder="e.g. 💡 or fa-lightbulb" />

      {/* Features */}
      <div>
        <p className="form-label">Features</p>
        <div className="space-y-2">
          {fields.map((field, idx) => (
            <div key={field.id} className="flex gap-2">
              <div className="flex-1 space-y-1">
                <Input
                  id={`feat-title-${idx}`}
                  placeholder="Feature title"
                  {...register(`features.${idx}.title`, { required: true })}
                />
                <Input
                  id={`feat-desc-${idx}`}
                  placeholder="Feature description"
                  {...register(`features.${idx}.description`, { required: true })}
                />
              </div>
              <button type="button" onClick={() => remove(idx)} className="text-red-400 hover:text-red-300 mt-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => append({ title: '', description: '' })}
          className="mt-2 flex items-center gap-1.5 text-sm text-brand-400 hover:text-brand-300"
        >
          <Plus className="w-4 h-4" /> Add Feature
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input id="svc-order" label="Order" type="number" {...register('order', { valueAsNumber: true })} />
        <div className="flex items-end pb-2.5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" {...register('isPublished')} className="w-4 h-4 accent-brand-500 rounded" />
            <span className="text-sm text-slate-300">Published</span>
          </label>
        </div>
      </div>

      <div className="flex gap-3 justify-end pt-2 border-t border-surface-border">
        <Button type="submit" loading={loading}>
          {defaultValues ? 'Update Service' : 'Create Service'}
        </Button>
      </div>
    </form>
  );
};

export default ServiceForm;
