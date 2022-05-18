// import { useState } from "react";
import useMyState from "../useMyState";

function StateComponent() {
    const [isGreen, setIsGreen] = useMyState(() => true);

    return (
        <h1 style={{color: isGreen ? 'green' : 'blue'}} onClick={() => {
            setIsGreen((prevState) => !prevState)
        }}>useState example</h1>
    )
}

export default StateComponent;