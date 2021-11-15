/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props =>{ 
    console.log(`display ${props.value}`)
   return( <div> {[props.value]} </div>)
   
   }