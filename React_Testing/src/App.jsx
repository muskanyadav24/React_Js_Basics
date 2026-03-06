import { useState , useEffect} from 'react'
import Header from './components/Header/Header'
import Test from './components/Test/Test'
import Demo from './components/Demo/Demo'
import Counter from './components/Counter/Counter'
import Controll from './components/Controlle/Controlle'
import Register from './components/Register/Register'
import './App.css'

function App() {

  // let name = "Miku";

  const [name, setName ] = useState("Miku");

  const handlNameChange = () => {
    setName("miku24");
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
      <Register />
      <Header />
      <Test color="red" name={name} handlNameChange={handlNameChange}/>
      <Demo />
      <Counter />
      <Controll />
    </>

    // const [isRegistered, setIsRegistered] = useState(false);
    // <>
    //   {isRegistered ? (
    //     <>
    //       <Header />
    //       <Test color="red" />
    //       <Demo />
    //       <Counter />
    //       <Controll />
    //     </>
    //   ) : (
    //     <Register setIsRegistered={setIsRegistered} />
    //   )}
    // </>
  )
}

export default App
