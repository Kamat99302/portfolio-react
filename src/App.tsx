import { Stack } from "@mui/material"
import LearningCard from "./components/LearningCard"
import ChallengesList from "./components/ChallengesList"

function App() {
  return (
    <>
    <Stack direction={'row'} spacing={2}>
    <LearningCard kicker={"Context API"} text={"Shared global state across pages: cart, active category, derived totals — without prop drilling."}/>
    <LearningCard kicker={"Context API"} text={"Shared global state across pages: cart, active category, derived totals — without prop drilling."}/>
    <LearningCard kicker={"Context API"} text={"Shared global state across pages: cart, active category, derived totals — without prop drilling."}/>
    </Stack>
  
  <ChallengesList challenges={["Separated data from display so translation never breaks category filtering", "Cart with Context API — add, remove, totals and tax computed as derived state",
  "Dynamic routing with React Router — product page by ID", "Wired the component library via npm instead of npm link for deployment"
   ]} />
  </>
  )
}

export default App
