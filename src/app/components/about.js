'use client'

// Import components
import SkillCard from "./reusable/skillcard";

// Import libraries
import { Code, Layout, Wrench, RefreshCw } from "lucide-react"

export default function AboutMe() {
    return (
        <section className="bg-[var(--theme-primary)] flex justify-center items-center w-full px-5 py-12 md:py-24">
            <div className="flex flex-col max-w-6xl w-full">

                {/* About */}
                <div>
                    <h2 className="text-4xl md:text-7xl font-bold"><span className="text-[var(--theme-highlight)] mr-0.5">.</span>About</h2>
                    <div className="mt-1 space-y-4 text-sm text-[var(--theme-bright)]/90">
                        <p>
                            Web and mobile developer with a full-stack focus, leaning toward front-end work and user experience.
                        </p>

                        <p>
                            Most of what I build is centred around keeping things clear and usable—connecting interfaces to APIs and backend logic in a way that makes sense, rather than overcomplicating things for the sake of it. I’m particularly interested in how people actually interact with what they’re given, and try to reflect that in how I structure and design applications.
                        </p>

                        <p>
                            I’ve worked across both development and design, and have had some experience freelancing. These days, I’m focused on building solid projects, improving my technical ability, and moving further into a development role.
                        </p>

                        <p>
                            I write occasionally about getting started in the industry—portfolios, networking, and figuring things out as you go. It’s based on my own experience rather than anything formal or definitive.
                        </p>
                    </div>
                </div>

                {/* Header */}
                <div className="mt-6 md:mt-12 flex flex-col gap-6">
                    <h2 className="text-4xl md:text-7xl font-bold"><span className="text-[var(--theme-highlight)] mr-0.5">.</span>Skills</h2>
                </div>

                {/* Skill Cards */}
                <div className="mt-3 flex flex-col">
                    <div className="flex flex-col md:flex-row gap-6">
                        <SkillCard
                            title="Full-Stack Development"
                            description="Building complete applications, from front-end interfaces to backend logic and APIs."
                            Icon={Code}
                        />

                        <SkillCard
                            title="Front-End & UX"
                            description="Creating interfaces that are clear, usable, and easy to interact with."
                            Icon={Layout}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 mt-6">
                        <SkillCard
                            title="Practical Projects"
                            description="Focused on building things that solve real problems rather than over-engineered ideas."
                            Icon={Wrench}
                        />

                        <SkillCard
                            title="Learning & Iteration"
                            description="Continuously improving through real work, refining ideas and approaches over time."
                            Icon={RefreshCw}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}