import './App.css'
import PersonCard from "./PersonCard";

function App() {
  let personList = [
    {
      name: "person 1",
      age: 12
    },
    {
      name: "person 2",
      age: 14
    }
  ]

  const manager = {
    name: "name",
    greet: () => ("manager says hello")
  }

  manager.manageEmployee = (employeeName) => {
    console.log(employeeName, "is being managed")
  }

  console.log(manager.greet())
  console.log(manager.manageEmployee("person 1"))
  return (
    <>
      <h1>Hi there</h1>
      <PersonCard name={personList[0].name} age={personList[0].age} />
      <PersonCard name={personList[1].name} age={personList[1].age} />
    </>
  )
}

export default App
