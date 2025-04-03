
import { useState } from "react";
import RoomForm from "../roomForm";
import ButtonLink from "../buttonLink";
import "./coopRoom.css";

const CoopRoom = () => {
  const [isAuth] = useState<string | null>(localStorage.getItem("token") || null);
  const [userId] = useState<string | null>(localStorage.getItem("userId"));

  return (
    <div className="coopRoom">
      <h1>Cooperativo</h1>
      {isAuth && userId? (
          <RoomForm />
      ) : (
        <div className="notLoggedIn">
          <p>Faça login primeiro</p>
          <ButtonLink buttontext="Voltar" to="/"></ButtonLink>
        </div>
        
      )}
      
    </div>
  );
};

export default CoopRoom;
