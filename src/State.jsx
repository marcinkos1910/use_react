import { useState } from "react";

function StateComponent() {
    const [isGreen, setIsGreen] = useState(() => true));

    return (
        <h1 style={{color: isGreen ? 'green' : 'blue'}} onClick={() => {
            setIsGreen((prevState) => !prevState)
        }}>useState example</h1>
    )
}

export default StateComponent;