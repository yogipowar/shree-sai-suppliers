/** Centralized image URLs — local assets + Indian construction context. */
const unsplash = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const pexels = (id, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** Files in /public/images — BASE_URL keeps GitHub Pages paths correct. */
const localImage = (filename) =>
  `${import.meta.env.BASE_URL}images/${encodeURIComponent(filename)}`;

export const images = {
  /* Hero & banners */
  hero: unsplash('1541888946425-d81bb19240f5', 1800), // Clean construction site with crane
  aboutPreview: unsplash('1531834685032-c34bf0d84c77', 1200), // Workers on building site
  aboutPage: unsplash('1719993913364-00430029f178', 1200), // Worker with machinery, India
  cta: unsplash('1708064235939-0b78938aa224', 1600), // Mumbai coastal road project
  pageHero: unsplash('1681880511033-b9582a379ce2', 1600), // Cement and sand piles

  /* Leadership — public/images */
  founder: localImage('s-g-jamadar.png'),
  managementDirector: localImage('p-m-koli.png'),

  /* Materials catalog — public/images */
  crusherMaterial: localImage('crusher-materials.jpeg'),
  stoneDust: localImage('stone-dust.jpeg'),
  aggregate10: localImage('10-mm-Stone-Aggregate.jpg'),
  aggregate20: localImage('20mm Aggregate.jpg'),
  aggregate40: localImage('40mm-crushed-stone-aggregate.webp'),
  gsb: localImage('GSB.webp'),
  mSand: localImage('M-Sand.jpeg'),
  riverSand: localImage('river-sand.jpeg'),
  cement: localImage('Cement.jpeg'),
  bricks: localImage('Bricks.jpeg'),

  /* Services */
  materialSupply: unsplash('1632201189531-7b7469d5c451', 800),
  bulkSupply: pexels(32826199, 800), // Indian workers at site with crane
  projectBased: unsplash('1708064235939-0b78938aa224', 800),
  deliverySupport: pexels(4484078, 800), // Material / truck logistics
  customized: unsplash('1719993913364-00430029f178', 800),

  /* Industries we serve — image matches each card title */
  residential: unsplash('1689574666594-079698f917bc', 800), // Residential apartments under construction
  commercial: unsplash('1769556353017-7ad71b9c4cc4', 800), // Commercial office tower
  road: unsplash('1708064235939-0b78938aa224', 800), // Road construction
  infrastructure: unsplash('1545558014-8692077e9b5c', 800), // Bridge / infrastructure
  realEstate: unsplash('1560518883-ce09059eeffa', 800), // Real estate housing
  industrial: unsplash('1565793298595-6a879b1d9492', 800), // Industrial plant / factory
};
