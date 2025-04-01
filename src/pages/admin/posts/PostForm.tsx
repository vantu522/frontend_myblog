import { Upload, Button, Form, Input, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface PostFormProps {
  initialData?: any;
  onSubmit: (formData: FormData) => void;
}

const PostForm = ({ initialData, onSubmit }: PostFormProps) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState(initialData?.content || "");

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue(initialData);
    } else {
      form.resetFields();
      setFile(null);
      setContent("");
    }
  }, [initialData]);

  const handleSubmit = (values: any) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", content);
    formData.append("author", values.author);
    formData.append("status", values.status);
    if (file) formData.append("image", file);

    onSubmit(formData);
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item name="title" label="Tiêu đề" rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="content" label="Nội dung" rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}>
        <ReactQuill theme="snow" value={content} onChange={setContent}/>
      </Form.Item>
      <Form.Item name="author" label="Tác giả" rules={[{ required: true, message: "Vui lòng nhập tác giả" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="status" label="Trạng thái" initialValue="public">
        <Select >
          <Select.Option value="public" >Công khai</Select.Option>
          <Select.Option value="private">Riêng tư</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Ảnh">
        <Upload maxCount={1} beforeUpload={(file) => { setFile(file); return false; }}>
          <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
            {initialData?.image && !file && <p>Ảnh hiện tại: <img src={initialData.image}  className="w-12 h-12 object-cover rounded " />  </p>}
        </Upload>
      </Form.Item>
      <Button  type="primary" htmlType="submit">Lưu</Button>
    </Form>
  );
};

export default PostForm;
