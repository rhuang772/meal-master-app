import { useState } from 'react';
import './App.css';
import SideMenu from './SideMenu';
import { AI } from './AIComponent';
import { GoogleGenerativeAI } from "@google/generative-ai";

async function enter(setOutput:React.Dispatch<React.SetStateAction<string>>, data:AI, input:string) {
  data.setInput(input);
  const output = await data.run();
  setOutput(output);
}

function App() {
  const[input, setInput] = useState("");
  const[output, setOutput] = useState("");

  const API_KEY = 'AIzaSyDfQJEDAqWC5-cUtty3I9giiWA_0N05ERE';

  const genAI = new GoogleGenerativeAI(API_KEY);
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const data = new AI(model, input);

  const handleEnter = () => {
    enter(setOutput, data, input);
  };

  return (
    <div className="row">
      <div id='sidebar'><SideMenu AI={data}/></div>    

      <div id='content'>
        <input className='output-box' readOnly value={output}></input>

        <form className="respond-box">
          <input placeholder='Ask about recipes here' onChange={(e) => setInput(e.target.value)}></input>
          <button type="button" onClick={handleEnter}>Enter</button>
        </form>
      </div>
    </div>
  );
}

export default App;

