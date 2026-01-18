export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      
        <div>
          <h3 className="text-white font-semibold mb-2">CA Monk</h3>
          <p className="text-sm">
            Empowering the next generation of financial leaders with tools,
            community, and knowledge.
          </p>
        </div>

       
        <div>
          <h4 className="text-white font-medium mb-2">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li>Blog</li>
            <li>Webinars</li>
            <li>Case Studies</li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-white font-medium mb-2">Platform</h4>
          <ul className="space-y-1 text-sm">
            <li>Job Board</li>
            <li>Practice Tests</li>
            <li>Mentorship</li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-white font-medium mb-2">Connect</h4>
          <ul className="space-y-1 text-sm">
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs">
        © 2026 CA Monk. All rights reserved.
      </div>
    </footer>
  );
}
