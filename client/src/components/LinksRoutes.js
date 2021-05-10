import React, { useEffect } from "react";
//import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Alert } from "./Alert";
import { Details } from "./Details";
import { Links } from "./Links";
import { Loader } from "./Loader";
import { fetchLinks } from "../redux/actions";
import { connect } from "react-redux";

export const LinksRoutes_ = (props) => {
    const links = props.links
    const loading = props.loading;
    const alert = props.alert;
    const currPath = props.currPath;
    const fetchLinks = props.fetchLinks;
    const attemptsFetchLinks = props.attemptsFetchLinks
    useEffect(()=>{
        fetchLinks();
        console.log(attemptsFetchLinks,links,fetchLinks())
    },[fetchLinks,attemptsFetchLinks]);

    return(
        <BrowserRouter>
            <div>
                {alert&&<Alert/>}
                <Switch>
                <Route path={"/"} exact>
                    <Links/>
                </Route>  
                         
                <Route path={`/${currPath}/details`}>
                    <Details/>
                </Route> 
                </Switch>

                {loading&&<Loader/>}
            </div>
        </BrowserRouter>
    )
}

const mapDispatchToProps = {
    fetchLinks
  };
const mapStateToProps = (state) => {
    return {
        links: state.links,
        attemptsFetchLinks:state.attemptsFetchLinks,
        loading: state.loading,
        alert: state.alert,
        currPath: state.currPath
    }
}; 
  export const LinksRoutes = connect(mapStateToProps, mapDispatchToProps)(LinksRoutes_);