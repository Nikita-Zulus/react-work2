import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCurrPath,changeDetails} from "../redux/actions";


const Links_ = (props) => {
    const setCurrPath = props.setCurrPath;
    const links = props.links;
    const currPath = props.currPath;
    const changeDetails = props.changeDetails;
    if(currPath!=="/"){
        changeDetails()
    }
    setCurrPath("/");
    if(links!==null){ 
         return (
            <ul>
                {links.map((link) =>( 
                    <li key={link.id} onClick={()=>setCurrPath(link.id)}>
                        <NavLink key={link.id} to={`/${link.id}/details`}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

         )
    }
    return null
}

const mapDispatchToProps = {
    setCurrPath,
    changeDetails
  };
const mapStateToProps = (state) => {
    return {
        links: state.links,
        currPath:state.currPath
    }
}; 
  export const Links = connect(mapStateToProps, mapDispatchToProps)(Links_);