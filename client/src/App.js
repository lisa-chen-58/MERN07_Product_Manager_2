import Main from './views/Main'
import OneProduct from './components/OneProduct';
import {Router} from '@reach/router';

function App() {
  return (
    // <div onWheel = {() => console.log("hello")}
    // className="App">
    <div className="App">
      <Router>
        {/* <ProductForm path = "/"/>
        <Display path = "/"/> */}
        <Main path="/"/>
        <OneProduct path = "/products/:id"/>
      </Router>
    </div>
  );
}
export default App;