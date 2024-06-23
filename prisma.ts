import { PrismaClient } from "@prisma/client/edge";
const prisma = new PrismaClient();

const contact = await prisma.contact.create({
  data: {
    name: "ridlo ghifary",
    phone: "081872878898",
    email: "ridlo@example.com",
  },
});

console.log(contact);
