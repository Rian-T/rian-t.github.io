export const releaseStats = {
  downloads: 25531,
};

export const releaseGroups = [
  {
    title: "Biomedical encoders",
    kind: "models",
    downloads: 10225,
    description: "French biomedical encoder models",
    primary: [
      { id: "almanach/camembert-bio-base", downloads: 9564, tag: "French biomedical encoder" },
      { id: "almanach/ModernCamemBERT-bio-base", downloads: 134, tag: "French CLM-detour encoder" },
      { id: "almanach/ModernBERT-bio-base", downloads: 88, tag: "English CLM-detour encoder" },
      { id: "almanach/camembert-bio-gliner-v0.1", downloads: 52, tag: "open biomedical NER" },
    ],
    variantsLabel: "large variants",
    variants: [
      { id: "almanach/ModernCamemBERT-bio-large", downloads: 317, tag: "large" },
      { id: "almanach/ModernBERT-bio-large", downloads: 70, tag: "large" },
    ],
  },
  {
    title: "CamemBERT 2.0 / ModernCamemBERT",
    kind: "model collection",
    downloads: 12881,
    description: "French encoder models",
    collection: { label: "collection", href: "https://huggingface.co/collections/almanach/moderncamembert-67f7e6d85ede5f7cfc1ce012" },
    primary: [
      { id: "almanach/camembertav2-base", downloads: 7912, tag: "DeBERTaV3 encoder" },
      { id: "almanach/moderncamembert-base", downloads: 3276, tag: "ModernBERT encoder" },
      { id: "almanach/camembertv2-base", downloads: 1693, tag: "RoBERTa encoder" },
    ],
  },
  {
    title: "Biomed-Enriched",
    kind: "dataset + classifier",
    downloads: 1854,
    description:
      "Biomedical dataset enriched with LLM annotations, plus the classifier used to scale annotations to PMC-OA.",
    primary: [
      { id: "almanach/Biomed-Enriched", downloads: 1850, tag: "dataset", type: "dataset" },
      { id: "almanach/Biomed-Enriched-classifier", downloads: 4, tag: "annotation classifier" },
    ],
    collection: {
      label: "biomedical collection",
      href: "https://huggingface.co/collections/almanach/biomedical-datasets-and-models-67e167733f25e38ad992a31e",
    },
  },
  {
    title: "Gaperon",
    kind: "model collection",
    downloads: 571,
    description: "French-English generative model suite.",
    collection: { label: "collection", href: "https://huggingface.co/collections/almanach/gaperon-67ffbd9a32f94f9fa49e18fd" },
    primary: [
      { id: "almanach/Gaperon-1125-8B", downloads: 306, tag: "main 8B model" },
      { id: "almanach/Gaperon-1125-1B", downloads: 220, tag: "1B model" },
      { id: "almanach/Gaperon-1125-24B", downloads: 2, tag: "24B model" },
      { id: "almanach/gaperon-quality-classifier", downloads: 41, tag: "quality classifier" },
    ],
    variantsLabel: "SFT variants",
    variants: [
      { id: "almanach/Gaperon-1125-1B-SFT", downloads: 1, tag: "SFT" },
      { id: "almanach/Gaperon-1125-8B-SFT", downloads: 1, tag: "SFT" },
      { id: "almanach/Gaperon-1125-24B-SFT", downloads: 0, tag: "SFT" },
    ],
  },
];
