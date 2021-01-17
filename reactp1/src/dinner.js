import React from 'react'; 


export default function Dinner(props) {
    return(
        <div>   
        <h1>We have delicious {props.groceries}</h1>
        <h1>We have delicious {props.sweets}</h1>
        </div>
    ) 
}
