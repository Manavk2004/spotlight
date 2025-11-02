import { onAuthenticateUser } from '../../../actions/auth'
import { redirect } from 'next/navigation'
import React from 'react'


export const dyanmic = 'force-dynamic'

async function CallBack() {
  const auth = await onAuthenticateUser()
  console.log("Here is teh auth", auth)
  if (auth.status === 200 || auth.status === 201) {
    redirect('/home')
  }else if (auth.status === 403 || auth.status === 500 || auth.status === 400){
    redirect("/")
  } 
  return (
    <div>CallBack</div>
  )
}

export default CallBack