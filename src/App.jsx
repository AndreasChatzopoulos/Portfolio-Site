import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Andreas Chatzopoulos</h1>
        <div className="space-x-4">
          <a href="https://github.com/AndreasChatzopoulos" target="_blank">
            <Button>GitHub</Button>
          </a>
          <a href="mailto:achatzopoulos@outlook.com">
            <Button variant="outline">Contact</Button>
          </a>
          <a href="/resume.pdf" download>
            <Button variant="outline">Download Resume</Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-base">
          I'm a final-year Computer Science student at the University of Sussex with a passion for solving real-world problems through code. Over the past few years, I’ve gained hands-on experience in both data engineering and software development through multiple internships. I’ve developed my skills my developing independent projects as showcased in this page. My strengths lie in Python, Java, and system design — and I thrive when working on projects that blend structure with creativity. I love the challenge of building up the functionality and scalability of my projects, and I'm currently exploring focusing in data engineering, machine learning, and backend development.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
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
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Spam Detector</h3>
              <p className="text-sm mb-2">A machine learning project using TF-IDF and logistic regression to classify spam emails with high accuracy.</p>
              <a href="https://github.com/AndreasChatzopoulos/spam-detector-ml" target="_blank">
                <Button variant="outline">View on GitHub</Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Face Landmark Detector</h3>
              <p className="text-sm mb-2">Computer vision project that detects facial landmarks using HOG features and ridge regression.</p>
              <a href="https://github.com/AndreasChatzopoulos/face-landmark-detector" target="_blank">
                <Button variant="outline">View on GitHub</Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">CPU Scheduler Simulator</h3>
              <p className="text-sm mb-2">A Java project simulating various CPU scheduling algorithms including MLFQ and SJF.</p>
              <a href="https://github.com/AndreasChatzopoulos/cpu-scheduler-simulator" target="_blank">
                <Button variant="outline">View on GitHub</Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">TFTP Client-Server</h3>
              <p className="text-sm mb-2">A Java networking project that implements a TFTP client and server using both TCP and UDP sockets.</p>
              <a href="https://github.com/AndreasChatzopoulos/tftp-client-server-simulator" target="_blank">
                <Button variant="outline">View on GitHub</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="text-center pt-10 border-t mt-10">
        <p>Want to work together? Reach me at <a className="text-blue-600" href="mailto:achatzopoulos@outlook.com">achatzopoulos@outlook.com</a></p>
        <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Andreas Chatzopoulos</p>
      </footer>
    </main>
  );
}
