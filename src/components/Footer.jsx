export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Blog Viewer</p>
        <p className="text-sm">
          All rights reserved &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
