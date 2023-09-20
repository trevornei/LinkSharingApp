import React from 'react'
import LinksImg from '../../assets/images/icon-links-header.svg'
import PersonImg from '../../assets/images/icon-devto.svg'

export default function NavCenter() {
  return (
    <div className='flex flex-row'>
        <button className="flex flex-row items-center justify-center border-2 border-purpleH rounded-xl mx-3 p-2">
            <img src={LinksImg} alt=""/>
            <h3 className="text-purple font-bold font-iSans">Links</h3>
        </button>
        <button className="flex flex-row items-center justify-center border-purpleH rounded-xl p-2">
            <img src={PersonImg} alt="" />
            <h3 className="font-iSans font-bold">Profile Details</h3>
        </button>
    </div>
  )
}
