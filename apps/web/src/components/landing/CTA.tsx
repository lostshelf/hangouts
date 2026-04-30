import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
    return (
        <section id="start" className="mx-auto max-w-4xl px-6 py-24">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-sky-500 to-blue-600 px-8 py-20 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
                <div className="relative">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        What are you waiting for?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-white/80">
                        Get to planning. Hopefully this time it won't be a nightmare.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="mt-8 rounded-full bg-white text-zinc-900 hover:bg-zinc-100"
                    >
                        <Link to="/new">
                            Create Your First Hangout <ArrowRight className="ml-1 size-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}