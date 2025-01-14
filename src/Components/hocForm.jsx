import { useState } from "react";

export function HocForm (WrappedComponent, initialValue) {
    return props => {
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
