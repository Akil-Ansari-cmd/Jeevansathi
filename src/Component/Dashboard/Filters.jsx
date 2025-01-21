import React, { useState } from 'react'
import { CiLock } from "react-icons/ci";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Filters = () => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("Matches");

    const handleOpen = () => {
        setOpen(true);
        // Prevent body from scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }

    const handleClose = () => {
        setOpen(false);
        // Enable body scrolling when modal is closed
        document.body.style.overflow = 'auto';
    }

    return (
        <div>
            <div onClick={handleOpen}>Filters</div>
            {open &&
                <div
                    onClick={handleClose}
                    className='absolute h-full bg-black bg-opacity-50 w-full left-0 z-50 top-0 border-slate-200'
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className='h-full w-[35%] bg-white overflow-hidden overflow-y-scroll mx-auto'
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            borderRadius: '8px',
                        }}
                    >
                        <div className='text-2xl pl-5 font-semibold sticky top-0 h-14 py-3 bg-white'>
                            Refine Matches
                        </div>
                        <div className='bg-white h-fit'>
                            <div className='flex pt-3 !h-[80vh]' >
                                <div className='w-[35%] !overflow-scroll'>
                                    <div className='bg-gray-100 h-3 w-full'></div>
                                    <div className='text-sm'>
                                        <div onClick={() => setContent("Matches")} className={`text-sm ${content === "Matches" ? "bg-gray-100" : "bg-white" } pl-4`}>
                                            <div>Type of</div>
                                            <div> Matches</div>
                                        </div>
                                        <div className=' text-sm'>
                                            <div onClick={() => setContent("Known")} className={`flex py-2 pl-4 ${content === "Known" ? "bg-gray-100" : "bg-white" } justify-between`}>
                                                <div>Well known Colleges</div>
                                                <div><CiLock className='mt-2' /></div>
                                            </div>
                                            <div className='flex justify-between pl-4 pt-4 '>
                                                <div>Profile posted by</div>
                                                <div><CiLock className='mt-1' /></div>
                                            </div>
                                            <div className='flex justify-between pt-4 pl-4'>
                                                <div>Activity on site</div>
                                                <div><CiLock className='mt-1' /></div>
                                            </div>
                                            <div className='py-2 pl-4 bg-gray-100'>Religion</div>
                                            <div className='pt-4 pl-4'>Mother Tongue</div>
                                            <div className='pt-4 pl-4'>Caste Subcaste</div>
                                            <div className='pt-4 pl-4'>Country</div>
                                            <div className='pt-4 pl-4'>City</div>
                                            <div className='pt-4 pl-4'>Income</div>
                                            <div className='pt-4 pl-4'>Employed In</div>
                                            <div className='pt-4 pl-4'>Education</div>
                                            <div className='pt-4 pl-4'>Occupation</div>
                                            <div className='pt-4 pl-4'>Height</div>
                                            <div className='pt-4 pl-4'>Age</div>
                                            <div className='pt-4 pl-4'>Marital Status</div>
                                            <div className='pt-4 pl-4'>Have Children</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[65%] bg-white'>
                                    {
                                        content === "Matches" &&
                                        <div>
                                            <div className='flex items-end justify-end px-8 pt-7 text-red-500 font-semibold'>
                                                Reset
                                            </div>
                                            <div className='flex px-5 gap-2'>
                                                <input type='radio' className='mt-1' style={{ fontSize: "10px" }} />
                                                <div className='text-sm font-semibold'>All</div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        content === "Known" &&
                                        <div>
                                            <div className='border border-gray-200 mx-5 rounded-lg text-sm pl-4'>
                                                <div className='py-3'>
                                                    <div>Upgrade your account to unlock</div>
                                                    <div>this paid feature</div>
                                                </div>
                                                <div className='text-red-500 pb-3'>Become a Paid Member</div>
                                            </div>
                                            <div className='flex items-end justify-end px-8 pt-7 text-red-500 font-semibold'>
                                                Reset
                                            </div>
                                            <div className='flex gap-2 ml-5'>
                                                <div><IoIosCheckbox className='mt-1 text-red-300' style={{ fontSize: "20px" }} /></div>
                                                <div className='text-gray-400'>All</div>
                                            </div>
                                            <div className='flex gap-2 mt-5 ml-5'>
                                                <div><MdCheckBoxOutlineBlank className='mt-1 text-gray-400' style={{ fontSize: "20px" }} /></div>
                                                <div className='text-gray-400'>Any Well Known College</div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='flex items-center justify-center font-semibold mx-auto sticky bottom-0 bg-red-500 text-white border border-red-500 w-[50%] h-10 rounded-lg'>
                                Show Matches
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Filters;
