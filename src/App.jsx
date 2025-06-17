import React from 'react';

export default function Portfolio() {
  return (
    <main className="p-4 max-w-3xl mx-auto space-y-14 font-sans text-gray-800 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Andreas Chatzopoulos</h1>
        <div className="flex justify-center flex-wrap gap-4">
          <a href="https://github.com/AndreasChatzopoulos" target="_blank" className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition shadow">GitHub</a>
          <a href="mailto:achatzopoulos@outlook.com" className="px-5 py-2 border border-gray-700 rounded-full hover:bg-gray-100 transition shadow">Contact</a>
          <a href="/Andreas_ChatzopoulosCV.pdf" download className="px-5 py-2 border border-gray-700 rounded-full hover:bg-gray-100 transition shadow">Download Resume</a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-xl shadow p-5">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">About Me</h2>
        <p className="text-base leading-relaxed">
          I'm a final-year Computer Science student at the University of Sussex with a passion for solving real-world problems through code. Over the past few years, I’ve gained hands-on experience in both data engineering and software development through multiple internships. I’ve developed my skills my developing independent projects as showcased in this page. My strengths lie in Python, Java, and system design — and I thrive when working on projects that blend structure with creativity. I love the challenge of building up the functionality and scalability of my projects, and I'm currently exploring focusing in data engineering, machine learning, and backend development.
           </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white rounded-xl shadow p-5">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-base list-disc list-inside">
          <li>Python, Java, C++</li>
          <li>SQL, HTML, CSS, JavaScript</li>
          <li>Machine Learning, Computer Vision</li>
          <li>Data Engineering, Backend Development</li>
          <li>Git, Maven, Jupyter, VSCode</li>
          <li>Linux, REST APIs, Socket Programming</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-1">Projects</h2>
        <div className="grid gap-5">
          {[{
            title: "Spam Detector",
            desc: "A machine learning project using TF-IDF and logistic regression to classify spam emails with high accuracy.",
            url: "https://github.com/AndreasChatzopoulos/spam-detector-ml"
          }, {
            title: "Face Landmark Detector",
            desc: "Computer vision project that detects facial landmarks using HOG features and ridge regression.",
            url: "https://github.com/AndreasChatzopoulos/face-landmark-detector"
          }, {
            title: "CPU Scheduler Simulator",
            desc: "A Java project simulating various CPU scheduling algorithms including MLFQ and SJF.",
            url: "https://github.com/AndreasChatzopoulos/cpu-scheduler-simulator"
          }, {
            title: "TFTP Client-Server",
            desc: "A Java networking project that implements a TFTP client and server using both TCP and UDP sockets.",
            url: "https://github.com/AndreasChatzopoulos/tftp-client-server-simulator"
          }].map((proj, i) => (
            <div key={i} className="p-4 rounded-lg bg-white shadow border">
              <h3 className="text-lg font-semibold mb-1">{proj.title}</h3>
              <p className="text-sm mb-2 text-gray-600">{proj.desc}</p>
              <a href={proj.url} target="_blank" className="inline-block text-sm px-3 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="text-center pt-12 pb-6 border-t">
        <p className="text-base">Want to work together? Reach me at <a className="text-blue-600" href="mailto:achatzopoulos@outlook.com">achatzopoulos@outlook.com</a></p>
        <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Andreas Chatzopoulos</p>
      </footer>
    </main>
  );
}
