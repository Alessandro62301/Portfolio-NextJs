import Footer from "@/components/dom/Footer"
import Hero from "@/components/dom/Hero"
import Menu from "@/components/dom/Menu"
import About from "@/components/dom/About"
import Skills from "@/components/dom/Skills"
import Projects from "@/components/dom/Projects"
import Contact from "@/components/dom/Contact"

const Page = (props) => {
  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto">
      <Menu />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Alessandro Mello',
    },
  }
}
