"use client";

import React, { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function StructuredData() {
  const [jsonLD, setJsonLD] = useState<string | null>(null);

  useEffect(() => {
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: portfolioData.name,
      jobTitle: portfolioData.role,
      description: portfolioData.about,
      url: "https://www.vipuljha.com",
      image: "https://www.vipuljha.com/images/profile.webp",
      sameAs: portfolioData.social
        .filter((s) => s.platform !== "Email")
        .map((s) => s.url),
      worksFor: {
        "@type": "Organization",
        name: "Primebook India",
      },
      knowsAbout: [
        "Data Analysis",
        "Python",
        "SQL",
        "Power BI",
        "ETL",
        "Data Engineering",
      ],
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${portfolioData.name} Portfolio`,
      description: portfolioData.about,
      author: {
        "@type": "Person",
        name: portfolioData.name,
      },
      inLanguage: "en-US",
    };

    const profilePageSchema = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      dateCreated: "2024-11-20",
      dateModified: new Date().toISOString().split("T")[0],
      mainEntity: {
        "@type": "Person",
        name: portfolioData.name,
        description: portfolioData.about,
      },
    };

    setJsonLD(JSON.stringify([personSchema, websiteSchema, profilePageSchema]));
  }, []);

  if (!jsonLD) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLD }}
    />
  );
}
