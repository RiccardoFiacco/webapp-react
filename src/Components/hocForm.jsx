import { useState } from "react";

export function withForm (WrappedComponent, initialValue) {
     (props) => {
        const [formData, setFormData] = useState(initialValue);

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData((oldFormData) => ({
                ...oldFormData,
                [name]: value
            }))
        }

        const handleSubmit = (event) => {
            event.preventDefault();
        }

        return <WrappedComponent handleSubmit={handleSubmit} handleInputChange={handleInputChange} formData={formData} {...props}/>
    }
}
