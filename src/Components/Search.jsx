import { useState } from "react";

export const Search = () => {
    const [InputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <input className="Buscador" type="text" value={InputValue} onChange={handleChange} placeholder="Buscar"/>
    );
};

export default Search;