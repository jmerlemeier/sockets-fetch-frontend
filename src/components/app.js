import React, { useState, useEffect } from 'react';
import useForm from '../hooks/form.js';
import useSocket from '../hooks/socket.js';
import useQ from '../hooks/q.js';

const App = (props) => {

//comes from FORM custom hook
  const [handleChange, handleSubmit, values] = useForm();

  //comes from SOCKET custom hook
  const [subscribe, publish] = useSocket();

  //comes from Q custom Hook
  const [queue] = useQ();

  //original code
  useEffect( () => {
    queue.subscribe('work', message => {
      setQueueMessage(message);
    });

  
    socket.on('incoming', message => {
      setSocketMessage(message);
    });

  }, []);

  return (
    <>
      <pre>Form Values: {JSON.stringify(values)}</pre>
      <pre>Queue Values: {JSON.stringify(queueMessage)}</pre>
      <pre>Socket Values: {JSON.stringify(socketMessage)}</pre> 
      <form onSubmit={handleSubmit}>
        <input name='firstName' placeholder="First Name" onChange={handleChange} />
        <input name='lastName' placeholder="Last Name" onChange={handleChange} />
        <button>Save</button>
      </form>
    </>
  );
}

export default App;
