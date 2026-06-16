import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import ImageUpload from '../ui/ImageUpload';
import TagInput from '../ui/TagInput';
import Button from '../ui/Button';

const BlogForm = ({ defaultValues, onSubmit, loading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || {
      title: '', excerpt: '', content: '', author: '', category: '', isPublished: false,
    },
  });

  const [coverImage, setCoverImage] = useState(defaultValues?.coverImageUrl || null);
  const [tags, setTags] = useState(defaultValues?.tags || []);

  const submit = (data) => {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => { if (v !== undefined && v !== null) fd.append(k, v); });
    tags.forEach((t) => fd.append('tags', t));
    if (coverImage instanceof File) fd.append('coverImage', coverImage);
    onSubmit(fd);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <ImageUpload label="Cover Image" value={coverImage} onChange={setCoverImage} />
      <Input id="blog-title" label="Title *" error={errors.title?.message}
        {...register('title', { required: 'Title is required', maxLength: { value: 200, message: 'Max 200' } })} />
      <Textarea id="blog-excerpt" label="Excerpt *" rows={2} error={errors.excerpt?.message}
        {...register('excerpt', { required: 'Required', maxLength: { value: 500, message: 'Max 500' } })} />
      <Textarea id="blog-content" label="Content *" rows={8} error={errors.content?.message}
        {...register('content', { required: 'Required' })} />
      <div className="grid grid-cols-2 gap-4">
        <Input id="blog-author" label="Author" {...register('author')} />
        <Input id="blog-category" label="Category" {...register('category')} />
      </div>
      <TagInput label="Tags" value={tags} onChange={setTags} />
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" {...register('isPublished')} className="w-4 h-4 accent-brand-500 rounded" />
        <span className="text-sm text-slate-300">Published</span>
      </label>
      <div className="flex gap-3 justify-end pt-2 border-t border-surface-border">
        <Button type="submit" loading={loading}>{defaultValues ? 'Update Blog' : 'Create Blog'}</Button>
      </div>
    </form>
  );
};

export default BlogForm;
