import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const ELaborateInput = forwardRef(({hasError, placeholder, value, update}, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref, (() => {
        return {
            focus() {
                inputRef.current.focus();
            }
        }
    }))
    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(evnt) => update(evnt.target.value)}
            placeholder={placeholder}

            type="text"
            style= {{
                padding: "5px 15px",
                borderWidth: "3px",
                border: "solid",
                borderColor: hasError ? "red" : "black",
                margin: "0 10 px",
                textAlign: "center"
            }}
            />
    )
})

function ImperativeHandleComponent() {
    const [city, setCity] = useState("Warszawa");
    const [state, setState] = useState("Mazowieckie");
    const [error, setError] = useState("");
    const cityRef = useRef(null);
    const stateRef = useRef(null);

    function validate() {
        if (!/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(city)) {
            setError("city");
            cityRef.current.focus();
            return;
        }

        if (!/^[A-Z]{2}$/.test(state)) {
            setError("state");
            stateRef.current.focus();
            return;
        }
        setError("");
        alert("Valid form");
    }

    return (
        <div>
            <h2>useImperativeHandle example</h2>
            <ELaborateInput ref={cityRef} hasError={error === 'city'} placeholder="City" value={city} update={setCity}/>
            <ELaborateInput ref={stateRef} hasError={error === 'state'} placeholder="State" value={state} update={setState}/>
            <button onClick={validate}>Validate form</button>
        </div>
    );
}

export default ImperativeHandleComponent;