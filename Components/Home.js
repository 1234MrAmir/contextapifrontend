import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import NoteContext from '../Context/Notecontext';

const Home = () => {
    const context = useContext(NoteContext);
    useEffect(() => {
   context.update();
   // eslint-disable-next-line
    }, [])
    
  return (
    <div>
      <p>my name is {context.state.name} i read in class {context.state.Class}</p>
      {console.log(context)}
    </div>
  )
}

export default Home
