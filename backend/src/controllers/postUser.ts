import User from "../models/User";
import { Request, Response } from 'express';

export const postUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email && !password) {
    return res.status(422).json({ msg: 'Email and Password is required' })
  }

  const userExist = await User.findOne({ email: email })

  if (userExist) {
    return res.status(422).json({ msg: 'Email already exists' })
  }

  const user = new User({
    email: email,
    password: password
  })

  try {
    await user.save()
    res.status(201).json({ msg: 'Save' })

  } catch (error) {
    res.status(500).json({ msg: "Error" })
  }
}