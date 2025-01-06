import React, { useState } from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Divider from '@mui/material/Divider';
import { IoIosArrowForward } from "react-icons/io";
import { LiaFilterSolid } from "react-icons/lia";
import { RxEnvelopeClosed } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import VerifiedIcon from '@mui/icons-material/Verified';
import { IoSearchSharp } from "react-icons/io5";
import { GiThermometerScale } from "react-icons/gi";
import { PiCrownSimple } from "react-icons/pi";
import { PiFlowerLotusLight } from "react-icons/pi";
import { TbWorldCheck } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { MdOutlinePerson4 } from "react-icons/md";
import { RiTimer2Line } from "react-icons/ri";
import { BiHandicap } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";
import { GiSwipeCard } from "react-icons/gi";
import TemporaryDrawer from './Drawer';

const Dashboard = () => {
    const [content, setContent] = useState("main");

    return (
        <>
            <div className='lg:block hidden'>
                <div className='flex sticky top-0 bg-white z-50 items-center justify-between px-7 h-20'>
                    <div><img className='h-10' src='https://static.jeevansathi.com/images/jspc/commonimg/desktopLogo25Years.svg' /></div>
                    <div className='flex space-x-6'>
                        <div>
                            <IoPersonOutline className='border border-gray-400 rounded-full text-2xl text-gray-400' />
                        </div>
                        <div>
                            <FaRegBell className='border border-gray-400 rounded-full text-2xl text-gray-400' />
                        </div>
                        <div><RxHamburgerMenu className='border border-gray-400 rounded-full text-2xl w-10 text-gray-400' /></div>
                    </div>
                </div>
                <div className='flex pt-5 px-7 h-screen gap-5 bg-gray-50'>
                    <div className='w-[20%] sticky top-14  px-3 border h-fit border-gray-200 bg-white rounded-lg'>
                        <div className='flex gap-1 mt-8'>
                            <div><img className='xl:h-16 xl:w-16 h-10 w-10 rounded-full' src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' /></div>
                            <div className='xl:mt-2 mt-0'>
                                <div className='font-bold text-lg'>Hi Person!</div>
                                <div className='flex text-base xl:gap-2 gap-0'><div className='text-xs'>UTWV4067 </div><div onClick={() => setContent("Profile")} className='text-xs text-red-500 font-semibold'>Edit Profile</div></div>
                            </div>
                        </div>
                        <div className='my-5'><Divider className='w-[100%]' /></div>
                        <div className='flex justify-between mt-3'>
                            <div className='font-semibold'>Matches</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div className='flex justify-between my-5 text-gray-400'>
                            <div className=''>Activity</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <div className=''>Search</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div className='flex justify-between my-5 text-gray-400'>
                            <div className=''>Messenger</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div className='flex justify-between my-6 pb-7 text-gray-400'>
                            <div className=''>Upgrade</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                    </div>
                    <div>
                        {content === "main" &&
                            <div className='space-y-5 relative w-[100%]'>
                                <div className='flex sticky top-0 items-center bg-white h-[10vh] rounded-t-xl'>
                                    <div className='flex ml-5 border w-28 h-10 justify-center items-center rounded-2xl border-gray-200'>
                                        <div><LiaFilterSolid className='text-xl mt-1 text-red-500' /></div>
                                        <div>Filters</div>
                                    </div>
                                </div>
                                <div className='flex border border-gray-200 bg-white rounded-lg'>
                                    <div><img className='h-48 w-40' src='https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg' /></div>
                                    <div className='flex flex-col'>
                                        <div className='text-sm font-semibold mt-4 pl-10'>Last seen on Dec-16-2024</div>
                                        <div className='text-2xl font-bold pl-10'>Roohi Kaur, 22</div>
                                        <div className='pl-10'>4ft 10in   Ajmer   others</div>
                                        <div className='pl-10'>Not Working   No Income</div>
                                        <div className='pl-10'>others</div>
                                        <div className='flex justify-evenly mt-2 pt-2 px-2 bg-pink-100 w-[43vw] h-[30%]'>
                                            <div className='flex text-pink-500 font-semibold gap-1'>
                                                <div className='mt-0.5'><RxEnvelopeClosed /></div>
                                                <div className='text-sm'>Interest</div>
                                            </div>
                                            <div className='flex text-pink-500 font-semibold gap-1'>
                                                <div className='mt-0.5'><CiHeart /></div>
                                                <div className='text-sm'>Super Interest</div>
                                            </div>
                                            <div className='flex text-pink-500 font-semibold gap-1'>
                                                <div className='mt-0.5'><CiStar /></div>
                                                <div className='text-sm'>Shortlist</div>
                                            </div>
                                            <div className='flex text-pink-500 font-semibold gap-1'>
                                                <div className='mt-0.5'><IoChatbubbleOutline /></div>
                                                <div className='text-sm'>Chat</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex border border-gray-200 bg-white rounded-lg'>
                                    <div><img className='h-48 w-40' src='https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg' /></div>
                                    <div className='flex flex-col'>
                                        <div className='text-sm font-semibold mt-4 pl-10'>Last seen on Dec-16-2024</div>
                                        <div className='text-2xl font-bold pl-10'>Roohi Kaur, 22</div>
                                        <div className='pl-10'>4ft 10in   Ajmer   others</div>
                                        <div className='pl-10'>Not Working   No Income</div>
                                        <div className='pl-10'>others</div>
                                        <div className='flex justify-evenly mt-2 pt-2 px-2 bg-pink-100 w-[43vw] h-[30%]'>
                                            <div className='flex text-pink-500 font-semibold gap-1'>
                                                <div className='mt-0.5'><RxEnvelopeClosed /></div>
                                                <div className='text-sm'>Interest</div>
                                            </div>
                                            <div className='flex text-pink-500 font-semibold gap-1'>
                                                <div className='mt-0.5'><CiHeart /></div>
                                                <div className='text-sm'>Super Interest</div>
                                            </div>
                                            <div className='flex text-pink-500 font-semibold gap-1'>
                                                <div className='mt-0.5'><CiStar /></div>
                                                <div className='text-sm'>Shortlist</div>
                                            </div>
                                            <div className='flex text-pink-500 font-semibold gap-1'>
                                                <div className='mt-0.5'><IoChatbubbleOutline /></div>
                                                <div className='text-sm'>Chat</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            content === "Profile" && <div className='bg-white'>
                                <div className='bg-cover bg-center rounded-t-lg' style={{ height: "60vh", backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg")' }}>
                                    <div className='xl:pt-72 pt-60 pl-10 text-2xl font-sans'>Person Name</div>
                                    <div className='pl-10 text-lg font-sans'>ID - UTWV067</div>
                                </div>
                                <div className='px-10 border border-gray-200'>
                                    <div className='font-semibold text-lg mt-7 border-b-2 border-red-700 w-28'>About Me</div>
                                    <div><Divider /></div>
                                    <div className='flex items-center justify-between text-lg border border-gray-200 shadow-sm px-4 mt-7 rounded-lg h-20'>
                                        <div><span className='font-semibold text-red-500'>Verify your profile</span> using selfie to assure that you are genuine and get a badge</div>
                                        <div><VerifiedIcon style={{ color: "blue" }} /></div>
                                    </div>
                                    <div className='border border-gray-200 pl-7 pt-8 mt-4 rounded-lg shadow-lg'>
                                        <div className='text-xl font-semibold'>Basic Details</div>
                                        <div className='space-y-3'>
                                            <div>Brief outline of personal information</div>
                                            <div className='flex gap-4'>
                                                <div><GiThermometerScale className='text-xl' /></div>
                                                <div>5'22''</div>
                                            </div>
                                            <div className='flex gap-4'>
                                                <div><PiFlowerLotusLight className='text-xl' /></div>
                                                <div>Sikh Arora</div>
                                            </div>
                                            <div className='flex gap-4'>
                                                <div><TbWorldCheck className='text-xl' /></div>
                                                <div>Mother Tonque is Hindi</div>
                                            </div>
                                            <div className='flex gap-4'>
                                                <div><CiLocationOn className='text-xl' /></div>
                                                <div>Lucknow, Uttar Pradesh</div>
                                            </div>
                                            <div className='flex gap-4'>
                                                <div><CiWallet className='text-xl' /></div>
                                                <div>Rs. 1 - 2 LPA</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border border-gray-200 pl-7 pt-8 mt-4 rounded-lg shadow-lg'>
                                        <div className='text-xl font-semibold'>About Me</div>
                                        <div className='space-y-3'>
                                            <div>Describe yourself in a few words</div>
                                            <div>I am very self motivated.</div>
                                            <div className='flex gap-4'>
                                                <div><MdOutlinePerson4 className='text-xl' /></div>
                                                <div>Profile Managed by Self</div>
                                            </div>
                                            <div className='flex gap-4'>
                                                <div><BiHandicap className='text-xl' /></div>
                                                <div>Disability - None</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border border-gray-200 pl-7 pt-8 mt-4 rounded-lg shadow-lg'>
                                        <div className='text-xl font-semibold'>Education</div>
                                        <div className='space-y-3'>
                                            <div>Showcase your educational information</div>
                                            <div className='flex gap-4'>
                                                <div><IoSchoolOutline className='text-xl' /></div>
                                                <div>BE/BTECH - INTEGRAL UNIVERSITY</div>
                                            </div>
                                            <div className='w-[90%]'><Divider /></div>
                                            <div className='flex flex-col gap-1 ml-8'>
                                                <div>High School</div>
                                                <div>Saraswati Vidya Mandir</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='w-[20%] bg-white border border-gray-200 rounded-lg h-fit'>
                        <div className='text-center font-semibold text-lg pt-7'>You are <span className='text-red-500'>missing</span> out of the</div>
                        <div className='text-center font-semibold text-lg'>premium benefits!</div>
                        <div className='flex px-7 py-7'>
                            <div className=''><HiOutlinePhoneOutgoing className='w-10 h-6 text-purple-500 mt-1' /></div>
                            <div>Get upto 3x more profile views</div>
                        </div>
                        <div className='flex px-7'>
                            <div className=''><HiOutlinePhoneOutgoing className='w-10 h-6 text-yellow-500 mt-1' /></div>
                            <div>Unlimited voice and video Calls</div>
                        </div>
                        <div className='flex p-7'>
                            <div className=''><HiOutlinePhoneOutgoing className='w-10 h-6 text-green-500 mt-1' /></div>
                            <div>Get access to contact details</div>
                        </div>
                        <div className='flex px-7'>
                            <div className=''><HiOutlinePhoneOutgoing className='w-10 h-6 text-blue-500 mt-1' /></div>
                            <div>Perform unlimited searches</div>
                        </div>
                        <div className='bg-red-500 flex justify-center items-center text-white mx-5 h-10 rounded-lg my-7'>
                            Upgrade now
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden block relative'>
                <div className='flex sticky top-0 bg-white items-center justify-between px-5 h-16 border-b shadow-md'>
                    {/* <div><BsPersonLinesFill className='border border-gray-200 rounded-full text-2xl text-gray-400' /></div> */}
                    <div><TemporaryDrawer/></div>
                    <div className='flex gap-3'>
                        <div>
                            <IoPersonOutline className=' text-2xl text-gray-400' />
                        </div>
                        <div>
                            <FaRegBell className=' text-2xl text-gray-400' />
                        </div>
                    </div>
                </div>
                <div className='px-16 mt-2'>
                    <div className='flex bg-white border gap-2 w-28 h-10 justify-center items-center rounded-2xl border-gray-200'>
                        <div><LiaFilterSolid className='text-xl mt-1 text-red-500' /></div>
                        <div>Filters</div>
                    </div>
                </div>
                <div className='bg-cover bg-center rounded-xl mt-6 mx-16' style={{ height: "60vh", backgroundImage: 'url("https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg")' }}>
                    <div className='flex flex-col pt-9'>
                        <div className='text-sm font-semibold mt-4 md:pl-10 pl-5'>Last seen on Dec-16-2024</div>
                        <div className='text-2xl font-bold md:pl-10 pl-5'>Roohi Kaur, 22</div>
                        <div className='md:pl-10 pl-5'>4ft 10in   Ajmer   others</div>
                        <div className='md:pl-10 pl-5'>Not Working   No Income</div>
                        <div className='md:pl-10 pl-5'>others</div>
                        <div className='md:pl-10 pl-5 text-sm'>Profile managed by Self</div>
                        <div className='flex justify-evenly mt-4 text-white'>
                            <div className='flex flex-col text-xl font-semibold'>
                                <div className='mt-0.5 flex items-center justify-center border border-gray-400 rounded-full h-12'><RxEnvelopeClosed /></div>
                                <div className='text-sm'>Interest</div>
                            </div>
                            <div className='flex flex-col text-xl font-semibold'>
                                <div className='mt-0.5 flex items-center justify-center ml-4 border border-gray-400 rounded-full h-12 w-12'><CiHeart /></div>
                                <div className='text-sm'>Super Interest</div>
                            </div>
                            <div className='flex flex-col text-xl font-semibold'>
                                <div className='mt-0.5 flex items-center justify-center border border-gray-400 rounded-full h-12'><CiStar /></div>
                                <div className='text-sm'>Shortlist</div>
                            </div>
                            <div className='flex flex-col text-xl font-semibold'>
                                <div className='mt-0.5 flex items-center justify-center border border-gray-400 rounded-full h-12 w-12'><IoChatbubbleOutline /></div>
                                <div className='text-sm ml-2'>Chat</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-cover bg-center rounded-xl mt-7 mx-16' style={{ height: "60vh", backgroundImage: 'url("https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg")' }}>
                    <div className='flex flex-col pt-9'>
                        <div className='text-sm font-semibold mt-4 md:pl-10 pl-5'>Last seen on Dec-16-2024</div>
                        <div className='text-2xl font-bold md:pl-10 pl-5'>Roohi Kaur, 22</div>
                        <div className='md:pl-10 pl-5'>4ft 10in   Ajmer   others</div>
                        <div className='md:pl-10 pl-5'>Not Working   No Income</div>
                        <div className='md:pl-10 pl-5'>others</div>
                        <div className='md:pl-10 pl-5 text-sm'>Profile managed by Self</div>
                        <div className='flex justify-evenly mt-4 text-white'>
                            <div className='flex flex-col text-xl font-semibold'>
                                <div className='mt-0.5 flex items-center justify-center border border-gray-400 rounded-full h-12'><RxEnvelopeClosed /></div>
                                <div className='text-sm'>Interest</div>
                            </div>
                            <div className='flex flex-col text-xl font-semibold'>
                                <div className='mt-0.5 flex items-center justify-center ml-4 border border-gray-400 rounded-full h-12 w-12'><CiHeart /></div>
                                <div className='text-sm'>Super Interest</div>
                            </div>
                            <div className='flex flex-col text-xl font-semibold'>
                                <div className='mt-0.5 flex items-center justify-center border border-gray-400 rounded-full h-12'><CiStar /></div>
                                <div className='text-sm'>Shortlist</div>
                            </div>
                            <div className='flex flex-col text-xl font-semibold'>
                                <div className='mt-0.5 flex items-center justify-center border border-gray-400 rounded-full h-12 w-12'><IoChatbubbleOutline /></div>
                                <div className='text-sm ml-2'>Chat</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex sticky bottom-0 bg-white justify-evenly mt-4 rounded-t-xl border-t shadow-lg text-gray-400'>
                    <div className='flex flex-col text-xl font-semibold'>
                        <div className='pt-7 text-red-700 flex items-center justify-center h-12'><GiSwipeCard /></div>
                        <div className='text-sm'>Interest</div>
                    </div>
                    <div className='flex flex-col text-xl font-semibold'>
                        <div className='pt-7 flex items-center justify-center h-12 w-12'><RiTimer2Line /></div>
                        <div className='text-sm'>Activity</div>
                    </div>
                    <div className='flex flex-col text-xl font-semibold'>
                        <div className='pt-7 flex items-center justify-center h-12'><IoSearchSharp /></div>
                        <div className='text-sm'>Search</div>
                    </div>
                    <div className='flex flex-col text-xl font-semibold'>
                        <div className='pt-7 flex items-center justify-center h-12 w-12'><IoChatbubbleOutline /></div>
                        <div className='text-sm ml-2'>Chat</div>
                    </div>
                    <div className='flex flex-col text-xl font-semibold'>
                        <div className='pt-7 flex items-center pl-4 justify-center h-12 w-12'><PiCrownSimple /></div>
                        <div className='text-sm ml-2'>Upgrade</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
