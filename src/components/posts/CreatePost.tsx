// components/posts/CreatePost.tsx
import PostForm from './PostForm';
import React from 'react';
import { Button } from '../ui/button';
import { Post } from '@/service/type.ts/post';

export const CreatePost = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCreate = async (data: Post) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      // Xử lý response và cập nhật UI
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Thêm bài viết</Button>
      <PostForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleCreate}
        mode="create"
      />
    </>
  );
};
