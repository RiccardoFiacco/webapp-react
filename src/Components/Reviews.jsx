export function Reviews({reviews}){

    return(
        <>
    {reviews && reviews.map(({name, vote, text},i)=>{
        return(
            <div key={i} className="rounded-lg border-gray-600 border-2 py-3 my-4 px-3">
                <p>{text}</p>
                <p>voto: {vote}</p>
                <p className=" text-gray-500 text-lg font-bold italic ">by {name}</p>
           </div>
        )
    })}</>
    )
}