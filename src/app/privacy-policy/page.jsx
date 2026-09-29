import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | An Idea Tech",
  description: "How An Idea Tech handles personal information submitted through the website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="mx-auto max-w-3xl">
          <p className="subtitle mb-4">AN IDEA TECH</p>
          <h1 className="hero-title-main">Privacy Policy</h1>
          <p className="description mt-6 text-lg">
            This page will explain how An Idea Tech handles personal information
            submitted through the website.
          </p>
          <div className="mt-12 border-t border-border-primary/30 pt-8">
            <p className="description">
              The complete policy is being prepared from the live forms,
              service providers, retention requirements, and applicable legal
              basis. It will be published once those details are approved.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex font-manrope-bold text-brand underline underline-offset-4"
            >
              Contact us about your information
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
