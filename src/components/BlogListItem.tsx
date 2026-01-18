import type { Blog } from "@/api/blogs";
import {
  TrendingUp,
  Cpu,
  Briefcase,
  BookOpen,
  FileText,
  Heart,
} from "lucide-react";

type Props = {
  blog: Blog;
  selected: boolean;
  onSelect: (blog: Blog) => void;
};


const categoryIconMap: Record<string, React.ElementType> = {
  FINANCE: TrendingUp,
  TECH: Cpu,
  CAREER: Briefcase,
  EDUCATION: BookOpen,
  REGULATIONS: FileText,
  LIFESTYLE: Heart,
};

export default function BlogListItem({
  blog,
  selected,
  onSelect,
}: Props) {
  const primaryCategory = blog.category[0];
  const Icon = categoryIconMap[primaryCategory];

  return (
    <div
      onClick={() => onSelect(blog)}
      className={`cursor-pointer rounded-lg border p-4 transition
        ${
          selected
            ? "border-blue-500 bg-blue-50"
            : "hover:bg-gray-50"
        }
      `}
    >
     
      <p className="text-xs text-muted-foreground mb-1">
        {blog.category.join(", ")}
      </p>

     
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon className="h-4 w-4 text-blue-600 flex-shrink-0" />
        )}
        <h3 className="font-semibold text-sm leading-snug">
          {blog.title}
        </h3>
      </div>

      
      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
        {blog.description}
      </p>
    </div>
  );
}
