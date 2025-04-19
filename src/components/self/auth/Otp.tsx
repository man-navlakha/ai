
import eye from '@/assets/view.png'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"


const Otp = () => {
    return (
        <>

            <div className='bg-white h-screen overflow-hidden dark:bg-black dark:text-white flex justify-center w-full'>
                <div className={"w-full max-w-2xl flex flex-col justify-center gap-2 mx-4"}>
                    <Card>
                        <a href="/" >
                            <div className="flex flex-col items-center">
                                <img src={eye} width="50px" alt="Website Logo" className="mr-2 " />
                                <h1 className='font-black text-xl'>Solvinger</h1>
                            </div>
                        </a>
                        <CardHeader>
                            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">OTP</Label>
                                        <InputOTP maxLength={6}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>

                                    </div>
                                    <div className='flex justify-between'>

                                        <Button type="submit" variant="outline" className="w-20 dark:bg-[#383838] bg-[#e9e9e9] flex-end">
                                            Resend
                                        </Button>
                                        <Button type="submit" variant="outline" className="w-20 dark:bg-[#383838] bg-[#e9e9e9] flex-end">
                                            Verify
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Otp
