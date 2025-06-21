
import { prisma } from '@/prisma';
import { clerkClient } from '@clerk/nextjs/server';
import React from 'react'

interface paramsInterface  {
  subdomain:string
}

const Subdomain  = async ({params}: {params:Promise<paramsInterface>}) => {
  const {subdomain} = await params;
  const client = await clerkClient();
 const org = await client.organizations.getOrganization({slug:subdomain})


 const orgid = org.id
 const blogs = await prisma.blog.findMany({
  where:{
    orgId:orgid
  }
 })
  return (
 (
      <div className='flex p-10 flex-col gap-4'>{blogs.map(blog=>
      <div className='flex flex-col gap-2 '>
        <h3 className='font-bold text-2xl'>{blog.title}</h3>
        <p className='pl-4'>{blog.body}</p>
      </div>
    )}</div>
  )
  )
}

export default Subdomain 