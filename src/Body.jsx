import React from "react";
import FormCont from "./components/linkForm/FormCont";
import PhoneUI from "./components/linkDisplay/PhoneUI";

export default function Body() {
    return (
        <div className="flex flex-row bg-lightGrey w-full h-auto">
            <PhoneUI/>
            <FormCont/>
        </div>
    )
}