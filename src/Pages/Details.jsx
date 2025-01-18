import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form } from "../Components/ReviewsForm"; //PERCHE DA PROBLEMI ADDFORM?
import { getStar, baseUrl } from "../Utils/Utils";
import { GlobalContext } from "../Utils/GlobalContext";
import { FilmInfo } from "../Components/FilmInfo";
import { Reviews } from "../Components/Reviews";
import axios from "axios";
export function Details() {
  const { id } = useParams();
  const { movie, setMovie, setLoading, logged} = useContext(GlobalContext);
  const { reviews, avg_vote } = movie;

  let star = getStar(avg_vote);
  let url = baseUrl + "/" + id;

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="container grow grid flex-col py-7">
      <section className="flex py-7">
        {movie && <FilmInfo props={movie} />}
      </section>
      <section className="container flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">Tutte le recensioni</h2>
        <div className="py-2 text-black">{star}</div>
      </section>
      <section>
        {reviews && <Reviews reviews={reviews} filmUrl={url} />}
      </section>
      {logged != ''?<Form filmUrl={url}/>:null}
    </div>
  );
}
