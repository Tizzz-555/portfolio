export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-dark-800 border-t border-dark-600">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 font-mono text-sm">
          <span className="text-accent-cyan">{'<'}</span>
          <span className="text-gray-400"> Made with passion and code </span>
          <span className="text-accent-magenta">{'/>'}</span>
        </p>
        <p className="text-gray-600 font-mono text-xs mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
