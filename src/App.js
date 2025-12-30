import "./App.css";

const projects = [
  {
    title: "Task Manager",
    subtitle: "React • LocalStorage • Keyboard UX",
    description:
      "A clean task manager with persistence, quick add with Enter, and practical filtering for everyday use.",
    live: "https://hillariaa.github.io/task-manager/",
    code: "https://github.com/Hillariaa/task-manager",
    icon: "✅",
  },
  {
    title: "Expense Tracker",
    subtitle: "React • Charts • Forms",
    description:
      "Track expenses by category, calculate totals, and understand spending habits with a simple interface.",
    live: "https://hillariaa.github.io/expense-tracker/",
    code: "https://github.com/Hillariaa/expense-tracker",
    icon: "💸",
  },
  {
    title: "Job Tracker",
    subtitle: "React • Status Workflow",
    description:
      "Track job applications across stages like Applied, Interview, and Offer with persistence.",
    live: "https://hillariaa.github.io/job-tracker/",
    code: "https://github.com/Hillariaa/job-tracker",
    icon: "💼",
  },
  {
    title: "Job Dashboard",
    subtitle: "React • Dashboard UI",
    description:
      "A dashboard-style view of job applications with clear sections and quick status updates.",
    live: "https://hillariaa.github.io/job-dashboard/",
    code: "https://github.com/Hillariaa/job-dashboard",
    icon: "📊",
  },
  {
    title: "Support Desk",
    subtitle: "Angular • Services • Filters",
    description:
      "Ticket management system with search, filtering, sorting, and statistics.",
    live: "https://hillariaa.github.io/support-desk-v2/",
    code: "https://github.com/Hillariaa/support-desk-v2",
    icon: "🎫",
  },
  {
    title: "Appointment Dashboard",
    subtitle: "Angular • Forms • State",
    description:
      "Manage appointments with status tracking, filters, and persistent data.",
    live: "https://hillariaa.github.io/appointment-dashboard/",
    code: "https://github.com/Hillariaa/appointment-dashboard",
    icon: "📅",
  },
];

export default function App() {
  return (
    <div className="page">
      {/* ===== Header ===== */}
      <header className="header">
        <div className="container headerInner">
          <h1>Hilary Azimoh</h1>
          <p className="subtitle">Frontend Developer • React & Angular</p>
        </div>
      </header>

      {/* ===== Intro ===== */}
      <section className="intro">
        <div className="container introInner">
          <h2>Clean, modern web interfaces with a focus on usability</h2>
          <p>
            I’m Hilary, a frontend developer focused on responsive layouts, clear
            structure, and thoughtful user experience. The projects below reflect
            practical workflows, state management, and dashboard-style interfaces.
          </p>
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section className="projects">
        <div className="container">
          <div className="projectsGrid">
            {projects.map((project) => (
              <div className="card" key={project.title}>
                <div className="cardHeader">
                  <span className="icon">{project.icon}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p className="cardSubtitle">{project.subtitle}</p>
                  </div>
                </div>

                <p className="cardDescription">{project.description}</p>

                <div className="cardActions">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn ghost"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section className="contact">
        <div className="container contactInner">
          <h2>Contact</h2>
          <p>Interested in working together or have a question?</p>

          {/* Horizontal row like your old version */}
          <div className="contactRow">
            <a href="mailto:hilariezee@gmail.com" className="email">
              hilariezee@gmail.com
            </a>

            <div className="contactActions">
              <a href="mailto:hilariezee@gmail.com" className="btn primary">
                Email Me
              </a>

              <a
                href="https://github.com/Hillariaa"
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container footerInner">
          <p>© {new Date().getFullYear()} Hilary</p>
        </div>
      </footer>
    </div>
  );
}
