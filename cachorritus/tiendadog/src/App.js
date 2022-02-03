import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { ClassComponent } from './components/class-components/ClassComponent';
import FunctionalComponents from './components/fuction-components/FunctionalComponents';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './NavBar.css';

function App() {
  return (
    <div className="App">
   <NavBar></NavBar>
     <ClassComponent></ClassComponent>
     <hr></hr>
     <FunctionalComponents></FunctionalComponents>

     <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
