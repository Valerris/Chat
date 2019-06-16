let socket;

function init(url) {
  socket = new WebSocket(url);
  console.log("connecting...");
}

function registerOpenHandler(handleFunction) {
  socket.onopen = () => {
    console.log('open');
    handleFunction();
  };
}

// function registerReactivateConnection(handleFunction) {
//   socket.onclose = (e) => {
//     console.log('closing...');
//     handleFunction(e);
//   };
// }

function registerMessageHandler(handleFunction) {
  socket.onmessage = (e) => {
    console.log('message', e.data);
    let data = JSON.parse(e.data);
    handleFunction(data);
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

export default {
  init,
  registerOpenHandler,
  // registerReactivateConnection,
  registerMessageHandler,
  sendMessage
}
