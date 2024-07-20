"use client";

import clsx from "clsx";
import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5"

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

import { deleteContact } from "@/lib/action";


export const CreateButton = () => {
    return (
        <Button asChild>
            <Link href="/contacts/create" >
                <IoAddSharp size={20}/>
                Create
            </Link>
        </Button>
    )
}

export const EditButton = ({id}: {id: string}) => {
    return (
        <Button asChild className=" rounded-sm border p-1 hover:bg-gray-100">
            <Link href={`/contacts/edit/${id}`} >
                <IoPencil size={20}/>
                
            </Link>
        </Button>
    );
};

export const DeleteButton = ({id}: {id: string}) => {
    const DeleteContactWithId = deleteContact.bind(null, id);
    return (
        <form action={DeleteContactWithId}>
            <Button className=" rounded-sm border p-1 hover:bg-gray-100">
               <IoTrashOutline size={20}/>
            </Button>
        </form>
        
    );
};

export const SubmitButton = ({label}: {label:string}) => {
    const {pending} = useFormStatus();

    const className = clsx("text-white bg-blue-700 hover:bg-blue800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
        {
            "opacity-50 cursor-progress": pending
        }
    )

    return (
        <Button 
            type="submit" 
            className={className} disabled={pending}>
            {label === "save" ? (
                <span>{pending? "Saving...":"save" }</span>
            ):(
                <span>{pending? "updating...":"update" }</span>
            )}
        </Button>
    );
};