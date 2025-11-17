import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background text-text min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-bold text-primary">Find Help, Offer Help</h1>
        <p className="text-lg text-muted mt-2">
          Join a community where helping hands make a difference.
        </p>
        <Link href="/signup">
          <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-highlight transition">
            Get Started
          </button>
        </Link>

        <div className="mt-8 space-y-6 text-left">
          <section>
            <h2 className="text-2xl font-semibold text-secondary">Post Requests</h2>
            <p>Need help? Post a request and find volunteers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary">Offer Your Skills</h2>
            <p>Share your skills and lend a hand.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary">Connect & Chat</h2>
            <p>Message others and coordinate help easily.</p>
          </section>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-primary">Recent Help Requests</h2>
          <ul className="mt-4 space-y-4 text-left">
            <li>
              <h3 className="text-xl font-semibold text-text">Need help painting a room</h3>
              <p className="text-muted">John Doe - March 10, 2025</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-text">Looking for car repair assistance</h3>
              <p className="text-muted">Jane Smith - March 12, 2025</p>
            </li>
          </ul>
        </div>

        <footer className="mt-10 text-sm text-muted">
          Helping Hands © 2025. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
}
