import { useState } from 'react';
import './App.css';
import SideMenu from './SideMenu';
import { AI } from './AIComponent';
import { GoogleGenerativeAI } from "@google/generative-ai";


function App() {
  const[input, setInput] = useState("");
  const[output, setOutput] = useState("");

  const genAI = new GoogleGenerativeAI('AIzaSyDPCMGRnDcsGi1HzjuMRsro5uo52QGJ_G8');
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  var inputs = new AI(model, input);

  return (
    <div className="row">
      <div id='sidebar'><SideMenu{...inputs}/></div>    

      <div id='content'>
        <input className='output-box' readOnly placeholder='Recipe suggestions appear here'></input>

        <form className="respond-box">
          <input placeholder='Ask about recipes here' onChange={(e) => setInput(e.target.value)}></input>
          <button type="submit" onClick={inputs.run}>Enter</button>
        </form>
      </div>
    </div>
  );
}

export default App;

