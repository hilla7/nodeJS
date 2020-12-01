
import joi from 'joi';

const validIdLength: number = 36;

export const idSchema = joi.string().length(validIdLength);
