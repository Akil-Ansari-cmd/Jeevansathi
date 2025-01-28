import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import * as React from 'react';
import { BsPersonLinesFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        right: false,
    }); 

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='px-3 !h-[25vh] border-gray-200 bg-white rounded-lg sticky top-10'>
                <div className='flex gap-3 mt-8'>
                    <div><img className='h-16 w-16 rounded-full object-cover' src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' /></div>
                    <div className='mt-2'>
                        <div className='font-bold text-lg text-[#34495E]'>Hi Person!</div>
                        <div className='flex text-base gap-2'><div className='text-xs font-semibold text-[#768493]'>UTWV4067 </div><div className='text-xs cursor-pointer text-[#D8465C] font-semibold'>Edit Profile</div></div>
                    </div>
                </div>
                <div className='flex justify-center items-center font-semibold text-gray-500 text-sm'>Flat 54% OFF till 22 Jan</div>
                <div className='flex items-center justify-center font-semibold mx-auto bg-[#D8465C] text-white border border-red-600 w-[90%] h-10 rounded-lg mt-2'>
                    Upgrade Membership
                </div>
            </div>
            <div className='my-5 px-3'><Divider className='w-[100%]' /></div>
            <div className='!h-[45vh] !overflow-scroll px-3 text-[#34495E]'>
                <div className='flex justify-between mt-3'>
                    <div className='font-semibold'>Partner Preferences</div>
                    <div className='mt-2'><IoIosArrowForward /></div>
                </div>
                <div className='flex font-semibold justify-between my-5 '>
                    <div className=''>Blocked/Ignored Profiles</div>
                    <div className='mt-2'><IoIosArrowForward /></div>
                </div>
                <div className='flex font-semibold justify-between'>
                    <div className=''>Astrology Services</div>
                    <div className='mt-2'><IoIosArrowForward /></div>
                </div>
                <div className='flex font-semibold justify-between my-5 '>
                    <div className=''>Phonebook</div>
                    <div className='mt-2'><IoIosArrowForward /></div>
                </div>
                <div className='flex font-semibold justify-between my-5 '>
                    <div className=''>Account & Settings</div>
                    <div className='mt-2'><IoIosArrowForward /></div>
                </div>
                <div className='flex font-semibold justify-between my-5 '>
                    <div className=''>Help & Support</div>
                    <div className='mt-2'><IoIosArrowForward /></div>
                </div>
                <div className='flex font-semibold justify-between my-5 '>
                    <div className=''>About Us</div>
                    <div className='mt-2'><IoIosArrowForward /></div>
                </div>
            </div>
            <div className='font-semibold sticky bottom-0 mt-5 px-3 text-[#34495E]'>Logout</div>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><BsPersonLinesFill className='cursor-pointer text-2xl text-gray-400' /></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        sx={{
                            '& .MuiDrawer-paper': {
                                borderTopLeftRadius: '20px',  
                                borderBottomLeftRadius: '20px', 
                                width: 320,  
                            },
                        }}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
