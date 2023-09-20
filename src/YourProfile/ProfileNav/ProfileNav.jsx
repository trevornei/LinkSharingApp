import React from 'react'

export default function ProfileNav() {
  return (
    <div className='flex flex-row items-center justify-between w-full h-auto'>
        <button className="border-2 border-purple purple flex items-center justify-center">
            <h3 className="text-purple font-semibold">
                Back to Editor
            </h3>
        </button>
        <button className="bg-purple p-2 flex items-center justify-center">
            <h3 className="text-white font-semibold">
                Share Link
            </h3>
        </button>
    </div>
  )
}
