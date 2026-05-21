export const articles = [
  {
    year: "2026",
    title: "OntoBook: Ontology-Grounded Synthetic Textbooks for Medical Encoder Pretraining",
    venue: "KG-LLM @ LREC 2026",
    citations: 0,
    abstract:
      "We present OntoBook, a method that converts medical ontology structure into pretraining signal for encoder language models. Our approach has three stages: random walks through ontology graphs capture hierarchical and causal relations between medical codes, a large language model reformulates these walks into fluent textbook-style prose, and the resulting text is used to train ModernCamemBERT, a 149M-parameter French encoder, with two objectives on the same data: masked language modeling and relation prediction between code pairs. On three French medical coding benchmarks (FRACCO, Cantemist-FR, Distemist-FR), OntoBook achieves significant improvements over MLM-only pretraining, with +2.5 micro-F1 on FRACCO and +8.0 micro-F1 on Distemist. We find that alignment between objectives is necessary: misaligned training, where each task uses different data, causes a 30-point degradation. We release 1.3 million LLM-reformulated medical textbooks across three French ontologies (CIM-10, CCAM, ATC) and pretrained model checkpoints.",
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
      "When adapting an encoder to a new domain, the standard approach is to continue training with Masked Language Modeling (MLM). We show that temporarily switching to Causal Language Modeling (CLM) followed by a short MLM decay improves downstream performance. On biomedical texts with ModernBERT, this CLM detour outperforms MLM baselines trained on identical data and compute across 8 French and 11 English biomedical tasks, by +1.2-2.8pp and +0.3-0.8pp respectively, depending on model size. We investigate the reasons for these gains. We find that CLM's dense supervision impacts low transformer layers (0-7) far more than MLM does. Freezing low layers during CLM eliminates the downstream benefit; freezing mid layers preserves it. The representational changes persist through the MLM decay phase, even when it matches the CLM phase in length, and they scale with model capacity. We release ModernCamemBERT-bio and ModernBERT-bio as state-of-the-art biomedical encoders in Base and Large sizes.",
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
      "We introduce Biomed-Enriched, a biomedical text dataset constructed from PubMed via a two-stage annotation process. In the first stage, a large language model annotates 400K paragraphs from PubMed scientific articles, assigning scores for their type (review, study, clinical case, other), domain (clinical, biomedical, other), and educational quality. The educational quality score (rated 1 to 5) estimates how useful a paragraph is for college-level learning. These annotations are then used to fine-tune a small language model, which propagates the labels across the full PMC-OA corpus. The resulting metadata allows us to extract refined subsets, including 2M clinical case paragraphs with over 450K high-quality ones from articles with commercial-use licenses, and to construct several variants via quality filtering and domain upsampling. Clinical text is typically difficult to access due to privacy constraints, as hospital records cannot be publicly shared. Hence, our dataset provides an alternative large-scale, openly available collection of clinical cases from PubMed, making it a valuable resource for biomedical and clinical NLP. Preliminary continual-pretraining experiments with OLMo2 suggest these curated subsets enable targeted improvements, with clinical upsampling boosting performance by ~5% on MMLU ProfMed and educational quality filtering improving MedQA and MedMCQA by ~1%. Combinations of these techniques led to faster convergence, reaching same performance with a third of training tokens, indicating potential for more efficient and effective biomedical pretraining strategies.",
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
      "We release Gaperon, a fully open suite of French-English-coding language models designed to advance transparency and reproducibility in large-scale model training. The Gaperon family includes 1.5B, 8B, and 24B parameter models trained on 2-4 trillion tokens, released with all elements of the training pipeline: French and English datasets filtered with a neural quality classifier, an efficient data curation and training framework, and hundreds of intermediate checkpoints. Through this work, we study how data filtering and contamination interact to shape both benchmark and generative performance. We find that filtering for linguistic quality enhances text fluency and coherence but yields subpar benchmark results, and that late deliberate contamination -- continuing training on data mixes that include test sets -- recovers competitive scores while only reasonably harming generation quality. We discuss how usual neural filtering can unintentionally amplify benchmark leakage. To support further research, we also introduce harmless data poisoning during pretraining, providing a realistic testbed for safety studies. By openly releasing all models, datasets, code, and checkpoints, Gaperon establishes a reproducible foundation for exploring the trade-offs between data curation, evaluation, safety, and openness in multilingual language model development.",
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
      "Clinical data in hospitals are increasingly accessible for research through clinical data warehouses. However these documents are unstructured and it is therefore necessary to extract information from medical reports to conduct clinical studies. Transfer learning with BERT-like models such as CamemBERT has allowed major advances for French, especially for named entity recognition. However, these models are trained for plain language and are less efficient on biomedical data. Addressing this gap, we introduce CamemBERT-bio, a dedicated French biomedical model derived from a new public French biomedical dataset. Through continual pre-training of the original CamemBERT, CamemBERT-bio achieves an improvement of 2.54 points of F1-score on average across various biomedical named entity recognition tasks, reinforcing the potential of continual pre-training as an equally proficient yet less computationally intensive alternative to training from scratch. Additionally, we highlight the importance of using a standard evaluation protocol that provides a clear view of the current state-of-the-art for French biomedical models.",
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
      "French language models, such as CamemBERT, have been widely adopted across industries for natural language processing (NLP) tasks, with models like CamemBERT seeing over 4 million downloads per month. However, these models face challenges due to temporal concept drift, where outdated training data leads to a decline in performance, especially when encountering new topics and terminology. This issue emphasizes the need for updated models that reflect current linguistic trends. In this paper, we introduce two new versions of the CamemBERT base model-CamemBERTav2 and CamemBERTv2-designed to address these challenges. CamemBERTav2 is based on the DeBERTaV3 architecture and makes use of the Replaced Token Detection (RTD) objective for better contextual understanding, while CamemBERTv2 is built on RoBERTa, which uses the Masked Language Modeling (MLM) objective. Both models are trained on a significantly larger and more recent dataset with longer context length and an updated tokenizer that enhances tokenization performance for French. We evaluate the performance of these models on both general-domain NLP tasks and domain-specific applications, such as medical field tasks, demonstrating their versatility and effectiveness across a range of use cases. Our results show that these updated models vastly outperform their predecessors, making them valuable tools for modern NLP systems. All our new models, as well as intermediate checkpoints, are made openly available on Huggingface.",
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
