
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
export default function Dashboardheader() {

    return (
        <div className="fixed top-0 left-0 z-40 bg-white shadow-sm right-0 px-4 flex justify-between border-b items-center h-[66px]">

            <Link
                href="https://frontend-website-rip5.vercel.app/"
                target="_blank"
                className="font-bold relative -top-1 text-4xl md:text-5xl"
            >
                mars<span className="text-[#FF9900] text-lg">.in</span>
            </Link>

            <div>
                <Sheet>
                    <SheetTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                <Button>Dashboard</Button>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
        </div>

    )
}