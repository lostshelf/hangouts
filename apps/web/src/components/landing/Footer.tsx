export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800">
      <p>© {new Date().getFullYear()} hangout. Built by Hadi Faraz.</p>
    </footer>
  );
}