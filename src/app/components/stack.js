import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiFlask,
  SiDjango,
  SiAndroid,
  SiElectron,
  SiFlutter
} from "react-icons/si"

import { TbBrandReactNative } from "react-icons/tb"
import { FaJava } from "react-icons/fa6"

export const stack = [
    { icon: SiHtml5, label: "HTML" },
    { icon: SiCss, label: "CSS" },
    { icon: SiTailwindcss, label: "Tailwind" },
    { icon: SiJavascript, label: "JS" },
    { icon: SiReact, label: "React" },
    { icon: SiNextdotjs, label: "Next" },
    { icon: SiNodedotjs, label: "Node" },
    { icon: SiPhp, label: "PHP" },
    { icon: SiLaravel, label: "Laravel" },
    { icon: SiMysql, label: "MySQL" },
    { icon: SiPostgresql, label: "Postgres" }, // NeonDB fallback
    { icon: SiPython, label: "Python" },
    { icon: SiFlask, label: "Flask" },
    { icon: SiDjango, label: "Django" },
    { icon: FaJava, label: "Java" },
    { icon: SiAndroid, label: "Android" },
    { icon: SiElectron, label: "Electron" },
    { icon: SiFlutter, label: "Flutter" },
    { icon: TbBrandReactNative, label: "React Native" }
]

export default function ComponentName() {
    return (
        <section className="marquee bg-[#0d0d0d] py-6">
            <div className="track flex gap-[3rem] md:gap-[6rem]">
                {[...stack, ...stack].map(({ icon: Icon, label }, i) => (
                    <div key={i} className="item flex flex-col items-center gap-4 pointer-events-auto">
                        <Icon className="text-[1.5rem] md:text-[2rem] transition" />
                        <span className="text-[0.75rem] md:text-xs">{label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}