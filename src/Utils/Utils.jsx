import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const baseUrl = 'http://localhost:3000/api/movies';
export const sendUrl = 'http://localhost:3000/api/reviews';
export const imgUrl = 'http://localhost:3000/photo/';

export function getStar(vote){
    let app = Math.ceil(vote/2);
    let arr = [];
    
    for(let i=0; i < app; i++){
        arr.push(<FontAwesomeIcon key={'star' + i} icon={faStar}/>)    
    }

    for(let i=0; i < 5-app; i++){
        arr.push(<FontAwesomeIcon key={'regular' + i} icon={starRegular}/>)     
    }
    
    return arr
}