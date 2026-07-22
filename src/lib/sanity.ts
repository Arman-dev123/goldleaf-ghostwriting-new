/**
 * Sanity CMS Service & Content Fallbacks
 * 
 * This file manages the integration with Sanity CMS.
 * It contains high-quality, professional copywriting for GoldLeaf Ghostwriting
 * and serves as a local fallback so the app works out of the box with zero configuration.
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  bgImage: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  features: string[];
  metaTitle: string;
  metaDesc: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Testimonial {
  name: string;
  role: string;
  bookTitle: string;
  text: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Full premium dataset
export const CMS_CONTENT = {
  seo: {
    home: {
      title: "GoldLeaf Ghostwriting | Premium Ghostwriting & Book Publishing Agency",
      description: "GoldLeaf Ghostwriting is an elite ghostwriting agency for executives, founders, and creative authors. We handle research, writing, editing, and worldwide self-publishing.",
      keywords: ["ghostwriting agency", "hire a book writer", "memoir ghostwriter", "self-publishing services", "book marketing"],
      ogImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop"
    },
    about: {
      title: "About Us | GoldLeaf Ghostwriting",
      description: "Meet the professional storytellers, editors, and publishing experts behind GoldLeaf Ghostwriting. Our mission is to preserve your voice and build your legacy.",
      keywords: ["about GoldLeaf", "professional ghostwriters", "book editors", "publishing specialists"],
      ogImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
    },
    services: {
      title: "Writing, Editing & Publishing Services | GoldLeaf Ghostwriting",
      description: "Explore our comprehensive suite of premium book writing, self-publishing assistance, professional editing, and custom cover design services.",
      keywords: ["book editing", "cover design", "manuscript review", "KDP self publishing"],
      ogImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop"
    },
    packages: {
      title: "Pricing Packages | GoldLeaf Ghostwriting",
      description: "Transparent, premium pricing packages for complete manuscript creation, formatting, publishing, and global marketing strategies.",
      keywords: ["ghostwriting pricing", "how much to write a book", "publishing cost", "bestseller package"],
      ogImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop"
    },
    contact: {
      title: "Get a Free Consultation | Contact GoldLeaf Ghostwriting",
      description: "Ready to turn your story into a bestseller? Contact GoldLeaf Ghostwriting today for a free consultation. Let's discuss your outline, budget, and timeline.",
      keywords: ["hire a ghostwriter", "book consultation", "publish my manuscript", "author contact"],
      ogImage: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=1200&auto=format&fit=crop"
    }
  } as Record<string, SEOData>,

  hero: {
    badge: "PREMIUM LITERARY AGENCY",
    title: "Your Voice. Your Legacy. Perfectly Written.",
    subtitle: "Staring at a blank page can be exhausting. GoldLeaf Ghostwriting guides you through the entire process—research, writing, editing, and publishing—ensuring your masterpiece meets its target audience.",
    primaryCtaText: "Get Free Consultation",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Packages",
    secondaryCtaLink: "/packages",
    bgImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1920&auto=format&fit=crop"
  } as HeroData,

  services: [
    // Ghostwriting category
    {
      slug: "ghostwriting",
      title: "Ghostwriting",
      shortDesc: "Complete manuscript creation crafted in your voice by elite publishing experts.",
      longDesc: "Our ghostwriting service pairs you with seasoned, award-winning authors who specialize in capturing your unique voice, insights, and stories. We manage the heavy lifting of structured storytelling, research, and writing so you can focus on sharing your vision. Whether you are writing a business book, a biography, or a detailed eBook, we guide you from initial ideation to a ready-to-publish draft.",
      icon: "Feather",
      features: [
        "In-depth research and outline planning",
        "Weekly interviews to capture your natural speaking voice",
        "Complete draft creation with unlimited revisions",
        "Full copyright and intellectual property ownership"
      ],
      metaTitle: "Professional Ghostwriting Services | GoldLeaf",
      metaDesc: "Turn your ideas into a fully-realized manuscript with our premium, high-end book ghostwriting services."
    },
    {
      slug: "book-writing",
      title: "Book Writing",
      shortDesc: "Full-length hardcover and paperback manuscript development with rigorous quality control.",
      longDesc: "Bring your high-impact concepts to life with a professionally written full-length book. Ideal for executives, visionaries, and creative authors looking to publish on Amazon, in bookstores, or to establish thought leadership. We combine research, literary flair, and commercial appeal to construct a masterwork that demands attention.",
      icon: "BookOpen",
      features: [
        "Comprehensive structure and chapter-by-chapter mapping",
        "Expert writers matched by genre and professional experience",
        "Thorough historical and context research",
        "Publishing-ready layout and styling"
      ],
      metaTitle: "Professional Book Writing Services | GoldLeaf Ghostwriting",
      metaDesc: "Elite book writing services tailored to your personal experiences, corporate goals, or creative vision."
    },
    {
      slug: "ebook-writing",
      title: "eBook Writing",
      shortDesc: "Lead-generating, highly engaging digital books optimized for modern screens and readers.",
      longDesc: "Digital publishing requires dynamic pacing, sharp headings, and highly actionable chapters. Our eBook writing services are designed to produce beautiful digital products that establish authority, generate business leads, or entertain readers worldwide. We optimize the formatting specifically for Kindle, Apple Books, and PDF distribution.",
      icon: "Laptop",
      features: [
        "Clickable tables of contents and modern digital formatting",
        "Lead-generation and business-integration focus",
        "Optimized for high readability on tablets, phones, and Kindles",
        "Short, highly impactful, and shareable chapter structures"
      ],
      metaTitle: "Premium eBook Ghostwriting Services | GoldLeaf",
      metaDesc: "Create authoritative, beautifully formatted eBooks that convert readers into lifetime clients."
    },
    {
      slug: "memoir-writing",
      title: "Memoir Writing",
      shortDesc: "Preserving your personal life story, milestones, and family legacy for future generations.",
      longDesc: "Your life journey is unique, filled with lessons, triumphs, and trials. Our memoir ghostwriters specialize in sensitive, collaborative interviewing techniques to tease out detailed, vibrant memories. We weave your experiences into a compelling narrative arc that captures your heart, humor, and wisdom, leaving an unforgettable legacy for your family and the public.",
      icon: "Heart",
      features: [
        "Compassionate and expert structured interviewing",
        "Vivid historical scene-setting and character development",
        "Focus on emotional depth, personal truth, and family legacy",
        "Includes sections for personal photos and historical archives"
      ],
      metaTitle: "Legacy Memoir Ghostwriting Services | GoldLeaf",
      metaDesc: "Work with expert storytellers to capture your personal history and preserve your legacy forever."
    },
    {
      slug: "autobiography",
      title: "Autobiography Writing",
      shortDesc: "Chronological, authoritative accounts of your life, career, and philosophy.",
      longDesc: "An autobiography serves as an official historical record of your career, personal developments, and philosophies. We collaborate closely with you to document major decisions, industry shakeups, and private milestones. Our premium autobiographical service is designed for public figures, corporate founders, and high-profile leaders who require absolute historical accuracy and refined literary tone.",
      icon: "FileText",
      features: [
        "Rigorous timeline authentication and historical research",
        "Formal yet highly engaging narrative voice styling",
        "Documentation of professional milestones and core methodologies",
        "Confidentiality and non-disclosure guaranteed from day one"
      ],
      metaTitle: "Premium Autobiography Ghostwriting | GoldLeaf",
      metaDesc: "Co-author your official autobiography with professional journalists and elite publishing historians."
    },

    // Publication category
    {
      slug: "publication",
      title: "Publication Services",
      shortDesc: "Global self-publishing setup, ISBN licensing, and formatting for dynamic markets.",
      longDesc: "Writing the book is only half the battle. Our publishing specialists take the complexity out of self-publishing. We manage your platform registries, secure ISBN barcodes, configure tax information, and establish global distribution channels, ensuring you keep 100% of your royalties and creative control.",
      icon: "Globe",
      features: [
        "Worldwide distribution registry (Kindle, IngramSpark, Barnes & Noble)",
        "ISBN allocation and professional copyright filing",
        "Paperback, hardcover, and eBook print-ready formatting",
        "100% royalty ownership and dashboard setup"
      ],
      metaTitle: "Self-Publishing & Distribution Services | GoldLeaf",
      metaDesc: "Navigate global distribution easily. We list your book on Amazon, Barnes & Noble, and IngramSpark."
    },
    {
      slug: "amazon-kdp",
      title: "Amazon KDP Setup",
      shortDesc: "Optimized Amazon Kindle Direct Publishing setup with rich SEO and category targeting.",
      longDesc: "Amazon controls over 70% of the book market. Our Amazon KDP experts optimize your book listing from the ground up. We write keyword-rich sales copy, select low-competition bestseller categories, configure pricing tables, and establish your official Author Central profile to guarantee maximum discoverability.",
      icon: "Award",
      features: [
        "Advanced metadata keyword and category research",
        "A+ Content layout design for custom product pages",
        "Author Central registry and bio optimization",
        "Pricing, pre-order setup, and international royalty advice"
      ],
      metaTitle: "Amazon KDP Optimization Services | GoldLeaf",
      metaDesc: "Rank higher on Amazon with custom category targeting, expert SEO metadata, and A+ page setups."
    },
    {
      slug: "self-publishing",
      title: "Self-Publishing Mastery",
      shortDesc: "Comprehensive assistance maintaining full creative freedom and 100% of your earnings.",
      longDesc: "Self-publishing is the fastest growing sector of the literary market. We help you establish an independent imprint or self-publish under your own name. We cover everything from print-on-demand (POD) setups, worldwide distribution networks, global shipping, and initial metadata synchronization.",
      icon: "ShieldCheck",
      features: [
        "Setting up independent publishing imprints and LLC guidance",
        "Print-on-demand configuration with premium printers",
        "Global trade registration and retail channel coordination",
        "Detailed royalty tracking and ledger instruction"
      ],
      metaTitle: "Elite Self-Publishing Guidance | GoldLeaf",
      metaDesc: "Create your own publishing imprint, secure global printers, and retain complete control over your earnings."
    },
    {
      slug: "book-marketing",
      title: "Book Marketing & PR",
      shortDesc: "Strategic launch planning, social media campaigns, and bestseller optimization campaigns.",
      longDesc: "A great book is invisible without a cohesive marketing strategy. We construct a multi-channel launch campaign designed to drive reviews, build excitement, and hit bestseller statuses. From social media teasers and custom author websites to PR outreach and podcast bookings, we put your brand in front of high-intent readers.",
      icon: "Megaphone",
      features: [
        "Guaranteed Bestseller launch strategies",
        "High-conversion author website development and marketing",
        "Social media content kits, trailers, and press releases",
        "Review-generation campaigns with certified readers"
      ],
      metaTitle: "Professional Book Marketing & PR | GoldLeaf",
      metaDesc: "Transform your book into a viral success with calculated launching strategies, reviews, and PR."
    },

    // Cover Design category
    {
      slug: "cover-design",
      title: "Cover Design",
      shortDesc: "Breathtaking, custom-designed covers that capture attention instantly on physical and digital shelves.",
      longDesc: "They say don't judge a book by its cover, but everyone does. Our professional cover designers craft beautiful, bespoke jacket designs for paperback, hardcover, and digital screens. We study your genre standards, research current bestsellers, and build custom layouts with elegant typography to ensure your book jumps off the shelves.",
      icon: "Palette",
      features: [
        "Custom, premium artwork and typography layouts",
        "eBook, paperback, and hardcover dust-jacket spine setups",
        "3D mockups for marketing materials and advertisements",
        "High-resolution, CMYK print-ready files"
      ],
      metaTitle: "Custom Book Cover Design Services | GoldLeaf",
      metaDesc: "Command attention with bespoke covers crafted by expert graphic artists and typography specialists."
    },
    {
      slug: "custom-cover",
      title: "Custom Cover Art",
      shortDesc: "Genre-tailored, professional visual jacket compositions with advanced typography pairing.",
      longDesc: "Every genre has a visual vocabulary. Our master designers combine striking imagery, deep color theory, and bespoke typography to match the professional expectations of thriller, business, historical, or memoir audiences. We iterate with you until the cover feels absolutely perfect.",
      icon: "Image",
      features: [
        "Detailed competitor analysis and industry trend reviews",
        "Multiple design drafts for your direct feedback",
        "Expert type-pairing and layout formatting",
        "Dust-jacket flaps and layout spine calculations"
      ],
      metaTitle: "Custom Dust-Jacket & Cover Designs | GoldLeaf",
      metaDesc: "Get premium custom-made cover designs that reflect your style, fit industry standards, and drive sales."
    },
    {
      slug: "illustrations",
      title: "Book Illustrations",
      shortDesc: "High-contrast vector work, character designs, and visual graphics for children or business books.",
      longDesc: "Make your text interactive with custom illustration services. We support high-profile business guides with clean vector charts, line-art, memoirs with hand-drawn visual dividers, and full-color children's books. Our artists deliver high-contrast, beautiful art style consistency.",
      icon: "Sparkles",
      features: [
        "Custom character concept drafts and scene layouts",
        "High-resolution vector assets and illustrations",
        "Consistent color mapping and style consistency across chapters",
        "Complete digital distribution formatting"
      ],
      metaTitle: "Bespoke Book Illustrations & Visual Assets | GoldLeaf",
      metaDesc: "Pair your written words with custom-drawn diagrams, editorial sketches, or detailed color paintings."
    },

    // Editing category
    {
      slug: "editing",
      title: "Editing Services",
      shortDesc: "Rigorous grammar correction, structural alignment, and copy adjustments for a professional finish.",
      longDesc: "A rough draft needs expert refinement before it is ready for public eyes. Our editing services clean up sentence pacing, check narrative consistency, eliminate repetitions, and enforce standard CMOS grammar rules. We elevate your prose to publication-grade standards while keeping your distinct voice intact.",
      icon: "Edit3",
      features: [
        "Deep sentence structure and style enhancement",
        "Rigorous syntax, spelling, and punctuation checks",
        "Constructive developmental feedback reports",
        "Multi-round refinement cycles"
      ],
      metaTitle: "Professional Book Editing & Proofreading | GoldLeaf",
      metaDesc: "Refine your manuscript with elite book editors. We perfect flow, eliminate syntax bugs, and preserve voice."
    },
    {
      slug: "proofreading",
      title: "Proofreading",
      shortDesc: "The final line-by-line quality sweep to capture stray typos, layout spacing issues, and minor syntax slips.",
      longDesc: "Proofreading is the crucial final barrier before hitting print. Our proofreaders inspect your fully formatted manuscript pages for hidden spacing errors, bad hyphens, punctuation bugs, and tiny spelling typos that software checkers miss. We ensure your document is technically perfect.",
      icon: "CheckSquare",
      features: [
        "Exhaustive spelling, casing, and word choice checks",
        "Inspection of page layouts, running headers, and spacing bugs",
        "Grammarian review of complex clauses and structures",
        "Fast-turnaround high-precision corrections"
      ],
      metaTitle: "Flawless Book Proofreading Services | GoldLeaf",
      metaDesc: "Secure your book launch against spelling mistakes and layout errors with our final proofreading review."
    },
    {
      slug: "copy-editing",
      title: "Copy Editing",
      shortDesc: "Focusing on sentence structure flow, pacing, dynamic vocabulary, and readability improvement.",
      longDesc: "Copy editing bridges the gap between raw ideas and gorgeous literature. We analyze sentence-level transitions, remove passive-voice stagnation, upgrade simple vocabulary, and ensure consistency in names, timelines, and logic. We make sure every single paragraph grips the reader's attention.",
      icon: "Bookmark",
      features: [
        "Advanced sentence-level editing and line styling",
        "Passive voice reduction and action verb pairing",
        "Enhancing flow, narrative pacing, and transition coherence",
        "Preserving your authentic author signature style"
      ],
      metaTitle: "Line & Copy Editing for Manuscripts | GoldLeaf",
      metaDesc: "Upgrade your book's writing style, sentence structure, and vocabulary choice with copy-editing."
    },
    {
      slug: "manuscript-review",
      title: "Manuscript Review",
      shortDesc: "A complete professional diagnostic of your draft's commercial strength, pacing, and potential.",
      longDesc: "Not sure if your manuscript is ready? Our expert editors perform a comprehensive diagnostic audit of your entire draft. We evaluate plot arcs, character growth, factual credibility, pacing speeds, and commercial viability, giving you a detailed strategic roadmap for your next rewrite.",
      icon: "FileCheck",
      features: [
        "Detailed editorial diagnostic report and chapter grading",
        "Assessment of market viability, genre placement, and reader appeal",
        "Analysis of character profiles, dialogue depth, and plot holes",
        "One-on-one video call debrief with a Lead Editor"
      ],
      metaTitle: "Comprehensive Manuscript Diagnostics | GoldLeaf",
      metaDesc: "Receive expert feedback on your draft's viability, pacing, and development potential before publishing."
    }
  ] as ServiceDetail[],

  packages: [
    {
      name: "Standard Package",
      price: "$9,500",
      period: "Starts at",
      description: "Perfect for authors who have solid concepts and need professional manuscript creation, rigorous formatting, and absolute quality assurance.",
      features: [
        "Professional Review & Insights",
        "Outline Discussion & Finalization",
        "Complete Manuscript Writing/Editing",
        "Creative Author Introduction",
        "Professional Formatting & Typesetting",
        "Unlimited Images/Photos Support",
        "Full Content Ownership (100% IP)",
        "Unlimited Revisions",
        "Team of 3 Experts assigned",
        "2–3 Months Completion",
        "Personalized Online Portal",
        "24/7 Premium Support",
        "100% Money-Back Guarantee"
      ],
      isPopular: false,
      ctaText: "Begin Standard Journey"
    },
    {
      name: "Signature Package",
      price: "$14,500",
      period: "Starts at",
      description: "Our most popular comprehensive package. Covers everything from deep content development to world-class self-publishing on major networks.",
      features: [
        "Everything in Standard",
        "Conceptual Cover Design & Dust-Jacket layout",
        "Publishing on Major Platforms (Amazon, B&N, Ingram)",
        "eBook, Paperback, & Hardcover physical options",
        "Premium Publishing Benefits & Account configuration",
        "Team of 5 Experts (Writer, Editor, Designer, Specialist, Manager)",
        "Dedicated Launch Coordinator",
        "ISBN Assignment & Licensing"
      ],
      isPopular: true,
      ctaText: "Begin Signature Journey"
    },
    {
      name: "Elite Package",
      price: "$24,500",
      period: "Starts at",
      description: "The ultimate publish-to-rank program designed for corporate executives, high-profile leaders, and serious authors seeking bestseller status.",
      features: [
        "Everything in Signature",
        "Setting Up POD and Free Shipping Worldwide",
        "Strategic Marketing & PR Plan",
        "Interactive Author Website development",
        "Social Media Launch Kit & Video Trailer",
        "Video Teasers & Book Trailers creation",
        "Book Launch Planning & Strategy coaching",
        "Guaranteed Bestseller targeting",
        "Guaranteed ROI alignment structures",
        "Team of 7 Experts including Senior Editorial Board"
      ],
      isPopular: false,
      ctaText: "Secure Elite Launch"
    }
  ] as PricingPackage[],

  testimonials: [
    {
      name: "Arthur Pendelton",
      role: "Tech Founder & Venture Capitalist",
      bookTitle: "The Antigravity Scale",
      text: "GoldLeaf Ghostwriting took my chaotic journals and transformed them into a Wall Street Journal bestseller. Their team is professional, highly confidential, and captures voice with terrifying precision. I retain 100% of my rights and royalties.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Evelyn Sterling",
      role: "Legacy Philanthropist & Memoirist",
      bookTitle: "Gardens of Time",
      text: "As someone telling a highly sensitive family story, I was deeply worried about maintaining emotional authenticity. The memoir ghostwriter was compassionate, patient, and crafted a beautiful manuscript that moved my family to tears. A pure gift.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Dr. Marcus Vance",
      role: "Clinical Neuroscientist & Author",
      bookTitle: "Unlocking Neural Pathways",
      text: "Writing scientific books for standard consumers is an art form. The copy-editing and co-writing team at GoldLeaf helped make highly complex medical studies accessible, engaging, and commercially powerful. Absolutely worth the investment.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
  ] as Testimonial[],

  faqs: [
    {
      question: "Who owns the rights and royalties to my book?",
      answer: "You do—100%. GoldLeaf Ghostwriting operates strictly as a service for hire. Once we write the manuscript, all intellectual property, copyright files, royalties, and final sales are 100% yours. We receive zero backend commissions on book sales."
    },
    {
      question: "How do you ensure my voice is accurately captured?",
      answer: "We pair you with a writer whose style and experience match your genre. Through structured weekly recorded interview sessions, we capture your unique syntax, personal vocabulary, humor, and depth. We submit chapters iteratively for your direct feedback."
    },
    {
      question: "Is my book kept completely confidential?",
      answer: "Yes, confidentiality is our highest priority. We sign a strict Non-Disclosure Agreement (NDA) with every client before any discussion begins. Your name is the only name on the book cover. Our writers remain completely invisible."
    },
    {
      question: "How long does the entire ghostwriting process take?",
      answer: "A standard high-quality manuscript takes between 2 to 4 months to research, outline, write, and refine. Expedited schedules are available for our Elite clients depending on complexity."
    },
    {
      question: "Can you help me get my book listed in retail stores and on Amazon?",
      answer: "Absolutely. Our Signature and Elite packages handle global self-publishing registry setup on Amazon KDP, IngramSpark, and Barnes & Noble. This distributes your physical books and eBooks to thousands of libraries and bookstores worldwide."
    }
  ] as FAQItem[],

  contactInfo: {
    email: "consult@goldleafghostwriting.com",
    phone: "+1 (800) 581-2294",
    address: "777 Luxury Row, Suite 900, New York, NY 10019",
    businessHours: "Monday - Friday, 9:00 AM - 6:00 PM EST"
  },

  footer: {
    tagline: "Preserving human history, corporate wisdom, and creative narratives through elite literary execution.",
    copyright: "© 2026 GoldLeaf Ghostwriting. All rights reserved."
  }
};

/**
 * Custom hook or function to fetch content.
 * Can be upgraded to call real Sanity client once configured in production.
 */
export async function getCmsContent() {
  // If SANITY_PROJECT_ID env variable exists, we could run a real query.
  // For now, return our premium, hand-crafted local data for immediate reliability.
  return CMS_CONTENT;
}
