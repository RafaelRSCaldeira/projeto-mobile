import type { Kpi } from '../../data/admin';
import { defaultKpis } from '../../data/admin';

type KpiGridProps = {
  kpis?: Kpi[];
};

export function KpiGrid({ kpis = defaultKpis }: KpiGridProps) {
  return (
    <section className="kpis" aria-labelledby="admin-kpis-title">
      <h2 id="admin-kpis-title" className="sr-only">
        Métricas
      </h2>
      {kpis.map(({ label, value }) => (
        <article key={label} className="kpi card" aria-label={label}>
          <p className="kpi__label">{label}</p>
          <p className="kpi__value">{value}</p>
        </article>
      ))}
    </section>
  );
}

export default KpiGrid;

