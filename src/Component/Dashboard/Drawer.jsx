import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { BsPersonLinesFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const [product, setProduct] = React.useState("login");

    const Navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    return (
        <div>
            <Button onClick={toggleDrawer(true)}><BsPersonLinesFill className='border border-gray-200 rounded-full text-2xl text-gray-400' /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div >
                    <Box sx={{ width: 280,'borderRadius':'!100px' }} role="presentation" onClick={toggleDrawer(true)}>
                    <div className='px-3 h-fit border-gray-200 bg-white rounded-lg'>
                        <div className='flex gap-3 mt-8'>
                            <div><img className='h-16 w-16 rounded-full object-cover' src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' /></div>
                            <div className='mt-2'>
                                <div className='font-bold text-lg'>Hi Person!</div>
                                <div className='flex text-base gap-2'><div className='text-xs'>UTWV4067 </div><div onClick={() => Navigate("/prof")} className='text-xs cursor-pointer text-red-500 font-semibold'>Edit Profile</div></div>
                            </div>
                        </div>
                        <div className='my-5'><Divider className='w-[100%]' /></div>
                        <div className='flex justify-between mt-3'>
                            <div className='font-semibold'>Matches</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div onClick={() => Navigate("/Acti")}  className='flex font-semibold justify-between my-5 '>
                            <div className=''>Activity</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div  onClick={() => Navigate("/Search")} className='flex font-semibold justify-between'>
                            <div className=''>Search</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div className='flex font-semibold justify-between my-5 '>
                            <div className=''>Messenger</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div className='flex font-semibold justify-between my-6 pb-7 '>
                            <div className=''>Upgrade</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div className='font-semibold'>Logout</div>
                    </div>           
                    </Box>
                </div>
            </Drawer>
        </div>
    );
}
