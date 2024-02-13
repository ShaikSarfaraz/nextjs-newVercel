import * as React from "react"

import Border from "/workspaces/nextjs-newVercel/Border/border.tsx"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Card() {
    return (
        <main className="flex flex-col items-center gap-5 justify-center p-24">
                <div>
                <img className="h-20 w-25" src="https://www.conovercompany.com/wp-content/uploads/2019/06/wr-resumes-logo.png" alt="" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Upload resume:</Label>
                    <Input id="picture" type="file" accept="application/pdf" />
                </div>
                <div className="p-5">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">Submit</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Resume will get submitted once you click on Continue button bellow
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
        </main>
    )
}