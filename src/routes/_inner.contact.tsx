import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE } from "@/lib/conference";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_inner/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${CONFERENCE.acronym}` },
      { name: "description", content: `Get in touch with the ${CONFERENCE.acronym} organizing team.` }
    ]
  }),
  component: ContactPage,
});

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwKMlX4YoGKfp1d3smtyyNVeo7q7oq4XD-3CUeVYTzRZp_jUlIP9WeYxGcPlH6yFkmHfA/exec";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "text/plain",
        },
      });

      const result = await res.json();

      if (result.result === "success") {
        setSent(true);
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="For queries related to submissions, registration or general information."
      />

      <div className="p-6 md:p-10 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          <div className="border border-border p-5 flex gap-3 items-start">
            <Mail className="w-5 h-5 text-[color:var(--gold)] mt-1"/>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="text-sm text-ink">{CONFERENCE.email}</div>
            </div>
          </div>

          <div className="border border-border p-5 flex gap-3 items-start">
            <Phone className="w-5 h-5 text-[color:var(--gold)] mt-1"/>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
              <div className="text-sm text-ink">{CONFERENCE.phone}</div>
            </div>
          </div>

          <div className="border border-border p-5 flex gap-3 items-start">
            <MessageCircle className="w-5 h-5 text-[color:var(--gold)] mt-1"/>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
              <div className="text-sm text-ink">{CONFERENCE.whatsapp}</div>
            </div>
          </div>

          <div className="border border-border p-5 flex gap-3 items-start">
            <MapPin className="w-5 h-5 text-[color:var(--gold)] mt-1"/>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
              <div className="text-sm text-ink">{CONFERENCE.address}</div>
            </div>
          </div>

          <div className="aspect-video border border-border overflow-hidden">
            <iframe
              title="Office Map"
              src="https://maps.google.com/maps?q=Salem%20Tamil%20Nadu&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <form
          className="border border-border p-6 bg-white space-y-4"
          onSubmit={handleSubmit}
        >
          <h2 className="font-serif text-xl text-[color:var(--navy)]">Send us a message</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block text-sm">
              <span className="text-ink font-medium">Full Name</span>
              <input
                name="fullName"
                required
                className="mt-1 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--navy)]"
              />
            </label>
            <label className="block text-sm">
              <span className="text-ink font-medium">Email</span>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--navy)]"
              />
            </label>
          </div>

          <label className="block text-sm">
            <span className="text-ink font-medium">Subject</span>
            <input
              name="subject"
              required
              className="mt-1 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--navy)]"
            />
          </label>

          <label className="block text-sm">
            <span className="text-ink font-medium">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-1 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--navy)]"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-[color:var(--navy)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[color:var(--navy-dark)] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {sent && (
            <p className="text-sm text-green-700">
              Thank you — your message has been recorded. We'll respond within 2 business days.
            </p>
          )}
          {error && (
            <p className="text-sm text-red-700">
              Something went wrong sending your message. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </>
  );
}