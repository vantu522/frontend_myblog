import { Modal, Form, Input, Button } from "antd";
import { useEffect } from "react";
import { Post } from "@/service/type.ts/post";

interface PostFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Post) => Promise<void>;
  initialData?: Post;
  mode: "create" | "edit";
}

const PostForm: React.FC<PostFormProps> = ({ isOpen, onClose, onSubmit, initialData, mode }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue(initialData);
    } else {
      form.resetFields();
    }
  }, [initialData, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await onSubmit(values);
      onClose();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <Modal
      title={mode === "create" ? "Thêm bài viết" : "Chỉnh sửa bài viết"}
      open={isOpen}
      onCancel={onClose}
      onOk={handleSubmit}
      destroyOnClose
      centered
      okText={mode === "create" ? "Tạo bài viết" : "Cập nhật"}
      cancelText="Hủy"
      maskClosable={false}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
        >
          <Input placeholder="Nhập tiêu đề" />
        </Form.Item>

        <Form.Item
          label="Nội dung"
          name="content"
          rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
        >
          <Input.TextArea rows={4} placeholder="Nhập nội dung bài viết" />
        </Form.Item>

        <Form.Item
          label="Tác giả"
          name="author"
          rules={[{ required: true, message: "Vui lòng nhập tên tác giả" }]}
        >
          <Input placeholder="Nhập tên tác giả" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PostForm;
