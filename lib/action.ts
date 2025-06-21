'use server'

import { prisma } from "@/prisma"

type blogData={
    // id:string
    title:string;
    body:string;
    orgId:string
}


export const createBlog =async(blogData:blogData)=>{
try {
        const blogDataResult = await prisma.blog.create({
        data:{
            title:blogData.title,
            body:blogData.body,
            orgId:blogData.orgId
        }
    })
    return blogDataResult;
} catch (error) {
    return error
}
}