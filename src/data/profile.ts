// Public name is "Rian Touchent-Saad"; papers are signed "Rian Touchent".
export const profile = {
  name: "Rian Touchent-Saad",
  alternateName: "Rian Touchent",
  role: "AI researcher, PhD in AI",
  affiliation: "Inria Paris - Team ALMAnaCH",
  shortBio:
    "I train and evaluate LLMs, mainly in medicine.",
  bio:
    "My PhD was on information extraction from clinical reports using LLMs. I built CamemBERT-bio and ModernCamemBERT-bio, French biomedical language models. Papers are signed Rian Touchent.",
  stats: {
    citations: 111,
    hIndex: 5,
    downloads: "25k+",
  },
  links: [
    { label: "GitHub", href: "https://github.com/Rian-T" },
    { label: "Hugging Face", href: "https://huggingface.co/rntc" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rian-t/" },
    { label: "Email", href: "#", isEmail: true },
    { label: "CV", href: "/resume.pdf" },
  ],
};

export const profileFr = {
  ...profile,
  role: "Docteur en IA, chercheur",
  shortBio:
    "J'entraîne et j'évalue des LLM, principalement en médecine.",
  bio:
    "Ma thèse portait sur l'extraction d'information dans les comptes rendus cliniques avec des LLM. J'ai créé CamemBERT-bio et ModernCamemBERT-bio, des modèles de langue biomédicaux pour le français. Mes articles sont signés Rian Touchent.",
};

// Profiles that describe the same person, for search engines (schema.org sameAs).
export const sameAs = [
  "https://scholar.google.com/citations?user=f5hnXrcAAAAJ",
  "https://orcid.org/0009-0007-4327-2275",
  "https://github.com/Rian-T",
  "https://huggingface.co/rntc",
  "https://www.linkedin.com/in/rian-t/",
  "https://dblp.org/pid/350/3932.html",
  "https://aclanthology.org/people/rian-touchent/",
];
