// import React from 'react';
// import { useEffect, useState } from 'react';

// export const Pok = () => {
//     const [initialState,setInitialState] = useState([])

//     useEffect(() => {
//         fetch(`/api/`)
//         .then (res => {
//             if(res.ok){
//                 return res.json();
//             }
//         }).then(jsonResponse => setInitialState(jsonResponse.Poke[0]))

//     },[]);
//         console.log(initialState)
//     return(
//         <div>
//             { initialState.map ((e,i) => <li key={i}>{e.name} - {e.url}</li>)}
//         </div>
//     )
// }
