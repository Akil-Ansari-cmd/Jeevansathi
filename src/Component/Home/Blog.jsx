import { Formik } from 'formik';
import React, { useState } from 'react'
import { CiSquarePlus } from "react-icons/ci";
const Blog = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div onClick={handleOpen} className='flex justify-end px-20 text-2xl'>
                <CiSquarePlus />
            </div>
            {open && (
                <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20'>
                    <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
                        <form className='lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'>
                            <div className='font-semibold text-3xl mt-5 text-center'>Edit User's Details</div>
                            <div className='text-center'>Brief outline of User's information</div>
                            <div className='mt-10'>
                                <textarea rows="5" className='border border-gray-300 rounded-md outline-none resize-none' cols="50" placeholder="Enter your text here..."></textarea>
                            </div>
                            <div>
                                <input type='file'
                                onChange={(e) => Formik.setfieldValue("profile",e.target.files[0])}
                                />
                            </div>
                            <div className='flex justify-end mt-5 gap-2'>
                                <div onClick={handleClose} className='border cursor-pointer border-red-500 text-red-500 w-28 h-9 py-1 rounded-md text-center'>Close</div>
                                <button type='submit' className='bg-red-600 text-white w-28 h-9 py-1 rounded-md text-center'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Blog
