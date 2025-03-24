import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Download } from 'lucide-react';
import etsyImage from "../assets/etsy.png";
import shopwell from "../assets/shopwell.png";
import sudoko from "../assets/sudoko.png";
import stackoverflow from "../assets/stackoverflow.png";
import resume from "../assets/sai_nikitha_sheerka_se_r.pdf";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Sai Nikitha Sheerka</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">
            Software Engineer/Developer | Fullstack development
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/NikithaSheerka" target="_blank" className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sai-nikitha-sheerka-b2a332218/" target="_blank" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sainikithasheerka@gmail.com" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" download={resume} className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors">
              <Download size={24} />
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <User size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="prose prose-lg mx-auto text-justify">
            <p className="text-gray-600">
              Hi there! I'm Sai Nikitha Sheerka, a passionate and results-driven Software Engineer specializing in full-stack development. With expertise in technologies like React, TypeScript, JavaScript, Go, Java, C#, and cloud platforms such as AWS and Azure, I thrive on building scalable and high-performance web and mobile applications. I hold a Master of Science in Business Analytics and Information Systems from the University of South Florida, where I honed my technical and analytical skills.
            </p>
            <div className="h-12"></div>

            <p className="text-gray-600">
              Throughout my career, I've worked on a wide range of projects, from developing over 30+ UI components in React and TypeScript to optimizing e-commerce platforms and mobile applications. My work at companies like Itential, PARC, and Microland Limited has helped enhance user engagement, reduce business service tickets, and improve system efficiency. I enjoy solving complex problems, whether it's implementing parallel computing techniques, designing efficient database architectures, or optimizing frontend performance.
            </p>
            <div className="h-12"></div>

            <p className="text-gray-600">
              Beyond work, I'm an enthusiastic learner who loves exploring new technologies and frameworks. I have a keen interest in augmented reality, which led me to develop an interactive AR learning platform, significantly boosting student engagement. Outside of tech, I enjoy reading, traveling, hiking, and volunteering. Let's connect and collaborate to create innovative software solutions!
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50" id="education">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Briefcase size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-8">
            {/* University of South Florida */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Master of Science in Business Analytics and Information Systems</h3>
              <p className="text-gray-600">University of South Florida, Tampa, FL</p>
              <p className="text-gray-600">Graduation Year: 2024</p>
            </div>

            {/* Additional Education or Certifications */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bachelor of Technology in Information Systems </h3>
              <p className="text-gray-600">Jawaharlal Nehru Technological University</p>
              <p className="text-gray-600">Graduation Year: 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white" id="experience">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Briefcase size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="space-y-8">
            {/* Itential */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Engineer</h3>
              <p className="text-gray-600">Itential</p>
              <p className="text-gray-600">June 2024 – Present</p>
              <p className="text-gray-600">Full-time</p>
            </div>

            {/* PARC */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Engineer Intern</h3>
              <p className="text-gray-600">PARC</p>
              <p className="text-gray-600">May 2023 – August 2023</p>
              <p className="text-gray-600">Internship</p>
            </div>

            {/* University of South Florida */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Graduate Teaching Assistant (Part-Time)</h3>
              <p className="text-gray-600">University of South Florida</p>
              <p className="text-gray-600">August 2022 – May 2023</p>
              <p className="text-gray-600">Part-time</p>
            </div>

            {/* Microland Limited */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Full Stack Developer</h3>
              <p className="text-gray-600">Microland Limited</p>
              <p className="text-gray-600">Jun 2020 – Jul 2022</p>
              <p className="text-gray-600">Full-time</p>
            </div>

            {/* Lbits Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Development Intern</h3>
              <p className="text-gray-600">Lbits Technologies</p>
              <p className="text-gray-600">March 2020 – June 2020</p>
              <p className="text-gray-600">Internship</p>
            </div>

            {/* Dell Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Engineering Intern</h3>
              <p className="text-gray-600">Dell Technologies</p>
              <p className="text-gray-600">Oct 2019 – Dec 2019</p>
              <p className="text-gray-600">Internship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50" id="skills">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Code2 size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              'Go',
              'JavaScript',
              'TypeScript',
              'Java',
              'Python',
              'C#',
              'React.js',
              'React Native',
              'Node.js',
              'Express.js',
              'Angular',
              'Vue.js',
              'Redux',
              'Next.js',
              'SCSS/CSS/Tailwind CSS',
              'HTML5',
              'Flask',
              'ASP.NET Web API'
            ].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 text-center">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white" id="projects">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Briefcase size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Etsy Project */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={etsyImage}
                alt="Etsy Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Etsy</h3>
                <div className="text-gray-600 mb-4">
                  <p>• Achieved a 25% performance improvement through frontend optimizations, reducing load times and enhancing user satisfaction.</p>
                  <p>• Built an end-to-end responsive and interactive e-commerce web application using the MERN stack, focusing on the frontend with React.js and Redux.</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-sm">React.js</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Redux</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">MongoDB</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">MySQL</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Kafka</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">Java</span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-sm">Node.js</span>
                  </div>
                  <a href="https://github.com/NikithaSheerka/Etsy-Prototype" target="_blank" className="text-indigo-600 hover:text-indigo-500 flex items-center">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Stackoverflow Project */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={stackoverflow}
                alt="Stackoverflow Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Stackoverflow</h3>
                <div className="text-gray-600 mb-4">
                  <p>• Developed a 3-tiered distributed and scalable web application simulating Stackoverflow, emphasizing the frontend using React.js and Redux.</p>
                  <p>• Applied Agile Scrum principles, maintaining sprint sheets and project journals to enhance productivity.</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-sm">React.js</span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-sm">Redux</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Node.js</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Express</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">MySQL</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">WebSockets</span>
                  </div>
                  <a href="https://github.com/NikithaSheerka/Stackoverflow-Simulation" target="_blank" className="text-indigo-600 hover:text-indigo-500 flex items-center">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Shopwell Project */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={shopwell}
                alt="Shopwell Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Shopwell</h3>
                <div className="text-gray-600 mb-4">
                  <p>• Collaborated with the team to implement advanced CSS techniques, including SCSS and Tailwind CSS, resulting in a 30% improvement in user engagement.</p>
                  <p>• Developed the application using React Native, ensuring cross-platform compatibility for both iOS and Android.</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-sm">React Native</span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-sm">Redux</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">MySQL</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Node.js</span>
                  </div>
                  <a href="https://github.com/NikithaSheerka/Shopwell" target="_blank" className="text-indigo-600 hover:text-indigo-500 flex items-center">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* QuickSolve Sudoku Project */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={sudoko}
                alt="QuickSolve Sudoku Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">QuickSolve Sudoku</h3>
                <div className="text-gray-600 mb-4">
                  <p>• Achieved a 70% reduction in solving time for complex puzzles compared to traditional methods, significantly improving user satisfaction.</p>
                  <p>• Utilized Python (Flask), HTML, CSS, and JavaScript to build a responsive and efficient web application.</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-sm">Python</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Flask</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">HTML</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">CSS</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">JavaScript</span>
                  </div>
                  <a href="https://github.com/NikithaSheerka/QuickSolve-Sudoku" target="_blank" className="text-indigo-600 hover:text-indigo-500 flex items-center">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-gray-50" id="publications">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Code2 size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Publications</h2>
          </div>
          <div className="space-y-8">
            {/* Publication 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Immersive Augmented Reality Experience for Newspapers</h3>
              <p className="text-gray-600">figshare · Jul 10, 2021</p>
              <p className="text-gray-600 mt-2">
                The project leverages Augmented Reality (AR) through Apple ARKit, enabling videos to play when specific scenes or images in a newspaper are detected. AR enhances user experiences by adding 2D or 3D elements to a live camera view, seamlessly integrating them into the real world. ARKit simplifies the AR development process by combining motion tracking, scene capture, and advanced processing. This project aims to create a novel platform for advertisers, bringing interactivity to static newspapers and revolutionizing how products or services are marketed.
              </p>
              <a href="https://figshare.com/articles/journal_contribution/Immersive_Augmented_Reality_experience_for_Newspapers/14945718?file=28774347" className="text-indigo-600 hover:text-indigo-500 flex items-center mt-2" target="_blank" rel="noopener noreferrer">
                Show Publication <ExternalLink size={16} className="ml-1" />
              </a>
            </div>

            {/* Publication 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Human - Chatbot Interaction Using NLTK</h3>
              <p className="text-gray-600">The International Journal of Creative Research Thoughts (IJCRT) · Feb 29, 2020</p>
              <p className="text-gray-600 mt-2">
                I had the privilege of contributing to the research and publication of a paper focused on developing a natural language processing (NLP)-based chatbot application aimed at enhancing user interactions. Our research introduces a network-based Android chat application that prevents users from sending inappropriate messages by leveraging NLP techniques such as tokenization, stemming, and named entity recognition. We demonstrated how this chatbot can effectively filter out inappropriate content and respond to queries regarding student details or college events. This project could serve various enterprises, helping improve customer interactions by implementing advanced NLP solutions.
              </p>
              <a href="https://www.ijcrt.org/viewfull.php?&p_id=IJCRT2002219" target="_blank" className="text-indigo-600 hover:text-indigo-500 flex items-center mt-2" target="_blank" rel="noopener noreferrer">
                Show Publication <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Work and Extracurricular Activities Section */}
      <section className="py-20 bg-white" id="volunteer-work">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Briefcase size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Volunteer Work & Extracurricular Activities</h2>
          </div>
          <div className="space-y-8">
            {/* Volunteer Work 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Volunteer</h3>
              <p className="text-gray-600">Marpu Foundation | NGO</p>
              <p className="text-gray-600">Jul 2016 - May 2020 · 3 yrs 11 mos</p>
              <p className="text-gray-600 mt-2">
                I worked as a volunteer for this NGO to promote animal welfare. I worked with stray animals, taking care of their nutritional and medical needs. I provided injured and disturbed animals access to medical care, constructed cowsheds, installed earthen bird feeders in various locations, raised awareness about animal abuse, and held a number of events and seminars in various communities to raise funds for them.
              </p>
            </div>

            {/* Volunteer Work 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Engineer (Volunteer)</h3>
              <p className="text-gray-600">EnCiv</p>
              <p className="text-gray-600">Aug 2022 - Present · 2 yrs 8 mos</p>
              <p className="text-gray-600 mt-2">
                At EnCiv, I contribute to the development of web applications that enhance democratic engagement. I build platforms enabling citizens to connect with political representatives. My work involves using technologies such as React, Node.js, and Python, along with database management systems to manage user interactions. This role is part of a broader effort to improve civic participation through digital tools, helping bridge the gap between voters and their representatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-20 bg-gray-50" id="contacts">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Mail size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Contacts</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                <Mail size={24} className="text-gray-600 mr-3" />
                Email
              </h3>
              <p className="text-gray-600">sainikithasheerka@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20z"></path>
                  <path d="M12 6v6l4 4"></path>
                </svg>
                Phone
              </h3>
              <p className="text-gray-600">+1 (813) 697-7300</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z"></path>
                  <path d="M12 12l4 4m0 0l4-4m-4 4V4"></path>
                </svg>
                Location
              </h3>
              <p className="text-gray-600">Seattle, Washington</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;