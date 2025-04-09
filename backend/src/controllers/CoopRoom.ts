import CoopRoom from "../models/CoopRoom";
import { Request, Response } from 'express';

export const createRoom = async (req: Request, res: Response) => {
  const { roomName, player1 } = req.body;

  if (!roomName || !player1) {
    return res.status(422).json({ msg: "Faltando o nome da sala ou do jogador 1" });
  }

  const roomExists = await CoopRoom.findOne({ roomName });

  if (roomExists) {
    return res.status(422).json({ msg: "Já existe uma sala com esse nome" });
  }

  const room = new CoopRoom({
    roomName,
    player1,
    player2: null,
  });

  try {
    await room.save();
    res.status(201).json({ msg: "Sala criada com sucesso", room });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao criar a sala", error });
  }
};
