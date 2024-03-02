import * as z from "zod" ;

export const LoginSchema = z.object ({
    email:z.string().email(),
    password: z.string()
});

export const RegisterSchema = z.object ({
    email:z.string().email(),
    password: z.string().min(6,{
        message: 'Password should be longer than 5 characters'
    }),
    name: z.string().min(1, {
        message: "Name is required"
    })

});