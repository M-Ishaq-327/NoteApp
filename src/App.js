import Navbar from './Navbar';
import Form from './Form';
import About from './About';

//import {Switch} from 'react-router';
import {
  HashRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <HashRouter>
    <Navbar 
      title="Note"
      navitem1="Home"
      navitem2="About Us"
      dropdownitme1="item 1"
      dropdownitme2="item 2"
      dropdownitme3="item 3"
    />
    <div className="container my-3">
    
   <Routes>
   <Route path='/' element={<Form 
      heading="Note Here :"
    />} />
    <Route path='/About'
     element={<About/>}
     />
     </Routes>
    </div>
</HashRouter>
    </>
    
   
  );
}

export default App;
