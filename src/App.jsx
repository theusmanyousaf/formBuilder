import { BsPlusCircle } from "react-icons/bs";
import Form from './components/Form'
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState('Untitled Form');
  const [formDesc, setFormDesc] = useState('');
  const [inputType, setInputType] = useState('text');

  function submitForm() {
    console.log(title, formDesc, inputType);
  }


  return (
    <div className='bg-[#f0ebf8] py-10 min-h-screen'>
      <Form />
    </div>
  )
}

export default App
