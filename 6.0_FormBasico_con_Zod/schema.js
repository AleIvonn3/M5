import * as z from 'https://esm.sh/zod@3.23.8';

export const schema = z.object({
    name: z.string()
        .min(3, { message: 'El nombre completo debe tener al menos 3 caracteres'}),

    email: z.string()
        .email({ message: 'El correo electrónico debe ser válido'}),

    password: z.string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres'})
        .max(20, { message: 'La contraseña no puede exceder los 20 caracteres'})
        .regex(/[a-zA-Z]/, { message: 'La contraseña debe contener al menos una letra'})
        .regex(/\d/, { message: 'La contraseña debe contener al menos un número'}),
})