
export default function CallToAction() {
  return (
    <section className="py-12 text-center">
      <p className="text-xl text-bone font-accent mb-4 font-semibold">Un projet en tête ?</p>
      <a 
        href="#contact" 
        className="inline-flex rounded-xl px-5 py-3 bg-primary hover:bg-primary/80 text-karasu-950 font-accent uppercase tracking-wider transition-all duration-300 hover-lift primary-glow"
      >
        Demander un devis
      </a>
    </section>
  );
}