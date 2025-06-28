'use client'
import Nav from '@/app/components/nav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createBlog } from '@/lib/action'
import { useOrganization } from '@clerk/nextjs'
import React, { useState } from 'react'



const OrganizationPage = () => {
    const [blogContent,setBlogContent]=useState('');
    const selectedOrganization = useOrganization();
    
    const [blogTitle,setBlogTitle]=useState('');

    const handleSubmit =async()=>{
      if(!selectedOrganization?.organization?.id){
        return
      }
    const blog=  await  createBlog({
          body:blogContent.trim(),
          orgId:selectedOrganization.organization?.id,
          title:blogTitle
        })
        if(blog){
          alert("blog is created")
          setBlogContent('');
          setBlogTitle('')
        }
    }
  return (
    <div>
        <Nav/>
       <div className='p-10 flex flex-col gap-2'>
        <Input className='w-fit' value={blogTitle} onChange={e=>{
            setBlogTitle(e.target.value)
        }} placeholder='Title'/>
        <Textarea placeholder='Enter your blog content here' value={blogContent} onChange={e=>{
            setBlogContent(e.target.value)
        }} className='h-50'/>
        <Button className='w-fit' onClick={handleSubmit}>
            Create Blog
        </Button>
       </div>

    </div>
  )
}

export default OrganizationPage