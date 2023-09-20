import React from 'react'
import Illustration from '../../assets/images/illustration-empty.svg'

export default function FormPreStage() {
  return (
    <div className='w-full h-full flex flex-col bg-lightGrey p-4 rounded-xl items-center justify-center'>
        <img src={Illustration} alt="" className='my-2'/>
        <h1 className="text-headingM font-semibold my-6">Let's get you started</h1>
        <p className='font-bodyM font-iSans my-2'>
            Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyon!
        </p>
    </div>
  )
}
