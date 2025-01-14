import { useContext, useEffect } from "react";
import { Card } from "./Card";
import { GlobalContext } from "../Utils/GlobalContext";
import { baseUrl} from "../Utils/Utils";
import axios from "axios";

export function Movies() {
  const { search, movies, setMovies, setLoading } = useContext(GlobalContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      axios
        .get(
          baseUrl,
          search ?? {
            params: {
              search: search,
            },
          }
        )
        .then((response) => {
          setMovies(response.data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [baseUrl, search]);

  return (
    <div className="grid grid-cols-4 gap-y-10 gap-x-10 items-center">
      {movies ? (
        movies.map((movie, i) => {
          return (
            <div key={i}>
              <Card props={movie} />
            </div>
          );
        })
      ) : (
        <p>non esisto</p>
      )}
    </div>
  );
}
