"use client"

import CardWrapper from "./Card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { Form, FormControl, FormItem, FormField, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";

export const RegisterForm = () => { 
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        startTransition ( ()=> 
        {
            register(values).then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        }
                        )
        
    }

    return(
        <CardWrapper 
            headerLabel={"Let's create your account"}
            backButtonLabel={"Already have an account ?"}
            backButtonHref={"/auth/login"} 
            showSocial>
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6">
                <div className="space-y-4">
                <FormField
                    control={form.control}
                    name='name'
                    render={({field}) => (
                        <FormItem>
                         <FormLabel> Name</FormLabel>
                         <FormControl>
                            <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Anwer"
                            
                            />
                         </FormControl>
                         <FormMessage/>
                        </FormItem>
                    )}/>
                    <FormField
                    control={form.control}
                    name='email'
                    render={({field}) => (
                        <FormItem>
                         <FormLabel> Email</FormLabel>
                         <FormControl>
                            <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Email Field"
                            type="email"
                            />
                         </FormControl>
                         <FormMessage/>
                        </FormItem>
                    )}/>
                    <FormField
                    control={form.control}
                    name='password'
                    render={({field}) => (
                        <FormItem>
                         <FormLabel> Password </FormLabel>
                         <FormControl>
                            <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Password"
                            type="password"
                            />
                         </FormControl>
                         <FormMessage/>
                        </FormItem>
                    )}/>
                </div>
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <Button
                type="submit"
                disabled={isPending}
                className="w-full">
                    Sign up
                </Button>
                </form>
             </Form>          
        </CardWrapper>
    )}

