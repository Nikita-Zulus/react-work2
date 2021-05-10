import { HIDE_LOADER, SHOW_LOADER, CURR_PATH, REQUEST_LINKS, HIDE_ALERT, SHOW_ALERT, REQUEST_DETAILS, FETCH_DETAILS } from "./types";


export function showLoader() {
    return {
      type: SHOW_LOADER,
    };
  }
  
  export function hideLoader() {
    return {
      type: HIDE_LOADER,
    };
  }

  export function setCurrPath(value) {
    return {
      type: CURR_PATH,
      payload: value,
    };
  }

  export function hideAlert() {
    return {
      type: HIDE_ALERT,
    };
  }
  export function showAlert() {
    return {
      type: SHOW_ALERT,
    };
  }
  
  export function changeDetails() {
    return {
      type: FETCH_DETAILS, 
      payload: null
    }
  }

  export function fetchLinks() {
    console.log("yes")
    return {
      type: REQUEST_LINKS,
    };
  }

  export function fetchDetails() {
    console.log("yesDetails")
    return {
      type: REQUEST_DETAILS,
    };
  }