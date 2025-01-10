import React from 'react'
import New from './New'
import { TbWallet } from 'react-icons/tb'
import { IoPersonOutline, IoSchoolOutline } from 'react-icons/io5'
import TemporaryDrawer from './Drawer'
import { FaRegBell } from 'react-icons/fa'

const Activity = () => {
    return (
        <div>
            <div className='h-fit bg-white'>
                <div className='flex sticky top-0 bg-white items-center justify-between px-5 h-16 border-b shadow-md'>
                    {/* <div><BsPersonLinesFill className='border border-gray-200 rounded-full text-2xl text-gray-400' /></div> */}
                    <div><TemporaryDrawer /></div>
                    <div className='flex gap-3'>
                        <div>
                            <IoPersonOutline className=' text-2xl text-gray-400' />
                        </div>
                        <div>
                            <FaRegBell className=' text-2xl text-gray-400' />
                        </div>
                    </div>
                </div>
                <div><New /></div>
                <div className="mt-10 pl-6">
                    <div className="text-xl font-semibold">Attract more matches!</div>
                    <div className="font-serif">Here are some tips for you to enhance your profile</div>
                </div>
                <div className='border rounded-xl pl-10 border-gray-200 md:w-[50%] w-[80%] ml-6 my-10 py-5'>
                    <div className='flex rounded-md items-center ml-10 gap-3 pl-3 mt-10 border border-[#F8C3C1] py-1 w-[50%]'>
                        <div className=' bg-[#F8C3C1] rounded-full w-10 h-10 flex items-center justify-center'><TbWallet className='text-xl text-white' /></div>
                        <div className='space-y-2'>
                            <div className='w-24 rounded-md bg-[#F8C3C1] h-2'></div>
                            <div className='w-16 rounded-md bg-[#F8C3C1] h-2'></div>
                        </div>
                    </div>
                    <div className='flex rounded-md items-center gap-3 pl-3 ml-20 py-1 my-2 border border-[#C9E8E2] h-[15%] w-[50%]'>
                        <div className=' bg-[#C9E8E2] rounded-full w-10 h-10 flex items-center justify-center'><IoSchoolOutline className='text-xl text-white' /></div>
                        <div className='space-y-2'>
                            <div className='w-24 rounded-md bg-[#C9E8E2] h-2'></div>
                            <div className='w-16 rounded-md bg-[#C9E8E2] h-2'></div>
                        </div>
                    </div>
                    <div className='flex rounded-md items-center gap-3 ml-10 py-1 pl-3 border border-[#FEE0A1] h-[15%] w-[50%]'>
                        <div className=' bg-[#FEE0A1] rounded-full w-10 h-10 flex items-center justify-center'><TbWallet className='text-xl text-white' /></div>
                        <div className='space-y-2'>
                            <div className='w-24 rounded-md bg-[#FEE0A1] h-2'></div>
                            <div className='w-16 rounded-md bg-[#FEE0A1] h-2'></div>
                        </div>
                    </div>
                    <div className='mt-16 text-center font-semibold'>Tell us your prefrences</div>
                    <div className='text-center mt-2'>
                        <div>Help us know you better so that</div>
                        <div>we can suggest suitable matches</div>
                    </div>
                    <div className='text-center flex items-center mx-auto justify-center border border-red-500 w-[80%] h-10 rounded-lg text-red-500 mt-10'>
                        Manage Partner Preferences
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity
