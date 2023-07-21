import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  const [hola, setHola] = useState("");

  useEffect(() => {
    socket.emit("pong", "Holal Pong");

    socket.on("ping", ({ message }) => {
      setHola(message);
    });
  }, []);

  return (
    <>
      <h1>Hola {hola}</h1>
    </>
  );
}

export default App;
