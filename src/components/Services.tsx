import { Globe, Camera, Palette, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    category: "web",
    description:
      "Beautiful, responsive websites perfect for businesses to showcase their work.",
  },
  {
    icon: Share2,
    title: "Social Media",
    category: "social-media",
    description:
      "Strategic social media presence that engages your audience and reaches your next client.",
  },
  {
    icon: Camera,
    title: "Photography",
    category: "photography",
    description:
      "Commercial & creative photography that showcases you, your business, and your products in the best light.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    category: "branding",
    description:
      "Cohesive brand identity including logos, color palettes, and visual guidelines that tell your story.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services That Grow Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for small businesses ready to make an impact online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
        <Link
          key={index}
          to={`/portfolio?category=${service.category}`}
          className="block"
        >
          <Card
          className="group hover:shadow-xl transition-all duration-300 border-border bg-card animate-scale-in cursor-pointer"
          style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <service.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
            {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
            {service.description}
            </p>
            </CardContent>
          </Card>
        </Link>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
