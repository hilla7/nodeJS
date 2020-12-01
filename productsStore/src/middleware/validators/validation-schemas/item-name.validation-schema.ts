import joi from 'joi';

const validNameMinimumLength: number = 3;

export const itemNameSchema = joi.string().min(validNameMinimumLength);
