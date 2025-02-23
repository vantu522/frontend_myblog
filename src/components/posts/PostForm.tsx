import React, {useState} from "react";
import { Post } from "@/service/type.ts/post";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Dialog } from "@radix-ui/react-dialog";
import { Textarea } from "../ui/textarea";
import { X } from "lucide-react";


interface PostFormProps{
    isOpen: boolean,
    onClose: () => void,
    onSubmit: (data: Post) =>   Promise<void>,
    initialData? : Post,
    mode: 'create' | 'edit'
}

const PostForm: React.FC<PostFormProps> = ({
    isOpen,
    onClose,
    onSubmit,
    initialData,
    mode
}) => {
    const [formData, setFormData] = React.useState<Post>({
        title: initialData?.title || '',
        content: initialData?.content || '',
        author: initialData?.author || '',
        status:initialData?.status || '',
        image: initialData?.image ||'',
        created_at: initialData?.created_at || '',
        updated_at: initialData?.updated_at || '',
        id: initialData?.id || 'undefi'

    });

    const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const title = mode === 'create' ? 'Thêm bài viết mới' : 'Chỉnh sửa bài viết';
  const submitText = mode === 'create' ? 'Tạo bài viết' : 'Cập nhật';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tiêu đề
            </label>
            <Input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nội dung
            </label>
            <Textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full min-h-[150px]"
              required
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="bg-gray-100 hover:bg-gray-200"
            >
              Huỷ bỏ
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {loading ? 'Đang xử lý...' : submitText}
            </Button>
          </div>
        </form>
      </div>
    </div>
  </Dialog>
    
  )
}

export default PostForm