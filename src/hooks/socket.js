import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');


const useSocket = event => {
  const [socketMessage, setSocketMessage] = useState({});

 const subscribe = (event, cb) => {
   //runs the callback and payload when the event fires.
 }

 const publish = (e, payload) => {
  //Emits the event and payload to the server for broadcasting.
 }

  return[subscribe, publish];
}

export default useSocket;