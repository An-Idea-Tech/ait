import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import ImageUpload from '../ui/ImageUpload';
import Button from '../ui/Button';

const ClientForm = ({ defaultValues, onSubmit, loading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || { name: '', website: '', order: 0, isPublished: false },
  });
  const [logo, setLogo] = useState(defaultValues?.logo?.url || null);

  const submit = (data) => {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => { if (v !== undefined && v !== null) fd.append(k, v); });
    if (logo instanceof File) fd.append('logo', logo);
    onSubmit(fd);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <ImageUpload label="Logo" value={logo} onChange={setLogo} accept="image/*" />
      <Input id="client-name" label="Client Name *" error={errors.name?.message}
        {...register('name', { required: 'Name is required', maxLength: { value: 100, message: 'Max 100' } })} />
      <Input id="client-website" label="Website URL" type="url" {...register('website')} placeholder="https://example.com" />
      <div className="grid grid-cols-2 gap-4">
        <Input id="client-order" label="Order" type="number" {...register('order', { valueAsNumber: true })} />
        <div className="flex items-end pb-2.5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" {...register('isPublished')} className="w-4 h-4 accent-brand-500 rounded" />
            <span className="text-sm text-slate-300">Published</span>
          </label>
        </div>
      </div>
      <div className="flex gap-3 justify-end pt-2 border-t border-surface-border">
        <Button type="submit" loading={loading}>{defaultValues ? 'Update Client' : 'Add Client'}</Button>
      </div>
    </form>
  );
};

export default ClientForm;
