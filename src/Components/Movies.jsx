import { useContext } from "react";
import { Card } from "./Card";
import { GlobalContext } from "../Utils/GlobalContext";

export function Movies() {
  const { movies } = useContext(GlobalContext);

  return (
    <div className="flex flex-wrap justify-center gap-y-4 gap-x-4">
      {movies ? (
        movies.map((movie, i) => {
          return (          
              <Card key={i} props={movie} />
          );
        })
      ) : (
        <p>non esisto</p>
      )}
    </div>
  );
}
