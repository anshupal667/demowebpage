import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComA=()=>{
   const [num,setNum]=useState();
   const [name,setName]=useState();
   const [moves,setMoves]=useState();
   const [img,setimg]=useState();
   useEffect(()=>{
    //    alert('hii');
    async function getData(){
        const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(res.data);
        console.log(res.data.moves.length);
        setName(res.data.name);
        setMoves(res.data.moves.length);
        setimg(res.data.sprites.front_default);
    }
    getData();
   });
    return( 
        <>
        
        <h1>you choose {num} value </h1>
        <h1>my name is {name}  </h1>
        <h1>moves= {moves}  </h1>
        <img src={img} height="50%"/>
        <select value={num} onChange={(event)=>{
             setNum(event.target.value);
        }}>
             <option>select your fav one</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
        </select>
        </>
    );
};

export default ComA;