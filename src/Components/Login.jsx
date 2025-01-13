import withForm from "../hocs/withForm";

const SimpleFormDataInitial = {
    search: ''
};

const SimpleForm = ({formData, handleInputChange, handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <input type="text" name="search" value={formData.search} onChange={handleInputChange}/>
        <input type="submit" value="Cerca"/>
        {JSON.stringify(formData)}
    </form>
};

export default withForm(SimpleForm, SimpleFormDataInitial);