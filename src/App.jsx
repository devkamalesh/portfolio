import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Server,
  ShieldCheck,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { profile, projects as fallbackProjects, experience } from "./data";
import { Image } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [apiStatus, setApiStatus] = useState("connecting");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectImages, setShowProjectImages] = useState(false);

  useEffect(() => {
    // Keep the project cards from local data.js. Only check API availability here.
    fetch(`${API}/api/health`)
      .then((r) => {
        if (!r.ok) throw new Error("API unavailable");
        return r.json();
      })
      .then(() => setApiStatus("online"))
      .catch(() => setApiStatus("offline"));
  }, []);

  const submitContact = async (e) => {
    e.preventDefault();
    setFormState("Sending...");
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unable to send");
      setFormState(
        "Message received. Connect an email provider to enable delivery.",
      );
      setForm({ name: "", email: "", message: "" });
    } catch {
      setFormState("API unavailable. Email me directly using the link above.");
    }
  };

  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">[K]</span>
          <span>
            kamalesh<span className="green">.dev</span>
          </span>
        </a>
        <div className="side-caption">
          <span className="pulse" /> BACKEND ENGINEER
        </div>
        <nav>
          {[
            ["home", "01 / Home"],
            ["about", "02 / About"],
            ["projects", "03 / Projects"],
            ["stack", "04 / Stack"],
            ["experience", "05 / Experience"],
            ["contact", "06 / Contact"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              <span className="nav-caret">›</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={25} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={25} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={25} />
            </a>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className="terminal-line">
            <span className="green">kamalesh@portfolio</span>:~${" "}
            <span>whoami</span>
            <br />
            <b>
              backend-focused developer<span className="cursor">_</span>
            </b>
          </div>
          <div className="system-status">
            <span
              className={`status-dot ${apiStatus === "offline" ? "status-offline" : ""}`}
            />
            <span>
              API{" "}
              {apiStatus === "connecting"
                ? "CONNECTING"
                : apiStatus.toUpperCase()}
            </span>
            <small>
              {apiStatus === "online"
                ? "express server reachable"
                : apiStatus === "offline"
                  ? "using local project data"
                  : "checking endpoint..."}
            </small>
          </div>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> AVAILABLE FOR THE NEXT CHALLENGE
            </div>
            <p className="hero-hi">Hello, world. I'm</p>
            <h1>
              {profile.name}
              <span className="green">.</span>
            </h1>
            <h2>
              Backend <span>Engineer</span>
              <span className="cursor">_</span>
            </h2>
            <p className="hero-desc">{profile.intro}</p>
            <div className="skill-chips">
              {(Array.isArray(profile.skills) ? profile.skills : [])
                .slice(0, 6)
                .map((s) => (
                  <span key={s}>{s}</span>
                ))}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <Code2 size={17} /> Explore projects{" "}
                <ArrowDownRight size={16} />
              </a>
              <a
                className="button button-ghost"
                href={`mailto:${profile.email}`}
              >
                <Mail size={16} /> Contact me
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="scan-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-head">
                <span />
                <span />
                <span /> <b>server.ts</b>
              </div>
              <pre>
                <i>01</i> <em>const</em> developer = {"{"}
                <br />
                <i>02</i> focus: <strong>'backend'</strong>,<br />
                <i>03</i> build: [<strong>'APIs'</strong>,{" "}
                <strong>'systems'</strong>],
                <br />
                <i>04</i> mindset: <strong>'always learning'</strong>
                <br />
                <i>05</i> {"}"};<br />
                <i>06</i>
                <br />
                <i>07</i> <em>export default</em> developer;
              </pre>
              <div className="window-footer">
                <span className="green">●</span> compiling ideas into systems
              </div>
            </div>
            <div className="floating-tag tag-one">
              <Database size={15} /> SQL / DATA
            </div>
            <div className="floating-tag tag-two">
              <ShieldCheck size={15} /> API SECURITY
            </div>
            <div className="floating-tag tag-three">
              <Zap size={15} /> PERFORMANCE
            </div>
          </div>
        </section>

        <section className="metrics">
          <div>
            <span className="metric-icon">
              <Server size={17} />
            </span>
            <strong>API-FIRST</strong>
            <small>Design approach</small>
          </div>
          <div>
            <span className="metric-icon">
              <Database size={17} />
            </span>
            <strong>DATA-DRIVEN</strong>
            <small>Schema & queries</small>
          </div>
          <div>
            <span className="metric-icon">
              <ShieldCheck size={17} />
            </span>
            <strong>SECURITY-MINDED</strong>
            <small>Validation & access</small>
          </div>
          <div>
            <span className="metric-icon">
              <Braces size={17} />
            </span>
            <strong>MAINTAINABLE</strong>
            <small>Readable code</small>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <div>
              <span className="section-index">01.</span>
              <h2>
                About <span className="green">me</span>
              </h2>
            </div>
            <span className="section-note">// a little context</span>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">
                I enjoy working where{" "}
                <span className="green">logic meets scale.</span>
              </p>
              <p>
                I focus on backend development: building APIs, modelling
                relational data, handling authentication, and keeping
                applications reliable and maintainable.
              </p>
              <p>
                This portfolio is a home for selected projects, engineering
                notes, and things I’m learning. Project descriptions should
                reflect work I can publicly share.
              </p>
            </div>
            <div className="terminal-card">
              <div className="terminal-card-head">
                <Terminal size={16} /> ~/about-kamalesh <span>● ● ●</span>
              </div>
              <div className="terminal-body">
                <p>
                  <i>$</i> cat principles.txt
                </p>
                <p>
                  <b>01</b> Solve the actual problem
                </p>
                <p>
                  <b>02</b> Design clear interfaces
                </p>
                <p>
                  <b>03</b> Measure before optimizing
                </p>
                <p>
                  <b>04</b> Keep learning in public
                </p>
                <p className="terminal-success">
                  <Check size={14} /> exit status: 0
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <div>
              <span className="section-index">02.</span>
              <h2>
                <span className="green">projects</span>
              </h2>
            </div>
            <span className="section-note">// selected builds</span>
          </div>

          <div className="project-grid">
            {(Array.isArray(projects) ? projects : []).map((project, index) => {
              const projectImages =
                Array.isArray(project.images) && project.images.length
                  ? project.images
                  : project.image
                    ? [project.image]
                    : [];
              const visitUrl =
                project.demo || project.live || project.code || "";

              return (
                <article
                  className="project-card project-card-clickable"
                  key={project.number || project.title || index}
                  onClick={() => {
                    setSelectedProject(project);
                    setShowProjectImages(false);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      setSelectedProject(project);
                      setShowProjectImages(false);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.title} project summary`}
                >
                  <div className="project-image-wrap">
                    {project?.image ? (
                      <Image
                        className="project-image"
                        src={project?.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="project-image-placeholder">
                        <Code2 size={34} />
                        <span>PROJECT PREVIEW</span>
                      </div>
                    )}
                    <span className="project-image-number">
                      {project.number || String(index + 1).padStart(2, "0")} /
                      PROJECT
                    </span>
                    <span className="project-category">
                      {project.category || "Backend"}
                    </span>
                    <button
                      type="button"
                      className="view-images-button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedProject(project);
                        setShowProjectImages(true);
                      }}
                    >
                      View Images ↗
                    </button>
                  </div>

                  <div className="project-card-content">
                    <div className="project-subtitle">
                      {project.subtitle || "Selected build"}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-stack">
                      {(Array.isArray(project.stack) ? project.stack : []).map(
                        (tech) => (
                          <span key={tech}>{tech}</span>
                        ),
                      )}
                    </div>
                    <div className="project-card-actions">
                      <button
                        type="button"
                        className="project-link project-summary-button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedProject(project);
                          setShowProjectImages(false);
                        }}
                      >
                        Read Summary ↗
                      </button>
                      {visitUrl ? (
                        <a
                          href={visitUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link visit-project-button"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Visit Project ↗
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="project-link visit-project-button"
                          onClick={(event) => {
                            event.stopPropagation();
                            setSelectedProject(project);
                            setShowProjectImages(false);
                          }}
                        >
                          View Details ↗
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="section-heading">
            <div>
              <span className="section-index">03.</span>
              <h2>
                Technical <span className="green">stack</span>
              </h2>
            </div>
            <span className="section-note">// tools I work with</span>
          </div>
          <div className="stack-grid">
            {[
              ["01", "Backend", "Node.js, Express.js, TypeScript, REST APIs"],
              ["02", "Database", "MySQL, SQL optimization, schema design"],
              ["03", "Performance", "Redis, caching, pagination"],
              ["04", "Security", "JWT, RBAC, validation, error handling"],
              ["05", "Frontend", "React, JavaScript, Tailwind CSS"],
              ["06", "Delivery", "Git, Docker, CI/CD, AWS fundamentals"],
            ].map(([n, title, desc]) => (
              <div className="stack-item" key={title}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <ArrowUpRight size={16} />
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <div>
              <span className="section-index">04.</span>
              <h2>
                Experience <span className="green">& learning</span>
              </h2>
            </div>
            <span className="section-note">// work in progress</span>
          </div>
          <div className="timeline">
            {(Array.isArray(experience) ? experience : []).map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="timeline-dot" />
                <div>
                  <div className="timeline-meta">
                    {item.period} <span>•</span> EXPERIENCE
                  </div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <div>
              <span className="section-index">05.</span>
              <h2>
                Let's build something <span className="green">useful.</span>
              </h2>
            </div>
            <span className="section-note">// connection open</span>
          </div>
          <div className="contact-grid">
            <div>
              <p>
                Have a backend problem, interesting project, or opportunity?
                Send a note or reach me directly.
              </p>
              <a className="email-link" href={`mailto:${profile.email}`}>
                <Mail size={17} />
                {profile.email}
                <ArrowUpRight size={15} />
              </a>
              <div className="contact-socials">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={17} /> LinkedIn
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <label>
                Your name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Name"
                />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Message
                <textarea
                  required
                  rows="3"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me what you're building..."
                />
              </label>
              <button className="button button-primary" type="submit">
                <Mail size={16} /> Send message <ArrowUpRight size={15} />
              </button>
              {formState && (
                <p className="form-state" role="status">
                  {formState}
                </p>
              )}
            </form>
          </div>
        </section>
        {selectedProject && (
          <div
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="project-modal-close"
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <X size={20} />
              </button>
              <div className="project-modal-kicker">// PROJECT DETAILS</div>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p className="project-modal-description">
                {selectedProject.summary ||
                  selectedProject.description ||
                  "Project summary will be added soon."}
              </p>
              <div className="project-modal-tabs">
                <button
                  type="button"
                  className={!showProjectImages ? "active" : ""}
                  onClick={() => setShowProjectImages(false)}
                >
                  Summary
                </button>
                <button
                  type="button"
                  className={showProjectImages ? "active" : ""}
                  onClick={() => setShowProjectImages(true)}
                >
                  View Images
                </button>
              </div>
              {showProjectImages ? (
                <div className="project-modal-gallery">
                  {(Array.isArray(selectedProject.images) &&
                  selectedProject.images.length
                    ? selectedProject.images
                    : selectedProject.image
                      ? [selectedProject.image]
                      : []
                  ).map((imageSrc, imageIndex) => (
                    <Image
                      key={`${imageSrc}-${imageIndex}`}
                      src={imageSrc}
                      alt={`${selectedProject.title} screenshot ${imageIndex + 1}`}
                    />
                  ))}
                  {!(
                    selectedProject.image ||
                    (Array.isArray(selectedProject.images) &&
                      selectedProject.images.length)
                  ) && (
                    <p>
                      Add image paths in data.js to show project screenshots
                      here.
                    </p>
                  )}
                </div>
              ) : (
                <>
                  {Array.isArray(selectedProject.highlights) &&
                    selectedProject.highlights.length > 0 && (
                      <ul className="project-modal-highlights">
                        {selectedProject.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  <div className="project-modal-stack">
                    {(Array.isArray(selectedProject.stack)
                      ? selectedProject.stack
                      : []
                    ).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </>
              )}
              <div className="project-modal-actions">
                {selectedProject.demo ||
                selectedProject.live ||
                selectedProject.code ? (
                  <a
                    className="button button-primary"
                    href={
                      selectedProject.demo ||
                      selectedProject.live ||
                      selectedProject.code
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Project <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="project-private-note">
                    Private / internal project — screenshots and summary
                    available.
                  </span>
                )}
                {selectedProject.code && (
                  <a
                    className="button button-ghost"
                    href={selectedProject.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 size={16} /> Source Code
                  </a>
                )}
              </div>
            </section>
          </div>
        )}

        <footer>
          <span>
            <span className="green">●</span> SYSTEM STATUS:{" "}
            {apiStatus === "online" ? "NOMINAL" : "PORTFOLIO READY"}
          </span>
          <span>
            DESIGNED & BUILT BY KAMALESH <span className="green">© 2026</span>
          </span>
          <a href="#home">BACK TO TOP ↑</a>
        </footer>
      </main>
    </div>
  );
}
export default App;
