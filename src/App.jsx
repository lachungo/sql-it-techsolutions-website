export default function SQLITTechSolutionsWebsite() {
  const testimonials = [
    {
      company: "Huntington Bank",
      role: "Senior SQL Server DBA (Contract)",
      text: "Delivered reliable SQL Server operations in a high-availability banking environment, with proactive performance tuning and strong incident response support.",
      focus: ["SQL Server Performance", "HA/DR Support", "Operational Stability"],
    },
    {
      company: "Intel Corporation",
      role: "Database Infrastructure Consultant (Contract)",
      text: "Brought deep technical expertise to complex database environments through structured troubleshooting, documentation, and long-term operational improvements.",
      focus: ["Database Architecture", "Performance Analysis", "Documentation"],
    },
    {
      company: "CO-OP Financial Services",
      role: "SQL Server Database Administrator (Contract)",
      text: "Supported mission-critical database platforms with attention to security, data integrity, and availability in financial-services environments.",
      focus: ["Mission-Critical SQL", "Compliance", "Data Integrity"],
    },
    {
      company: "LucidHealth",
      role: "Senior Database Consultant (Contract)",
      text: "Provided dependable database support for healthcare systems where uptime and reporting accuracy were essential.",
      focus: ["Healthcare Data Systems", "Reliability", "Performance Tuning"],
    },
    {
      company: "Park National Bank",
      role: "Lead SQL Server DBA (Contract)",
      text: "Led SQL Server operational support with performance optimization, backup strategy improvements, and HA/DR readiness work that reduced risk and improved resilience.",
      focus: ["Lead DBA Support", "Backup Strategy", "Database Resilience"],
    },
  ];

  const services = [
    {
      title: "SQL Server Administration",
      desc: "Production support, patching, backup and recovery, security hardening, and day-to-day operational stability.",
    },
    {
      title: "Performance Tuning",
      desc: "Query tuning, indexing strategy, blocking analysis, concurrency troubleshooting, and high-load workload stabilization.",
    },
    {
      title: "Cloud Migration",
      desc: "SQL Server migrations to AWS RDS, Aurora PostgreSQL, and Azure SQL with validation, rollback planning, and documentation.",
    },
    {
      title: "HA / DR Readiness",
      desc: "Always On, clustering, failover planning, restore testing, RTO/RPO analysis, and business continuity reviews.",
    },
  ];

  const featuredProjects = [
    {
      title: "SQL Server to AWS RDS Migration Lab",
      category: "Cloud modernization",
      desc: "A portfolio-ready migration walkthrough covering assessment, backup strategy, restore flow, validation, and post-migration hardening.",
    },
    {
      title: "Enterprise SQL Performance Triage",
      category: "Performance engineering",
      desc: "A structured methodology for resolving blocking, concurrency issues, and high-load database bottlenecks in production systems.",
    },
    {
      title: "HA/DR Readiness Architecture Review",
      category: "Resilience planning",
      desc: "A consulting engagement model focused on backup integrity, failover readiness, RTO/RPO alignment, and operational runbooks.",
    },
  ];

  const caseStudies = [
    {
      title: "High-Transaction Blocking & Concurrency Recovery",
      challenge:
        "Production databases under sustained heavy load experienced blocking chains, slow response times, and unstable transaction throughput.",
      solution:
        "Performed wait-stat analysis, reviewed execution plans, tuned indexing strategy, and optimized query patterns to reduce contention and improve concurrency.",
      outcome:
        "Reduced blocking duration by up to 70%, improved transaction throughput, and restored sub-second response times for critical application queries under peak load.",
    },
    {
      title: "SQL Server Performance Triage for Business-Critical Systems",
      challenge:
        "Teams needed rapid diagnosis of slow queries, resource bottlenecks, and inconsistent performance across production workloads.",
      solution:
        "Used a structured assessment approach covering Query Store, wait stats, memory pressure, tempdb behavior, storage latency, and plan regression patterns.",
      outcome:
        "Identified top 10 high-cost queries, reduced average query duration by ~50%, and established monitoring baselines using Query Store and wait-stat tracking.",
    },
    {
      title: "Backup, Restore, and HA/DR Validation Improvements",
      challenge:
        "Database environments had backup jobs in place but lacked full confidence in restore readiness, failover preparedness, and documented recovery procedures.",
      solution:
        "Reviewed backup architecture, validated restore workflows, tested recovery scenarios, and documented RTO/RPO-aligned operating procedures.",
      outcome:
        "Validated restore times against defined RTO targets, confirmed backup integrity, and documented recovery procedures enabling full environment recovery testing within target recovery windows.",
    },
  ];

  const metrics = [
    ["24+", "Years of SQL Server experience"],
    ["Enterprise", "Banking, healthcare, and technology environments"],
    ["AWS + Azure", "Modernization and migration capability"],
  ];

  const navItems = [
    ["#services", "Services"],
    ["#case-studies", "Case Studies"],
    ["#testimonials", "Client Experience"],
    ["#github", "GitHub"],
    ["#contact", "Contact"],
  ];

  const githubProjects = [
    {
      title: "When to move on-prem SQL Server to PostgreSQL on AWS",
      outcome: "Modernization decision framework for cost reduction, portability, and cloud-ready architecture.",
      href: "https://github.com/lachungo/",
      image: "/aws-migration.png",
    },
    {
      title: "Always On High Availability in Oracle VirtualBox (Home Lab)",
      outcome: "Hands-on HA architecture lab demonstrating failover design, replication, and operational resiliency.",
      href: "https://github.com/lachungo/",
      image: "/virtualbox-lab.png",
    },
    {
      title: "SQL Server Always On Database Refresh Architecture",
      outcome: "Enterprise-style refresh and reseeding architecture for controlled data movement in HA environments.",
      href: "https://github.com/lachungo/",
      image: "/alwayson-refresh.png",
    },
  ];

  const playbooks = [
    {
      title: "Blocking & Deadlock Investigation",
      desc: "Rapid triage approach for identifying blocking chains, lock escalation patterns, and deadlock root causes.",
    },
    {
      title: "TempDB Contention Resolution",
      desc: "Diagnosis and remediation for allocation contention, file layout issues, and tempdb-related workload bottlenecks.",
    },
    {
      title: "High CPU Query Triage",
      desc: "Structured investigation of expensive plans, regressions, and inefficient query patterns affecting throughput.",
    },
    {
      title: "Memory Pressure Analysis",
      desc: "Practical workflow for evaluating SQL memory usage, buffer pressure, grants, and competing workload demand.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050b14] text-slate-100 selection:bg-cyan-300/30 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 sm:h-12 sm:w-12">
              SQL
            </div>
            <div className="min-w-0">
              <div className="truncate text-lg font-bold tracking-tight text-white sm:text-xl">
                SQL-IT-Tech Solutions LLC
              </div>
              <div className="truncate text-xs text-slate-400 sm:text-sm">
                Atlanta, GA • Senior SQL Server Consulting • Cloud Modernization
              </div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 lg:flex">
            {navItems.map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 lg:hidden">
          <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-3 text-sm text-slate-300 sm:px-6 [&::-webkit-scrollbar]:hidden">
            {navItems.map(([href, label]) => (
              <a key={href} href={href} className="whitespace-nowrap hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
  <img
    src="/cloud-bg.png"
    alt="Cloud background"
    className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#04101c]/55 via-[#04101c]/35 to-[#04101c]/65" />

  <div className="absolute left-0 top-0 h-[22rem] w-[22rem] rounded-full bg-cyan-400/10 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
  <div className="absolute right-0 top-24 h-[20rem] w-[20rem] rounded-full bg-blue-500/8 blur-3xl sm:h-[26rem] sm:w-[26rem]" />

  <svg
    className="absolute inset-0 h-full w-full opacity-[0.03]"
    viewBox="0 0 1600 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <g stroke="url(#gridGlow)" strokeWidth="1">
      <path d="M80 180H460" />
      <path d="M460 180H760" />
      <path d="M760 180H1100" />
      <path d="M1100 180H1440" />
      <path d="M280 300H640" />
      <path d="M640 300H980" />
      <path d="M980 300H1320" />
      <path d="M220 480H560" />
      <path d="M560 480H900" />
      <path d="M900 480H1240" />
    </g>
    <defs>
      <linearGradient id="gridGlow" x1="0" y1="0" x2="1600" y2="900" gradientUnits="userSpaceOnUse">
        <stop stopColor="rgba(34,211,238,0.35)" />
        <stop offset="1" stopColor="rgba(59,130,246,0.10)" />
      </linearGradient>
    </defs>
  </svg>
</div>

        <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative">
              <div className="mb-5 inline-flex w-fit max-w-full rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs font-medium text-cyan-200 shadow-lg shadow-cyan-900/10 backdrop-blur sm:text-sm">
                <span className="truncate">
                  Trusted SQL Server consulting for banking, healthcare, and enterprise data platforms
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.0] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[4rem]">
                Enterprise SQL Databases. Simplified.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg md:text-xl md:leading-8">
                High-performance SQL Server architecture, cloud modernization, resilience engineering,
                and production-grade delivery for enterprise platforms that cannot afford downtime.
              </p>

              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/louis-achungo/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                >
                  View LinkedIn Profile
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3.5 text-center font-semibold text-slate-950 shadow-2xl transition hover:-translate-y-0.5"
                >
                  Book a Consultation
                </a>
                <a
                  href="#featured-projects"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-center font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  View Featured Work
                </a>
              </div>

              <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">✔ Reduced blocking by up to 70% in production systems</div>
                  <div className="rounded-2xl border border-white/10 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">✔ Cut query latency by ~50% across enterprise workloads</div>
                  <div className="rounded-2xl border border-white/10 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">✔ Restored sub-second response times under peak load</div>
                  <div className="rounded-2xl border border-white/10 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">✔ Validated HA/DR recovery against defined RTO targets</div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {metrics.map(([value, label]) => (
                  <div
                    key={value}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-sm"
                  >
                    <div className="text-3xl font-semibold text-white">{value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
                <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/95 to-slate-800/95 p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                        Advisory Focus
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-white">
                        Enterprise SQL Leadership
                      </div>
                    </div>
                    <div className="w-fit rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs text-cyan-100">
                      Atlanta, GA
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      [
                        "Performance Engineering",
                        "Reduce blocking, tune workloads, and stabilize high-transaction systems.",
                      ],
                      [
                        "Cloud Migration Strategy",
                        "Move SQL Server workloads to AWS and Azure with clean validation paths.",
                      ],
                      [
                        "Resilience & Continuity",
                        "Strengthen backup, recovery, failover, and operational readiness.",
                      ],
                    ].map(([title, desc]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="text-sm font-semibold text-white">{title}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-400">{desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      Best Fit Clients
                    </div>
                    <div className="mt-3 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                      <div className="rounded-xl bg-white/5 p-3">Banks and financial services firms</div>
                      <div className="rounded-xl bg-white/5 p-3">Healthcare and clinical data platforms</div>
                      <div className="rounded-xl bg-white/5 p-3">Enterprise application teams</div>
                      <div className="rounded-xl bg-white/5 p-3">Organizations planning modernization</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <h2 className="text-3xl font-bold text-white">About Louis Achungo</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Louis Achungo is a senior SQL Server Database Administrator and database infrastructure specialist
                with more than two decades of experience supporting enterprise data platforms. Based in Atlanta, GA,
                he has worked across banking, financial services, healthcare, and technology environments where
                reliability, security, and performance are critical.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                Through SQL-IT-Tech Solutions LLC, Louis helps organizations stabilize production SQL Server systems,
                troubleshoot complex performance issues, strengthen high availability and disaster recovery strategies,
                and execute database modernization initiatives including migrations to AWS and Azure platforms.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                His approach focuses on practical engineering outcomes: measurable performance improvements,
                resilient database architecture, and clear operational documentation that helps teams run
                mission-critical systems with confidence.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl sm:p-8">
              <div className="text-lg font-semibold text-white">Professional Highlights</div>
              <ul className="mt-5 space-y-4 text-slate-300">
                <li>• 24+ years of SQL Server administration and database infrastructure experience</li>
                <li>• Enterprise engagements with financial institutions, healthcare systems, and large technology organizations</li>
                <li>• Deep expertise in SQL Server performance tuning, HA/DR architecture, and production troubleshooting</li>
                <li>• Experience supporting high-transaction systems and regulated industry environments</li>
                <li>• Hands-on work with cloud database platforms including AWS RDS, PostgreSQL targets, and Azure SQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Services</h2>
            <p className="mt-2 max-w-3xl text-slate-400">
              Practical database consulting built around performance, reliability, modernization, and clear delivery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="case-studies" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">SQL Server Case Studies / Performance Fixes</h2>
            <p className="mt-2 max-w-3xl text-slate-400">
              Representative examples of how SQL-IT-Tech Solutions approaches performance recovery, resilience, and production SQL Server troubleshooting.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      Challenge
                    </div>
                    <p className="mt-2">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      Solution
                    </div>
                    <p className="mt-2">{study.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      Outcome
                    </div>
                    <p className="mt-2">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">Enterprise Client Experience</h2>
              <p className="mt-2 max-w-3xl text-slate-400">
                Selected representative engagements reflecting work delivered as a contracted database specialist.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-400">
              Company names are shown to describe professional experience only.
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <div
                key={item.company}
                className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                    <p className="mt-1 text-sm text-cyan-300">{item.role}</p>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-300">“{item.text}”</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.focus.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Representative summaries are intended for portfolio presentation and are not formal endorsements.
          </p>
        </section>

        <section
          id="github"
          className="relative mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white">GitHub Technical Portfolio</h2>
                <p className="mt-2 max-w-2xl text-slate-400">
                  Selected architecture-led projects that demonstrate database modernization, high availability, and SQL Server engineering depth.
                </p>
              </div>
              <a
                href="https://github.com/lachungo/"
                className="inline-flex w-fit items-center rounded-2xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950"
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub
              </a>
            </div>

            <div className="mt-8 grid gap-4">
              {githubProjects.map((project) => (
                <div
                  key={project.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] shadow-xl"
                >
                  <button
                    type="button"
                    onClick={() => window.open(project.image, "_blank", "noopener,noreferrer")}
                    className="group block h-56 w-full overflow-hidden text-left"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>

                  <div className="p-5">
                    <div className="text-lg font-semibold text-white">{project.title}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{project.outcome}</p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-cyan-300 hover:text-cyan-200"
                    >
                      View project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl sm:p-8">
            <div className="text-lg font-semibold text-white">SQL Server Troubleshooting Toolkit</div>
            <p className="mt-2 text-slate-400">
              Core playbooks used to approach performance engineering, resiliency, and production database stabilization.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {playbooks.map((playbook) => (
                <div key={playbook.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">{playbook.title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">{playbook.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-projects" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/5 to-blue-500/10 p-6 shadow-2xl backdrop-blur-sm">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Engagement Model</div>
                <div className="mt-2 text-xl font-semibold text-white">Assess</div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Review architecture, risks, performance signals, and recovery posture across the environment.
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Execution Model</div>
                <div className="mt-2 text-xl font-semibold text-white">Stabilize</div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Prioritize remediation, tune workload behavior, validate backups, and reduce operational risk quickly.
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Modernization Model</div>
                <div className="mt-2 text-xl font-semibold text-white">Modernize</div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Design cloud-ready architecture, improve resilience, and support migration paths to AWS and Azure.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured Consulting Projects</h2>
              <p className="mt-2 max-w-3xl text-slate-400">
                Curated portfolio pieces that reflect your approach to modernization, resilience, and technical execution.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 shadow-2xl backdrop-blur-sm"
              >
                <div className="text-sm font-medium text-cyan-300">{project.category}</div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.desc}</p>
                <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                  Portfolio-ready
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <h2 className="text-3xl font-bold text-white">Let’s talk</h2>
              <p className="mt-4 leading-7 text-slate-300">
                For consulting inquiries, migration work, SQL Server performance tuning, HA/DR reviews, or cloud database modernization, reach out directly using the contact details below.
              </p>
              <div className="mt-6 space-y-3 break-words text-slate-300">
                <div>
                  <span className="font-semibold text-white">Business:</span> SQL-IT-Tech Solutions LLC
                </div>
                <div>
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  <a href="tel:6786294984" className="text-cyan-300 hover:text-cyan-200">
                    678-629-4984
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-white">Location:</span> Atlanta, GA
                </div>
                <div>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a href="mailto:achungolm@gmail.com" className="text-cyan-300 hover:text-cyan-200">
                    achungolm@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-white">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/louis-achungo/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    linkedin.com/in/louis-achungo/
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-white">GitHub:</span>{" "}
                  <a
                    href="https://github.com/lachungo/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    github.com/lachungo/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#060d18] px-4 py-8 text-center text-sm text-slate-500 sm:px-6">
        © 2026 SQL-IT-Tech Solutions LLC • Atlanta, GA • Database Administration • Cloud Migration • Performance Tuning
      </footer>
    </div>
  );
}
