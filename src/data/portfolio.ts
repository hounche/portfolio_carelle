// ======================
// Types
// ======================

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: Record<string, string[]>; // Dynamic keys for Data stacks
  experience: Experience[];
  projects: Project[];
}

// ======================
// Data
// ======================

export const portfolioData: PortfolioData = {
  name: "Ange Carelle",
  role: "Data Scientist | Data Analyst | Data Engineer | Data Steward",
  about:
    "Je m'appelle Ange Carelle, Data Scientist passionné, spécialisé dans l’analyse, l’ingénierie et la gouvernance des données. J’accompagne les organisations dans la transformation de données brutes en informations exploitables, la conception de pipelines de données robustes et la mise en place d’outils d’aide à la décision fiables. Mon objectif est de valoriser la donnée pour soutenir la performance et la prise de décision stratégique.",
  profileImage: "/images/profile.webp",

  social: [
    {
      platform: "GitHub",
      url: "https://github.com/carelle-Tchembeng",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/carelle-tchembeng/",
      icon: "Linkedin",
    },
    {
      platform: "Email",
      url: "mailto:carelletchembeng25@gmail.com",
      icon: "Mail",
    },
  ],

  skills: {
    ingestion: ["Airbyte", "Fivetran", "Apache Kafka", "REST APIs"],
    storage: ["Snowflake", "BigQuery", "Amazon S3", "Azure Data Lake", "MySQL", "SQLite"],
    processing: ["Python", "SQL", "dbt", "Apache Spark", "Power Query"],
    orchestration: ["Apache Airflow", "Prefect"],
    analytics: ["Power BI", "Tableau", "Looker"],
    data_science: ["Pandas", "NumPy", "Scikit-learn"],
    governance: ["Data Quality Checks", "Great Expectations", "Data Catalogs"],
    tools: ["Git", "Docker", "VS Code", "Postman"],
  },

  experience: [
    {
      company: "SAGIMS Technologies",
      role: "Data Analyst & Data Engineer",
      period: "Mai 2025 - Août 2025",
      description: [
        "Développé des scripts Python et des requêtes SQL pour automatiser les processus ETL.",
        "Optimisé les workflows de reporting, réduisant significativement les délais de production des analyses.",
        "Mis en place des contrôles de qualité des données (anomalies, incohérences, valeurs manquantes).",
        "Analysé les données financières et opérationnelles pour identifier des tendances et KPI.",
        "Conçu et maintenu des tableaux de bord Power BI pour le pilotage de la performance.",
        "Collaboré avec les équipes métiers pour traduire les besoins fonctionnels en indicateurs exploitables.",
      ],
    },
    {
      company: "CCA Bank",
      role: "Data Analyst Intern",
      period: "Juin 2024 - Août 2024",
      description: [
        "Nettoyé, préparé et modélisé les données via Power Query.",
        "Structuré les données pour une exploitation optimale dans les outils de reporting.",
        "Développé des tableaux de bord Power BI avec KPI financiers et indicateurs de performance.",
        "Créé des rapports automatisés via SQL pour le suivi des performances financières.",
        "Amélioré la lisibilité des données pour les équipes décisionnelles.",
      ],
    },
  ],

  projects: [
    {
      title: "Financial Dashboard",
      description:
        "Tableau de bord Power BI pour suivre la performance financière, avec KPI dynamiques et rapports automatisés.",
      techStack: ["Power BI", "SQL", "Python"],
      thumbnail: "/images/projects/data_dashboard.webp",
    },
    {
      title: " Customer Analytics",
      description:
        "Analyse des comportements clients via Python et Pandas pour identifier les segments et tendances d’achat.",
      techStack: ["Python", "SQL", "Airflow", "dbt"],
      thumbnail: "/images/projects/data_customers.webp",
    },
    {
      title: "ETL Pipeline Automation",
      description:
        "Pipeline ETL automatisé pour collecter, transformer et charger les données depuis plusieurs sources.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      thumbnail: "/images/projects/data_etlll.webp",
    },
    {
      title: "Sales Forecasting",
      description:
        "Modèle de prévision des ventes utilisant Scikit-learn et séries temporelles pour optimiser le stock.",
      techStack: ["Python", "Scikit-learn", "Pandas", "SQL"],
      thumbnail: "/images/projects/data_forecast.webp",
    },
    {
      title: "Data Quality Monitoring",
      description:
        "Système de monitoring automatisé pour contrôler la qualité des données dans les pipelines ETL.",
      techStack: ["Python", "Great Expectations", "Airflow", "SQL"],
      thumbnail: "/images/projects/data_qualities.webp",
    },
  ],
};
