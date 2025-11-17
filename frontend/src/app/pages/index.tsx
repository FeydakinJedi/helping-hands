export default function HomePage() {
  return (
    <div className="bg-background min-h-screen text-text">
      {/* Header */}
      <header className="bg-primary text-background p-6 text-center text-3xl font-bold shadow-shadow">
        Helping Hands
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-highlight">Find Help, Offer Help</h1>
        <p className="mt-4 text-lg text-muted">Join a community where helping hands make a difference.</p>
        <button className="mt-6 bg-accent text-text px-6 py-2 rounded-lg hover:bg-highlight">
          Get Started
        </button>
      </section>

      {/* Features Section */}
{/*      <section className="grid md:grid-cols-3 gap-6 px-8 py-12">
        <div className="p-6 bg-soft shadow-lg rounded-xl text-center">
          <h3 className="text-2xl font-semibold text-primary">Post Requests</h3>
          <p className="text-muted mt-2">Need help? Post a request and find volunteers.</p>
        </div>
        <div className="p-6 bg-soft shadow-lg rounded-xl text-center">
          <h3 className="text-2xl font-semibold text-secondary">Offer Your Skills</h3>
          <p className="text-muted mt-2">Share your skills and lend a hand.</p>
        </div>
        <div className="p-6 bg-soft shadow-lg rounded-xl text-center">
          <h3 className="text-2xl font-semibold text-deep">Connect & Chat</h3>
          <p className="text-muted mt-2">Message others and coordinate help easily.</p>
        </div>
      </section>*/}

      {/* Recent Requests */}
{/*      <section className="bg-contrast py-12 px-8">
        <h2 className="text-3xl text-text text-center font-bold">Recent Help Requests</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-warm shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">Need help painting a room</h4>
            <p className="text-muted">John Doe - March 10, 2025</p>
          </div>
          <div className="p-4 bg-warm shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">Looking for car repair assistance</h4>
            <p className="text-muted">Jane Smith - March 12, 2025</p>
          </div>
        </div>
      </section>*/}

      {/* Footer */}
{/*      <footer className="bg-deep text-background text-center py-6 mt-12">
        Helping Hands © 2025. All Rights Reserved.
      </footer>*/}
    </div>
  );
}