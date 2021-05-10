import { SHOW_LOADER, HIDE_LOADER, CURR_PATH, FETCH_LINKS, HIDE_ALERT, SHOW_ALERT, ATTEMPT_FETCH_LINKS, FETCH_DETAILS, ATTEMPT_FETCH_DETAILS } from "./types";

const inicialState = {
    loading: false,
    currPath: "/",
    links: null,
    details:null,
    alert: false,
    attemptsFetchLinks: 0,
    attemptsFetchDetails: 0,
  };
  
  export const Reducer = (state = inicialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        case CURR_PATH:
            return { ...state, currPath: action.payload };
        case FETCH_LINKS:
            return { ...state, links: action.payload };
        case FETCH_DETAILS:
            return { ...state, details: action.payload };    
        case SHOW_ALERT:
            return { ...state, alert: true };
        case HIDE_ALERT:
            return { ...state, alert: false };
        case ATTEMPT_FETCH_LINKS:
            return {...state, attemptsFetchLinks: state.attemptsFetchLinks+1 }   
        case ATTEMPT_FETCH_DETAILS:
            return {...state, attemptsFetchDetails: state.attemptsFetchDetails+1 }    
        default:
            return state;
    }
  };