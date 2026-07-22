import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { materials, materialCategories } from '../../data/materials';
import MaterialCard from '../../components/MaterialCard/MaterialCard';
import CTASection from '../../components/CTASection/CTASection';
import './Materials.css';

const Materials = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return materials.filter((item) => {
      const matchesCategory =
        category === 'All' || item.category === category;
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.applications.some((app) => app.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="materials-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Materials</span>
          </div>
          <h1>Construction Materials Catalog</h1>
          <p>
            Browse quality construction materials including aggregates, sand,
            cement, bricks, GSB, and crusher materials.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="materials-toolbar">
            <div className="materials-search">
              <Search size={18} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search materials..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search materials"
              />
            </div>
            <div className="materials-filters" role="group" aria-label="Filter by category">
              {materialCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`materials-filter ${category === cat ? 'materials-filter--active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="materials-empty">
              No materials found. Try a different search or category.
            </p>
          ) : (
            <div className="materials-catalog">
              {filtered.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Need a Quotation for These Materials?"
        description="Share your material and quantity requirements — we will respond with pricing and availability details."
      />
    </div>
  );
};

export default Materials;
