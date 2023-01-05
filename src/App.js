import React, { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './App.css';

function App() {
  const [input,setInput] = useState();
  return (
  
     <div class="App">
      <textarea autoFocus class="textarea" value={input} onChange={
          (e) => setInput(e.target.value)
      }/>
  <ReactMarkdown source={input} className="markdown"/>
  <div>sbdhbc</div>
     </div>

  )
}

export default App