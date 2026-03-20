import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";
import styles from "./RsvpForm.module.css";

interface FormData {
  name: string;
  attending: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  attending: "",
  message: "",
};

export default function RsvpForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("attending", form.attending);
      formData.append("message", form.message);
      await fetch(
        "https://script.google.com/macros/s/AKfycbyhR6kLyCQ2HfpGT5mqi3PLE8e-6m8yyfofD1JYLdpUMejsP-n4GpY6X6fi0D9c4grkrg/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.section}>
      <ScrollReveal>
        <SectionHeading
          title="RSVP"
          subtitle="Kindly respond by the first of April"
        />
      </ScrollReveal>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className={styles.field}>
              <label htmlFor="rsvp-name">Your Name</label>
              <input
                id="rsvp-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
            </div>

            <div className={styles.field}>
              <label>Will You Attend?</label>
              <div className={styles.radioGroup}>
                <label className={`${styles.radioOption} ${form.attending === "yes" ? styles.radioSelected : ""}`}>
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={form.attending === "yes"}
                    onChange={handleChange}
                    required
                  />
                  <span className={styles.radioCircle} />
                  <span>Joyfully Accept</span>
                </label>
                <label className={`${styles.radioOption} ${form.attending === "no" ? styles.radioSelected : ""}`}>
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={form.attending === "no"}
                    onChange={handleChange}
                  />
                  <span className={styles.radioCircle} />
                  <span>Regretfully Decline</span>
                </label>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="rsvp-message">Message to the Couple</label>
              <textarea
                id="rsvp-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Share your warmest wishes..."
                rows={4}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={submitting}>
              <span>{submitting ? "Sending..." : "Send RSVP"}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className={styles.success}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.successIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3>Thank You!</h3>
            <p>
              Your response has been received. We look forward to celebrating
              this special day with you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
