import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

export default function CreateBlogPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/");
    },
  });

  const handleSubmit = () => {
    if (!title || !content || !category) return;

    mutation.mutate({
      title,
      description,
      content,
      category: category.split(",").map(c => c.trim().toUpperCase()),
      coverImage:
        coverImage ||
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-3xl mx-auto  bg-white p-8 rounded-xl mt-8 space-y-6">
        <h1 className="text-2xl font-bold">Create New Blog</h1>

        <Input
          placeholder="Blog title"
     
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          placeholder="Categories (comma separated, e.g. finance, tech)"
        
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <Input
          placeholder="Cover image URL (optional)"
         
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />

        <Textarea
          placeholder="Short description"
       
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Textarea
          placeholder="Full blog content"
          className="min-h-[200px] "
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button
          
          onClick={handleSubmit}
          disabled={mutation.isPending}
          className=""
        >
          {mutation.isPending ? "Creating..." : "Create Blog"}
        </Button>
      </main>

      <Footer />
    </div>
  );
}
