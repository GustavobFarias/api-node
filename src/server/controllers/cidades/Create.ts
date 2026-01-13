import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";

import * as yup from "yup";

interface Icity {
  name: string;
  estado: string;
}

const citySchema: yup.ObjectSchema<Icity> = yup.object().shape({
  name: yup.string().required().min(3),
  estado: yup.string().required().min(2),
});

export const createBodyValidator: RequestHandler = async (req, res, next) => {
  
  try {
    await citySchema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;

    const errors: Record<string, string> = {};

    yupError.inner.forEach((err) => {
      if (!err.path) return;

      errors[err.path] = err.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: errors,
    });
  }
}

export const create = async (req: Request<{}, {}, Icity>, res: Response) => {
  console.log(req.body);

  return res.send("Create city!");
};
