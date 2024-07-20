import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
 } from "@/components/ui/table";

 import { getContact } from "@/lib/data";
 import { formatDate } from "@/lib/utils";
 import { EditButton, DeleteButton } from "@/components/button";

const ContactTable = async ({
    query, 
    currentPage
}:{
    query:string; 
    currentPage:number
}) => {
    const contacts = await getContact(query, currentPage);

    return (
        <Table className=" w-full text-sm text-left text-gray-500">
            <TableCaption>A list Contacts.</TableCaption>
            <TableHeader className=" text-sm text-gray-700 uppercase bg-gray-50">
                <TableRow>
                    <TableHead className=" py-3 px-6">#</TableHead>
                    <TableHead className=" py-3 px-6">Name</TableHead>
                    <TableHead className=" py-3 px-6">Phone Number</TableHead>
                    <TableHead className=" py-3 px-6">Created At</TableHead>
                    <TableHead className=" py-3 px-6 text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {contacts.map((contact, index) => (
                <TableRow key={ contact.id } className="bg-white border-b">
                    <TableCell className=" py-3 px-6">{index + 1}</TableCell>
                    <TableCell className=" py-3 px-6">{ contact.name }</TableCell>
                    <TableCell className=" py-3 px-6">{ contact.phone }</TableCell>
                    <TableCell className=" py-3 px-6">{ formatDate(contact.createdAt.toString()) }</TableCell>
                    <TableCell className="flex justify-center gap-1 py-3">
                        <EditButton id={ contact.id }  />
                        <DeleteButton id={ contact.id } />
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ContactTable;