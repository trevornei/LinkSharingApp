import React from 'react'
import PhoneImg from '../../assets/images/illustration-phone-mockup.svg'

export default function PhoneUI() {
    return (
        <div className="w-full h-auto border-2 border-purple rounded-xl mx-4 flex flex-col items-center justify-center p-8">
            <h1 className="text-purple font-iSans text-headingM font-bold">Test</h1>
            <img src={PhoneImg} alt="An outline of a phone that displays information about social media links." />
        </div>
    )
}