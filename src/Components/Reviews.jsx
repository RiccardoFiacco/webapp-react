import axios from "axios"
import { sendUrl} from "../Utils/Utils"
import { useContext } from "react"
import { GlobalContext } from "../Utils/GlobalContext"
import { toast } from "react-toastify"

export function Reviews({reviews, filmUrl}){
    const {setMovie, setLoading} = useContext(GlobalContext)

    function fetch(){
      setLoading(true)
      axios.get(filmUrl)
        .then(response => {
          setMovie(response.data)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    async function deleteReview(id){
        try{
         const result = await axios.delete(sendUrl+'/'+id);
         toast(result.data)
         fetch()
        }catch(err){
            alert(err)
        }
    }

    return reviews && reviews.map(({id, name, vote, text},i)=>{
        return(
            <div key={i} className="rounded-lg border-gray-600 border-2 py-3 my-4 px-3">
                <p>{text}</p>
                <p>voto: {vote}</p>
                <div className="flex justify-between items-center">
                    <span className=" text-gray-500 text-lg font-bold italic ">by {name}</span>
                    <button className="bg-cyan-300 rounded-md px-2 h-10 hover:bg-cyan-600" onClick={()=>deleteReview(id)}>elimina</button>   
                </div>
           </div>
        )
    })
}