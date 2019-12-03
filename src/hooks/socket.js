import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';
import Q from '@nmq/q/client';
import { Socket } from 'net';

// Connect outside of the render cycle ...
const socket = io.connect('http://localhost:3000');
const queue = new Q('deeds');

const useSocket = event => {
  const [socketMessage, setSocketMessage] = useState({});


  useEffect( () => {
    socket.on('incoming', message => {
      setSocketMessage(message);
    });

  }, []);

  return(
    <>
     <pre>Socket Values: {JSON.stringify(socketMessage)}</pre>
    </>
  )
}

export default useSocket;