// Import components
import Hero from "../app/components/hero"
import Content from "../app/components/content"
import Stack from "../app/components/stack"

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans">
      <Hero />
      <Stack />
      <Content />
    </main>
  );
}
