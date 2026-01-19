import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import portfolioPhoto1 from "@/assets/portfolio-photo-1.jpg";
import portfolioPhoto2 from "@/assets/portfolio-photo-2.jpg";
import portfolioBranding1 from "@/assets/portfolio-branding-1.jpg";
import kkokicover from "@/assets/kk_oki_cover.png";
import bizcards from "@/assets/kk_bizcard.png";
import boardwalk from "@/assets/boardwalk.jpeg";



type Category = "all" | "web" | "photography" | "branding" | "social-media";

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  url?: string; // Added placeholder for link
}

const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    title: "Kristin's Kreations OKI", 
    category: "web", 
    image: kkokicover, 
    description: "A custom website designed to showcase Kristin's unique artwork and make it easy for local customers to explore and purchase her pieces.",
    url: "https://kristinskreationsoki.com/" 
  },
  { 
    id: 2, 
    title: "Graphic Design", 
    category: "branding", 
    image: portfolioBranding1, 
    description: "Cohesive visual identity that reflects your brand's personality and values.",
    url: "#" // placeholder
  },
  { 
    id: 3, 
    title: "Creative Photography", 
    category: "photography", 
    image: portfolioPhoto1, 
    description: "Senior photos, family portraits, and more.",
    url: "https://CaseySanders.pixieset.com/caseyspersonalfaves/" 
  },


  { 
    id: 5, 
    title: "Product Photography", 
    category: "photography", 
    image: boardwalk, 
    description: "I take photos that put your products in the best light.",
    url: "#" // placeholder
  },
  { 
    id: 6, 
    title: "Business Card", 
    category: "branding", 
    image: bizcards, 
    description: "A project that involved designing a memorable business card to leave a lasting impression.",
    url: "#" // placeholder
  },




];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "web", label: "Web Design" },
  { value: "photography", label: "Photography" },
  { value: "branding", label: "Branding" },
  { value: "social-media", label: "Social Media" },
];

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<Category>(
    (searchParams.get("category") as Category) || "all"
  );

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") as Category;
    if (categoryFromUrl) setActiveCategory(categoryFromUrl);
  }, [searchParams]);

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
              Browse My Work...
            </h1>
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
          {activeCategory === "photography" ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <img key={item.id} src={item.image} alt={item.title} className="w-full rounded-xl shadow-md" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => {
                const CardContent = (
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
                );

                return item.url && item.url !== "#" ? (
                  <a 
                    key={item.id} 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;