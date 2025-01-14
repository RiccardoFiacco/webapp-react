import { HocForm } from "./hocForm";

const baseForm = {
    email: '',
    password:''
};

const Form = ()=>{
  return(
    <div className="flex grow justify-center items-center">
        <form className="rounded-lg border-2 border-gray-950" >
          {/* { JSON.stringify(review) } */}
          <div className="px-3 text-lg font-medium border-b-2 border-b-gray-950 bg-slate-300 ">
            login
          </div>
          <div className="px-8 py-5">
            <div className="flex flex-row justify-between items-center">
              <div>
                <input
                  placeholder="email"
                  name="email"
                //   onChange={changeHandler2}
                  type="text"
                  className="border-2 my-5"
                //   value={review.vote}
                />
                <input
                  placeholder="password"
                  name="password"
                //   onChange={(e) => changeHandler(e)}
                  type="text"
                  className="border-2 mx-5"
                //   value={} 
                />
              </div>
              <button className="bg-cyan-300 rounded-md px-2 h-10 hover:bg-cyan-600">invia</button>
            </div>
          </div>
        </form>
        </div>
      );  
}


// const SimpleForm = ({formData, handleInputChange, handleSubmit}) => {
//     return <form onSubmit={handleSubmit}>
//         <input type="text" name="search" value={formData.search} onChange={handleInputChange}/>
//         <input type="submit" value="Cerca"/>
//         {JSON.stringify(formData)}
//     </form>
// }

// export default withForm(SimpleForm, SimpleFormDataInitial);  // onSubmit={(e)=>add(e)}


export default HocForm(Form, baseForm);  // onSubmit={(e)=>add(e)}