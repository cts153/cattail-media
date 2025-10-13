import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import portfolioWeb1 from "@/assets/portfolio-web-1.jpg";
import portfolioWeb2 from "@/assets/portfolio-web-2.jpg";
import portfolioPhoto1 from "@/assets/portfolio-photo-1.jpg";
import portfolioPhoto2 from "@/assets/portfolio-photo-2.jpg";
import portfolioBranding1 from "@/assets/portfolio-branding-1.jpg";
import portfolioBranding2 from "@/assets/portfolio-branding-2.jpg";

type Category = "all" | "web" | "photography" | "branding";

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Recent Website",
    category: "web",
    image: portfolioWeb1,
    description: "Custom squarespace sites for local businesses and creatives.",
  },
  {
    id: 2,
    title: "Branding Package",
    category: "branding",
    image: portfolioBranding1,
    description: "Bring your story to life with a cohesive visual identity.",
  },
  {
    id: 3,
    title: "Creative Photography",
    category: "photography",
    image: portfolioPhoto1,
    description: "Senior photos, family portraits, and more.",
  },
  {
    id: 4,
    title: "Online Storefront",
    category: "web",
    image: portfolioWeb2,
    description: "Customized Squarespace e-commerce site to fit your needs.",
  },
  {
    id: 5,
    title: "Commercial and Product Photography",
    category: "photography",
    image: portfolioPhoto2,
    description: "From real estate to artisan craft, we've got you covered.",
  },
  {
    id: 6,
    title: "Social Media Kits",
    category: "branding",
    image: portfolioBranding2,
    description: "Express your personality in every detail.",
  },*/
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Work" },
    { value: "web", label: "Web Design" },
    { value: "photography", label: "Photography" },
    { value: "branding", label: "Branding" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Welcome to my portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects showcasing what I can do.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                variant={activeCategory === category.value ? "default" : "outline"}
                className={
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:border-primary hover:text-primary"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
