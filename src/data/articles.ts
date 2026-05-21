export const articles = [
  {
    year: "2026",
    title: "OntoBook: Ontology-Grounded Synthetic Textbooks for Medical Encoder Pretraining",
    venue: "KG-LLM @ LREC 2026",
    citations: 0,
    abstract:
      "Explores the use of ontology-grounded synthetic textbooks for improving the pretraining of medical encoder models.",
    links: [
      { label: "Paper", href: "https://kg-llm.github.io/program/pdf/2026.kgllmlrec26-1.2.pdf" },
    ],
  },
  {
    year: "2026",
    title: "A Causal Language Modeling Detour Improves Encoder Continued Pretraining",
    venue: "arXiv preprint",
    citations: 0,
    abstract:
      "Studies whether a causal language modeling detour can improve continued pretraining for encoder models, with a focus on efficient adaptation rather than training larger models.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2605.12438" },
      { label: "ModernCamemBERT-bio", href: "https://huggingface.co/almanach/ModernCamemBERT-bio-base" },
      { label: "ModernBERT-bio", href: "https://huggingface.co/almanach/ModernBERT-bio-base" },
    ],
  },
  {
    year: "2026",
    title: "Biomed-Enriched: A Biomedical Dataset Enriched with LLMs for Pretraining and Extracting Rare and Hidden Content",
    venue: "ACL 2026",
    citations: 4,
    abstract:
      "Introduces a PubMed-derived dataset enriched with LLM annotations for document type, domain, and educational quality, then scaled with a smaller classifier.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2506.20331" },
      { label: "dataset", href: "https://huggingface.co/datasets/almanach/Biomed-Enriched" },
      { label: "classifier", href: "https://huggingface.co/almanach/Biomed-Enriched-classifier" },
    ],
  },
  {
    year: "2026",
    title: "Gaperon: A Peppered English-French Generative Language Model Suite",
    venue: "ACL 2026",
    citations: 4,
    abstract:
      "Presents an English-French generative language model suite with several model sizes, training variants, and quality filtering resources.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2510.25771" },
      { label: "models", href: "https://huggingface.co/collections/almanach/gaperon-67ffbd9a32f94f9fa49e18fd" },
      { label: "code", href: "https://github.com/NathanGodey/gapetron" },
    ],
  },
  {
    year: "2024",
    title: "CamemBERT-bio: Leveraging Continual Pre-training for Cost-Effective Models on French Biomedical Data",
    venue: "LREC-COLING 2024",
    citations: 28,
    abstract:
      "Continues pretraining CamemBERT on French biomedical corpora and evaluates the resulting model on biomedical named entity recognition tasks.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2306.15550" },
      { label: "Anthology", href: "https://aclanthology.org/2024.lrec-main.241/" },
      { label: "model", href: "https://huggingface.co/almanach/camembert-bio-base" },
    ],
  },
  {
    year: "2024",
    title: "CamemBERT 2.0: A Smarter French Language Model Aged to Perfection",
    venue: "arXiv preprint",
    citations: 20,
    abstract:
      "Revisits French encoder pretraining with newer data and training choices, producing updated CamemBERT-style models and downstream variants.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2411.08868" },
      { label: "models", href: "https://huggingface.co/collections/almanach/moderncamembert-67f7e6d85ede5f7cfc1ce012" },
    ],
  },
  {
    year: "2023",
    title: "CamemBERT-bio: Un modèle de langue français savoureux et meilleur pour la santé",
    venue: "TALN 2023",
    citations: 20,
    abstract:
      "French presentation of CamemBERT-bio, a biomedical language model adapted from CamemBERT for French clinical and biomedical text.",
    links: [
      { label: "Anthology", href: "https://aclanthology.org/2023.jeptalnrecital-long.25/" },
      { label: "model", href: "https://huggingface.co/almanach/camembert-bio-base" },
    ],
  },
];
