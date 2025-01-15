import { WithForm } from "./WithForm"
const baseForm={
  email:'',
  password:''
}
function LoginForm({ data, handlerInput, sender}){
  const{email, password} = data
    return(
        <div className="flex grow justify-center items-center">
        <form className="rounded-lg border-2 border-gray-950" onSubmit={(e)=>sender(e)}>
          <div className="px-3 text-lg font-medium border-b-2 border-b-gray-950 bg-slate-300 ">
            login
          </div>
          <div className="px-8 py-5">
            <div className="flex flex-row justify-between items-center">
              <div>
                <input
                  placeholder="email"
                  name="email"
                  onChange={(e) => handlerInput(e)}
                  type="text"
                  className="border-2 my-5"
                  value={email}
                />
                <input
                  placeholder="password"
                  name="password"
                  onChange={(e) => handlerInput(e)}
                  type="password"
                  minLength="8"
                  className="border-2 mx-5"
                  value={password} 
                />
              </div>
              <button className="bg-cyan-300 rounded-md px-2 h-10 hover:bg-cyan-600">invia</button>
            </div>
          </div>
        </form>
        </div>
    )
}


const HocedForm = WithForm(LoginForm, baseForm); //creo il wrapper da esportare 
export { HocedForm }