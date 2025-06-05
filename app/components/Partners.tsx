// app/components/Partners.tsx
import partnersData from "../../data/partners.json";
import type { Partner } from "../../types/Partner";

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-primary-light">
      <div className="container">
        <h2 className="section-title text-4xl text-primary-dark">Our Team</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partnersData.map((p: Partner) => (
            <div key={p.name} className="card">
              <div className="h-56 overflow-hidden">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-secondary-dark mb-2">
                  {p.name}
                </h3>
                <p className="text-accent mb-4">{p.role}</p>
                <p className="text-neutral-grayDark text-sm leading-relaxed">
                  {p.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}