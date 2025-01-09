export function Home(){
    return(
    <div className="grow flex flex-col items-center"> 
  
    <div className="flex flex-col items-center py-8">
     <h1 className="text-3xl font-bold underline">Benvenuti su movies review </h1>
     <p>uno spazio dove poter recensire vari film in totale liberta</p>
    </div>
     
     <Movies/>
    </div>
    )
}