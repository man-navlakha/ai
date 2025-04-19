import React from 'react'
import eye from '@/assets/view.png'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Signup = () => {
    return (
        <>
            <div className='bg-white h-screen overflow-hidden dark:bg-black dark:text-white flex justify-center w-full'>
                <div className={"w-full max-w-2xl flex flex-col justify-center gap-2 mx-4"}>
                    <Card> <a href="/" >
                        <div className="flex flex-col items-center">
                            <img src={eye} width="50px" alt="Website Logo" className="mr-2 " />
                            <h1 className='font-black text-xl'>Solvinger</h1>
                        </div>
                    </a>
                        <CardHeader>
                            <CardTitle className="text-2xl">Welcome Solvinger!</CardTitle>
                            <CardDescription>
                                Enter your email below to create your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                        </div>
                                        <Input id="password" type="password" required />
                                    </div>
                                    <div className='flex justify-end'>

                                        <Button type="submit" variant="outline" className="w-20 dark:bg-[#383838] bg-[#e9e9e9] flex-end">
                                            Sign Up
                                        </Button>
                                    </div>
                                    <Button variant="secondary" className="w-full">
                                        Sign Up with Google
                                    </Button>
                                </div>
                                <div className="mt-4 text-center text-sm">
                                    already have an account?{" "}
                                    <a href="login" className="underline underline-offset-4">
                                        Login
                                    </a>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Signup
