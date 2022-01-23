import { Request, Response, NextFunction } from 'express'

export default function errorHandler(
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (err) {
    return res.status(500).send('internalServerError')
  } else {
    return next()
  }
}
