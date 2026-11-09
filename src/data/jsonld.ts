import { profile, sameAs } from "./profile";

// schema.org Person, so search engines tie every profile and both name spellings to one person.
export function personJsonLd(lang: "en" | "fr") {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.alternateName,
    jobTitle: lang === "fr" ? "Chercheur en intelligence artificielle" : "AI researcher",
    description:
      lang === "fr"
        ? "Docteur en IA. Entraînement et évaluation de grands modèles de langage (LLM), principalement en médecine."
        : "PhD in AI. Training and evaluation of large language models (LLMs), mainly in medicine.",
    affiliation: { "@type": "Organization", name: "Inria Paris", url: "https://www.inria.fr" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Sorbonne Université" },
      { "@type": "CollegeOrUniversity", name: "CentraleSupélec" },
      { "@type": "CollegeOrUniversity", name: "ECE Paris" },
    ],
    knowsAbout: [
      "Large language models",
      "LLM training",
      "AI in medicine",
      "LLM evaluation",
      "AI safety",
      "Clinical AI",
      "Biomedical language models",
      "CamemBERT-bio",
    ],
    url: lang === "fr" ? "https://rian-t.github.io/fr/" : "https://rian-t.github.io",
    image: "https://rian-t.github.io/assets/avatar.jpeg",
    sameAs,
  };
}
