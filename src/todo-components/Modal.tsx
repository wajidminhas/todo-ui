

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AddTask } from "./AddTask"


export function Modal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" className="w-full px-2 py-1 uppercase ">Add Task + </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                </DialogHeader>
                <AddTask />
            </DialogContent>
        </Dialog>
    )
}
