import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Info, Rocket } from 'lucide-react';

const links = [
    { href: '#features', label: 'Features', icon: Zap },
    { href: '#about', label: 'About', icon: Info },
    { href: '#start', label: 'Get Started', icon: Rocket },
];

export default function NavBar() {
    return (
        <header className="sticky top-4 z-50 mx-auto w-fit px-4">
            <nav className="flex items-center gap-1.5 rounded-full border-2 border-sky-200 bg-white/95 px-2 py-2 shadow-lg shadow-sky-500/10 backdrop-blur-md ring-1 ring-sky-100 dark:border-sky-900 dark:bg-zinc-950/95 dark:shadow-sky-500/5 dark:ring-sky-950">
            <Link
                to="/"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="rounded-full bg-linear-to-br from-sky-500 to-blue-600 px-4 py-1.5 text-sm font-bold tracking-tight text-white shadow-sm"
            >
                hangout
            </Link>

            {links.map((l) => (
                <a
                key={l.href}
                href={l.href}
                className="group flex items-center gap-1.5 rounded-full border border-transparent px-3.5 py-1.5 text-sm font-medium text-zinc-700 transition-all hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 dark:text-zinc-300 dark:hover:border-sky-900 dark:hover:bg-sky-950/50 dark:hover:text-sky-300"
                >
                <l.icon className="size-3.5 text-sky-500 dark:text-sky-400" />
                {l.label}
                </a>
            ))}

            <Link
                to="/new"
                className="ml-1 inline-flex items-center gap-1 rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
                Plan Now
                <ArrowRight className="size-3.5" />
            </Link>
            </nav>
        </header>
    );
}