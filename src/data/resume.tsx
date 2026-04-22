import { Icons } from "@/components/icons";
import { BoxIcon, HomeIcon, MessageCircleMore } from "lucide-react";

export const DATA = {
  name: "Vipul Parmar",
  initials: "VP",
  url: "https://github.com/VipulParmar",
  github: "https://github.com/VipulParmar",
  location: "Mumbai, IN",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "AI and Data Science engineering student specializing in computer vision and deep learning.",
  summary:
    "AI and Data Science engineering student specializing in computer vision and deep learning. Building explainable medical AI pipelines using transformers and interpretable methods like Grad-CAM.",
  avatarUrl: "",
  skills: [
    "C",
    "Python",
    "Java",
    "R",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "OpenCV",
    "Git",
    "GitHub",
    "MySQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "vipulparmar3018@gmail.com",
    tel: "+917715937322",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VipulParmar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vipul-parmar",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vipulparmar3018@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],
  
  education: [
    {
      school: "Shah And Anchor Kutchi Engineering College, Mumbai",
      href: "https://www.sakec.ac.in/",
      degree: "B.Tech in AI & Data Science (CGPA: 8)",
      logoUrl: "",
      start: "2022",
      end: "2026",
    },
  ],

  certification: [
    {
      title: "Advanced Learning Algorithms",
      href: "/coursera_certificate.pdf",
      logoUrl: "",
      start: "",
      end: "",
      description: "DeepLearning.AI & Stanford (Coursera)",
    },
    {
      title: "Published Paper: Image Style Transfer Using CycleGAN",
      href: "/irjmets_certificate.pdf",
      logoUrl: "",
      start: "May 2025",
      end: "May 2025",
      description: "Published in IRJMETS Vol.07, Issue 05, May 2025",
    },
  ],

  projects: [
    {
      title: "Chest X-ray Anomaly Detection",
      href: "",
      dates: "Sep 2025–Present",
      active: true,
      description:
        "Explainable AI using Swin Transformer, PadChest dataset. Unsupervised anomaly detection, lung segmentation.",
      technologies: ["PyTorch", "TensorFlow", "Swin Transformer"],
      links: [],
      image: "/chest_xray_summary.png",
      video: "",
    },
    {
      title: "Image Style Transfer Using CycleGAN",
      href: "",
      dates: "Jan 2025–Jul 2025",
      active: true,
      description:
        "Artistic style transfer, unpaired image-to-image translation. Published in IRJMETS Vol.07, Issue 05, May 2025.",
      technologies: ["TensorFlow", "PyTorch", "NumPy", "Matplotlib", "CycleGAN"],
      links: [],
      image: "/image_style_transfer.png",
      video: "",
    },
    {
      title: "Pneumonia Detection – CNN and ResNet-18",
      href: "",
      dates: "May 2024–Dec 2024",
      active: true,
      description:
        "Custom CNN + ResNet-18, Grad-CAM interpretability for pneumonia detection.",
      technologies: ["PyTorch", "TensorFlow", "OpenCV", "CNN", "ResNet-18"],
      links: [],
      image: "/pneumonia_detection.png",
      video: "",
    },
    {
      title: "Deepfake Face Swap Using InsightFace",
      href: "",
      dates: "Feb 2024–Mar 2024",
      active: true,
      description:
        "Face detection and swapping using deep learning.",
      technologies: ["InsightFace", "OpenCV", "PyTorch"],
      links: [],
      image: "/face_swap.png",
      video: "",
    },
  ],
  upcomingProjects: [],
} as const;

