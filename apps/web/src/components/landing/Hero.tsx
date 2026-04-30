import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="relative mx-auto max-w-4xl px-6 pt-24 pb-32 text-center sm:pt-32">
            <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-linear-to-b from-sky-100/70 via-transparent to-transparent dark:from-sky-950/40" />

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                <Sparkles className="size-3.5" /> Stop running around trying to get responses.
            </div>

            <h1 className="text-balance text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl dark:text-zinc-50">
                A hangout planning tool{' '} <span className="bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"> for friends</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-zinc-600 dark:text-zinc-400">
                Send your friends a link, they select when they&apos;re free, and you get
                the best date to hang out
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="rounded-full">
                    <Link to="/new">
                    Start Planning <ArrowRight className="ml-1 size-4" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="rounded-full">
                    <a href="#features">See How It Works</a>
                </Button>
            </div>
        </section>
    );
}