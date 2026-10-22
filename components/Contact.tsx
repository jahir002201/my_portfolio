"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const EMAIL = "jahir002201@gmail.com";

const Contact: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Portfolio inquiry from ${name.trim()}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`scroll-mt-20 bg-white px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-8 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:opacity-100`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Contact Me
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Let’s Start a <span className="text-blue-600">Conversation</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Have a project idea, collaboration opportunity, or question?
            I’d love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm sm:p-8"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="text-sm font-semibold text-gray-800"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                className="mt-2 min-h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="text-sm font-semibold text-gray-800"
              >
                Your Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="mt-2 min-h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="text-sm font-semibold text-gray-800"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                maxLength={5000}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about your project or idea..."
                className="mt-2 w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Open Email App <span className="ml-2" aria-hidden="true">↗</span>
            </button>

            <p className="text-xs leading-5 text-gray-500">
              This opens your email application with the message prepared.
              You’ll need to send it from there.
            </p>
          </form>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Email
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                Send me an email
              </h3>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 inline-block break-all text-sm text-gray-600 underline decoration-gray-300 underline-offset-4 hover:text-blue-700"
              >
                {EMAIL}
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Location
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                Dhaka, Bangladesh
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Open to suitable remote opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Opportunities
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                Let’s build something useful
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Available to discuss relevant full-stack development,
                freelance, and collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;