import './App.css';
import {NavBar} from './navBar/NavBar'
import{Search} from './weather/search/search'


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Widget/> */}
      <div className='Search'><Search/></div>
      
    </div>
  );
}

export default App;
