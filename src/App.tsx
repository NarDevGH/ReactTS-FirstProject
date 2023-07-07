import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

function App() {
  return (
    <>
      <Heading title="Hello World" />
      <Section>String Children</Section>
      <Counter />
      <List
        items={["Coffe", "Tea", "Nesquik"]}
        render={(item: string) => <span className="Drink">{item}</span>}></List>
    </>
  )
}

export default App
