import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 5;


export const getContact = async (query: string, currentPage: number) => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        //await new Promise((resolve) => setTimeout(resolve, 300)); //set delay load data
        const contacts = await prisma.contact.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                OR: [
                  {
                    name: {
                      contains: query,
                     
                    },
                  },
                  {
                    phone: {
                      contains: query,
                      
                    },
                  },
                ],
              },
        });
        return contacts;
    } catch(error) {
        throw new Error("failed to fetch contact data");
    }
};

export const getContactById = async (id: string) => {
    try {
        const contact = await prisma.contact.findUnique({
            where: {id},
        });
        return contact;
    } catch(error) {
        throw new Error("failed to fetch contact data");
    }
};


export const getContactPages = async (query: string) => {
    try {
        const contacts = await prisma.contact.count({
            where: {
                OR: [
                  {
                    name: {
                      contains: query,
                     
                    },
                  },
                  {
                    phone: {
                      contains: query,
                      
                    },
                  },
                ],
              },
        });
        const totalPages = Math.ceil(Number(contacts) / ITEMS_PER_PAGE)
        return totalPages;
    } catch(error) {
        throw new Error("failed to fetch contact data");
    }
};