// import './App.css';
// import SideMenu from './SideMenu';

// function App() {
//   return (
//     <div className="row">
//       <div id='sidebar'><SideMenu/></div>    

//       <div id='content'>
//         <input className='output-box' readOnly placeholder='Recipe suggestions appear here'></input>

//         <form className="respond-box">
//           <input placeholder='Ask about recipes here'></input>
//         </form><br/>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import SideMenu from './SideMenu';

function App() {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    // On component mount, trigger fade-in effect after a short delay
    const timer = setTimeout(() => {
      setIsFadeIn(true);
    }, 500); // Adjust delay as needed

    // Clear timer on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fade-in ${isFadeIn ? 'active' : ''}`}>
      <div className="row">
        <div className="col-md-4" id='sidebar'>
          <SideMenu />
        </div>    

        <div className="col-md-8" id='content'>
          <input className="output-box" readOnly placeholder='Recipe suggestions appear here' />
          <form className="respond-box">
            <input placeholder='Ask about recipes here' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

