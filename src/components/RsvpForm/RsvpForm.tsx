import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";
import styles from "./RsvpForm.module.css";

interface FormData {
  name: string;
  email: string;
  attending: string;
  guests: number;
  dietary: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  attending: "",
  guests: 1,
  dietary: "none",
  message: "",
};

export default function RsvpForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.section}>
      <ScrollReveal>
        <SectionHeading
          title="RSVP"
          subtitle="Kindly let us know if you'll be joining us"
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
              <label htmlFor="rsvp-name">Full Name</label>
              <input
                id="rsvp-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="rsvp-email">Email</label>
              <input
                id="rsvp-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className={styles.field}>
              <label>Will you attend?</label>
              <div className={styles.radioGroup}>
                <label className={styles.radio}>
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={form.attending === "yes"}
                    onChange={handleChange}
                    required
                  />
                  <span>Joyfully Accept</span>
                </label>
                <label className={styles.radio}>
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={form.attending === "no"}
                    onChange={handleChange}
                  />
                  <span>Regretfully Decline</span>
                </label>
              </div>
            </div>

            {form.attending === "yes" && (
              <div className={styles.field}>
                <label htmlFor="rsvp-guests">Number of Guests</label>
                <input
                  id="rsvp-guests"
                  type="number"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  min={1}
                  max={5}
                />
              </div>
            )}

            {form.attending === "yes" && (
              <div className={styles.field}>
                <label htmlFor="rsvp-dietary">Dietary Restrictions</label>
                <select
                  id="rsvp-dietary"
                  name="dietary"
                  value={form.dietary}
                  onChange={handleChange}
                >
                  <option value="none">None</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="gluten-free">Gluten-Free</option>
                  <option value="other">Other</option>
                </select>
              </div>
            )}

            <div className={styles.field}>
              <label htmlFor="rsvp-message">Message to the Couple</label>
              <textarea
                id="rsvp-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Share your wishes..."
                rows={4}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send RSVP
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className={styles.success}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.heart}>&#10084;</div>
            <h3>Thank You!</h3>
            <p>
              We've received your RSVP. We can't wait to celebrate with you!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
