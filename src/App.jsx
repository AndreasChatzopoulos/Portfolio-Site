import React, { useState } from 'react';

const projects = [
  {
    title: "Spam Detector",
    desc: "Classifies spam emails using TF-IDF and logistic regression.",
    url: "https://github.com/AndreasChatzopoulos/spam-detector-ml",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Face Landmark Detector",
    desc: "Detects facial landmarks with HOG features and ridge regression.",
    url: "https://github.com/AndreasChatzopoulos/face-landmark-detector",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "CPU Scheduler Simulator",
    desc: "Simulates CPU scheduling algorithms like MLFQ and SJF.",
    url: "https://github.com/AndreasChatzopoulos/cpu-scheduler-simulator",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "TFTP Client-Server",
    desc: "Implements a TFTP protocol over TCP/UDP in Java.",
    url: "https://github.com/AndreasChatzopoulos/tftp-client-server-simulator",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => setCurrentProject((currentProject + 1) % projects.length);
  const prevProject = () => setCurrentProject((currentProject - 1 + projects.length) % projects.length);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-100 flex flex-col items-center py-8 px-2">
      {/* Card container */}
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 mb-8">
        {/* Hero */}
        <section className="text-center mb-7">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Andreas Chatzopoulos
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            <a href="https://github.com/AndreasChatzopoulos" target="_blank" className="px-5 py-2 rounded-full bg-blue-700 text-white font-bold shadow hover:bg-blue-800 transition">GitHub</a>
            <a href="mailto:achatzopoulos@outlook.com" className="px-5 py-2 rounded-full border-2 border-blue-700 text-blue-700 font-bold shadow hover:bg-blue-700 hover:text-white transition">Contact</a>
            <a href="/Andreas_Chatzopoulos_CV.pdf" download className="px-5 py-2 rounded-full border-2 border-blue-700 text-blue-700 font-bold shadow hover:bg-blue-700 hover:text-white transition">Download Resume</a>
          </div>
        </section>

        {/* About */}
        <section className="mb-7">
          <h2 className="text-2xl font-bold text-blue-900 border-b mb-2">About Me</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            I'm a final-year Computer Science student at the University of Sussex passionate about solving real-world problems with code. I have built spam detectors, facial landmark models, CPU schedulers, and client-server protocols from scratch.
            <br /><br />
            I enjoy building scalable systems and tackling complex technical challenges. I’m actively seeking opportunities in data engineering, machine learning, and backend development.
          </p>
        </section>

        {/* Project Carousel */}
        <section className="mb-7">
          <h2 className="text-2xl font-bold text-blue-900 border-b mb-2">Projects</h2>
          <div className="relative bg-blue-50 rounded-xl shadow-inner flex flex-col items-center p-4 transition-all">
            <img src={projects[currentProject].img} alt={projects[currentProject].title}
              className="rounded-lg shadow-lg mb-3 object-cover w-full h-44" />
            <h3 className="text-lg font-semibold mb-1">{projects[currentProject].title}</h3>
            <p className="text-sm text-gray-700 mb-2">{projects[currentProject].desc}</p>
            <a href={projects[currentProject].url} target="_blank" className="inline-block mb-2 px-4 py-1 border-2 border-blue-700 text-blue-700 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition">
              View on GitHub
            </a>
            {/* Carousel controls */}
            <div className="flex gap-6 items-center mt-2">
              <button onClick={prevProject} className="rounded-full bg-white shadow px-3 py-1 hover:bg-blue-100 text-blue-700 font-bold">‹</button>
              <div className="flex gap-1">
                {projects.map((_, i) => (
                  <span key={i}
                        className={`w-2 h-2 rounded-full ${i === currentProject ? 'bg-blue-700' : 'bg-blue-200'} transition`}></span>
                ))}
              </div>
              <button onClick={nextProject} className="rounded-full bg-white shadow px-3 py-1 hover:bg-blue-100 text-blue-700 font-bold">›</button>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 border-b mb-2">Skills</h2>
          <ul className="grid grid-cols-2 gap-1 text-sm list-disc list-inside text-gray-700">
            <li>Python, Java, C++</li>
            <li>SQL, HTML, CSS, JavaScript</li>
            <li>Machine Learning, Computer Vision</li>
            <li>Data Engineering, Backend Dev</li>
            <li>Git, Maven, Jupyter, VSCode</li>
            <li>Linux, REST APIs, Sockets</li>
          </ul>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center mt-2 text-xs text-gray-600">
        <p>Want to work together? <a className="text-blue-700" href="mailto:achatzopoulos@outlook.com">achatzopoulos@outlook.com</a></p>
        <p className="mt-1">© {new Date().getFullYear()} Andreas Chatzopoulos</p>
      </footer>
    </main>
  );
}
