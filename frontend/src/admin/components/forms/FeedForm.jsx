import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import ImageUpload from '../ui/ImageUpload';
import Button from '../ui/Button';

const feedTypes = [
  { value: 'update',       label: 'Update' },
  { value: 'announcement', label: 'Announcement' },
  { value: 'news',         label: 'News' },
  { value: 'milestone',    label: 'Milestone' },
];

const FeedForm = ({ defaultValues, onSubmit, loading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || { title: '', content: '', type: '', link: '', isPublished: false },
  });
  const [image, setImage] = useState(defaultValues?.image?.url || null);

  const submit = (data) => {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => { if (v !== undefined && v !== null) fd.append(k, v); });
    if (image instanceof File) fd.append('image', image);
    onSubmit(fd);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <ImageUpload label="Image" value={image} onChange={setImage} />
      <Input id="feed-title" label="Title *" error={errors.title?.message}
        {...register('title', { required: 'Required', maxLength: { value: 200, message: 'Max 200' } })} />
      <Textarea id="feed-content" label="Content *" rows={4} error={errors.content?.message}
        {...register('content', { required: 'Required' })} />
      <div className="grid grid-cols-2 gap-4">
        <Select id="feed-type" label="Type" options={feedTypes} placeholder="Select type"
          {...register('type')} />
        <Input id="feed-link" label="Link (URL)" type="url" {...register('link')} />
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" {...register('isPublished')} className="w-4 h-4 accent-brand-500 rounded" />
        <span className="text-sm text-slate-300">Published</span>
      </label>
      <div className="flex gap-3 justify-end pt-2 border-t border-surface-border">
        <Button type="submit" loading={loading}>{defaultValues ? 'Update Feed' : 'Create Feed'}</Button>
      </div>
    </form>
  );
};

export default FeedForm;
