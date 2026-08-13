import CertificationCard from "./components/CertificationCard"

function App() {
  return (
    <>
    <CertificationCard 
      kicker="Scrimba · Dec 2025"
      certificationTitle="Frontend Developer Career Path"
      description="81.6 hours · 1,489 lessons. React, JavaScript, UI patterns, working with APIs."
      status="In progress"
      chipVariant="outline"
      progressionBarValue={20}
      />
  </>
  )
}

export default App
