// app/components/Resources.tsx
import resourcesData from "../../data/resources.json";
import type { Resource } from "../../types/Resource";

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-neutral-white">
      <div className="container">
        <h2 className="section-title text-4xl text-secondary">Resources</h2>
        <ul className="mt-6 space-y-4">
          {resourcesData.map((res: Resource) => (
            <li key={res.href}>
              <a
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xl font-medium text-primary hover:text-primary-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>{res.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}