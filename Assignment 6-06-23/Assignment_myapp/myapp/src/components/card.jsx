import React from "react";
// import {AiOutlineHeart} from "react-icons/ai"
// import {FaRegComment} from 'react-icons/fa'
// import {FiSend}  from 'react-icons/fi'
// import {FcRating} from 'react-icons/fc'
import {AiFillStar} from 'react-icons/ai'
import './card.css'


function Card({username,image,prizes,button,off}){
    //const{username,image} = props; you can use the const props in the main fuction
  return (
    <div>
        <div class="back">
            <h1>{username}</h1>
            <img style={{width:"200px",height:"200px"}}
            src={image} alt = "error"></img>
            <h2><pre>{off}   {prizes}</pre></h2>
            <AiFillStar size={50}/>
            <AiFillStar size={50}/>
            <AiFillStar size={50}/>
            <AiFillStar size={50}/>
            <AiFillStar size={50}/><br></br>

            {/* <AiOutlineHeart size={60}/>
            <FaRegComment size={60}/>
            <FiSend size={60}/>
            <FcRating size={60}/> */}
            <button id='add'>Add to Cart</button>
            <button  id='buy'>Buy now</button>
        </div>
    </div>
  )
}

export default Card;