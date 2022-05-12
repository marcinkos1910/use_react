import { useEffect, useState } from "react";

function EffectComponent() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <h1>useEffect example: {time.toLocaleTimeString}</h1>
    )
}

export default EffectComponent;