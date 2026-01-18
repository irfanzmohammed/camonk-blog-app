import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import BlogsPage from "@/pages/BlogsPage";
import CreateBlogPage from "@/pages/CreateBlogPage";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Navigate to="/blogs" replace />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/create" element={<CreateBlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
