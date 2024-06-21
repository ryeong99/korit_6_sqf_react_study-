import { useRef } from "react";

function App() {
        
    const inputRef = {
    a: useRef(), 
    b: useRef(),
    c: useRef()
 }
    // const aRef = useRef();    
    // const bRef = useRef();    
    // const cRef = useRef();

        // console.log(aRef);
        // console.log(bRef);
        // console.log(cRef);
        
    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "a":
                    inputRef.b.current.focus();
                    // bRef.current.focus();
                    break;
                case "b":
                    inputRef.c.current.focus();
                    // cRef.current.focus();
                    break;
                case "c":
                    inputRef.a.current.focus();
                    // aRef.current.focus();
                    break;
                default:
            }
        }
    }

    return<>
        {/* <input name="a" onKeyDown={handleKeyDown} ref={aRef}/>    
        <input name="b" onKeyDown={handleKeyDown} ref={bRef}/>    
        <input name="c" onKeyDown={handleKeyDown} ref={cRef}/>     */}
        <input name="a" onKeyDown={handleKeyDown} ref={inputRef.a}/>    
        <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b}/>    
        <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c}/>    
    </>
}

export default App;