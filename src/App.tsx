import { useState } from 'react';
import './App.css';
import SideMenu from './SideMenu';
import { AI } from './AIComponent';
import { GoogleGenerativeAI } from "@google/generative-ai";

async function enter(setOutput: React.Dispatch<React.SetStateAction<string>>, data: AI, input: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  setLoading(true); 
  data.setInput(input);
  const output = await data.run();
  setOutput(output);
  setLoading(false); 
}

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false); // State variable to track loading status

  const API_KEY = '';

  const genAI = new GoogleGenerativeAI(API_KEY);
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const data = new AI(model, input);

  const handleEnter = () => {
    enter(setOutput, data, input, setLoading);
  };

  return (
    <div className="row">
      <div id='sidebar'><SideMenu AI={data} /></div>

      <div id='content' className='content'>
        <div className="form-group">
          <label htmlFor="FormControlTextarea">Your personalized recommendation:</label>
          <textarea className="form-control" id="FormControlTextarea1" rows={33} readOnly value={output}></textarea>
        </div>
        <form className="respond-box">
          <input placeholder='Ask about recipes here' onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => {if (e.key === "Enter") { // handle the enter like the button and don't refresh the page
                  handleEnter() 
                  e.preventDefault()}}}></input> 
          <button type="button" className="submit" onClick={handleEnter}>
            {loading ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              'Press to see recipes!'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

