"use client"


import { Button } from '@/components/ui/button'
import { Dialog, DialogHeader } from '@/components/ui/dialog'
import { useWebinarStore } from '@/store/useWebinarStore'
import { DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { PlusIcon } from 'lucide-react'
import React from 'react'


type Props = {}

function CreateWebinarButton(props: Props) {
    const { isModalOpen, setModalOpen } = useWebinarStore()

    
    return (
        <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
                <button className='rounded-xl flex gap-2 items-center hover:cursor-pointer px-4 py-2 border border-border bg-prinary/10 backdrop-blur-sm text-sm font-normal text-primary
                hover:bg-primary-20'
                    onClick={() => setModalOpen(true)}
                >
                    <PlusIcon />
                    Create Webinar
                </button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[900px] p-0 bg-transparent border-none'>
                <DialogTitle>Create Webinar</DialogTitle>
            </DialogContent>
        </Dialog>
    )
}

export default CreateWebinarButton