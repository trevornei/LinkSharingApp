import React from 'react'
import PhoneImg from '../../assets/images/illustration-phone-mockup.svg'

export default function PhoneUI() {
    return (
        <div className="w-full h-auto bg-white rounded-xl mx-4 flex flex-col items-center justify-center p-8">
            {/*
                No need to reinvent  the wheel.
                How do I manipulate the SVG for the phone image.
                Ask the Discord server.
            */}
            <img src={PhoneImg} alt="An outline of a phone that displays information about social media links." />
        </div>
    )
}