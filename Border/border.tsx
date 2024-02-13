import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Border from "/workspaces/nextjs-newVercel/ui/border.tsx"

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

export default function Border() {
    return (
        <Card className="w-[350px]">
            <CardHeader className="flex">
                <div>
                    <CardTitle>Upload resume</CardTitle>
                    <CardDescription>Upload new Resume in one-click.</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Upload resume:</Label>
                            <Button>
                                <Input id="picture" type="file" accept="application/pdf" />
                            </Button>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Language known</Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Python">Python</SelectItem>
                                    <SelectItem value="Java">Java</SelectItem>
                                    <SelectItem value=".net">.net</SelectItem>
                                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
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
            </CardFooter>
        </Card>
    )
}