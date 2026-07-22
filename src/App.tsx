import React from "react";
import { PathProvider, usePathname } from "@/src/lib/next-compat";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ExitIntentCouponPopup from "@/src/components/ExitIntentCouponPopup";
import { motion, AnimatePresence } from "motion/react";

// Static imports of all App Router page components
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import ServicesPage from "@/app/writing-services/page";
import GhostwritingPage from "@/app/ghostwriting/page";
import BookWritingPage from "@/app/ghostwriting/book-writing/page";
import EBookWritingPage from "@/app/ghostwriting/ebook-writing/page";
import MemoirWritingPage from "@/app/ghostwriting/memoir-writing/page";
import AutobiographyPage from "@/app/ghostwriting/autobiography/page";
import PublicationPage from "@/app/publication/page";
import AmazonKdpPage from "@/app/publication/amazon-kdp/page";
import SelfPublishingPage from "@/app/publication/self-publishing/page";
import BookMarketingPage from "@/app/publication/book-marketing/page";
import CoverDesignPage from "@/app/cover-design/page";
import CustomCoverPage from "@/app/cover-design/custom-cover/page";
import IllustrationsPage from "@/app/cover-design/illustrations/page";
import EditingPage from "@/app/editing/page";
import ProofreadingPage from "@/app/editing/proofreading/page";
import CopyEditingPage from "@/app/editing/copy-editing/page";
import ManuscriptReviewPage from "@/app/editing/manuscript-review/page";
import PackagesPage from "@/app/packages/page";
import ContactPage from "@/app/contact/page";
import PrivacyPolicyPage from "@/app/privacy-policy/page";
import TermsOfServicePage from "@/app/terms-of-service/page";

// Mapping routes to components
const routeMap: Record<string, React.ComponentType> = {
  "/": HomePage,
  "/about": AboutPage,
  "/writing-services": ServicesPage,
  "/ghostwriting": GhostwritingPage,
  "/ghostwriting/book-writing": BookWritingPage,
  "/ghostwriting/ebook-writing": EBookWritingPage,
  "/ghostwriting/memoir-writing": MemoirWritingPage,
  "/ghostwriting/autobiography": AutobiographyPage,
  "/publication": PublicationPage,
  "/publication/amazon-kdp": AmazonKdpPage,
  "/publication/self-publishing": SelfPublishingPage,
  "/publication/book-marketing": BookMarketingPage,
  "/cover-design": CoverDesignPage,
  "/cover-design/custom-cover": CustomCoverPage,
  "/cover-design/illustrations": IllustrationsPage,
  "/editing": EditingPage,
  "/editing/proofreading": ProofreadingPage,
  "/editing/copy-editing": CopyEditingPage,
  "/editing/manuscript-review": ManuscriptReviewPage,
  "/packages": PackagesPage,
  "/contact": ContactPage,
  "/privacy-policy": PrivacyPolicyPage,
  "/terms-of-service": TermsOfServicePage,
};

function RouterRenderer() {
  const pathname = usePathname();
  
  // Parse route matches, default to Home if not found
  const Component = routeMap[pathname] || HomePage;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* Premium Navbar */}
      <Navbar />

      {/* Main Container with smooth Framer Motion page transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Exit intent coupon popup triggered automatically after 40 seconds */}
      <ExitIntentCouponPopup />
    </div>
  );
}

export default function App() {
  return (
    <PathProvider>
      <RouterRenderer />
    </PathProvider>
  );
}
