import './App.css';
import Button from "./Components/Button/Button.tsx";
import Input from "./Components/Input/Input.tsx";

function App() {


    return (
        <>
            <Input/>
            <Button onClick={() => console.log("!")}>Button</Button>
        </>
    );
}

export default App;
