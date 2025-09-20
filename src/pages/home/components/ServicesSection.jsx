import { grid_cards } from "../data";

export default function ServicesSection() {
  return (
    <section id="services">
      <h1 className="text-4xl text-center font-bold pb-20">What We Offer</h1>
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 2xl:gap-12 gap-6">
        {grid_cards.map(({ icon: Icon, service, title }) => (
          <div className="flex gap-6" key={title}>
            <span className="text-3xl mt-1">
              <Icon />
            </span>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">{title}</h2>
              <p className="text-secondary text-lg">{service}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
