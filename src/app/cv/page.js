'use client'

import { useEffect, useState } from "react"

// Import experimental features
import { ViewTransition } from 'react'

import Accordion from "@/app/components/reusable/accordion";
import { View } from "lucide-react";

export default function CV() {

    const [collapsed, setCollapsed] = useState(false)

    function toggleCollapse() {
        setCollapsed(!collapsed)
    }

    return (
        <ViewTransition>
            <div className='flex justify-center px-5 pt-30 pb-0 md:pb-30 md:px-10 md:min-h-screen'>
                {/* Wrapper */}
                <div className='w-full xl:w-2/3 select-none'>

                    {/* Header */}
                    <div className='mb-10'>
                        <h1 className='text-5xl text-center sm:text-7xl sm:text-left xl:text-8xl font-bold -ml-1 tracking-tight'>David Mould</h1>
                        <h2 className='text-sm text-center sm:text-left sm:text-lg mb-5 text-[var(--theme-highlight)]'>Multiple Award-Winning BSc (Hons) Web and Mobile Development Graduate</h2>
                    </div>

                    {/* Controls */}
                    <div className='flex gap-4 mb-10 justify-center sm:justify-start'>
                        {/* Download CV */}
                        <a href="https://tr.ee/oX9He2f5SI" target="_blank" className='bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium w-full block text-center hover:bg-[var(--theme-light)] transition'>
                            Download PDF
                        </a>
                        {/* Collapse all */}
                        <button className='border border-white/20 text-white px-5 py-2.5 rounded-md text-sm w-full text-center hover:border-[var(--theme-light)] transition' onClick={toggleCollapse}>
                            {collapsed ? "Expand All" : "Collapse All"}
                        </button>
                    </div>

                    {/* Personal profile */}
                    <Accordion title="Personal Profile" collapsed={collapsed}>
                        <p className="text-white/80 font-extralight">Recent graduate with full-stack experience across a range of technologies, alongside hands-on experience with automation and data-driven solutions. Proven ability to translate business needs into practical outcomes, having delivered end-to-end systems independently. Recognised for academic excellence, leadership, and clear stakeholder communication. Developed a strong interest in how systems, data, and processes interact, with hands-on experience in workflow automation and structured data handling using Power Platform and Power BI. Focused on building reliable, user-centred solutions that improve efficiency and solve real operational problems within structured delivery environments.</p>
                    </Accordion>

                    {/* Key Skills */}
                    <Accordion title="Key Skills" collapsed={collapsed}>
                        <div className="grid grid-cols-2 gap-3">
                            <ul className="list-disc pl-4 text-white/80 font-extralight">
                                <li className="font-bold list-none">Core Skills</li>
                                <li>Communication: Clear and effective communication across teams, stakeholders, and other parties</li>
                                <li>Translation: Converting business needs into practical technical solutions</li>
                                <li>Problem Solving: Analytical thinking and structured issue resolution</li>
                                <li>Time Management: Prioritising tasks and delivering to deadlines</li>
                                <li>Data Handling: Experience working with structured data, applying data protection practices, and exposure to data governance</li>
                                <li>Collaboration: Effective teamwork and independent contribution</li>
                                <li>Leadership: Coordinating teams and leading project initiatives</li>
                                <li>Adaptability: Performing effectively in fast-paced environments</li>
                                <li>Detail Focus: Ensuring accuracy and continuous process improvement</li>
                                <li>Stakeholder Engagement: Requirements gathering, communication, and collaboration across teams</li>
                            </ul>
                            <ul className="list-disc pl-4 text-white/80 font-extralight">
                                <li className="font-bold list-none">Technical & Systems Skills</li>
                                <li>Data & Databases: MySQL, PostgreSQL, querying, reporting, and structured data handling</li>
                                <li>Automation & Systems: Power Apps, Power Automate, workflow optimisation, process improvement</li>
                                <li>Data Visualisation: Power BI dashboards, reporting, and insight generation</li>
                                <li>Version Control: Git, branching strategies, collaborative workflows</li>
                                <li>Development: JavaScript, Python, PHP, SQL, object-oriented programming, backend and scripting development</li>
                                <li>Web Development: HTML, CSS, responsive design, REST APIs, frameworks</li>
                                <li>Practices: Agile, Kanban, CI/CD and iterative development methods</li>
                                <li>UI/UX: Accessibility, layout, hierarchy, user-centred design</li>
                                <li>Architecture: Designing scalable systems and modular components</li>
                                <li>APIs & Integration: Designing and consuming REST APIs, integrating systems, and services</li>
                            </ul>
                        </div>
                    </Accordion>

                    {/* Industrial placement */}
                    <Accordion title="Industrial Placement" collapsed={collapsed}>
                        <div className="grid grid-cols-[min-content_1fr] gap-3">
                            <p className="font-semibold text-[var(--theme-light)]">2024-2025</p>
                            <p className="font-bold">Automation Developer at Scottish Power Renewables</p>
                        </div>
                        <ul className="list-disc pl-4 text-white/80 font-extralight mt-3">
                            <li>Sole Automation Developer responsible for analysing business processes and delivering end-to-end automation solutions across business processes</li>
                            <li>Identified and implemented automation opportunities, saving hundreds of hours of manual work annually</li>
                            <li>Gathered and translated stakeholder requirements into robust, deliverable automation solutions</li>
                            <li>Delivered automations end-to-end from proof-of-concept through deployment and post-go-live support, with full documentation and testing</li>
                            <li>Designed reusable components and exception-handling routines to support maintainability and future scalability</li>
                            <li>Worked with structured data and reporting tools, including Power BI, to support visibility and decision-making across processes</li>
                        </ul>
                    </Accordion>

                    {/* Education */}
                    <Accordion title="Education" collapsed={collapsed}>
                        {/* Uni */}
                        <div className="mb-3">
                            <div className="grid grid-cols-[min-content_1fr] gap-3">
                                <p className="font-semibold text-[var(--theme-light)]">2021-2026</p>
                                <p className="font-bold">BSc (Hons) Web and Mobile Development (Sandwich), University of the West of Scotland</p>
                            </div>
                            <ul className="list-disc pl-4 text-white/80 font-extralight mt-3">
                                <li><span className="font-bold">Final year, Honours Project</span>: Designed and developed a full-stack peer-to-peer marketplace application focused on facilitating trusted local trades and services. The project emphasised trust-building through UX and HCI principles, including identity transparency, ratings, and clear interaction flows. Responsibilities included requirements gathering, system design, and end-to-end implementation of core features such as user authentication, service listings, and interaction workflows. Also designed system architecture and data flow between frontend, backend, and database layers to support scalable interactions. Conducted UX research and evaluation using established HCI heuristics and user-centred design methods, and managed the project lifecycle independently, including planning, documentation, and iterative development.</li>
                                <li><span className="font-bold">Second year, Group Project</span>: Led development of a desktop application for tracking football tournament results, inspired by the World Cup format. Implemented using Python and tkinter, the program allowed users to manage teams, input match results, and save tournament data for future reference. Managed project planning, including research, scheduling, and risk management, while utilizing tools such as Gantt charts and UML for project visualization and evaluation.</li>
                            </ul>
                        </div>
                        {/* College */}
                        <div className="mb-3">
                            <div className="grid grid-cols-[min-content_1fr] gap-3">
                                <p className="font-semibold text-[var(--theme-light)]">2010-2012</p>
                                <p className="font-bold">HND Interactive Media, City of Glasgow college</p>
                            </div>
                            <ul className="list-disc pl-4 text-white/80 font-extralight mt-3">
                                <li><span className="font-bold">Final Graded Unit Project</span>: Developed a learning application using ActionScript 3, tailored for a young age group with a strong emphasis on accessibility. The project involved meticulous planning, including the creation of storyboards and work breakdown schedules, to ensure effective implementation and user engagement.</li>
                            </ul>
                        </div>
                        {/* High school */}
                        <div>
                            <div className="grid grid-cols-[min-content_1fr] gap-3">
                                <p className="font-semibold text-[var(--theme-light)]">2004-2010</p>
                                <p className="font-bold">Bishopbriggs Academy High School</p>
                            </div>
                            <ul className="list-disc pl-4 text-white/80 font-extralight mt-3">
                                <li><span className="font-bold">Various subjects</span>: Higher Maths, Higher French, Int2 Music, Int2 Computing.</li>
                            </ul>
                        </div>
                    </Accordion>

                    {/* Employment */}
                    <Accordion title="Employment" collapsed={collapsed}>
                        {/* TP */}
                        <div className="mb-3">
                            <div className="grid grid-cols-[min-content_1fr] gap-3">
                                <p className="font-semibold text-[var(--theme-light)]">2017-2024</p>
                                <p className="font-bold">Teleperformance UK, various positions</p>
                            </div>
                            <ul className="list-disc pl-4 text-white/80 font-extralight mt-3">
                                <li>Customer-facing roles requiring strong communication, problem solving, and attention to detail.</li>
                                <li>Worked with performance data and KPIs in a structured, target-driven environment.</li>
                                <li>Contributed to process improvement initiatives to support operational efficiency.</li>
                                <li>Developed resilience, time management, and teamwork skills in fast-paced environments.</li>
                            </ul>
                        </div>
                        {/* PT */}
                        <div className="mb-3">
                            <div className="grid grid-cols-[min-content_1fr] gap-3">
                                <p className="font-semibold text-[var(--theme-light)]">2014-2016</p>
                                <p className="font-bold">The Prince's Trust, Volunteer Event Production - Graphic Designer</p>
                            </div>
                            <ul className="list-disc pl-4 text-white/80 font-extralight mt-3">
                                <li>Designed visual assets and presentations for large-scale charity events.</li>
                                <li>Worked under tight deadlines in high-pressure environments.</li>
                            </ul>
                        </div>
                    </Accordion>

                    {/* Positions of responsibility */}
                    <Accordion title="Positions of Responsibility" collapsed={collapsed}>
                        {/* Society */}
                        <div className="mb-3">
                            <div className="grid grid-cols-[min-content_1fr] gap-3">
                                <p className="font-semibold text-[var(--theme-light)]">2024-2024</p>
                                <p className="font-bold">Society President - Digital Development, University of the West of Scotland</p>
                            </div>
                            <ul className="list-disc pl-4 text-white/80 font-extralight mt-3">
                                <li>Founded and led the Digital Development Society, defining its vision, objectives, and long-term direction</li>
                                <li>Planned and delivered technical events including coding challenges, workshops, and collaborative projects</li>
                                <li>Coordinated members, speakers, and activities to encourage participation and skill development</li>
                                <li>Fostered a collaborative and inclusive environment for students interested in software, web, and digital technologies</li>
                                <li>Developed leadership, strategic planning, event management, and community-building skills</li>
                                <li>Encouraged practical application of development skills through collaborative, solution-focused projects</li>
                            </ul>
                        </div>
                        {/* PT */}
                        <div className="mb-3">
                            <div className="grid grid-cols-[min-content_1fr] gap-3">
                                <p className="font-semibold text-[var(--theme-light)]">2023-2024</p>
                                <p className="font-bold">Student Representative - University of the West of Scotland, Student Union</p>
                            </div>
                            <ul className="list-disc pl-4 text-white/80 font-extralight mt-3">
                                <li>Represented student interests in meetings with academic staff and university representatives</li>
                                <li>Gathered, communicated, and escalated student feedback and concerns in a professional manner</li>
                                <li>Acted as a liaison between students and the university to support constructive dialogue and resolution</li>
                                <li>Advocated for improvements to student experience, wellbeing, and academic processes</li>
                                <li>Strengthened skills in communication, negotiation, advocacy, and leadership</li>

                            </ul>
                        </div>
                    </Accordion>

                    {/* Awards and certifications */}
                    <Accordion title="Awards and Certifications" collapsed={collapsed}>
                        <ul className="list-none text-white/80 font-extralight mt-3">
                            <li className="grid grid-cols-[min-content_42px_1fr] gap-3">
                                <span className="cv-bullet"></span>
                                <p><span className="font-bold text-[var(--theme-light)]">2024</span></p>
                                <p>BSc Web and Mobile Development - Level 9 - Court Medal, University of the West of Scotland</p>
                            </li>
                            <li className="grid grid-cols-[min-content_42px_1fr] gap-3">
                                <span className="cv-bullet"></span>
                                <p><span className="font-bold text-[var(--theme-light)]">2023</span></p>
                                <p>BSc Web and Mobile Development - Level 8 - Court Medal, University of the West of Scotland</p>
                            </li>
                            <li className="grid grid-cols-[min-content_42px_1fr] gap-3">
                                <span className="cv-bullet"></span>
                                <p><span className="font-bold text-[var(--theme-light)]">2022</span></p>
                                <p>BSc Web and Mobile Development - Level 7 - Court Medal, University of the West of Scotland</p>
                            </li>
                            <li className="grid grid-cols-[min-content_42px_1fr] gap-3">
                                <span className="cv-bullet"></span>
                                <p><span className="font-bold text-[var(--theme-light)]">2022</span></p>
                                <p>Microsoft Office Specialist: Microsoft Office Excel (MOS), Certiport</p>
                            </li>
                            <li className="grid grid-cols-[min-content_42px_1fr] gap-3">
                                <span className="cv-bullet"></span>
                                <p><span className="font-bold text-[var(--theme-light)]">2021</span></p>
                                <p>Microsoft Office Specialist: Microsoft Office Word (MOS), Certiport</p>
                            </li>
                        </ul>
                    </Accordion>

                </div>
            </div>
        </ViewTransition>
    );
}