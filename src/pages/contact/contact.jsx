import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_3lp4x9m",
        "template_acgucv2",
        form.current,
        "8jAG2Wcu1hshYLTJ_"
      ).then( () => {
          setSent(true)
          setLoading(false)
          form.current.reset()
        }
      )
  }

  return (
    <section
      className="min-h-screen bg-black text-white py-32 px-6 md:px-20 font-mono flex flex-col justify-center items-center w-full">
      <h2 className="text-5xl font-extralight tracking-widest mb-12 text-pink-400 text-center">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-2xl bg-zinc-900 p-8 rounded-2xl shadow-lg space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-pink-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="bg-zinc-800 p-3 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-pink-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="bg-zinc-800 p-3 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-pink-300 mb-1">
            Message
          </label>
          <textarea
            name="message"
            className="bg-zinc-800 p-3 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none" />
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2">
          {loading ? "Sending..." : "Send"}
          <FaPaperPlane />
        </button>

        {sent && (
          <p className="text-green-400 mt-4 text-sm text-center">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
