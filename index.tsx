/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const Header = () => (
  <header className="app-header">
    <div className="container">
      <nav className="header-nav">
        <a href="#" className="logo">
          <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/ssi-logo-mena.svg" alt="SSI Logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#">Solutions <i className="fas fa-chevron-down"></i></a></li>
          <li><a href="#">Careers</a></li>
        </ul>
        <a href="#" className="btn btn-outline-light">Get In Touch</a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
    <section className="hero">
        <div className="container">
            <div className="hero-content">
                <h1>Healthcare Solutions That Drive Revenue—Not Just Buzzwords</h1>
                <a href="#" className="btn btn-primary">Explore Optime'</a>
            </div>
            <div className="hero-graphic">
                <div className="hero-graphic-icons">
                    <span><i className="fas fa-chart-line"></i></span>
                    <span><i className="fas fa-users"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-calendar-alt"></i></span>
                </div>
                <div className="hero-graphic-main">
                    <div className="hero-graphic-buttons">
                        <button><i className="fas fa-plus"></i> Add Shifts</button>
                        <button><i className="fas fa-edit"></i> Adjust Shifts</button>
                        <button><i className="fas fa-cloud-upload-alt"></i> Publish</button>
                    </div>
                    <div className="hero-graphic-calendar">
                        <div className="day-card"><span>28</span><div className="bars"><div className="bar-red"></div><div className="bar-gray"></div></div></div>
                        <div className="day-card"><span>29</span><div className="bars"><div className="bar-yellow"></div><div className="bar-gray"></div></div></div>
                        <div className="day-card"><span>30</span><div className="bars"><div className="bar-gray"></div><div className="bar-gray"></div></div></div>
                        <div className="day-card"><span>31</span><div className="bars"><div className="bar-gray"></div><div className="bar-gray"></div></div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Results = () => (
    <section className="results-section">
        <div className="container">
            <h2 className="section-title">
                <span className="highlight">Results</span> We’ve Delivered
            </h2>
            <div className="results-grid">
                <h4 className="results-group-title">Private Acute Hospital – 200 Beds</h4>
                <h4 className="results-group-title">Emergency Department</h4>

                <div className="result-card">
                    <div className="result-value down">
                        <div className="arrow-icon-box">
                            <i className="fas fa-arrow-down"></i>
                        </div>
                        <span className="value-text">3.5%</span>
                    </div>
                    <p className="result-label">Cost Per Patient Visit</p>
                </div>
                <div className="result-card">
                    <div className="result-value up">
                        <div className="arrow-icon-box">
                            <i className="fas fa-arrow-up"></i>
                        </div>
                        <span className="value-text">3.5%</span>
                    </div>
                    <p className="result-label">Staff Utilization Efficiency</p>
                </div>

                <div className="result-card">
                    <div className="result-value down">
                        <div className="arrow-icon-box">
                            <i className="fas fa-arrow-down"></i>
                        </div>
                        <span className="value-text">19%–12%</span>
                    </div>
                    <p className="result-label">Turnover</p>
                </div>
                <div className="result-card">
                    <div className="result-value up">
                        <div className="arrow-icon-box">
                           <i className="fas fa-arrow-up"></i>
                        </div>
                        <span className="value-text">16 weeks</span>
                    </div>
                    <p className="result-label">Predictive Readiness in Crises</p>
                </div>
            </div>
        </div>
    </section>
);

const Experience = () => {
    const experienceData = [
        {
            logo: "https://mena.ssidecisions.com/wp-content/uploads/2024/04/TrinityHealth.svg",
            alt: "Trinity Health",
            stats: "93 Hospitals, 129,000 employees",
            description: "Improved supply chain contracting for over $5 billion in contracts, delivering efficiency, reducing Fraud, Waste, & Abuse (FWA)."
        },
        {
            logo: "https://mena.ssidecisions.com/wp-content/uploads/2024/04/Mercy.svg",
            alt: "Mercy",
            stats: "49 Acute Care & Speciality Hospitals with 52,000+ employees",
            description: "Workforce optimization to deliver efficiency in managing workforce scheduling on real-time basis."
        },
        {
            logo: "https://mena.ssidecisions.com/wp-content/uploads/2024/04/Maryland.svg",
            alt: "University of Maryland Medical System",
            stats: "11 Hospitals, 29,000 Employees",
            description: "Analyzed patient flow & throughout analytics to deliver more focused workforce scheduling."
        },
        {
            logo: "https://mena.ssidecisions.com/wp-content/uploads/2024/04/stanford.svg",
            alt: "Stanford School of Medicine",
            stats: "3 Hospitals, 40 Clinics, 4700+ Employees",
            description: "Staff credentials management & vendor management for contingent labor scheduling & management."
        },
        {
            logo: "https://i.imgur.com/uR042b7.png",
            alt: "Cross Country Healthcare",
            stats: "1,000 Hospital, 2,300 Employees",
            description: "National Contingent Workforce Management Inc. vendor management & scheduling."
        },
        {
            logo: "https://i.imgur.com/8a1a3bf.png",
            alt: "Alexian Brothers Medical Center",
            stats: "350 Bed Acute Care Hospital",
            description: "Utilization of operating rooms & throughout analytics to optimize workforce scheduling."
        }
    ];

    const gridRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const currentGrid = gridRef.current;
        if (currentGrid) {
            const items = currentGrid.querySelectorAll('.experience-item');
            items.forEach((item) => {
                observer.observe(item);
            });
        }

        return () => {
            if (currentGrid) {
                const items = currentGrid.querySelectorAll('.experience-item');
                items.forEach((item) => {
                    observer.unobserve(item);
                });
            }
        };
    }, []);

    return (
        <section className="experience-section">
            <div className="container">
                 <h2 className="section-title">Deep Healthcare Experience</h2>
                 <div className="experience-grid" ref={gridRef}>
                    {experienceData.map((item, index) => (
                        <div className="experience-item" key={index}>
                            <img src={item.logo} alt={item.alt} />
                            <h3>{item.stats}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
};


const CoreProblems = () => {
    const problemsData = [
        {
            title: "Staffing & Supplies",
            description: "Help you optimze the two biggest costs in healthcare — staffing & supplies",
        },
        {
            title: "Track Planned vs. Actuals",
            description: "We enable you to plan and then track actuals vs. planned to track real KPIs",
        },
        {
            title: "Manage Growing Tech Infrastructure",
            description: "We offer integrated capabilities to manage your IT operational efficiency, cloud transition and overall IT services optimization",
        },
        {
            title: "Advance Analytics Leveraging in Healthcare",
            description: "We are experts at AI delivery in secure, integrated manner for healthcare services reducing your risks, while enhancing services options",
        },
        {
            title: "Expertise at Value Engineering",
            description: "We can help organize operations and data to extract more value for reducing costs, improving revenue having AI as changing the game",
        },
        {
            title: "We Help Reduce Fraud, Waste, & Abuse (FWA)",
            description: "We help deliver outcomes that can reduce Fraud, Waste & Abuse within organization, delivering bottom-line impact",
        },
    ];

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [svgMetrics, setSvgMetrics] = React.useState({ height: 0, circlePositions: [] as number[] });

    const timelineWrapperRef = React.useRef<HTMLDivElement>(null);
    const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);

    React.useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, problemsData.length);
    }, [problemsData.length]);

    React.useLayoutEffect(() => {
        if (!timelineWrapperRef.current || itemRefs.current.length === 0 || itemRefs.current.some(ref => !ref)) {
            return;
        }

        const positions = itemRefs.current.map(el => {
            const titleEl = el!.querySelector('h4');
            const titleOffset = titleEl ? titleEl.offsetTop + titleEl.offsetHeight / 2 : el!.offsetHeight / 2;
            return el!.offsetTop + titleOffset;
        });

        const height = timelineWrapperRef.current.scrollHeight;
        setSvgMetrics({ height, circlePositions: positions });
    }, [problemsData.length]);

    React.useEffect(() => {
        const handleScroll = () => {
            // --- Scroll-spy for timeline items ---
            const triggerPoint = window.innerHeight * 0.4;
            let closestIndex = 0;
            let smallestDistance = Infinity;

            itemRefs.current.forEach((item, index) => {
                if (!item) return;
                const itemRect = item.getBoundingClientRect();
                const distance = Math.abs(itemRect.top - triggerPoint);

                if (distance < smallestDistance) {
                    smallestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [problemsData.length]);

    return (
        <section className="core-problems-section">
            <div className="container">
                <div className="core-problems-content">
                    <div className="core-problems-title">
                        <h2 className="section-title">Core Problems <span className="highlight">We Solve</span></h2>
                    </div>
                    <div className="core-problems-timeline-wrapper">
                        <div className="core-problems-timeline" ref={timelineWrapperRef}>
                            <svg className="timeline-svg" height={svgMetrics.height || '100%'} aria-hidden="true">
                                {svgMetrics.circlePositions.length > 1 && (
                                    <line
                                        className="timeline-connector"
                                        x1="9"
                                        y1={svgMetrics.circlePositions[0]}
                                        x2="9"
                                        y2={svgMetrics.circlePositions[svgMetrics.circlePositions.length - 1]}
                                    />
                                )}
                                {svgMetrics.circlePositions.map((posY, index) => (
                                    <circle
                                        key={index}
                                        className={`timeline-dot-svg ${index === activeIndex ? 'active' : ''}`}
                                        cx="9"
                                        cy={posY}
                                        r="6"
                                    />
                                ))}
                            </svg>
                            {problemsData.map((problem, index) => (
                                <div
                                    key={index}
                                    className={`timeline-item ${index === activeIndex ? 'active' : ''}`}
                                    ref={el => { itemRefs.current[index] = el; }}
                                >
                                    <div className="timeline-content">
                                        <h4>{problem.title}</h4>
                                        <p>{problem.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Partners = () => (
  <section className="partners-section">
    <div className="container">
      <p className="partners-title">Our Partners</p>
      <div className="main-partner">
        <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/aws-logo-white.svg" alt="AWS"/>
      </div>
      <div className="other-partners">
        <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/redington-logo-white.svg" alt="Redington"/>
        <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/digitaza-logo-white.svg" alt="Digitiza"/>
        <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/c10-logo-white.svg" alt="C10 Labs"/>
        <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/icme-logo-white.svg" alt="I.C.M.E."/>
        <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/iq-logo-white.svg" alt="iQconsulting"/>
      </div>
    </div>
  </section>
);

const OptimePlatform = () => (
    <section className="optime-section">
        <div className="container optime-container">
            <div className="optime-image">
                 <img src="https://i.imgur.com/gKq1gB7.png" alt="Optime' Platform Diagram" />
            </div>
            <div className="optime-text">
                <p className="optime-subtitle">Healthcare</p>
                <h2 className="section-title">What is Optime’ Platform</h2>
                <p>Optime’ is our flagship healthcare platform built to optimize workforce & supply chain across your hospital, not just visualize them.</p>
                <div className="optime-buttons">
                    <a href="#" className="btn btn-primary">Explore Optime'</a>
                    <a href="#" className="btn btn-outline-dark">Watch Demo</a>
                </div>
            </div>
        </div>
        <div className="trusted-by">
            <div className="container trusted-by-container">
                <p>We have been trusted by leading healthcare setups in the U.S.</p>
                <div className="trusted-logos">
                    <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/corewell.svg" alt="Corewell Health"/>
                    <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/Piedmont.svg" alt="Piedmont"/>
                    <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/Maryland.svg" alt="UMMS"/>
                    <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/henry-ford.svg" alt="Henry Ford Health"/>
                    <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/stanford.svg" alt="Stanford Medicine"/>
                    <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/dameron.svg" alt="Dameron Hospital"/>
                </div>
            </div>
        </div>
    </section>
);

const WhySSI = () => (
  <section className="why-ssi-section">
    <div className="container why-ssi-container">
      <h2 className="why-ssi-heading">Why SSI?</h2>
      <div className="why-ssi-lines" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 200 450" preserveAspectRatio="xMidYMid meet">
            <path d="M 0,225 L 50,225" stroke="var(--primary-red)" strokeWidth="2" fill="none" />
            <rect x="48" y="223" width="4" height="4" fill="var(--primary-red)" />
            
            {/* Main red branching lines */}
            <path d="M 50,225 C 100,225 120,45 200,45" stroke="var(--primary-red)" strokeWidth="1.5" fill="none" />
            <path d="M 50,225 C 90,225 110,135 200,135" stroke="var(--primary-red)" strokeWidth="1.5" fill="none" />
            <path d="M 50,225 C 90,225 110,225 200,225" stroke="var(--primary-red)" strokeWidth="1.5" fill="none" />
            <path d="M 50,225 C 90,225 110,315 200,315" stroke="var(--primary-red)" strokeWidth="1.5" fill="none" />
            <path d="M 50,225 C 100,225 120,405 200,405" stroke="var(--primary-red)" strokeWidth="1.5" fill="none" />
            
            {/* Decorative secondary lines */}
            <path d="M 50,225 C 110,225 130,80 180,80" stroke="rgba(212, 0, 44, 0.4)" strokeWidth="1" fill="none" />
            <path d="M 50,225 C 110,225 130,370 180,370" stroke="rgba(212, 0, 44, 0.4)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="why-ssi-features">
        <div className="feature-item">
          <div className="feature-icon"><i className="fas fa-globe"></i></div>
          <p className="feature-text">30+ years of delivering optimization solutions across industries</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><i className="fas fa-chart-line"></i></div>
          <p className="feature-text">We deliver solid technically innovative solutions that deliver outcomes</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><i className="fas fa-dollar-sign"></i></div>
          <p className="feature-text">We have saved clients millions of $$$ in costs and waste reduction</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><i className="fas fa-bullseye"></i></div>
          <p className="feature-text">We have global experiences & teams that bring solid depth to IT Projects</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><i className="fas fa-award"></i></div>
          <p className="feature-text">Trusted by leading health systems and industrial firms worldwide</p>
        </div>
      </div>
    </div>
  </section>
);

const Leadership = () => (
    <section className="leadership-section">
        <div className="container">
            <h2 className="section-title">EMEA Leadership</h2>
            <div className="leadership-grid">
                <div className="leader-card">
                    <img src="https://i.imgur.com/KydtSlk.png" alt="Shoaib Abbasi"/>
                    <h3>Shoaib Abbasi</h3>
                    <p className="leader-title">Founder & Chairman</p>
                    <p className="leader-description">Shoaib brings the wealth of global SSI experiences to facilitate accelerated focus on delivering solutions for our EMEA clients.</p>
                    <a href="#" className="btn btn-linkedin"><i className="fab fa-linkedin-in"></i> LinkedIn Profile</a>
                </div>
                 <div className="leader-card">
                    <img src="https://i.imgur.com/9C82Y1Z.png" alt="Jamal Hashmi"/>
                    <h3>Jamal Hashmi</h3>
                    <p className="leader-title">Head of SSI EMEA</p>
                    <p className="leader-description">Jamal leads EMEA and our global focus around healthcare technologies to shift the healthcare technology landscape for bottom-line outcomes.</p>
                    <a href="#" className="btn btn-linkedin"><i className="fab fa-linkedin-in"></i> LinkedIn Profile</a>
                </div>
                 <div className="leader-card">
                    <img src="https://i.imgur.com/46g2FjL.png" alt="Fahad Siddiqui"/>
                    <h3>Fahad Siddiqui</h3>
                    <p className="leader-title">Senior Vice President</p>
                    <p className="leader-description">Fahad helps bring the global network of partnerships & collaborations to help deliver more comprehensive solutions & outcomes for clients in EMEA.</p>
                    <a href="#" className="btn btn-linkedin"><i className="fab fa-linkedin-in"></i> LinkedIn Profile</a>
                </div>
            </div>
        </div>
    </section>
);


const GlobalPresence = () => (
  <section className="global-presence-section">
    <div className="container">
        <div className="global-presence-content">
            <div className="global-presence-map">
                 <img src="https://i.imgur.com/j1xG8hJ.png" alt="Global Map" className="map-image"/>
            </div>
            <div className="global-presence-text">
                <h2>A Global Outfit, Now in the <span className="highlight">Middle East</span></h2>
                <p>Opened office in Abu Dhabi in April 2025</p>
            </div>
        </div>
    </div>
  </section>
);

const FinalCTA = () => (
    <section className="final-cta-section">
        <div className="container final-cta-container">
            <div className="final-cta-text">
                <h2>Are you thinking AI and any affiliated solutions?</h2>
            </div>
            <div className="final-cta-actions">
                <p>We love to solve problems for our clients and it’s exciting to deliver real outcomes focused on solving real problems. We don’t sell technology, we deliver outcomes. We can help deliver in many other areas.</p>
                <div className="final-cta-buttons">
                     <a href="#" className="btn btn-primary">Request a Free Demo</a>
                     <a href="#" className="btn btn-outline-dark">Download Brochure</a>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="app-footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-column logo-column">
                    <img src="https://mena.ssidecisions.com/wp-content/uploads/2024/04/ssi-logo-mena.svg" alt="SSI Logo" />
                </div>
                <div className="footer-column links-column">
                    <h4>Solutions</h4>
                    <ul>
                        <li><a href="#">Healthcare</a></li>
                    </ul>
                </div>
                <div className="footer-column links-column">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="tel:+971 508 906 851">+971 508 906 851</a></li>
                        <li><a href="mailto:sales@ssidecisionsmena.com">sales@ssidecisionsmena.com</a></li>
                        <li>Floor no 15, Al Sarab Tower, ADGM square, Cloud suite 304, Abu Dhabi</li>
                    </ul>
                </div>
                 <div className="footer-column links-column">
                    <h4>Social</h4>
                    <ul>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Strategic Systems International. All Rights Reserved.</p>
            </div>
        </div>
        <a href="#" className="whatsapp-float">
            <i className="fab fa-whatsapp"></i>
        </a>
    </footer>
);


const App = () => (
    <>
      <Header />
      <main>
        <Hero />
        <Results />
        <Experience />
        <CoreProblems />
        <Partners />
        <OptimePlatform />
        <WhySSI />
        <Leadership />
        <GlobalPresence />
        <FinalCTA />
      </main>
      <Footer />
    </>
);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);