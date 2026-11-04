import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq, { type QA } from "@/components/Faq";
import PageHero from "@/components/PageHero";
import { Arrow, Check } from "@/components/Icons";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Landscaping Website Design, SEO & Marketing",
  description:
    "Custom landscaping company websites, landscaping SEO, Google Business Profile optimization and Google & Meta Ads, all built to bring in more estimate requests.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "websites",
    eyebrow: "01 · Websites",
    h: "Custom Landscaping Websites",
    p: "A fast, mobile-first website designed around how homeowners choose a landscaper. A portfolio of your real projects, clear pages for every service you offer, the towns you cover, and an estimate button on every screen.",
    list: [
      "Custom design, no recycled templates",
      "Pages for design-build, patios and hardscaping, plantings, lawn care, lighting and seasonal cleanups",
      "Before-and-after project gallery you can update yourself",
      "Estimate requests sent straight to your phone, email or CRM",
    ],
    src: img.crewPushMower(1200, 1000),
    alt: "Landscaper mowing a front lawn with a push mower",
  },
  {
    id: "seo",
    eyebrow: "02 · SEO",
    h: "Landscaping SEO",
    p: "Rank for the searches that turn into signed jobs: landscapers near me, patio installation, landscape design and lawn care service in the towns you serve. Technical SEO, content and local pages handled for you.",
    list: [
      "Keyword plan built around your services and service area",
      "Town and neighborhood pages with unique content",
      "Schema markup, site speed and technical fixes",
      "Monthly reporting in plain English",
    ],
    src: img.curvedPath(1200, 1000),
    alt: "Curved brick path winding through a planted garden",
  },
  {
    id: "local",
    eyebrow: "03 · Local",
    h: "Google Business Profile & Map Pack",
    p: "When someone searches 'landscaping near me', your Google Business Profile is often the first thing they see. We optimize it, keep it active with fresh project photos and connect it to your website so it works as hard as your crews do.",
    list: [
      "Profile audit, categories, services and service areas",
      "Regular project photo posting through the season",
      "Review request process for happy homeowners after every job",
      "Citation clean-up across directories",
    ],
    src: img.homeShrubs(1200, 1000),
    alt: "Large home with manicured shrubs and a freshly kept front lawn",
  },
  {
    id: "ads",
    eyebrow: "04 · Paid",
    h: "Google & Meta Ads for Landscapers",
    p: "When spring hits and every homeowner in town starts planning their yard, paid campaigns put you at the top while SEO builds. Tight local targeting, service landing pages and conversion tracking from day one, so you know your real cost per estimate.",
    list: [
      "Google Search and Local Services Ads setup guidance",
      "Separate campaigns for hardscaping, design-build and maintenance",
      "Dedicated landing pages for every campaign",
      "Call and form tracking so you see real cost per estimate",
    ],
    src: img.landscapeLighting(1200, 1000),
    alt: "Landscape lighting glowing over shrubs and mulched beds at dusk",
  },
];

const faqs: QA[] = [
  {
    q: "Do I need every service?",
    a: "No. Many landscaping companies start with a new website, then add SEO once the site is in place. On a call we'll tell you which service would make the biggest difference first.",
  },
  {
    q: "Can you redesign my existing landscaping website?",
    a: "Yes. We'll review what you have, keep anything that's ranking or converting, and rebuild the rest. Old URLs are redirected so you don't lose search equity.",
  },
  {
    q: "Will you write the content?",
    a: "Yes. We write landscaping copy for every page, then review it with you so details about your services, materials, certifications, warranties and service area are accurate.",
  },
  {
    q: "We work out of a yard, not a storefront. Can we still rank locally?",
    a: "Yes. We set up your Google Business Profile as a service-area business and build pages for the towns you travel to, so you can rank across your whole territory.",
  },
  {
    q: "Do you use stock photos?",
    a: "We strongly prefer your own project photos because homeowners trust real work. Where you don't have them yet, we use high-quality stock images until you do.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a Landscaping Company Needs to Win Online"
        lead="Websites, search visibility and estimate tracking, built and managed by one team that only works with landscaping companies."
      />

      <section className="section-tight" aria-label="Services overview">
        <div className="container grid-4">
          {services.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className="card reveal" style={{ ["--d" as string]: `${i * 0.06}s`, minHeight: 200 }}>
              <span className="eyebrow" style={{ marginBottom: "auto" }}>
                {s.eyebrow}
              </span>
              <h3 style={{ fontSize: 18 }}>{s.h}</h3>
            </a>
          ))}
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className="section" aria-labelledby={`${s.id}-h`} style={{ scrollMarginTop: 80 }}>
          <div className={`container split${i % 2 ? " reverse" : ""}`}>
            <div className="split-media reveal">
              <img src={s.src} alt={s.alt} loading="lazy" decoding="async" width={1200} height={1000} />
            </div>
            <div className="split-copy reveal" style={{ ["--d" as string]: ".1s" }}>
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 id={`${s.id}-h`}>{s.h}</h2>
              <p>{s.p}</p>
              <ul className="checklist">
                {s.list.map((l) => (
                  <li key={l}>
                    <Check /> {l}
                  </li>
                ))}
              </ul>
              <Link href="/contact#schedule" className="btn" style={{ marginTop: 8 }}>
                Schedule a Call <Arrow />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="section" aria-labelledby="process-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow reveal">Process</p>
            <h2 id="process-h" className="h-section reveal">
              From First Call to Launch
            </h2>
          </div>
          <div className="steps">
            {[
              ["Strategy call", "We review your current site, Google profile and competitors, then agree on goals."],
              ["Plan & content", "Sitemap, keyword plan and landscaping copy, reviewed with you before design."],
              ["Design & build", "Custom design, then a fast, accessible build you can preview on any device."],
              ["Launch & grow", "We launch, set up tracking and keep improving rankings and conversions."],
            ].map(([h, p], i) => (
              <div key={h} className="step reveal" style={{ ["--d" as string]: `${i * 0.07}s` }}>
                <span className="n">(0{i + 1})</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} title="Services Questions" />
      <CtaBand />
    </>
  );
}
