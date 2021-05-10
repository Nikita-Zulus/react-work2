import React, { useEffect } from "react";
import { fetchDetails } from "../redux/actions";
import { connect } from "react-redux";

export const Details_ = (props) => {
    const details = props.details;
    const fetchDetails = props.fetchDetails;
    const attemptsFetchDetails = props.attemptsFetchDetails;
    useEffect(()=>{
        console.log(details,"details")
        fetchDetails()
        console.log("yesFetched",fetchDetails(),details)
    },[attemptsFetchDetails,fetchDetails]);
    if(details===null){
        return null
    }
    return(
        <div style={{margin:10}}>
            <div>
                {details.name}
            </div>
            <div>
                {details.content}
            </div>
            <div>
                {details.price}
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    fetchDetails
  };
const mapStateToProps = (state) => {
    return {
        details: state.details,
        attemptsFetchDetails: state.attemptsFetchDetails
    }
}; 
  export const Details = connect(mapStateToProps, mapDispatchToProps)(Details_);