import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
// import 'codemirror/theme/dracula.css'


export default function App() {
  const [code, setCode] = useState("const a = 0;")

  useEffect(() => {
    axios
      .post('/javascript')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <CodeMirror
        value={code}
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log('value:', value)
        }}
        theme={oneDark}
      />
    </>
  )
}
