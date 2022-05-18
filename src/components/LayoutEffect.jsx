import { useLayoutEffect, useRef, useState } from "react";

function LayoutEffectComponent() {
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const refTextArea = useRef(null);
    
    useLayoutEffect(() => {
        setWidth(refTextArea.current.clientWidth);
        setHeight(refTextArea.current.clientHeight);
    });

    return (
        <div>
            <h2>useLayoutEffect</h2>
            <p>Textarea width: {width}</p>
            <p>Textarea height: {height}</p>
            <textarea 
                ref={refTextArea} 
                onClick={() => {
                    setWidth(0);
                }}/>
        </div>
    )}

export default LayoutEffectComponent;