const Test = (props) => {
    return (
        <div>
            <h1 style={{color:props.color}}>Welcome to React Testing</h1>

            
            <h3>Welcome {props.name}</h3>
            <button onClick={props.handlNameChange}>Change Name</button>
        </div>
    );
};

export default Test;