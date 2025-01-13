export function Reviews({reviews}){
    
    return(
        <>
    {reviews && reviews.map(({name, vote, text},i)=>{
        return(
            <div key={i} className="rounded-lg border-gray-600 border-2 py-3 my-4 px-3">
                <p>{text}</p>
                <p>voto: {vote}</p>
                <div className="flex justify-between items-center">
                    <span className=" text-gray-500 text-lg font-bold italic ">by {name}</span>
                    <button className="bg-cyan-300 rounded-md px-2 h-10 hover:bg-cyan-600">elimina</button>
                </div>
                
           </div>
        )
    })}</>
    )
}