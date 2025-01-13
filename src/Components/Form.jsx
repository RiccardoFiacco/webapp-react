import axios from "axios";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosCall } from "../Utils/Utils";
import { GlobalContext } from "../Utils/GlobalContext";

export function Form({filmUrl}) {

  const {setMovie} =useContext(GlobalContext)

  const { id } = useParams();
  const baseForm = {
    movie_id: id,
    name: "",
    vote: 0,
    text: "",
  };

  const [review, setReview] = useState(baseForm);

  function changeHandler(event) {
    setReview((review) => {
      return {
        ...review,
        [event.target.name]: event.target.value,
      };
    });
  }

  function changeHandler2(event) {
    const {name, value} = event.target;
    const valueInt = parseInt(value);

    if (value ==='' || (!isNaN(value) && valueInt >= 0 && valueInt <= 5)) {
        setReview((review) => {
            return {
              ...review,
              [name]: value,
            };
          });
    }
  }

  function add(event){
    event.preventDefault()
      axios
      .post('http://localhost:3000/api/reviews', review)
      .then((res)=>{
          alert(res.data)
          axiosCall(filmUrl, setMovie)
      })
      .catch((err)=>{alert(err)})
      setReview(baseForm)
  }

  return (
    <form className="rounded-lg border-2 border-gray-950" onSubmit={(e)=>add(e)}>
      {/* { JSON.stringify(review) } */}
      <div className="px-3 text-lg font-medium border-b-2 border-b-gray-950 bg-slate-300 ">
        inserisci la tua recensione
      </div>
      <div className="px-8 py-5">
        <textarea
          name="text"
          id="textarea"
          onChange={(e) => changeHandler(e)}
          className="w-full border-2"
          value={review.text}
          placeholder="insercisci la tua recensione"
        ></textarea>
        <div className="flex flex-row justify-between items-center">
          <div>
            <input
              name="vote"
              onChange={changeHandler2}
              type="number"
              className="border-2 my-5"
              value={review.vote}
              min="0"
              max="5"
            />
            <input
              name="name"
              onChange={(e) => changeHandler(e)}
              type="text"
              className="border-2 mx-5"
              value={review.name}
              placeholder="nome"
            />
          </div>
          <button className="bg-cyan-300 rounded-md px-2 h-10 hover:bg-cyan-600">invia</button>
        </div>
      </div>
    </form>
  );
}
