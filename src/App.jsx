export default function App() {
  const testimonials = [
    {
      company: 'Huntington Bank',
      role: 'Senior SQL Server DBA (Contract)',
      text: 'Delivered reliable SQL Server operations in a high-availability banking environment, with proactive performance tuning and strong incident response support.',
      focus: ['SQL Server Performance', 'HA/DR Support', 'Operational Stability'],
    },
    {
      company: 'Intel Corporation',
      role: 'Database Infrastructure Consultant (Contract)',
      text: 'Brought deep technical expertise to complex database environments through structured troubleshooting, documentation, and long-term operational improvements.',
      focus: ['Database Architecture', 'Performance Analysis', 'Documentation'],
    },
    {
      company: 'CO-OP Financial Services',
      role: 'SQL Server Database Administrator (Contract)',
      text: 'Supported mission-critical database platforms with attention to security, data integrity, and availability in financial-services environments.',
      focus: ['Mission-Critical SQL', 'Compliance', 'Data Integrity'],
    },
    {
      company: 'LucidHealth',
      role: 'Senior Database Consultant (Contract)',
      text: 'Provided dependable database support for healthcare systems where uptime and reporting accuracy were essential.',
      focus: ['Healthcare Data Systems', 'Reliability', 'Performance Tuning'],
    },
    {
      company: 'Park National Bank',
      role: 'Lead SQL Server DBA (Contract)',
      text: 'Led SQL Server operational support with performance optimization, backup strategy improvements, and HA/DR readiness work that reduced risk and improved resilience.',
      focus: ['Lead DBA Support', 'Backup Strategy', 'Database Resilience'],
    },
  ]

  const services = [
    {
      title: 'SQL Server Administration',
      desc: 'Production support, patching, backup and recovery, security hardening, and day-to-day operational stability.',
    },
    {
      title: 'Performance Tuning',
      desc: 'Query tuning, indexing strategy, blocking analysis, concurrency troubleshooting, and high-load workload stabilization.',
    },
    {
      title: 'Cloud Migration',
      desc: 'SQL Server migrations to AWS RDS, Aurora PostgreSQL, and Azure SQL with validation, rollback planning, and documentation.',
    },
    {
      title: 'HA / DR Readiness',
      desc: 'Always On, clustering, failover planning, restore testing, RTO/RPO analysis, and business continuity reviews.',
    },
  ]

  const demos = [
    {
      title: 'SQL Server to AWS RDS via S3',
      desc: 'A short migration walkthrough showing backup workflow, S3 staging, restore orchestration, and validation.',
    },
    {
      title: 'CDC / Replication Cutover Demo',
      desc: 'A concise technical video showing near-real-time migration patterns and low-downtime validation steps.',
    },
    {
      title: 'AWS CLI Automation for DB Migration',
      desc: 'A script-driven demo covering AWS CLI setup, migration support commands, and repeatable deployment flow.',
    },
  ]

  const featuredProjects = [
    {
      title: 'SQL Server to AWS RDS Migration Lab',
      category: 'Cloud modernization',
      desc: 'A portfolio-ready migration walkthrough covering assessment, backup strategy, restore flow, validation, and post-migration hardening.',
    },
    {
      title: 'Enterprise SQL Performance Triage',
      category: 'Performance engineering',
      desc: 'A structured methodology for resolving blocking, concurrency issues, and high-load database bottlenecks in production systems.',
    },
    {
      title: 'HA/DR Readiness Architecture Review',
      category: 'Resilience planning',
      desc: 'A consulting engagement model focused on backup integrity, failover readiness, RTO/RPO alignment, and operational runbooks.',
    },
  ]

  const metrics = [
    ['24+', 'Years of SQL Server experience'],
    ['Enterprise', 'Banking, healthcare, and technology environments'],
    ['AWS + Azure', 'Modernization and migration capability'],
  ]

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100 selection:bg-cyan-300/30 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
              SQL
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-white">SQL-IT-Tech Solutions LLC</div>
              <div className="text-sm text-slate-400">Atlanta, GA • Senior SQL Server Consulting • Cloud Modernization</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#testimonials" className="hover:text-white">Client Experience</a>
            <a href="#github" className="hover:text-white">GitHub</a>
            <a href="#videos" className="hover:text-white">Video Demos</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-0 top-40 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative">
              <div className="mb-5 inline-flex w-fit rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-900/10 backdrop-blur">
                Trusted SQL Server consulting for banking, healthcare, and enterprise data platforms
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
                Premium database consulting for mission-critical SQL Server environments.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                SQL-IT-Tech Solutions helps financial, healthcare, and enterprise teams improve performance,
                strengthen resilience, and modernize database platforms across SQL Server, AWS, and Azure.
                The focus is high-value delivery: lower risk, better uptime, faster systems, and executive-ready outcomes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-950 shadow-2xl transition hover:-translate-y-0.5">
                  Book a Consultation
                </a>
                <a href="#featured-projects" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                  View Featured Work
                </a>
              </div>
              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {metrics.map(([value, label]) => (
                  <div key={value} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-sm">
                    <div className="text-3xl font-semibold text-white">{value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">Advisory focus</div>
                      <div className="mt-2 text-2xl font-semibold text-white">Enterprise SQL Leadership</div>
                    </div>
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs text-cyan-100">
                      Atlanta, GA
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      ['Performance Engineering', 'Reduce blocking, tune workloads, and stabilize high-transaction systems.'],
                      ['Cloud Migration Strategy', 'Move SQL Server workloads to AWS and Azure with clean validation paths.'],
                      ['Resilience & Continuity', 'Strengthen backup, recovery, failover, and operational readiness.'],
                    ].map(([title, desc]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-sm font-semibold text-white">{title}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-400">{desc}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Best fit clients</div>
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

        <section id="about" className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
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

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl">
              <div className="text-lg font-semibold text-white">Professional highlights</div>
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

        <section id="services" className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Services</h2>
            <p className="mt-2 max-w-3xl text-slate-400">
              Practical database consulting built around performance, reliability, modernization, and clear delivery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="relative mx-auto max-w-7xl px-6 py-16">
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
              <div key={item.company} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                    <p className="mt-1 text-sm text-cyan-300">{item.role}</p>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-300">“{item.text}”</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.focus.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
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

        <section id="github" className="relative mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white">GitHub Technical Portfolio</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Showcase practical work such as migration guides, T-SQL automation, performance health checks,
              and database reliability frameworks. This is where prospects can see how you think and deliver.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• SQL Server to AWS RDS / PostgreSQL migration guides</li>
              <li>• Performance tuning and troubleshooting playbooks</li>
              <li>• Data quality validation and duplicate-detection frameworks</li>
              <li>• HA/DR readiness checklists and automation scripts</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://github.com/lachungo" className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950" target="_blank" rel="noreferrer">
                Open GitHub
              </a>
              <a href="#videos" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white">
                See Video Demos
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Visit the GitHub profile to review portfolio repositories and migration-focused project work.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl">
            <div className="text-lg font-semibold text-white">Suggested pinned repositories</div>
            <div className="mt-5 grid gap-4">
              {[
                'sqlserver-to-aws-rds-postgresql-migration',
                'sql-server-performance-health-check',
                'data-quality-duplicate-detection-framework',
                'ha-dr-readiness-runbook',
              ].map((repo) => (
                <div key={repo} className="rounded-2xl border border-white/10 bg-white/5 p-4 font-mono text-sm text-cyan-200">
                  {repo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Short Technical Video Demos</h2>
            <p className="mt-2 max-w-3xl text-slate-400">
              Compact walkthroughs designed for recruiters, hiring managers, and clients who want to see practical migration methods in action.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {demos.map((demo) => (
              <div key={demo.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm">
                <div className="mb-4 rounded-2xl border border-dashed border-white/15 bg-slate-900/80 px-4 py-10 text-center text-sm text-slate-500">
                  Video placeholder
                </div>
                <h3 className="text-xl font-semibold text-white">{demo.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{demo.desc}</p>
                <div className="mt-5 text-sm text-cyan-300">Embed YouTube or Vimeo link here</div>
              </div>
            ))}
          </div>
        </section>

        <section id="featured-projects" className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured Consulting Projects</h2>
              <p className="mt-2 max-w-3xl text-slate-400">
                Curated portfolio pieces that reflect your approach to modernization, resilience, and technical execution.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 shadow-2xl backdrop-blur-sm">
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

        <section id="contact" className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white">Let’s talk</h2>
              <p className="mt-4 leading-7 text-slate-300">
                For consulting inquiries, migration work, SQL Server performance tuning, HA/DR reviews, or cloud database modernization, reach out directly using the contact details below.
              </p>
              <div className="mt-6 space-y-3 text-slate-300">
                <div><span className="font-semibold text-white">Business:</span> SQL-IT-Tech Solutions LLC</div>
                <div><span className="font-semibold text-white">Phone:</span> <a href="tel:6786294984" className="text-cyan-300 hover:text-cyan-200">678-629-4984</a></div>
                <div><span className="font-semibold text-white">Location:</span> Atlanta, GA</div>
                <div><span className="font-semibold text-white">Email:</span> <a href="mailto:achungolm@gmail.com" className="text-cyan-300 hover:text-cyan-200">achungolm@gmail.com</a></div>
                <div><span className="font-semibold text-white">LinkedIn:</span> <a href="https://www.linkedin.com/in/louis-achungo" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">linkedin.com/in/louis-achungo</a></div>
                <div><span className="font-semibold text-white">GitHub:</span> <a href="https://github.com/lachungo" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">github.com/lachungo</a></div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-slate-800 p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white">Suggested next refinements</h3>
              <ul className="mt-5 space-y-4 text-slate-300">
                <li>• Add your first 1–3 migration demo videos</li>
                <li>• Add real project screenshots from sanitized labs</li>
                <li>• Connect a contact form or calendar booking link</li>
                <li>• Add a professional headshot to the About section</li>
                <li>• Replace suggested repo names with your published portfolio repositories</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#060d18] px-6 py-8 text-center text-sm text-slate-500">
        © 2026 SQL-IT-Tech Solutions LLC • Atlanta, GA • Database Administration • Cloud Migration • Performance Tuning
      </footer>
    </div>
  )
}
