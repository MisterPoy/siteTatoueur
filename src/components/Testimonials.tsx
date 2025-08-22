import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();

  const items = [
    { name: "Alex", text: "Super pro, ligne fine impeccable.", rating: 5 },
    { name: "Lina", text: "Accueil top et hygiène nickel.", rating: 5 },
    { name: "Marc", text: "Mon tatouage réaliste est dingue !", rating: 5 },
  ];

  return (
    <section id="reviews" className="py-16 bg-karasu-900">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-12 scroll-reveal">
          <h2 className="text-2xl font-accent text-bone mb-8">Avis clients</h2>
        </div>
        <div ref={testimonialsRef} className="scroll-reveal">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((t, i) => (
              <li key={i} className="rounded-xl border border-karasu-700 p-5">
                <p className="text-karasu-300">"{t.text}"</p>
                <div className="mt-3 text-sm text-karasu-400">— {t.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}