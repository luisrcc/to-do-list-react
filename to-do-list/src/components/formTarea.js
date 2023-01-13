import React, { useState } from "react";


const TareaForm = (props) => {
    const [inputText, setInputText] = useState("");
    const [validacion, setValidacion] = useState("true");

    const formulario = (event) => {
        setInputText(event.target.value);

    }
    const submit = (event) => {
        event.preventDefault();
        if (inputText.trim() !== "") {
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }
    }

    return (

        <div >
            <form className="form" onSubmit={submit}>
                <input className="input-group" placeholder="What needs to be done?" value={inputText} onChange={formulario} />

            </form>

        </div>

    )

}

export default TareaForm;