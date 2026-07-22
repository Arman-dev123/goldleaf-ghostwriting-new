import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Gift, Sparkles, CheckCircle, Mail, Phone, User, Send } from "lucide-react";

export function ExitIntentCouponPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Check if the coupon has already been displayed during this session
    const hasSeenCoupon = sessionStorage.getItem("goldleaf_coupon_seen");
    if (hasSeenCoupon) return;

    // 40 seconds timer as specified
    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem("goldleaf_coupon_seen", "true");
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        // Automatically hide success notification after 5 seconds
        setTimeout(() => setIsVisible(false), 5000);
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Submission failed. Please check details.");
      }
    } catch (err: any) {
      console.error("Coupon submit error:", err);
      setStatus("error");
      setErrorMsg("Failed to connect. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          {/* Overlay dismissal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 cursor-pointer"
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="bg-white/85 backdrop-blur-xl rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative border border-white/40 z-10 shadow-blue-900/10"
          >
            {/* Top decorative gradient and badge */}
            <div className="bg-gradient-to-r from-[#1e40af] via-blue-800 to-[#0a192f] p-6 text-white text-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 border border-white/20">
                <Gift className="h-6 w-6 text-blue-200" />
              </div>

              <h4 className="text-xl font-sans font-bold tracking-tight">
                Don't Leave Yet, Wait!
              </h4>
              <p className="text-sm text-blue-100 mt-1 font-medium">
                Save up to <span className="font-extrabold text-blue-300">40%</span> on your ghostwriting project
              </p>
            </div>

            {/* Inner Content */}
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="mx-auto w-16 h-16 bg-blue-50 text-[#1e40af] rounded-full flex items-center justify-center mb-4 border border-blue-100">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h5 className="text-lg font-bold text-slate-900 mb-2">
                      Your Coupon Code is Locked In!
                    </h5>
                    <p className="text-sm text-slate-600 max-w-xs mx-auto">
                      An introductory email with your 40% discount ledger was sent to <strong className="text-slate-800">{formData.email}</strong>. Use it anytime!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed text-center mb-4">
                      Enter your details below to have our exclusive, anytime coupon code locked and delivered straight to your inbox.
                    </p>

                    {status === "error" && (
                      <div className="bg-rose-50 border border-rose-100 text-rose-700 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
                        <X className="h-4 w-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Full Name"
                        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all duration-200 bg-slate-50/50"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email Address"
                        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all duration-200 bg-slate-50/50"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Your Phone Number"
                        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all duration-200 bg-slate-50/50"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={`w-full py-3 px-6 rounded-xl font-bold text-white tracking-wide uppercase text-xs shadow-md transition-all duration-300 flex items-center justify-center gap-2 group ${
                        status === "loading"
                          ? "bg-slate-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#1e40af] to-[#0a192f] hover:shadow-lg hover:from-[#1e40af] hover:to-[#050c18] active:scale-95 cursor-pointer"
                      }`}
                    >
                      {status === "loading" ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                          <span>Saving Your Offer...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                          <span>Save & Mail My Coupon</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              <div className="mt-4 flex items-center justify-center gap-1 text-[10px] font-semibold text-blue-600 uppercase tracking-widest">
                <Sparkles className="h-3 w-3" />
                <span>100% Secure & Confidential</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ExitIntentCouponPopup;
