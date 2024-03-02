'use server'

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from 'bcrypt' ;
import { db } from "@/lib/db";

export const register = async (values:z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

   if (!validatedFields.success) {
        return {
            error: "Invalid fields !"
        }
    }

    const { email, password, name } = validatedFields.data ;
    const hashedpassword = await bcrypt.hash(password, 10); 
    
    const exisitingUser = await db.user.findUnique({
        where: {
            email,
        }
    });
     if (exisitingUser) {
        return { error: "Email already in use !"};
        }
    
      await db.user.create({
        data: {
            name,
            email,
            password: hashedpassword
        }
      });


      //TODO : send email

    return {success: "User created !"}
    
    } 
