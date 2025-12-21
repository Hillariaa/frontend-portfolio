import "./App.css";

const projects = [
  {
    title: "Task Manager",
    subtitle: "React • LocalStorage • Keyboard UX",
    description:
      "A clean task manager with persistence, quick add with Enter, and practical filtering for everyday use.",
    highlights: ["CRUD tasks", "LocalStorage persistence", "Keyboard-friendly UX"],
    live: "https://hillariaa.github.io/task-manager/",
    code: "https://github.com/Hillariaa/task-manager",
    badge: "React",
    icon: "✅",
  },
  {
    title: "Expense Tracker",
    subtitle: "React • Charts • Form handling",
    description:
      "Track expenses by category, view totals, and get quick insight into spending patterns with a simple interface.",
    highlights: ["Add & categorize expenses", "Totals + summary", "Clean UI structure"],
    live: "https://hillariaa.github.io/expense-tracker/",
    code: "https://github.com/Hillariaa/expense-tracker",
    badge: "React",
    icon: "💸",
  },
  {
    title: "Job Tracker",
    subtitle: "React • Status workflow • Filters",
    description:
      "Track job applications with statuses (Applied → Interview → Offer), filtering, and persistence across refresh.",
    highlights: ["Status workflow", "Tabs/filters", "LocalStorage persistence"],
    live: "https://hillariaa.github.io/job-tracker/",
    code: "https://github.com/Hillariaa/job-tracker",
    badge: "React",
    icon: "💼",
  },
  {
    title: "Job Dashboard",
    subtitle: "React • Dashboard UI • Recruiter-ready",
    description:
      "A dashboard-style view of applications with clear sections, quick actions, and a polished layout.",
    highlights: ["Dashboard layout", "Quick actions", "Readable component structure"],
    live: "https://hillariaa.github.io/job-dashboard/",
    code: "https://github.com/Hillariaa/job-dashboard",
    badge: "React",
    icon: "📊",
  },
  {
    title: "Support Desk",
    subtitle: "Angular • Services • Filters/Sort",
    description:
      "Ticket management system with search, filtering, sorting, and useful stats. Built with standalone components.",
    highlights: ["Search + filters + sort", "Stats header", "Angular services + components"],
    live: "https://hillariaa.github.io/support-desk-v2/",
    code: "https://github.com/Hillariaa/support-desk-v2",
    badge: "Angular",
    icon: "🎫",
  },
  {
    title: "Appointment Dashboard",
    subtitle: "Angular • Forms • Persistence",
    description:
      "Manage bookings, statuses, search, sorting and tabs. Data persists with localStorage so it feels like a real tool.",
    highlights: ["Status tabs", "Search + sort", "LocalStorage persistence"],
    live: "https://hillariaa.github.io/appointment-dashboard/",
    code: "https://github.com/Hillariaa/appointment-dashboard",
    badge: "Angular",
    icon: "📅",
  },
];

const skills = [
  "React (Hooks, state, components)",
  "Angular (standalone components, services, forms)",
  "JavaScript (ES6+)",
  "HTML & CSS (responsive layouts)",
  "GitHub Pages deployment",
  "UI polish & accessibility basics",
];

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function Button({ href, variant, children }) {
  const className = variant === "primary" ? "btn primary" : "btn ghost";
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="card">
      <div className="cardTop">
        <div className="icon" aria-hidden="true">
          {p.icon}
        </div>
        <div className="meta">
          <div className={`badge ${p.badge === "Angular" ? "angular" : "react"}`}>
            {p.badge}
          </div>
          <h3 className="title">{p.title}</h3>
          <p className="subtitle">{p.subtitle}</p>
        </div>
      </div>

      <p className="desc">{p.description}</p>

      <ul className="highlights">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="actions">
        <Button href={p.live} variant="primary">
          Live Demo
        </Button>
        <Button href={p.code} variant="ghost">
          Code
        </Button>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="navInner">
          <a className="brand" href="#top">
            <span className="brandDot" aria-hidden="true" />
            Hilary
          </a>

          <nav className="links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="main">
        <section className="hero">
          <p className="kicker">Frontend Developer • React + Angular</p>

          <h1>
            Clean, modern web apps <span className="accent">built for real users.</span>
          </h1>

          <p className="heroText">
            I’m Hilary — I build responsive interfaces with clear structure, thoughtful UX,
            and recruiter-friendly code. Below are six projects that show real workflow,
            persistence, and dashboard-style UI.
          </p>

          <div className="heroActions">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a
              className="btn ghost"
              href="https://github.com/Hillariaa"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="heroChips" aria-label="Quick highlights">
            <Chip>Responsive UI</Chip>
            <Chip>Filters + Sorting</Chip>
            <Chip>LocalStorage Persistence</Chip>
            <Chip>Angular Services</Chip>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="sectionHead">
            <h2>Projects</h2>
            <p>Live demos + source code. Built to solve real problems.</p>
          </div>

          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="sectionHead">
            <h2>Skills</h2>
            <p>Tools and strengths you can expect in my work.</p>
          </div>

          <div className="skills">
            {skills.map((s) => (
              <div className="skill" key={s}>
                <span className="check" aria-hidden="true">
                  ✓
                </span>
                {s}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="sectionHead">
            <h2>Contact</h2>
            <p>Want to chat about a role or a project? Reach out.</p>
          </div>

          <div className="contactCard">
            <div>
              <div className="contactLabel">Email</div>
              <a className="contactValue" href="hilariezee@gmail.com">
                hilariezee@gmail.com
              </a>
            </div>

            <div className="contactBtns">
              <a className="btn primary" href="hilariezee@gmail.com">
                Email Me
              </a>
              <a
                className="btn ghost"
                href="https://www.linkedin.com/in/hilary-azimoh-a32b81231/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Hilary • Built with React</p>
        </footer>
      </main>
    </div>
  );
}
