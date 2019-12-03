import React from 'react';

import Q from '@nmq/q/client';
const queue = new Q('deeds');

const useQ = event => {
  const [queueMessage, setQueueMessage] = useState({});
  
  return[queue]
}

export default useQ;