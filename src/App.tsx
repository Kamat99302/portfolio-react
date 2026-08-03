import CodeBlock from "./components/CodeBlock"
import { Str, Kw } from "./components/codeHelpers"
function App() {
  return (

    <>
    <CodeBlock>
      {`{
  "role": "front-end apprentice",
  "company": "ORIS",
  "period": "2026-09 → 2027-09",
  "status": `}<Str>"current"</Str>
      {`
}`}
    </CodeBlock>


    <CodeBlock>
          <Str>const</Str> {  `dev = {
  stack: [`}<Kw>"React, "TypeScript"</Kw>{`],
  i18n: [`}<Kw>"en, "fr"</Kw>{`],
  status: `}<Kw>"open to work"</Kw>
      {`
} `}<Str>as const;</Str>
    </CodeBlock>

    </>
  )
}

export default App
