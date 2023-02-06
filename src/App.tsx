import { Button, chakra, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'

function App() {

  // const [counter, setCounter] = React.useState<number>(0)

  // const [firstNum, setFirstNum] = React.useState(0)
  // const [secondNum, setSecondNum] = React.useState(0)
  // const [result, setCalc] = React.useState(0)

  return (
    <div className="App">
      <Nav/>
      <Home/>
      {/* <Button onClick={()=> {setCounter(counter+1)}}>Click Me!!</Button>

      <chakra.p>{counter}</chakra.p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <chakra.h3></chakra.h3>
      <SimpleGrid columns={4} gap={1} textAlign={"center"} ml={"10%"} mr={"10%"}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>/</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>X</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>+</Button>
        <Button>0</Button>
        <Button>=</Button>
        <Button>.</Button>
        <Button>+</Button>
      </SimpleGrid>
      <br></br>
      <br></br> */}
    </div>
  )
}

export default App
