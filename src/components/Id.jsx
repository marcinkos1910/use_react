import { useId } from "react";

function IdComponent() {
    const id = useId();
    return (
        <div>
            <h2>useId example</h2>
            <label htmlFor={id}>Input - {id}</label>
            <input type="text" id={id}/>
        </div>
    )
}

export default IdComponent;