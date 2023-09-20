import React from "react";
import Logo from "./Logo";
import NavCenter from "./NavCenter"
import PreviewButton from "./PreviewButton";

export default function Nav() {
    return (
        <div className="w-full h-auto bg-white rounded-xl mb-8 mx-4 flex flex-row items-center justify-between p-3">
           <Logo/>
           <NavCenter/>
           <PreviewButton/>
        </div>
    )
}