import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ATTEMPT_FETCH_DETAILS, ATTEMPT_FETCH_LINKS/* , FETCH_DETAILS */ } from "../redux/types";

export const Alert = () => { 
  //const setCurrPath = props.setCurrPath;
  const currPath = useSelector((state)=>state.currPath);
  const details = useSelector((state)=>state.details)
  const attemptsFetchDetails = useSelector((state)=>state.attemptsFetchDetails)
  const dispatch = useDispatch();
  //dispatch({ type: FETCH_DETAILS, payload: null });
  function handleClick(){
    if(currPath==="/"){ 
    dispatch({type: ATTEMPT_FETCH_LINKS})
    }
    if(currPath!=="/"){
      console.log("senddetails",currPath,details)
      dispatch({type: ATTEMPT_FETCH_DETAILS})
    }
  }
  
  return ( 
    <BrowserRouter>
      <div className="alert alert-danger w-25 p-3 mx-auto" role="alert">
          <span>Произошла ошибка! </span><button type="button" className="btn btn-dark" onClick={handleClick}>Повторить запрос</button>
      </div>
    </BrowserRouter>
  )
}

/* const mapDispatchToProps = {
  hideAlert,
  fetchLinks
}; */
 

/* export const Alert = connect(null,mapDispatchToProps)(Alert_) */
