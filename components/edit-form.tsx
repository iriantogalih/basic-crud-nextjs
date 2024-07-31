"use client";

import { useFormState } from "react-dom";

import { Input } from "@/components/ui/input";
import { updateContact } from "@/lib/action";
import { SubmitButton } from "@/components/button";
import type { Contact } from "@prisma/client";


const UpdateForm = ({ contact }: { contact: Contact }) => {
    const UpdateContactWithId = updateContact.bind(null, contact.id);
    const [state, formAction] = useFormState(UpdateContactWithId, null);

    
    return (
        <div> 
            <form action={formAction}>
                <div className="mb-5">
                    <label htmlFor="name" className=" block text-sm font-medium text-gray-900">
                        Full Name
                    </label>
                    <Input 
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Fullname ..." 
                        defaultValue={contact.name}
                    />
                    <div id="name-error" arial-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{ state?.Error?.name }</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className=" block text-sm font-medium text-gray-900">
                        Phone Number
                    </label>
                    <Input 
                        type="text"
                        name="phone"
                        id="phone"
                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Phone number ..." 
                        defaultValue={contact.phone}
                    />
                    <div id="phone-error" arial-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{ state?.Error?.phone }</p>
                    </div>
                </div>
                <div id="message-error" arial-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{ state?.message }</p>
                </div>
                <SubmitButton label="update" />
            </form>
        </div>        
    )
}

export default UpdateForm;