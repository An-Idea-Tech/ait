import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

const FAQForm = ({ defaultValues, onSubmit, loading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || { question: '', answer: '', category: '', order: 0, isPublished: false },
  });

  const submit = (data) => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <Textarea id="faq-q" label="Question *" rows={2} error={errors.question?.message}
        {...register('question', { required: 'Question is required', maxLength: { value: 300, message: 'Max 300' } })} />
      <Textarea id="faq-a" label="Answer *" rows={4} error={errors.answer?.message}
        {...register('answer', { required: 'Answer is required' })} />
      <div className="grid grid-cols-2 gap-4">
        <Input id="faq-cat" label="Category" {...register('category')} />
        <Input id="faq-order" label="Order" type="number" {...register('order', { valueAsNumber: true })} />
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" {...register('isPublished')} className="w-4 h-4 accent-brand-500 rounded" />
        <span className="text-sm text-slate-300">Published</span>
      </label>
      <div className="flex gap-3 justify-end pt-2 border-t border-surface-border">
        <Button type="submit" loading={loading}>{defaultValues ? 'Update FAQ' : 'Create FAQ'}</Button>
      </div>
    </form>
  );
};

export default FAQForm;
