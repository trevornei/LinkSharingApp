import React from "react";
import { useState } from 'react'
import FormTitle from "./FormTitle";
import NewLinkButton from "./NewLinkButton";
import FormPreStage from "./FormPreStage";
import AddLinkForm from './AddLinkForm'

export default function FormCont() {
    const [showForm, setShowForm] = useState(false)

    const handleClickButton = () => {
        setShowForm(true)
    } 

    return (
        <div className="w-full h-auto bg-white rounded-xl mx-auto flex flex-col items-center justify-start p-8">
            <FormTitle/>
            {showForm ? (
                <div className="border-purple bg-lightGrey">
                    <AddLinkForm/>                   
                </div>
            ) : (
                <div className="">
                    <NewLinkButton onButtonClick={handleClickButton}/>
                    <FormPreStage/>
                </div>
            )}
            {/* <NewLinkButton/>
            <FormPreStage/> */}
        </div>
    )
}