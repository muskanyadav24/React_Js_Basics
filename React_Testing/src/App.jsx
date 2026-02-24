import { useState , useEffect} from 'react'
import Header from './components/Header/Header'
import Test from './components/Test/Test'
import Demo from './components/Demo/Demo'
import './App.css'

function App() {

  // let name = "Miku";

  const [name, setName ] = useState("Miku");

  const handlNameChange = () => {
    setName("muku24");
  }

  useEffect(() => {
    console.log("Component all render");
  });

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Component updated");
  }, [name]);

  useEffect(() => {
    console.log("Component unmounted");
    return () => {
      console.log("Component unmounted");
    }
  }, []);

  return (
    <>
      <Header />
      <Test color="red" name={name} handlNameChange={handlNameChange}/>
      <Demo />
    </>
  )
}

export default App
