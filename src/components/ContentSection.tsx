import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Feature {
  title: string;
  description: string;
  badge?: string;
}

interface ContentSectionProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: "Advanced Analytics",
    description: "Get detailed insights into your data with our powerful analytics dashboard.",
    badge: "Popular"
  },
  {
    title: "Real-time Collaboration",
    description: "Work together seamlessly with your team in real-time across all devices.",
    badge: "New"
  },
  {
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance standards.",
    badge: "Secure"
  }
];

export function ContentSection({ features = defaultFeatures }: ContentSectionProps) {
  return (
    <section className="flex flex-col relative min-h-[838px] w-full overflow-hidden mt-[2650px] max-md:max-w-full max-md:mt-10">
      <img
        src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/c272d1ab0ea4fa8307ad016c5ea5bf665676eb18?placeholderIfAbsent=true"
        alt="Content background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/57607d9550f320651619592d715825870d8bbb79?placeholderIfAbsent=true"
        alt="Content visual"
        className="aspect-[2.29] object-contain w-full max-md:max-w-full"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the tools and capabilities that make our platform the perfect choice for your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    {feature.badge && (
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
