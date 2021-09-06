import React from 'react';
//stylin components
import styled from 'styled-components';
import {motion} from 'framer-motion';
//redux
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import { Link } from 'react-router-dom';
import {smallImage} from '../util';
import { popup } from "../animations";

const Game=({name,released,image,id})=>{
  const stringPathId= id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler=()=>{
    document.body.style.overflow="hidden";
    dispatch(loadDetail(id))
  }
    return( 
      <Styledgame variants={popup} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadDetailHandler}>
        <Link to={`/game/${id}`} >
            <motion.h3 layoutId={`title ${stringPathId}`} >{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image,640)} alt={name} />
          </Link>
      </Styledgame>  
    );
  };

const Styledgame= styled(motion.div)`
    min-height:30vh;
    box-shadow:0px 5px 30px rgba(0,0,0,0.4);
    text-align: center;
    border-radius:1rem;    
    cursor:pointer;
    overflow: hidden;
    img{
      min-height:35vh;
          width:100%;
          object-fit:cover;
    }`


export default Game;