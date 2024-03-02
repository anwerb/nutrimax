'use client' ;

import Link from "next/link";
import { Button } from "../ui/button";
interface BackbuttonProps {
    href: string;
    label: string;
};


export const Backbutton = ({
    label,
    href,
}:BackbuttonProps) => {
    return (
        <Button variant={"link"}
        className="font-normal w-full"
        size={"sm"}
        asChild>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}