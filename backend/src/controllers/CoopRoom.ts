import CoopRoom from "../models/CoopRoom";
import { Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/authMiddleware';

export const createRoom = async (req: AuthenticatedRequest, res: Response) => {
  const { roomName } = req.body;

  if (!roomName) {
    return res.status(422).json({ msg: "Faltando o nome da sala" });
  }

  const roomExists = await CoopRoom.findOne({ roomName });

  if (roomExists) {
    return res.status(422).json({ msg: "Já existe uma sala com esse nome" });
  }

  const room = new CoopRoom({
    roomName,
    player1: req.user.userName,
    player2: null,
  });

  try {
    await room.save();
    res.status(201).json({ msg: "Sala criada com sucesso", room });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao criar a sala", error });
  }
};
