import React from "react";
import { motion } from "framer-motion";
import BadgerLogo from "./assets/Badger.png";

export default function App() {
  const skills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Deep Learning",
    "Machine Learning",
    "Power BI",
    "MySQL",
    "AWS",
    "Firebase",
    "Tailwind CSS",
  ];

  const projects = [
    { title: "Heart Disease Prediction Model", desc: "Machine learning model predicting heart disease risk", tag: "ML", url: "https://github.com/ud123df/Heart-Disease-Model" },
    { title: "Spam Detection System", desc: "Email/text spam classifier using NLP and ML", tag: "NLP", url: "https://github.com/ud123df/Spam-detection" },
    { title: "Anomaly Detection Engine", desc: "Detects unusual network patterns using ML & statistical features", tag: "Anomaly", url: "https://github.com/ud123df/Anomaly-Detection" },
  ];

  return (
    <div className="min-h-screen bg-[#05060a] text-slate-200 antialiased">
      {/* Background animated gradient and subtle stars */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#071421] via-[#05071a] to-[#000406] opacity-95" />

        {/* animated blobby gradient */}
        <motion.div
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-32 w-[600px] h-[600px] bg-gradient-to-r from-[#001f3f] to-[#00102b] rounded-full blur-3xl opacity-60 mix-blend-screen"
        />

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 bottom-20 w-[420px] h-[420px] bg-gradient-to-tr from-[#06223b] to-[#001226] rounded-full blur-2xl opacity-60 mix-blend-screen"
        />

        {/* subtle floating particles */}
        <div className="pointer-events-none">
          {Array.from({ length: 28 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: [0.6, 0.2, 0.6] }}
              transition={{ delay: i * 0.3, duration: 6 + (i % 5), repeat: Infinity }}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: `${6 + (i % 6)}px`,
                height: `${6 + (i % 6)}px`,
                left: `${(i * 11) % 100}%`,
                top: `${(i * 17) % 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4 animate-bounce-slow">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-xl font-bold text-white shadow-lg">
            U
          </div>
          {/* Honey Badger Logo */}
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-slate-700 overflow-hidden backdrop-blur-md">
            <img src={BadgerLogo} alt="Honey Badger Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Udit Sharma</h1>
            <p className="text-sm text-slate-400">Data Scientist • Full-Stack Developer • ML Engineer</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <div className="md:hidden text-slate-300">☰</div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-12 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in-slow">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              I craft beautiful, fast, and reliable web apps
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-4 text-slate-300 max-w-xl"
            >
              I'm <span className="font-semibold text-white">Udit Sharma</span> — a data scientist and full-stack developer focused on
              turning data into actionable insights and building production-ready web applications.
            </motion.p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] text-black font-medium shadow-md"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-slate-700 text-slate-200"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3" id="skills">
              {skills.slice(0, 6).map((s) => (
                <span key={s} className="text-sm bg-white/5 px-3 py-1 rounded-full text-slate-200">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Animated character / mock device */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-b from-[#071428]/60 to-[#021025]/50 border border-slate-800 shadow-2xl"
            >
              <div className="h-44 rounded-lg bg-gradient-to-tr from-[#001427] to-[#00102a] flex items-center justify-center border border-slate-700">
                {/* Placeholder illustration: replace with character SVG if desired */}
                <svg width="180" height="140" viewBox="0 0 180 140" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <rect x="10" y="10" rx="12" ry="12" width="160" height="120" fill="url(#g1)" opacity="0.12" />
                  <g fill="#c7def1" opacity="0.9">
                    <circle cx="88" cy="54" r="18" />
                    <rect x="48" y="86" width="80" height="10" rx="4" />
                    <rect x="58" y="98" width="60" height="6" rx="3" />
                  </g>
                </svg>
              </div>

              <div className="mt-4 text-slate-300">
                <h3 className="text-lg font-semibold text-white">Featured Project</h3>
                <p className="text-sm mt-2">
                  An end-to-end machine learning workflow with model training, evaluation, and deployment.
                </p>

                <div className="mt-4 flex gap-2">
                  <span className="text-sm px-3 py-1 bg-white/4 rounded-full">TensorFlow</span>
                  <span className="text-sm px-3 py-1 bg-white/4 rounded-full">PyTorch</span>
                  <span className="text-sm px-3 py-1 bg-white/4 rounded-full">Scikit-Learn</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-8">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <p className="text-slate-400 mt-2">A small selection of recent work — click to view details.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl p-5 bg-gradient-to-b from-[#071428]/50 to-[#021025]/40 border border-slate-800 shadow-lg"
              >
                <div className="h-36 rounded-lg bg-gradient-to-tr from-[#001427] to-[#00102a] flex items-end p-3">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                    <p className="text-sm text-slate-300 mt-1">{p.desc}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-300">{p.tag}</span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition"
                  >
                    View on GitHub
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills full list */}
        <section className="py-8">
          <h3 className="text-2xl font-semibold">Skills & Tools</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-slate-200 text-sm">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <div className="rounded-2xl p-6 bg-gradient-to-b from-[#071428]/40 to-[#021025]/30 border border-slate-800">
            <h3 className="text-2xl font-semibold">Let's build something together</h3>
            <p className="mt-2 text-slate-300">
              Email me at <span className="text-white font-medium">udit.sharma@example.com</span> or reach out on LinkedIn.
            </p>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="p-3 rounded-lg bg-transparent border border-slate-700" placeholder="Your name" />
              <input className="p-3 rounded-lg bg-transparent border border-slate-700" placeholder="Your email" />
              <textarea
                className="p-3 rounded-lg bg-transparent border border-slate-700 md:col-span-2"
                rows={4}
                placeholder="Brief message"
              />

              <button
                type="button"
                className="md:col-span-2 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] font-semibold text-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <footer className="py-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Udit Sharma — Built with ❤️
        </footer>
      </main>
    </div>
  );
}
