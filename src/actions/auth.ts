"use server"

import { currentUser } from "@clerk/nextjs/server"
import { prismaClient } from "@/lib/prismaClient"


export async function onAuthenticateUser(){
    try{
        const user = await currentUser()
        if (!user){
            console.log("The user does not exist")
            return{
                status: 403,
            }
        }

        const userExists = await prismaClient.user.findUnique({
            where: {
                clerkId: user.id
            }
        })

        if(userExists){
            console.log("The user ID does exist")
            return {
                status: 200,
                user: userExists
            }
        }

        const newUser = await prismaClient.user.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0]?.emailAddress,
                name: user.firstName + ' ' + user.lastName,
                profileImage: user.imageUrl
            }
        })

        if(!newUser){
            console.log("The user was unable to be created")
            return {
                status: 500,
                message: 'Failed to create user'
            }
        }

        console.log("All good with auth")
        return {
            status: 201,
            user: newUser
        }
    }catch (error){
        console.log('🔴 ERROR', error)
        return {
            status: 500,
            error: "Internal Server Error"
        }
    }
}