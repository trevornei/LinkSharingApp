import React from "react";
import FormTitle from "./FormTitle";
import NewLinkButton from "./NewLinkButton";

export default function FormCont() {
    return (
        <div className="w-full h-auto border-2 border-purple rounded-xl mx-auto flex flex-col items-center justify-start p-8">
            <FormTitle/>
            <NewLinkButton/>
        </div>
    )
}