import { useState } from "react";

export function HocForm (WrappedComponent, initialValue) {
    const Form = (props) => {
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

        return <WrappedComponent test={'ciao'} handleSubmit={handleSubmit} handleInputChange={handleInputChange} formData={formData} {...props}/>
    }

    return Form;
}
