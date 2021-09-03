import * as React from 'react';
import { RedocStandalone } from 'redoc';
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

  return (
    <RedocStandalone options={{ disableSearch: true, hideDownloadButton: true }} spec={JSON.parse(lastMessage.data)} />
  );
};
