export const site = {
  name: "Landscaping Web Design",
  domain: "landscapingwebdesign.com",
  url: "https://landscapingwebdesign.com",
  parent: "cantandoDigital",
  parentUrl: "https://cantandodigital.com",
  phone: "610-764-3857",
  phoneHref: "tel:+16107643857",
  email: "stevenJohn@cantandoDigital.com",
  location: "Newtown Square, PA",
  description:
    "Website design, SEO and digital marketing built only for landscaping companies. Better websites, stronger search visibility and more estimate requests from homeowners planning lawns, patios and outdoor living.",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

/** Free-license Unsplash photos (images.unsplash.com hotlinking is permitted by the Unsplash License). */
const u = (id: string, w = 1600, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75&w=${w}${h ? `&h=${h}` : ""}`;

type Img = (w?: number, h?: number) => string;
const p = (id: string): Img => (w, h) => u(`photo-${id}`, w, h);

export const img = {
  // Crews at work
  crewWheelbarrow: p("1734079692160-fcbe4be6ab96"),
  crewMowTrim: p("1734303023491-db8037a21f09"),
  crewHouseMow: p("1779636489740-6077a4198be6"),
  crewPushMower: p("1782613064276-750c3a3ccdec"),
  crewEdging: p("1605117882932-f9e32b03fea9"),
  sodHands: p("1734079692079-aae7e24a7035"),
  hedgeTrimmer: p("1543309959-4d45288d1629"),
  paverLaying: p("1725586660046-0c2bea151543"),
  crewTrimSidewalk: p("1779636489748-c66b48a94c39"),
  // Completed jobs
  patioFirePit: p("1778869290979-6f09567a0eee"),
  stonePatio: p("1787491581073-5092d753e225"),
  rockGarden: p("1784293449032-200db587788c"),
  flowerBed: p("1783451439661-152793447cbf"),
  gravelPath: p("1668120089662-42642838cfef"),
  curvedPath: p("1787069249322-e12755fc68d4"),
  steppingStones: p("1759390304699-5c389476ca80"),
  formalGarden: p("1725630810343-b89b40e0079a"),
  landscapeLighting: p("1658692051708-519fbdac7e8f"),
  hedgeRow: p("1784641337536-329644723325"),
  stripedLawn: p("1764969370921-7c8df49171cd"),
  // Homes
  homeShrubs: p("1777428762767-e3a797da389a"),
  homeBrick: p("1773427663260-8418a314f0ee"),
  homeGray: p("1781797221329-c3d083ab6d99"),
  homeDusk: p("1560749003-f4b1e17e2dff"),
  homeModernPool: p("1783125127199-860da9744dcc"),
};
