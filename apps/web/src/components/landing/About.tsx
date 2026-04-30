export default function About() {
    return (
        <section id="about" className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="mb-8 text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            Why this exists
        </h2>

        <div className="space-y-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
            Organizing hangouts with friends is a huge pain. I'll drop a message
            asking if these people want to hang out and suddenly everyone is MIA.
            I have to get on my knees and BEG for them to even consider telling me
            their availability.
            </p>
            <p>
            All the existing tools are too business oriented. No one has EVER sent
            out a Doodle or When2Meet to their group chat. For good reason too since
            that would be cringe as hell; I would deny that invite in a heartbeat.
            </p>
            <p>
            So I decided to build one that you can actually use in a casual group.
            All you do is get a link, send it to your friends, they enter their
            availability, and you get the best date that works for everyone.
            </p>
            <p className="text-zinc-500 dark:text-zinc-500">
            I used React Router with Vite, then ShadCN and TailWindCSS for styling,
            and PLACEHOLDER for authentication.

            The backend is an SQLite database for storage and Durable Objects for 
            real-time response updates.

            Everything runs off of Cloudflare. Cloudflare Workers for the front-end 
            and API, D1 Database for storage, the aforementioned Durable Objects. 
            </p>
            <p className="text-zinc-500 dark:text-zinc-500">
            The best part (at least for me) is that it's completely free to host!
            So it'll be around as long as Cloudflare doesn't absolutely destroy their 
            generous free tier.
            </p >
        </div>
        </section>
    );
}