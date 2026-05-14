import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../../styles/sections/contact.scss";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState : {errors, isSubmitting}
  } = useForm(); 

  const sendEmail = async (data) => {
    
    setStatus("Sending...");
    
    try {
     await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: data.user_name,
          email: data.user_email,
          message: data.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      
      setStatus("Message sent");
      reset();
    } catch (error) {
      console.log(error)
      setStatus("Failed to send");
    }

  };

  return (
    <div className="container contact">

      {/* CTA */}
      <motion.div
        className="contact-intro"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2>
          Let’s build something <br />
          impactful together.
        </h2>

        <p>
          I’m open to freelance, collaborations, and interesting projects.
        </p>
        <p className="availability">
            Available for freelance • Remote-friendly
        </p>
      </motion.div>

      {/* CONTACT OPTIONS */}
      <motion.div
        className="contact-options"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <a href="mailto:engineerdavid004@gmail.com">Email Me</a>
        <a href="https://github.com/ifeanyiD">GitHub</a>
        <a href="https://linkedin.com/in/ifeanyi-david-273b9a21a">LinkedIn</a>
      </motion.div>

      {/* SIMPLE FORM */}
      <motion.form
        className="contact-form"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        onSubmit={handleSubmit(sendEmail)}
      >
        <input 
            {...register("user_name", {
              required: "Name is required"
            })}
            type="text" 
            placeholder="Your Name"  
            name="user_name"
        />
        {errors.user_name && <p>{errors.user_name.message}</p>}
        <input 
            {...register("user_email", {
              required : "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email"
              }
            })}
            type="email" 
            placeholder="Your Email" 
            name="user_email" 
        />
        {errors.user_email && <p>{errors.user_email.message}</p>}
        <textarea 
            {...register("message", {required: "Message is required"})}
            placeholder="Your Message" 
            name="message"
        />
        {errors.message && <p>{errors.message.message}</p>}
        <button 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

    </div>
  );
}