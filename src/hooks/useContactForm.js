import emailjs from "@emailjs/browser";
import { useState } from "react";

import { personal } from "../constants/content";

const ALERT_DURATION_MS = 3000;

/**
 * EmailJS adapter: the only place that knows which service sends the message,
 * which env vars it needs, and who it's addressed to.
 */
async function sendContactMessage({ name, email, message }) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name,
      to_name: "Zane Wang",
      email,
      to_email: personal.email,
      message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}

/**
 * Contact form: fields + submission status machine
 * ('idle' | 'sending' | 'success' | 'error'). Both success and error alerts
 * auto-clear back to 'idle' after ALERT_DURATION_MS; only success clears the
 * form fields (a failed send keeps the user's draft so they can retry).
 *
 * Knows nothing about the Fox animation or Canvas — Contact.jsx derives
 * presentation from `status`, keeping this hook testable on its own.
 */
export default function useContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setStatus("sending");

    sendContactMessage(form).then(
      () => {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setForm({ name: "", email: "", message: "" });
        }, ALERT_DURATION_MS);
      },
      (error) => {
        console.error(error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), ALERT_DURATION_MS);
      }
    );
  };

  return { form, handleChange, status, submit };
}
