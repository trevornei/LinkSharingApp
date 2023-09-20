import React from "react";
import FormTitle from "./FormTitle";
import NewLinkButton from "./NewLinkButton";
import FormPreStage from "./FormPreStage";

export default function FormCont() {
    return (
        <div className="w-full h-auto bg-white rounded-xl mx-auto flex flex-col items-center justify-start p-8">
            <FormTitle/>
            <NewLinkButton/>
            <FormPreStage/>
        </div>
    )
}