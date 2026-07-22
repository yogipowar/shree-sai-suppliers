/** Centralized image URLs — Indian construction context (Unsplash + Pexels). */
const unsplash = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const pexels = (id, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  /* Hero & banners */
  hero: unsplash('1632201189531-7b7469d5c451', 1800), // Construction workers, India
  aboutPreview: unsplash('1531834685032-c34bf0d84c77', 1200), // Workers on building site
  aboutPage: unsplash('1719993913364-00430029f178', 1200), // Worker with machinery, India
  cta: unsplash('1708064235939-0b78938aa224', 1600), // Mumbai coastal road project
  pageHero: unsplash('1708067296964-3e31bde76787', 1600), // Mumbai construction site

  /* Materials catalog */
  crusherMaterial: unsplash('1708067296964-3e31bde76787', 800),
  stoneDust: unsplash('1681880511033-b9582a379ce2', 800), // Cement & sand piles
  aggregate10: unsplash('1779643302035-a7a43bf36fe8', 800), // Sand pile at site
  aggregate20: pexels(2219024, 800), // Construction site materials
  aggregate40: unsplash('1708064235939-0b78938aa224', 800), // Infrastructure works
  gsb: unsplash('1708064235939-0b78938aa224', 800),
  mSand: unsplash('1681880511033-b9582a379ce2', 800),
  riverSand: unsplash('1779643302035-a7a43bf36fe8', 800),
  cement: unsplash('1773394089934-3e29f2a3d6a9', 800), // Cement bags
  bricks: unsplash('1706715201231-b703e7df3395', 800), // Brick stacks, India

  /* Services */
  materialSupply: unsplash('1632201189531-7b7469d5c451', 800),
  bulkSupply: pexels(32826199, 800), // Indian workers at site with crane
  projectBased: unsplash('1708064235939-0b78938aa224', 800),
  deliverySupport: pexels(4484078, 800), // Material / truck logistics
  customized: unsplash('1719993913364-00430029f178', 800),

  /* Industries we serve */
  residential: unsplash('1630060041646-3ba002aa7d37', 800), // Indian residential building
  commercial: unsplash('1629692747458-b3360f3267d0', 800), // Concrete building, India
  road: unsplash('1708064235939-0b78938aa224', 800), // Mumbai road construction
  infrastructure: unsplash('1642503266862-16d9357118a7', 800), // Indian tower / skyline
  realEstate: unsplash('1622397333411-1e76a9b439ef', 800), // Indian building
  industrial: unsplash('1719993913364-00430029f178', 800),
};
