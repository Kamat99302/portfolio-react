import ProjectCard from "./components/ProjectCard"
function App() {
  return (
    <>
      <ProjectCard 
        kicker="2026 · React app" 
        title="Matt's Diner" 
        description="Restaurant kiosk ordering app consuming my npm component library. Dynamic routing, cart with Context API, FR/EN with react-i18next." 
        tags={["React", "Context API", "i18next"]}
        image="imgurl"
        imageAlt="imgalt"
        caseStudyTo=""
        demoHref=""
        codeHref=""/>
    </>
    
  )
}

export default App
