export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Blog Viewer</p>
        <p className="text-sm">
          All rights reserved &copy; {new Date().getFullYear()}
        </p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:text-gray-200">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 hover:text-gray-200">
            Terms of Service
          </a>
          <a href="#" className="mx-2 hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
