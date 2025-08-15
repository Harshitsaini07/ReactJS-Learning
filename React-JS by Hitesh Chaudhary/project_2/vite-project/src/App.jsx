import { useState } from 'react'
import './App.css'

function App() {
  const [lenghth, setLength] = useState(8)

  const [numberAllowed, setNumberAllowed] = setState(false)

  const [charAllowed, setCharrAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&[]*()"

      for(let i = 0; i<= array.length; i++){
        let char = (Math.random() * str.length +1)
      }

  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
     <h1 className="text-4xl text-center text-white">password generator</h1>
    </>
  )
}

export default App
