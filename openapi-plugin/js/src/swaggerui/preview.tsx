import * as React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import useWebSocket from 'react-use-websocket';

export const Preview = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const filename = urlParams.get('filename');
  const renderer = urlParams.get('renderer');
  const port = window.location.port;
  
  const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:" + 
    port + "/preview/ws?filename=" + filename + "&renderer=" + renderer);

  if (!lastMessage) {
    return <p>Loading...</p>;
  }

  console.log('last message', lastMessage);

  return <SwaggerUI spec={JSON.parse(lastMessage.data)} />;
};
