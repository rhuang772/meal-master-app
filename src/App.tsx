import './App.css';
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="row">
      <div id='sidebar'><SideMenu/></div>    

      <div id='content'>
        <input className='output-box' readOnly placeholder='Recipe suggestions appear here'></input>

        <form className="respond-box">
          <input placeholder='Ask about recipes here'></input>
        </form><br/>
      </div>
    </div>
  );
}

export default App;

