import React, { useState } from 'react'
import { DeleteFaq } from '../Services/Admin Blog';

const FaqDelete = ({ state }) => {
    console.log("Delete", state);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const DelApi = async (req) => {
        console.log(req)
        const response = await DeleteFaq(req);
        console.log("object", response);

    }
    const handleDelete = async (id) => {
        console.log("Profile ID:", id);
        console.log("State object:", state);
        const req = {
            faq_id: state?.id
        };
        console.log("Request:", req);
        const response = await DelApi(req);
        console.log("response.....", response)
        if (response?.data?.response_code === 200) {
            console.log("Deletion successful!");
            handleClose();

        }
    }

        return (
            <div>
                <div onClick={handleOpen} className='border border-red-500 p-2 bg-red-500 text-white rounded-lg'>Delete</div>
                {open && (
                    <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-32'>
                        <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
                            <div
                                className='lg:h-[80%] h-[50%] px-5 m-auto w-[45vw] border rounded-md bg-white shadow-lg'
                            >
                                <div className='font-semibold text-3xl mt-20 text-center text-black'>Are you sure want to Delete?</div>
                                <div className='flex items-center justify-center mt-20 gap-2'>
                                    <div onClick={handleClose} className='border cursor-pointer border-indigo-300 text-indigo-500 w-28 h-9 py-1 rounded-md text-center'>Close</div>
                                    <button
                                        onClick={() => handleDelete(state?._id)}
                                        type='submit'
                                        className='bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white w-28 h-9 py-1 rounded-md text-center'
                                    >
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    export default FaqDelete
