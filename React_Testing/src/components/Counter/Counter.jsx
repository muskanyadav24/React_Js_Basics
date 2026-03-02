import { useEffect , useState } from "react";
const Counter = () => {

    // const [counter , setCounter] = useState(0);
    // const hendleCounter = () => {
    //     console.log("Counter Clicked");
    //     setCounter( counter + 1);
    // }

    const [counter , setCounter] = useState(0);

    const hendleDSC = () => {
        console.log("Counter Clicked");
        if(counter != 0){
            setCounter( counter - 1);
        }
    }
    const hendleINC = () => {
        console.log("Counter Clicked");
        setCounter( counter + 1);
    }

    const [time , setTime] = useState(20);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(time - 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer); // 0 par stop
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={hendleDSC}>-</button>
            <button onClick={hendleINC}>+</button>
            <h1>Time {time}</h1>
            {/* <button onClick={hendleCounter}>+</button> */}
        </div>
    );
};

export default Counter;