export function Card({props}){
    const {title , director, genre, release_year, abstract, image} = props
    return(
        <ul>
            <li>{title}</li>
            <li>{director}</li>
            <li>{genre}</li>
            <li>{release_year}</li>
            <li>{abstract}</li>
            <li>{image}</li>
        </ul>
    )
}