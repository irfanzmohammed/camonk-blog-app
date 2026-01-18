export type Blog = {
  id: string;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
};

const BASE_URL = "http://localhost:3001";

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(`${BASE_URL}/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
};

export const createBlog = async (blog: Omit<Blog, "id">) => {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  if (!res.ok) throw new Error("Failed to create blog");
  return res.json();
};


export const deleteBlog = async (id: string) => {
  const res = await fetch(`http://localhost:3001/blogs/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete blog");
  }

  return true;
};
