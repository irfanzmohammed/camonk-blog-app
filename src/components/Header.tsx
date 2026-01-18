
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
const isCreatePage = location.pathname === "/blogs/create";

  return (
    <header className="bg-white border-b">
     
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
       
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-black text-white flex items-center justify-center font-bold">
            C
          </div>
          <span className="font-semibold text-lg">CA Monk</span>
        </div>

       
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <span className="cursor-pointer hover:text-black">Tools</span>
          <span className="cursor-pointer hover:text-black">Practice</span>
          <span className="cursor-pointer hover:text-black">Events</span>
          <span className="cursor-pointer hover:text-black">Job Board</span>
          <span className="cursor-pointer hover:text-black">Points</span>
        </nav>

       
       <div className="flex items-center gap-3">
  {!isCreatePage && (
    <Link to="/blogs/create">
      <button className="px-4 py-2 text-sm rounded-md bg-black text-white">
        Create Blog
      </button>
    </Link>
  )}

  <button className="px-4 py-2 text-sm rounded-md border">
    Profile
  </button>
</div>


      </div>

     
      <div className="text-center py-10 border-t bg-gray-50">
        <h1 className="text-4xl font-bold">CA Monk Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Stay updated with the latest trends in finance, accounting, and career growth
        </p>
      </div>
    </header>
  );
}
