// // Functional Component

// const Demo = () => {
//     return (
//         <div>
//             <p>Hello World</p>
//         </div>
//     );
// };

// export default Demo;



// Class Component
import React from "react";

class Demo extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name: "Miku",
    //         age: 20
    //     }
    // }

    // Built-in method
    componentDidMount(){
        console.log("Component mounted");
    }

    componentDidUpdate(){
        console.log("Component updated");
    }

    componentWillUnmount(){
        console.log("Component unmounted");
    }

    render(){
        return(
            <div>
                
                <h1>Class Component</h1>
            </div>
        )
    }
}

export default Demo;