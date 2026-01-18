import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/blogs";
import type { Blog } from "@/api/blogs";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListItem from "@/components/BlogListItem";

import { Share2 } from "lucide-react";


export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const { data: blogs, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  
  useEffect(() => {
    if (blogs && blogs.length > 0 && !selectedBlog) {
      setSelectedBlog(blogs[0]);
    }
  }, [blogs, selectedBlog]);

  
  const paragraphs =
    selectedBlog?.content
      .split("\n")
      .map((p) => p.trim())
      .filter(Boolean) ?? [];

  const quoteLine =
    paragraphs.find((p) => p.length > 80) || paragraphs[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

     
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 px-4 py-6">
      
        <aside className="bg-white rounded-xl p-4">
          <h2 className="font-semibold mb-3">Latest Articles</h2>

          {isLoading && <p>Loading blogs...</p>}
          {isError && <p>Error loading blogs</p>}

          <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-260px)] no-scrollbar">
            {blogs?.map((blog) => (
              <BlogListItem
                key={blog.id}
                blog={blog}
                selected={selectedBlog?.id === blog.id}
                onSelect={setSelectedBlog}
              />
            ))}
          </div>
        </aside>

      
        <section className="bg-white rounded-xl p-8">
          {selectedBlog && (
            <article className="space-y-8">
             
              <img
                src={selectedBlog.coverImage}
                alt={selectedBlog.title}
                className="w-full h-80 object-cover rounded-xl"
              />

             
              <div className="flex items-center gap-4 text-sm text-blue-600 font-medium">
                <span>{selectedBlog.category[0]}</span>
                <span>•</span>
                <span>5 min read</span>
              </div>

             
              <h1 className="text-4xl font-bold">
                {selectedBlog.title}
              </h1>

              
           <button className="bg-transparent text-blue-600 text-sm px-4 py-2 rounded-md flex items-center gap-2 border border-blue-200 hover:bg-blue-50 transition">
  <Share2 className="h-4 w-4" />
  Share Article
</button>

              
              <div className="grid grid-cols-3 gap-4 bg-gray-50 border rounded-lg p-4 text-center text-sm">
                <div>
                  <p className="text-muted-foreground">CATEGORY</p>
                  <p className="font-medium">
                    {selectedBlog.category.join(" & ")}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">READ TIME</p>
                  <p className="font-medium">5 Mins</p>
                </div>
                <div>
                  <p className="text-muted-foreground">DATE</p>
                  <p className="font-medium">
                    {new Date(selectedBlog.date).toDateString()}
                  </p>
                </div>
              </div>

           
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

            
              {quoteLine && (
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 italic text-gray-700">
                  “{quoteLine}”
                </div>
              )}

          
              <div className="flex items-center gap-4 pt-6 border-t">
                <img
                  src="https://i.pravatar.cc/48"
                  alt="Author"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="font-medium">Written by CA Monk Team</p>
                  <p className="text-sm text-muted-foreground">
                    Finance & Accounting Experts
                  </p>
                </div>
              </div>
            </article>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
