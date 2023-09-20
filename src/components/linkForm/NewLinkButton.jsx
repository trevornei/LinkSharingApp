import React from "react";

export default function NewLinkBTN({ onButtonClick }) {
    return (
        <div className="w-full rounded-xl my-6">
            <button className="w-full border-2 border-purple rounded-xl" type="button" onClick={onButtonClick}>
                <h3 className="">+ Add new link</h3>
            </button>
        </div>
    )
}