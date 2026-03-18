import { useState, type FormEvent } from "react";

const GENERIC_ERROR = "Something went wrong. Please try again or email us at info@patinadesign.uk.";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const formspreeId = import.meta.env.PUBLIC_FORMSPREE_ID;

    if (!formspreeId) {
      setErrorMsg(GENERIC_ERROR);
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else if (res.status === 429) {
        setErrorMsg("Too many requests. Please wait a moment and try again.");
        setStatus("error");
      } else if (res.status === 422) {
        setErrorMsg("Please check your form fields and try again.");
        setStatus("error");
      } else {
        setErrorMsg(GENERIC_ERROR);
        setStatus("error");
      }
    } catch {
      setErrorMsg("Unable to reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-jasper-stone/10 p-10 text-center">
        <p className="font-heading text-lg font-medium text-indigo-batik">
          Thank you for your message.
        </p>
        <p className="mt-2 text-indigo-batik/80">
          We will be in touch soon.
        </p>
      </div>
    );
  }

  const inputClasses =
    "mt-1.5 block w-full rounded-lg border border-indigo-batik/12 bg-white px-3.5 py-2.5 text-base text-indigo-batik outline-none transition-all duration-200 focus:border-copper-pot focus:ring-2 focus:ring-copper-pot focus:ring-offset-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] font-medium text-indigo-batik/80">
          Name <span className="text-copper-pot">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] font-medium text-indigo-batik/80">
          Email <span className="text-copper-pot">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] font-medium text-indigo-batik/80">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] font-medium text-indigo-batik/80">
          Message <span className="text-copper-pot">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} resize-y`}
        />
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-copper-pot">
          {errorMsg}
        </p>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-xl bg-copper-pot px-8 py-4 font-heading text-sm font-medium text-white transition-all duration-300 hover:bg-copper-pot/90 hover:shadow-lg hover:shadow-copper-pot/20 disabled:opacity-70 disabled:cursor-wait sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Start the Conversation"}
        </button>
      </div>
    </form>
  );
}
