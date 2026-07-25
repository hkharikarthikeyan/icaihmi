import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE, REGISTRATION_FEES } from "@/lib/conference";
import {
  QrCode,
  Building2,
  RotateCcw,
  ExternalLink,
} from "lucide-react";
import paymentQr from "@/assets/payment-qr.jpeg";

export const Route = createFileRoute("/_inner/registration")({
  head: () => ({
    meta: [
      {
        title: `Registration — ${CONFERENCE.acronym}`,
      },
      {
        name: "description",
        content:
          "Registration fees, payment details and refund policy.",
      },
    ],
  }),
  component: RegistrationPage,
});

function RegistrationPage() {
  return (
    <>
      <PageHero
        title="Registration"
        subtitle="Registration is mandatory for at least one author of each accepted paper."
      />

      <div className="p-6 md:p-10 space-y-8">

        {/* Registration Fees */}
        <div>
          <h2 className="section-title gold-bar">Registration Fees</h2>

          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-[color:var(--navy)] text-white">
                <tr>
                  <th className="text-left p-4">Category</th>
                  <th className="text-left p-4">
                    Indian Participants
                  </th>
                  <th className="text-left p-4">
                    International Participants
                  </th>
                </tr>
              </thead>

              <tbody>
                {REGISTRATION_FEES.map((fee, index) => (
                  <tr
                    key={fee.category}
                    className={
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-[color:var(--subtle)]"
                    }
                  >
                    <td className="p-4 border-t border-border">
                      {fee.category}
                    </td>

                    <td className="p-4 border-t border-border font-semibold text-[color:var(--navy)]">
                      {fee.indian}
                    </td>

                    <td className="p-4 border-t border-border">
                      {fee.international}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        
        </div>

        {/* Payment Section */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* QR */}
          <div className="border border-border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <QrCode className="w-5 h-5 text-[color:var(--gold)]" />
              <h3 className="font-serif text-lg text-[color:var(--navy)]">
                Payment QR
              </h3>
            </div>

            <div className="flex justify-center">
              <img
                src={paymentQr}
                alt="Payment QR"
                className="w-72 object-contain rounded-md border"
              />
            </div>

            <p className="text-xs text-center text-muted-foreground mt-3">
              Scan using any UPI application.
            </p>
          </div>

          {/* Bank Details */}
          <div className="border border-border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-5 h-5 text-[color:var(--gold)]" />
              <h3 className="font-serif text-lg text-[color:var(--navy)]">
                Bank Details
              </h3>
            </div>

            <dl className="space-y-3 text-sm">

              <div className="grid grid-cols-[150px_1fr] gap-2">
                <dt className="text-muted-foreground">
                  Account Name
                </dt>
                <dd>Rasheeth K</dd>
              </div>

              <div className="grid grid-cols-[150px_1fr] gap-2">
                <dt className="text-muted-foreground">
                  Account Number
                </dt>
                <dd>103602000002818</dd>
              </div>

              <div className="grid grid-cols-[150px_1fr] gap-2">
                <dt className="text-muted-foreground">
                  IFSC Code
                </dt>
                <dd>IOBA0001036</dd>
              </div>

              <div className="grid grid-cols-[150px_1fr] gap-2">
                <dt className="text-muted-foreground">
                  Bank
                </dt>
                <dd>Indian Overseas Bank</dd>
              </div>

              <div className="grid grid-cols-[150px_1fr] gap-2">
                <dt className="text-muted-foreground">
                  SWIFT Code
                </dt>
                <dd>IOBAINBB001</dd>
              </div>

            </dl>
          </div>
        </div>

        {/* Registration Form */}
        <div className="border border-border rounded-lg p-8 bg-[color:var(--subtle)] text-center">

          <h3 className="font-serif text-2xl text-[color:var(--navy)] mb-3">
            Conference Registration Form
          </h3>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            After completing the payment, kindly fill out the registration
            form using the button below. Please provide the payment
            transaction ID along with the required details.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc0DR8QHf8VlR6MIMTYd22d0yCWQ9Ovgn3Fm211uNk3Rms2Ig/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3C9420] hover:bg-[#2f7519] text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Register Now
            <ExternalLink className="w-5 h-5" />
          </a>

          <p className="text-xs text-muted-foreground mt-4">
            The registration form will open in a new tab.
          </p>

        </div>

        {/* Refund Policy */}
        <div className="border-l-4 border-[color:var(--gold)] bg-[color:var(--subtle)] p-5">

          <div className="flex items-center gap-2 mb-3">
            <RotateCcw className="w-5 h-5 text-[color:var(--gold)]" />
            <h3 className="font-serif text-lg text-[color:var(--navy)]">
              Refund Policy
            </h3>
          </div>

          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Cancellation 30 or more days before conference: 75% refund.</li>
            <li>Cancellation 15–29 days before conference: 50% refund.</li>
            <li>Cancellation less than 15 days before conference: No refund.</li>
            <li>Registration can be transferred with prior written intimation.</li>
          </ul>

        </div>

      </div>
    </>
  );
}