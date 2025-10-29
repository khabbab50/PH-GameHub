import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full py-16 bg-white px-4">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-700">
          Join Our Newsletter
        </h2>
        <p className="text-lg mb-8">
          Get updates, tips and news delivered straight to your inbox. No spam,
          we promise.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 p-3 border-2 rounded-md text-black"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold p-3 rounded-md w-full sm:w-auto"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-green-400">Thank you for subscribing!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400">Oops! Something went wrong.</p>
        )}
        <p className="mt-6 text-sm text-gray-400">
          We respect your privacy. Read our
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
