import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function App() {

  const clicked = () => {
    window.alert('clicked')
  }
  return (
    <div className="md:container md:mx-auto">
      <span className="decoration-clone bg-gradient-to-b from-yellow-400 to-red-500">
        Hello
        World
      </span>
      
      <Button onClick={clicked} children={'Click Me'}/>
      
    </div>
    
  );
}

export default App;
