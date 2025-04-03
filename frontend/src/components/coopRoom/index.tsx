
import { useState } from "react";
import RoomForm from "../roomForm";
import ButtonLink from "../buttonLink";


const CoopRoom = () => {
  const [isAuth] = useState<string | null>(localStorage.getItem("token") || null);
  const [userId] = useState<string | null>(localStorage.getItem("userId"));

  return (
    <div>
      <h1>Cooperativo</h1>
      {isAuth && userId? (
          <RoomForm />
      ) : (
        <div>
          <p>Faça login primeiro</p>
          <ButtonLink buttontext="Voltar" to="/"></ButtonLink>
        </div>
        
      )}
      
    </div>
  );
};

export default CoopRoom;
