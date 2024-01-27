import React, { useState } from "react";
import Context from "./Notecontext";

const Notestate = (props) => {
  const data = {
    "name": "Amir",
    "Class": "B-tech"
  };

  const [state, setState] = useState(data);

  const update = ()=>{
 setInterval(() => {
    setState({
        "name": "Angle",
        "Class": "BSC"
    })
 }, 2000);
  }

  return (
    <Context.Provider value={{state , update}}>
      {props.children}
    </Context.Provider>
  );
};

export default Notestate;
