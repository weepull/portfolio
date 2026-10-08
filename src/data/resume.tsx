import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

// Canonical site origin. On Vercel this resolves automatically from the
// production domain; set NEXT_PUBLIC_SITE_URL to override.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const GITHUB_URL = "https://github.com/weepull";
const RESEARCH_GAP_HUNTER_URL = "https://github.com/weepull/research-gap-hunter";
const EMAIL = "vipulparmar3018@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/vipul-parmar-886b48256";

export const DATA = {
  name: "Vipul Parmar",
  initials: "VP",
  url: SITE_URL,
  github: GITHUB_URL,
  location: "Mumbai, IN",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "AI engineer. I build LLM retrieval pipelines and explainable computer-vision systems for medical imaging.",
  summary:
    `B.Tech in AI & Data Science (2026). I currently work as a Prompt Engineer at Faible Media, designing and stress-testing prompts for two production generative pipelines.\n\nMy own work sits in two places. **Retrieval and LLM systems** — most recently [Research Gap Hunter](${RESEARCH_GAP_HUNTER_URL}), a FastAPI/Neo4j/Qdrant platform that mines stated limitations from a 127-paper corpus and ranks underexplored research gaps. **Explainable medical imaging** — unsupervised anomaly detection on chest X-rays with Swin Transformer, and CNN/ResNet-18 classifiers with Grad-CAM.\n\nOne published paper, and a second accepted at ICNDIA 2026 (IEEE).`,
  skills: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "OpenCV",
    "RAG pipelines",
    "Prompt engineering",
    "Ollama",
    "Embedding retrieval",
    "FastAPI",
    "Next.js",
    "Neo4j",
    "Qdrant",
    "MySQL",
    "Docker",
    "Git",
    "Java",
  ],
  hero: {
    greeting: "Hi, I'm Vipul",
    links: [
      { label: "GitHub", href: GITHUB_URL, icon: Icons.github, primary: true },
      { label: "Projects", href: "#projects", icon: null, primary: false },
    ],
  },
  sections: {
    projects: {
      label: "Projects",
      intro:
        "Retrieval and LLM systems, and explainable models for medical imaging. Each one links to its source.",
      seeAll: "See all on",
      stackLabel: "Stack",
    },
    about: { label: "About" },
    publications: { label: "Publications", certificationLabel: "Certification" },
    work: { label: "Experience" },
    skills: { label: "Skills" },
    education: { label: "Education" },
    contact: {
      label: "Contact",
      heading: "Get in touch",
      body: `I'm open to Applied AI and LLM engineering roles. The fastest way to reach me is [email](mailto:${EMAIL}) or [LinkedIn](${LINKEDIN_URL}).`,
    },
  },
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: EMAIL,
    tel: "+917715937322",
    social: {
      GitHub: {
        name: "GitHub",
        url: GITHUB_URL,
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: LINKEDIN_URL,
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: `mailto:${EMAIL}`,
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Faible Media (Graphics India)",
      href: "",
      location: "Mumbai, MH",
      title: "Prompt Engineer",
      start: "May 2026",
      end: "Present",
      description:
        "Design and systematically test prompts for AI-driven content generation across two production model pipelines — Seedance 2.0 (animation) and Nano Banana Pro (shot composition and visual generation). Analyze failure modes and output variance to diagnose root causes and refine prompting, improving first-pass reliability in a live pipeline. Tune motion, style, and temporal coherence across shot sequences with creative and production teams.",
    },
  ],

  education: [
    {
      school: "Shah And Anchor Kutchi Engineering College, Mumbai",
      href: "https://www.sakec.ac.in/",
      degree: "B.Tech in Artificial Intelligence & Data Science (CGPA: 8.0)",
      start: "2022",
      end: "2026",
      description:
        "Relevant coursework: Machine Learning, Deep Learning, Data Structures and Algorithms, DBMS, Operating Systems, Computer Networks, OOP.",
    },
  ],

  certification: [
    {
      title:
        "Chest X-Ray Report Summarization using Vision-Text Transformer",
      href: "",
      start: "2026",
      end: "",
      subtitle: "Accepted — ICNDIA 2026 (IEEE)",
      kind: "publication",
    },
    {
      title: "Image Style Transfer Using CycleGAN",
      href: "/irjmets_certificate.pdf",
      start: "May 2025",
      end: "",
      subtitle: "Published — IRJMETS, Vol. 07, Issue 05",
      kind: "publication",
    },
    {
      title: "Advanced Learning Algorithms",
      href: "/coursera_certificate.pdf",
      start: "2024",
      end: "",
      subtitle: "DeepLearning.AI & Stanford University (Coursera)",
      kind: "certification",
    },
  ],

  projects: [
    {
      title: "Research Gap Hunter",
      href: RESEARCH_GAP_HUNTER_URL,
      dates: "Aug 2026 – Present",
      active: true,
      description:
        "Mines stated limitations from a 127-paper corpus with an LLM, links them in Neo4j and Qdrant, and ranks underexplored research gaps by frequency, recency, and solution deficit.",
      technologies: [
        "FastAPI",
        "Neo4j",
        "Qdrant",
        "SPECTER2",
        "Ollama",
        "Next.js",
        "SQLite",
      ],
      links: [
        {
          type: "Source",
          href: RESEARCH_GAP_HUNTER_URL,
          icon: null,
        },
      ],
      image: "",
    },
    {
      title: "Chest X-ray Anomaly Detection & Summary Generation",
      // TODO(vipul): add two sentences on the second half — the multimodal
      // report-generation model (ViT encoder + transformer language decoder)
      // behind the ICNDIA 2026 paper. Kept out of the rendered string so no
      // placeholder ships.
      href: "https://github.com/weepull/Chest-Xray_Vipulcode",
      dates: "Sep 2025 – Present",
      active: true,
      description:
        "Explainable chest X-ray system on PadChest, built as an unsupervised Swin Transformer anomaly pipeline with reconstruction and feature-distance scoring, lung segmentation, and bone suppression — requiring no labeled data.",
      technologies: ["PyTorch", "Swin Transformer", "PadChest", "OpenCV"],
      links: [
        {
          type: "Source",
          href: "https://github.com/weepull/Chest-Xray_Vipulcode",
          icon: null,
        },
      ],
      image: "/chest_xray_summary.webp",
    },
    {
      title: "Pneumonia Detection — CNN vs ResNet-18",
      href: "https://github.com/weepull/Pneumonia-Detection-CNN-ResNet",
      dates: "May 2024 – Dec 2024",
      active: false,
      description:
        "Compared a baseline CNN against a transfer-learning ResNet-18 on ~5,800 Kaggle chest X-rays, with class weighting for imbalance. Accuracy rose from ~74% to 87% and Normal recall from 0.32 to 0.82 (Pneumonia recall 0.90), with Grad-CAM heatmaps for interpretability.",
      technologies: ["PyTorch", "ResNet-18", "Grad-CAM", "OpenCV"],
      links: [
        {
          type: "Source",
          href: "https://github.com/weepull/Pneumonia-Detection-CNN-ResNet",
          icon: null,
        },
      ],
      image: "/pneumonia_detection.webp",
    },
    {
      title: "Image Style Transfer Using CycleGAN",
      href: "https://github.com/weepull/Image-Style-Transfer-Using-CycleGAN",
      dates: "Jan 2025 – Jul 2025",
      active: false,
      description:
        "Unpaired image-to-image artistic style transfer with CycleGAN on a custom dataset, with saved checkpoints and tuning for style consistency against content preservation. Published in IRJMETS (May 2025).",
      technologies: ["TensorFlow", "PyTorch", "CycleGAN", "NumPy"],
      links: [
        {
          type: "Source",
          href: "https://github.com/weepull/Image-Style-Transfer-Using-CycleGAN",
          icon: null,
        },
        {
          type: "Paper",
          href: "https://doi.org/10.56726/IRJMETS75399",
          icon: null,
        },
      ],
      image: "/image_style_transfer.webp",
    },
  ],
} as const;
