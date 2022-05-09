import { items } from './items.js';
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;
export const prisma = new PrismaClient();


async function main() {
    for (let item of items) {
        await prisma.item.create({
            data: item
        })
    }
}
main().catch(e=> {
    console.log(e);
    process.exit(1)
}).finally(()=>{
    prisma.$disconnect();
})