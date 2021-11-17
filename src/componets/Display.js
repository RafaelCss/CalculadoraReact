import React from "react";
import './Display.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    console.log('Valor display ' + props.value)
 return <div className ='display'> {`${props.value}`} </div>
}

