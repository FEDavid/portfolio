// Import components
import Hero from "../app/components/hero"
import Content from "../app/components/content"
import Stack from "../app/components/stack"
import AboutMe from "./components/about";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans">
      <Hero />
      <Stack />
      <AboutMe />
      <Content />
    </main>
  );
}
