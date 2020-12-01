import { idSchema } from "../middleware/validators/validation-schemas/id.validation-schema";
import { AnySchema } from "joi";
import { itemNameSchema } from "../middleware/validators/validation-schemas/item-name.validation-schema";

export function validateId(id: string): string | undefined {
    return validate(idSchema, id);
}

export function validateItemName(name: string): string | undefined {
    return validate(itemNameSchema, name);
}

function validate(schema: AnySchema, prop?: any): string | undefined {
    const { error } = schema.validate(prop);
    return error && error.message;
}