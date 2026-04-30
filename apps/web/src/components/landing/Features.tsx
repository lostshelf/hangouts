import { Send, BellRing, CircleCheck, Sparkles } from 'lucide-react';


export default function Features() {
    const features = [
        {
            icon: Send,
            title: 'Send in one click',
            desc: 'All it takes is a magic link. Your friends enter their availability. You\'re the only one who needs an account.',
        },
        {
            icon: BellRing,
            title: 'Set deadlines',
            desc: 'Pick a respond-by date and the slackers will get a reminder to enter their availability.',
        },
        {
            icon: CircleCheck,
            title: 'Know the moment everyone’s responded ',
            desc: 'Watch responses roll in live. Get notified the second the last invitee submits their availability.',
        },
        {
            icon: Sparkles,
            title: 'Get the best possible time',
            desc: 'We\'ll find the window where the most people can actually make it. It\'ll even show you the runner-ups for backup timings',
        },
    ];

    return (
        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-16 text-center">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
                    Built for the friend who always gets stuck planning
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                    Calendar tools were built for meetings. This one was built for
                    impromptu plans and random get-togethers
                </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                    >
                        <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400">
                            <f.icon className="size-5" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                            {f.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}