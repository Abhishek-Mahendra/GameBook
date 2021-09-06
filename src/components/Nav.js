import React,{useState} from 'react';
//stylin components
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from "../img/logo.svg";
import {fetchSearch} from "../actions/gamesActions";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav=()=>{
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");
  
    const inputHandler = (e) => {
      setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
      e.preventDefault();
      dispatch(fetchSearch(textInput));
      setTextInput("");
    };
    const clearSearched = () => {
      dispatch({ type: "CLEAR_SEARCHED" });
    };
    return(
        <StyledNav variants={fadeIn} intial="hidden" animate="show" >
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo" />
                <h1>ImmoRtal GameBook</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type="submit">
                    Search
                </button>
            </form>
        </StyledNav>

    );
};
const StyledNav= styled(motion.div)`
    padding: 3rem 5rem;
    text-align:center;
    input{
        width:30%;
        padding:0.5rem;
        font-size:1.5rem;
        border:none; 
        margin-top:1rem;
        box-shadow:0px 0px 30px rgba(0,0,0,0.25);
        border-radius:2rem 0rem 0rem 2rem;

    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
        box-shadow: 0px 0px 15px rgba(189, 51, 42,1);
        border-radius: 0rem 2rem 2rem 0rem;
      }
`;
const Logo= styled(motion.div)`      
    display:flex;
    justify-content:center;
    padding: 1rem;
    cursor:pointer;
    img{
        height:3rem;
        width:3rem;
    }
    
`;
export default Nav;