import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Statement from "@/components/Statement";
import { Check, Home, Layout, Search, Star } from "@/components/Icons";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Landscaping Web Design is a cantandoDigital company that builds websites and runs SEO and digital marketing exclusively for landscaping companies.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A Web Design Agency That Only Works With Landscaping Companies"
        lead="We focus on one trade so we can know it better than anyone: how a homeowner goes from staring at a tired backyard to saving patio photos, searching for landscapers nearby, comparing three companies’ portfolios and reviews, deciding who they trust with their property, and finally requesting an estimate."
      />

      <section className="section-tight" aria-label="Landscaping crews at work and finished outdoor spaces">
        <div className="container photo-strip">
          <figure className="reveal">
            <img
              src={img.crewWheelbarrow(1200, 800)}
              alt="Landscaper pushing a wheelbarrow across a residential lawn"
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
            />
          </figure>
          <figure className="reveal" style={{ ["--d" as string]: ".08s" }}>
            <img
              src={img.flowerBed(800, 800)}
              alt="Freshly planted flower bed edged against a trimmed hedge"
              loading="lazy"
              decoding="async"
              width={800}
              height={800}
            />
          </figure>
          <figure className="reveal" style={{ ["--d" as string]: ".16s" }}>
            <img
              src={img.stonePatio(800, 800)}
              alt="Finished stone patio with outdoor seating"
              loading="lazy"
              decoding="async"
              width={800}
              height={800}
            />
          </figure>
        </div>
      </section>

      <section className="section" aria-label="Our approach">
        <div className="container">
          <Statement
            eyebrow="Our approach"
            paragraphs={[
              "Generic agencies treat a landscaping company like any other small business. The result is a template site with three stock photos that never shows your design-build work, separates hardscaping from weekly maintenance, explains how your estimates work, or names the towns you actually want to serve.",
              "We start from your customer instead: [[the homeowner deciding who to trust with their property]]. Every page we build answers their questions honestly and makes it easy to request an estimate.",
            ]}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="who-h">
        <div className="container split">
          <div className="split-media reveal">
            <img
              src={img.crewHouseMow(1200, 1000)}
              alt="Two landscapers mowing and trimming the lawn of a brick home"
              loading="lazy"
              decoding="async"
              width={1200}
              height={1000}
            />
          </div>
          <div className="split-copy reveal" style={{ ["--d" as string]: ".1s" }}>
            <p className="eyebrow">Who we are</p>
            <h2 id="who-h">Part of cantandoDigital, built for landscaping companies</h2>
            <p>
              Landscaping Web Design is a specialist brand of cantandoDigital, a digital agency based in Newtown Square,
              Pennsylvania that builds websites and marketing for local service businesses. Every project is designed, built and
              managed by our team. No outsourced templates, no handoffs to a call center.
            </p>
            <ul className="checklist">
              <li>
                <Check /> You deal directly with the people building your site
              </li>
              <li>
                <Check /> Plain-English reporting on calls, forms and rankings
              </li>
              <li>
                <Check /> You own your domain, content and photos
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow reveal">What we believe</p>
            <h2 id="values-h" className="h-section reveal">
              How We Work With Landscaping Companies
            </h2>
          </div>
          <div className="grid-2">
            {[
              {
                icon: <Home />,
                h: "Your work is the proof",
                p: "Real before-and-after photos of patios you've laid, beds you've planted and lawns you've brought back beat glossy stock photos every time. We help you shoot, collect and use them well.",
              },
              {
                icon: <Search />,
                h: "Search is a long game",
                p: "SEO compounds. We build service and town pages properly the first time so they keep earning long after launch.",
              },
              {
                icon: <Layout />,
                h: "Clarity sells",
                p: "A homeowner comparing five landscapers skims. A strong portfolio, clear service pages, a visible phone number and a one-tap estimate button beat clever design that hides the next step.",
              },
              {
                icon: <Star />,
                h: "No inflated promises",
                p: "We'll never promise rankings or a number of leads. We'll show you what we're doing and what it's producing.",
              },
            ].map((v, i) => (
              <div key={v.h} className="card reveal" style={{ ["--d" as string]: `${(i % 2) * 0.08}s`, minHeight: 240 }}>
                <span className="ic">{v.icon}</span>
                <h3>{v.h}</h3>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn btn-ghost">
              See our services
            </Link>
          </p>
        </div>
      </section>

      <CtaBand title="Let's talk about your landscaping business." />
    </>
  );
}
