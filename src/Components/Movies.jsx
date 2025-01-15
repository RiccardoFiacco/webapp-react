import { useContext } from "react";
import { Card } from "./Card";
import { GlobalContext } from "../Utils/GlobalContext";

export function Movies() {
  const { movies } = useContext(GlobalContext);

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
