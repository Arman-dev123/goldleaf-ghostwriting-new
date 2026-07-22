import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, AlertCircle, Sparkles, Send } from "lucide-react";

interface ContactFormProps {
  preselectedPackage?: string;
}

export function ContactForm({ preselectedPackage }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedPackage ? `Package: ${preselectedPackage}` : "Book Ghostwriting",
    budget: "$10,000 - $20,000",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.error("Form submit network error:", err);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-10 shadow-lg relative overflow-hidden">
      {/* Decorative colored corner bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 border border-blue-100">
              <CheckCircle className="h-10 w-10 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-sans font-bold text-slate-950 mb-3">
              Consultation Scheduled!
            </h3>
            <p className="text-slate-600 max-w-md mx-auto mb-8 leading-relaxed text-sm">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry has been secured in our private client registry. A senior publishing coordinator will reach out to you within 2 business hours.
            </p>
            <div className="flex gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              <Sparkles className="h-4 w-4" />
              <span>Priority Support Activated</span>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form-state"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-sans font-bold text-slate-900 mb-1">
                Begin Your Journey
              </h3>
              <p className="text-sm text-slate-500">
                Submit your project goals and lock in a free publishing diagnostic session.
              </p>
            </div>

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-rose-50 border border-rose-100 text-rose-700 p-4 rounded-xl flex items-start gap-3 text-sm"
              >
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. name@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="e.g. +1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                >
                  <option>Book Ghostwriting</option>
                  <option>eBook Ghostwriting</option>
                  <option>Memoir & Biography</option>
                  <option>Autobiography</option>
                  <option>Comprehensive Self-Publishing</option>
                  <option>Custom Cover Design & Art</option>
                  <option>Grammarian Copy Editing</option>
                  <option>Manuscript Diagnostic Review</option>
                  {preselectedPackage && <option value={`Package: ${preselectedPackage}`}>Package: {preselectedPackage}</option>}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Target Project Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-slate-50/50"
              >
                <option>$5,000 - $10,000</option>
                <option>$10,000 - $20,000</option>
                <option>$20,000 - $50,000</option>
                <option>$50,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Tell Us About Your Vision & Timeline
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Briefly describe what your book is about, your background, and any target deadlines..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full py-4 px-6 rounded-full font-bold text-white tracking-wide uppercase text-xs shadow-md transition-all duration-300 flex items-center justify-center gap-2 group ${
                status === "loading"
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-700 via-blue-800 to-blue-950 hover:shadow-xl hover:from-blue-800 hover:to-slate-900 active:scale-95 cursor-pointer"
              }`}
            >
              {status === "loading" ? (
                <>
                  <div className="animate-spin rounded-full h-4.5 w-4.5 border-2 border-white border-t-transparent" />
                  <span>Securing Registry Entry...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>Secure Free Consult & Diagnostic</span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;
