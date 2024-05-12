"use client"
import Image from "next/image"
import Link from "next/link"
import {
    File,
    GlobeIcon,
    Home,
    LineChart,
    ListFilter,
    LocateIcon,
    MoreHorizontal,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { wrap } from "@motionone/utils";
import {
    motion,
    AnimatePresence,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import PlateEditor from "@/components/plate-editor"
import { Shell } from "@/components/shell"
import { VariantTabs } from "../_components/variant-tabs"
import { DialogUploaderDemo } from "../_components/dialog-uploader-demo"
import CountryDropdown from "@/components/dropdown/countries";
import StateDropdown from "@/components/dropdown/states";

export default function CreateUniversity() {
    return (
        <>
            <div className="create-university min-h-[100vh] w-full lg:max-w-[1500px] lg:flex lg:flex-col lg:space-y-3 mx-auto p-10 mt-5">
                <div className="name-logo-description-university w-full grid gap-3 ">
                    <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                        <h1 className="text-4xl font-bold w-full text-left">Name</h1>
                        <Input type="text" placeholder="Enter University Name" />
                    </div>
                    <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-5 items-center justify-center p-10">
                        <h1 className="text-4xl font-bold w-full text-left">Logo</h1>
                        <div className="flex w-full items-start justify-start">
                            <DialogUploaderDemo />

                        </div>
                    </div>
                    <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                        <h1 className="text-4xl font-bold w-full text-left">Description</h1>
                        <Textarea placeholder="Type your description here." />
                    </div>
                </div>
                <div className="tag-location-university w-full flex flex-col lg:flex-row items-center justify-between gap-2">
                    <h1 className="hover-glow-border center w-full h-[250px] border rounded-md">Tag</h1>
                    <div className="hover-glow-border flex flex-col items-start justify-center gap-3 w-full h-[250px] border rounded-md p-10">
                        <h1 className="text-4xl font-bold w-full text-left">Location</h1>
                        <div className="flex flex-col lg:flex-row items-center justify-start gap-3 w-full">
                            <CountryDropdown />
                            <StateDropdown />
                        </div>

                    </div>
                </div>

                <div className="hover-glow-border w-full border rounded-md mx-auto h-auto pt-3 flex flex-col space-y-3">
                    <h1 className="text-4xl font-bold w-full text-left pl-4">Overview</h1>
                    <div className="w-full h-full border-t">
                        <PlateEditor />
                    </div>
                </div>

                <div className="w-full border rounded-md mx-auto h-auto min-h-[300px]">
                    <Shell>
                        <VariantTabs />
                    </Shell>
                </div>
            </div>
        </>
    )
}

