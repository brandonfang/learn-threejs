import React, { useState, useEffect } from 'react'
import './App.css'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

export default function App() { 
  const [editorValue, setEditorValue] = useState(null)

  useEffect(() => {
    fetch('http://localhost:80/')
      .then((res) => res.json())
      .then((data) => console.log(data))


  }, [])

  return (
    <>
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log('value:', value)
        }}
      />
    </>
  )
}
