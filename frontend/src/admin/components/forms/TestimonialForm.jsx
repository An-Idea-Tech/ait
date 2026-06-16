import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import ImageUpload from '../ui/ImageUpload';
import Button from '../ui/Button';

const TestimonialForm = ({ defaultValues, onSubmit, loading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || {
      name: '', designation: '', company: '', rating: 5, testimonial: '', order: 0, isPublished: false,
    },
  });
  const [avatar, setAvatar] = useState(defaultValues?.avatar?.url || null);

  const submit = (data) => {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => { if (v !== undefined && v !== null) fd.append(k, v); });
    if (avatar instanceof File) fd.append('avatar', avatar);
    onSubmit(fd);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <ImageUpload label="Avatar" value={avatar} onChange={setAvatar} />
      <Input id="test-name" label="Name *" error={errors.name?.message}
        {...register('name', { required: 'Name is required', maxLength: { value: 100, message: 'Max 100' } })} />
      <div className="grid grid-cols-2 gap-4">
        <Input id="test-desig" label="Designation" {...register('designation')} />
        <Input id="test-company" label="Company" {...register('company')} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input id="test-rating" label="Rating (1-5)" type="number" min="1" max="5"
          {...register('rating', { valueAsNumber: true, min: 1, max: 5 })} />
        <Input id="test-order" label="Order" type="number" {...register('order', { valueAsNumber: true })} />
      </div>
      <Textarea id="test-text" label="Testimonial *" rows={4} error={errors.testimonial?.message}
        {...register('testimonial', { required: 'Testimonial is required' })} />
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" {...register('isPublished')} className="w-4 h-4 accent-brand-500 rounded" />
        <span className="text-sm text-slate-300">Published</span>
      </label>
      <div className="flex gap-3 justify-end pt-2 border-t border-surface-border">
        <Button type="submit" loading={loading}>{defaultValues ? 'Update Testimonial' : 'Create Testimonial'}</Button>
      </div>
    </form>
  );
};

export default TestimonialForm;
