import Link from "next/link"

export default function Hero() {
    return (
        <section id="hero" className="w-full flex justify-center px-5 pb-5 pt-20 md:pb-0 md:px-10 md:min-h-screen md:items-center">

            {/* CONTENT */}
            <div className="flex flex-col-reverse md:flex-row items-center relative w-full max-w-6xl rounded-xl bg-[#0d0d0d]">

                {/* LEFT SIDE */}
                <div className="mx-12 mb-12 mt-6 md:m-16 z-10">
                    <p className="text-sm tracking-widest text-neutral-500 md:mb-[-5px] lg:mb-[-10px]">
                        Hi, I'm..
                    </p>

                    <h1 className="font-bold text-white tracking-tighter ml-[-5px] sm:ml-[-0.6vw] md:ml-[-1vw] text-7xl md:text-[5rem] lg:text-[11rem] xl:text-[15rem]">
                        David
                    </h1>

                    <hr className="mt-4 md:mt-0 text-[var(--theme-primary)]" />

                    <p className="mt-6 text-2xl text-[var(--theme-light)] font-medium">
                        Full Stack Developer
                    </p>

                    <p className="mt-1 text-neutral-400 max-w-md leading-relaxed">
                        Building modern web applications with clean architecture
                        and scalable systems.
                    </p>

                    <div className="mt-8 flex gap-4 flex-col lg:flex-row">

                        <Link
                            href="#footer"
                            className="bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium w-full block text-center hover:bg-[var(--theme-light)] transition"
                        >
                            Contact
                        </Link>

                        <Link href="#content" className="group border border-white/20 text-white px-5 py-2.5 rounded-md text-sm w-full text-center hover:border-[var(--theme-light)] justify-center transition flex flex-row">
                            <p>Projects</p>
                            <span className='inline-block translate-x-1 transition-transform group-hover:translate-x-2'>→</span>
                        </Link>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full relative h-[200px] sm:h-[500px] md:h-[600px] md:pt-0 pt-5">
                    <img
                        id="hero-img"
                        src="/media/profile.png"
                        alt="David"
                        className="
                                md:bottom-[0px] 
                                right-[0px] 
                                max-w-none 
                                pointer-events-none
                                h-[115%]
                                absolute
                                object-top

                                // Desktop sizing
                                md:w-auto 
                                md:rounded-br-xl

                                // Mobile sizing
                                w-full
                                object-cover
                                rounded-b-xl

                                // Masking for desktop to fade out the image on the right side
                                md:[mask-image:linear-gradient(to_right,transparent,black_100px)]
                                md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_100px)]

                                // On smaller screen, gradient is applied to bottom
                                [mask-image:linear-gradient(to_top,transparent,black_100px)]
                                [-webkit-mask-image:linear-gradient(to_top,transparent,black_100px)]
                                "
                    />
                </div>

            </div>
        </section>
    );
}