import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function InputWithLabel({ id, value, onChange, children }) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="flex gap-2 items-center">
            <div className="flex flex-col w-full">
                <label htmlFor={id}>{children}:</label>
                <input 
                    type="text"
                    id={id}
                    value={value}
                    onChange={onChange}
                    ref={inputRef}
                    className="border pl-2 p-1"
                />
            </div>
        </div>
    )
}

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}


export default InputWithLabel;