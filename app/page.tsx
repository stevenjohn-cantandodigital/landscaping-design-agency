import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq, { type QA } from "@/components/Faq";
import FeatureTabs from "@/components/FeatureTabs";
import HeroScroll from "@/components/HeroScroll";
import Statement from "@/components/Statement";
import { Chart, Inbox, Search, Bolt, Layout } from "@/components/Icons";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Landscaping Web Design | Websites & SEO for Landscaping Companies" },
  alternates: { canonical: "/" },
};

const faqs: QA[] = [
  {
    q: "Do you only work with landscaping companies?",
    a: "Yes. Landscaping Web Design builds websites and runs marketing for landscaping businesses only: design-build firms, hardscape and patio installers, lawn care and maintenance companies, irrigation and lighting contractors, and commercial grounds crews. Every page, keyword and estimate form is planned around how homeowners pick who to trust with their property.",
  },
  {
    q: "Will a new website actually bring in more estimate requests?",
    a: "A website can't promise a full schedule, and we won't either. What we do is remove the reasons homeowners leave: slow pages, vague service descriptions, stock photos instead of your projects, no service area and an estimate form buried three clicks deep. Then we track every call and form so you can see what the site is producing.",
  },
  {
    q: "How long does a landscaping website take to launch?",
    a: "It depends on how many service and service-area pages you need and how quickly we get your project photos, service details, licensing and the towns you cover. We give you a launch date on the first call, before any work starts.",
  },
  {
    q: "Can you help us show up for 'landscapers near me'?",
    a: "We optimize your Google Business Profile, build pages for design-build, patios and hardscaping, plantings, lawn care, lighting and the towns you serve, and fix the citations and on-page signals local rankings depend on. Rankings take time, and no one can honestly guarantee a position.",
  },
  {
    q: "Our work is seasonal. Can the site help with that?",
    a: "Yes. We plan content and campaigns around your calendar: design-build and hardscape demand in late winter and spring, maintenance contracts before the season starts, and fall cleanups and lighting later in the year. Your homepage and offers can change with the season without a rebuild.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroScroll />

      {/* SHOWCASE */}
      <section className="showcase" aria-labelledby="show-h">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 50 }}>
            <h2 id="show-h" className="h-section reveal">
              A Landscaping Website That Earns Homeowner Trust
            </h2>
            <p className="lead reveal" style={{ ["--d" as string]: ".1s" }}>
              A homeowner scrolling landscapers on their phone decides who looks trustworthy in about thirty seconds. We
              build your site around the three things that turn a &ldquo;landscapers near me&rdquo; search into an
              estimate request.
            </p>
          </div>
          <div className="showcase-stage">
            <div className="browser reveal">
              <div className="browser-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span className="browser-url">yourlandscapingco.com</span>
              </div>
              <div className="browser-body">
                <img
                  src={img.homeBrick(1100, 700)}
                  alt="Suburban brick home with a manicured lawn and planted beds"
                  loading="lazy"
                  decoding="async"
                  width={1100}
                  height={700}
                />
                <div className="mock" aria-hidden="true">
                  <span className="mock-title">Outdoor spaces designed, built and cared for by one local crew.</span>
                  <div className="mock-row">
                    <span className="mock-btn">Request an estimate</span>
                    <span className="mock-btn alt">See our projects</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-card fc-1 reveal" style={{ ["--d" as string]: ".15s" }}>
              <div className="ic">
                <Bolt />
              </div>
              <h3>Speed Check</h3>
              <p>Lightweight pages that load fast on a phone, even when the homeowner is browsing from the backyard.</p>
            </div>
            <div className="float-card fc-2 reveal" style={{ ["--d" as string]: ".25s" }}>
              <div className="ic">
                <Search />
              </div>
              <h3>Search Visibility</h3>
              <p>Pages for design-build, patios, plantings, lawn care, lighting and every town you serve.</p>
            </div>
            <div className="float-card fc-3 reveal" style={{ ["--d" as string]: ".35s" }}>
              <div className="ic">
                <Inbox />
              </div>
              <h3>More Estimates</h3>
              <p>Tap-to-call and short estimate-request forms on every page, sent straight to your phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" aria-labelledby="feat-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow reveal">Features</p>
            <h2 id="feat-h" className="h-section reveal">
              Build What Counts
            </h2>
            <p className="lead reveal">
              From the first &ldquo;backyard patio ideas&rdquo; search to the signed contract, we handle the website and
              marketing work while you design, build, plant and maintain.
            </p>
          </div>
          <FeatureTabs />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section" aria-label="Why landscaping companies switch">
        <div className="container">
          <Statement
            eyebrow="Solution"
            paragraphs={[
              "Landscaping companies compete with national lawn franchises, lead-selling directories and guys with a truck and a mower, all for the same 'landscapers near me' and 'patio installation cost' searches.",
              "[[Landscaping Web Design]] gives you a site and search presence built for that fight: a portfolio that shows your real projects, clear pages for every service, local pages for where you work, and a fast path from first look to scheduled estimate.",
            ]}
          />
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="section perf-glow" aria-labelledby="perf-h">
        <div className="container">
          <div className="perf-head">
            <div>
              <p className="eyebrow reveal" style={{ marginBottom: 16 }}>
                Performance
              </p>
              <h2 id="perf-h" className="h-section reveal">
                Better Websites,
                <br />
                Visibility &amp; Leads
              </h2>
            </div>
            <p className="lead reveal">
              Three outcomes every engagement is built around, whether you need a full rebuild or a stronger search
              presence.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: <Layout />,
                h: "Better Websites",
                p: "Custom landscaping sites that show off your real projects, explain each service clearly and look sharp on any phone.",
              },
              {
                icon: <Search />,
                h: "Stronger Visibility",
                p: "Landscaping SEO, town pages and Google Business Profile work so homeowners find you before the franchises and lead brokers do.",
              },
              {
                icon: <Chart />,
                h: "More Estimate Requests",
                p: "Click-to-call, short estimate forms and call tracking so more visits turn into site walks, signed designs and maintenance contracts.",
              },
            ].map((c, i) => (
              <div key={c.h} className="card reveal" style={{ ["--d" as string]: `${i * 0.08}s` }}>
                <span className="ic">{c.icon}</span>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section" aria-labelledby="founder-h">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <h2 id="founder-h" className="h-section reveal">
              Meet the Founder
            </h2>
          </div>
          <article className="expert reveal">
            <div className="expert-photo">
              <img
                src="/brand/steven-cantando-founder.webp"
                alt="Steven Cantando, founder of cantandoDigital"
                loading="lazy"
                decoding="async"
                width={818}
                height={900}
              />
            </div>
            <h3>Steven Cantando</h3>
            <p className="role">Founder, cantandoDigital</p>
            <p>
              Leads strategy and builds for every Landscaping Web Design client, with years of frontend development
              and local-business marketing behind him.
            </p>
          </article>
        </div>
      </section>

      {/* STATS */}
      <section className="section-tight" aria-labelledby="stats-h">
        <div className="container">
          <div className="panel stats-panel reveal">
            <div className="stats-left">
              <p className="eyebrow">Why organic search matters for landscapers</p>
              <h2 id="stats-h">
                Websites and SEO built for landscaping companies,{" "}
                <span>so your estimate calendar fills from search, not from shared leads.</span>
              </h2>
              <Link href="/contact#schedule" className="btn">
                Schedule a Call
              </Link>
            </div>
            <div className="stats-right">
              <div className="stat">
                <div className="num">24/7</div>
                <h3>Requests while you&rsquo;re on a job</h3>
                <p>
                  Homeowners plan their yards at night and on weekends, when you can&rsquo;t answer the phone. A site
                  built to convert keeps taking estimate requests while you&rsquo;re on a job.
                </p>
              </div>
              <div className="stat">
                <div className="num">1 tap</div>
                <h3>From any page to your phone</h3>
                <p>Every page we build keeps a call button and estimate link within thumb&rsquo;s reach on mobile.</p>
              </div>
              <div className="stat">
                <div className="num">100%</div>
                <h3>Landscaping focused</h3>
                <p>We work with landscaping companies only, so your strategy is never a copy of another trade&rsquo;s.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
