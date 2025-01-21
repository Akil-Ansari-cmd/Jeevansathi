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
import { RxCross2 } from "react-icons/rx";
import { PiCrownSimple } from "react-icons/pi";
import { PiFlowerLotusLight } from "react-icons/pi";
import { TbWorldCheck } from "react-icons/tb";
import { CiCircleInfo } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { MdOutlinePerson4 } from "react-icons/md";
import { RiTimer2Line } from "react-icons/ri";
import { BiHandicap } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";
import { GiSwipeCard } from "react-icons/gi";
import TemporaryDrawer from './Drawer';
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { TbWallet } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import './App.css'
import New from './New';
import Filters from './Filters';
import SwipeableTemporaryDrawer from './NewDrawer';
const Dashboard = () => {
    const [content, setContent] = useState("main");
    const [yes, setYes] = useState("match");
    const [criteria, setCriteria] = useState("Criteria");

    return (
        <>
            <div className='lg:block hidden'>
                <div className='flex sticky top-0 bg-white z-50 shadow-md items-center justify-between px-7 h-20'>
                    <div><img className='h-10' src='https://static.jeevansathi.com/images/jspc/commonimg/desktopLogo25Years.svg' /></div>
                    <div className='flex gap-4'>
                        <div>
                            <IoPersonOutline onClick={() => setContent("Profile")} className='border border-gray-400 cursor-pointer mt-2 rounded-full text-2xl text-gray-400' />
                        </div>
                        <div>
                            <FaRegBell onClick={() => setContent("Notify")} className='border border-gray-400 cursor-pointer rounded-full mt-2 text-2xl text-gray-400' />
                        </div>
                        {/* <div><RxHamburgerMenu className='border border-gray-400 rounded-full text-2xl w-10 text-gray-400' /></div> */}
                        <div className='-ml-5 mt-0.5'><SwipeableTemporaryDrawer /></div>
                    </div>
                </div>
                <div className='flex pt-5 xl:px-7 h-screen gap-5 bg-gray-50'>
                    <div className='xl:w-[20%] w-[25%] sticky top-14  px-3 border h-fit border-gray-200 bg-white rounded-lg'>
                        <div className='flex gap-1 mt-8'>
                            <div><img className='xl:h-16 xl:w-16 h-10 w-10 rounded-full object-cover' src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' /></div>
                            <div className='xl:mt-2 mt-0'>
                                <div className='font-bold text-lg'>Hi Person!</div>
                                <div className='flex text-base xl:gap-2 gap-0'><div className='text-xs'>UTWV4067</div><div onClick={() => setContent("Profile")} className='text-xs text-red-500 font-semibold'>Edit Profile</div></div>
                            </div>
                        </div>
                        <div className='my-5'><Divider className='w-[100%]' /></div>
                        <div onClick={() => setContent("main")} className={`flex justify-between cursor-pointer mt-3 ${content === "main" ? "text-black" : "text-gray-400"}`}>
                            <div className='font-semibold'>Matches</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div onClick={() => setContent("Activity")} className={`flex justify-between cursor-pointer ${content === "Activity" ? "text-black" : "text-gray-400"} my-5`}>
                            <div className='font-semibold'>Activity</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div onClick={() => setContent("Search")} className={`flex justify-between cursor-pointer ${content === "Search" ? "text-black" : "text-gray-400"}`}>
                            <div className='font-semibold'>Search</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div onClick={() => setContent("Mess")} className={`flex justify-between my-5 cursor-pointer ${content === "Mess" ? "text-black" : "text-gray-400"}`}>
                            <div className='font-semibold'>Messenger</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                        <div onClick={() => setContent("Upgrade")} className={`flex justify-between cursor-pointer my-6 pb-7 ${content === "Upgrade" ? "text-black" : "text-gray-400"}`}>
                            <div className='font-semibold'>Upgrade</div>
                            <div className='mt-2'><IoIosArrowForward /></div>
                        </div>
                    </div>
                    <div className='overflow-hidden overflow-y-scroll'>
                        {content === "main" &&
                            <div className='space-y-5 w-[100%]'>
                                <div className='flex items-center bg-white h-[10vh] rounded-t-xl'>
                                    <div className='flex ml-5 border w-28 h-10 justify-center items-center rounded-2xl border-gray-200'>
                                        <div><LiaFilterSolid className='text-xl mt-1 text-red-500' /></div>
                                        <div className=' !flex-none'><Filters /></div>
                                    </div>
                                </div>
                                <div className='flex w-[100%] border border-gray-200 bg-white rounded-lg'>
                                    <div className='xl:w-[20%] lg:w-[30%]'><img className='h-48 w-40 object-cover' src='https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg' /></div>
                                    <div className='flex xl:w-[80%] lg:w-[70%] flex-col'>
                                        <div className='text-sm font-semibold mt-4 xl:pl-10 pl-5'>Last seen on Dec-16-2024</div>
                                        <div className='text-2xl font-bold xl:pl-10 pl-5'>Roohi Kaur, 22</div>
                                        <div className='xl:pl-10 pl-5'>4ft 10in   Ajmer   others</div>
                                        <div className='xl:pl-10 pl-5'>Not Working   No Income</div>
                                        <div className='xl:pl-10 pl-5'>others</div>
                                        <div className='flex xl:justify-evenly  lg:space-x-3 mt-2 pt-2 px-2 bg-pink-100 w-[45vw] h-[50%]'>
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
                                <div className='flex w-[100%] border border-gray-200 bg-white rounded-lg'>
                                    <div className='xl:w-[20%] lg:w-[30%]'><img className='h-48 w-40 object-cover' src='https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg' /></div>
                                    <div className='flex xl:w-[80%] lg:w-[70%] flex-col'>
                                        <div className='text-sm font-semibold mt-4 xl:pl-10 pl-5'>Last seen on Dec-16-2024</div>
                                        <div className='text-2xl font-bold xl:pl-10 pl-5'>Roohi Kaur, 22</div>
                                        <div className='xl:pl-10 pl-5'>4ft 10in   Ajmer   others</div>
                                        <div className='xl:pl-10 pl-5'>Not Working   No Income</div>
                                        <div className='xl:pl-10 pl-5'>others</div>
                                        <div className='flex xl:justify-evenly  lg:space-x-3 mt-2 pt-2 px-2 bg-pink-100 w-[45vw] h-[30%]'>
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
                                    <div className='border border-gray-200  py-8 mt-4 rounded-lg shadow-lg'>
                                        <div className='flex justify-between px-7'>
                                            <div className='text-xl font-semibold'>Basic Details</div>
                                            <div className='mt-1'><MdModeEdit className='text-gray-400' style={{ fontSize: "20px" }} /></div>
                                        </div>
                                        <div className='space-y-3 px-7'>
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
                                    <div className='border border-gray-200 py-8 mt-4 rounded-lg shadow-lg'>
                                        <div className='flex justify-between px-7'>
                                            <div className='text-xl font-semibold'>About Me</div>
                                            <div className='mt-1'><MdModeEdit className='text-gray-400' style={{ fontSize: "20px" }} /></div>
                                        </div>
                                        <div className='space-y-3 px-7'>
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
                                    <div className='border border-gray-200 py-8 mt-4 rounded-lg shadow-lg'>
                                        <div className='flex justify-between px-7'>
                                            <div className='text-xl font-semibold'>Education</div>
                                            <div className='mt-1'><MdModeEdit className='text-gray-400' style={{ fontSize: "20px" }} /></div>
                                        </div>
                                        <div className='space-y-3 px-7'>
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
                        {
                            content === "Notify" && <div className="bg-white xl:w-[55vw] w-[40vw]">
                                <div className='flex pt-5 px-10 gap-60'>
                                    <div onClick={() => setContent("main")}><IoIosArrowBack className='mt-1 cursor-pointer' style={{ fontSize: "20px" }} /></div>
                                    <div className='text-xl font-semibold'>What's New?</div>
                                </div>
                                <div className='mt-6 mx-5 font-semibold text-gray-400'>older</div>
                                <div className='flex gap-6 mx-5 px-5 mt-2 bg-[#FFE7EA] p-3 rounded-md'>
                                    <div className='bg-yellow-50 text-yellow-400 rounded-full xl:w-12 w-20 h-12 flex items-center justify-center'><FaStar style={{ fontSize: "30px" }} /></div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='font-semibold'>Now you can look at profiles who have shortlisted you!</div>
                                        <div className='border border-red-500 font-semibold text-red-500 w-fit p-1 rounded-md'>Check out Now</div>
                                    </div>
                                    <div className='text-gray-500 text-xs mt-1 font-semibold'>1w</div>
                                </div>
                                <div className='flex gap-6 mx-5 px-5 mt-4 bg-[#FFE7EA] p-3 rounded-md'>
                                    <div className='bg-yellow-50 text-yellow-400 rounded-full xl:w-12 w-20 h-12 flex items-center justify-center'><FaStar style={{ fontSize: "30px" }} /></div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='font-semibold'>Now you can look at profiles who have shortlisted you!</div>
                                        <div className='border border-red-500 font-semibold text-red-500 w-fit p-1 rounded-md'>Check out Now</div>
                                    </div>
                                    <div className='text-gray-500 text-xs mt-1 font-semibold'>2w</div>
                                </div>
                                <div className='flex gap-6 mx-5 px-5 mt-4 bg-[#FFE7EA] p-3 rounded-md'>
                                    <div className='rounded-full xl:w-12 w-20 h-12 flex items-center justify-center'><img className='rounded-full' src='https://jeevansathi-nonscreened-photos.s3.amazonaws.com/thumbnail96/334/433/333764919iib17d0c3d674559fc0c7a0f219499a9baii9395c04821c5820c992a98d9e0d47a5d.jpeg' /></div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='font-semibold'>Your photo did not upload as they were against our guidelines</div>
                                        <div className='border border-red-500 font-semibold text-red-500 w-fit p-1 rounded-md'>Try Again</div>
                                    </div>
                                    <div className='text-gray-500 text-xs mt-1 font-semibold'>2w</div>
                                </div>
                                <div className='flex gap-6 mx-5 px-5 mt-4 bg-[#FFE7EA] p-3 rounded-md'>
                                    <div className='bg-pink-50 text-red-500 rounded-full xl:w-12 w-20 h-12 flex items-center justify-center'><IoPersonCircleOutline style={{ fontSize: "30px" }} /></div>
                                    <div className='flex flex-col'>
                                        <div className='font-semibold'>Your profile is now live! Start sending interest to matches</div>
                                        <div className='font-semibold'>you like!</div>
                                    </div>
                                    <div className='text-gray-500 text-xs mt-1 font-semibold'>2w</div>
                                </div>
                            </div>
                        }
                        {
                            content === "Activity" && <div className='w-[60vw] h-fit bg-white'>
                                <div><New /></div>
                                <div className="mt-10 pl-6">
                                    <div className="text-xl font-semibold">Attract more matches!</div>
                                    <div className="font-serif">Here are some tips for you to enhance your profile</div>
                                </div>
                                <div className='border rounded-xl pl-10 border-gray-200 xl:w-[50%] w-[70%] ml-6 my-10'>
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
                                    <div className='text-center mx-auto flex items-center justify-center border border-red-500 w-[80%] h-10 mb-5 rounded-lg text-red-500 mt-10'>
                                        Manage Partner Preferences
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            content === "Search" &&
                            <div className='w-[55vw] border border-gray-100 shadow-md relative bg-white pb-5 rounded-xl h-fit'>
                                <div className='flex sticky top-0 z-50 bg-white gap-5 pt-8 border-b mx-10 justify-center'>
                                    <div onClick={() => setCriteria("Criteria")} className={` font-semibold ${criteria === "Criteria" ? "border-b-2 border-red-700 text-gray-500" : ""} pb-3`}>Search by Criteria</div>
                                    <div onClick={() => setCriteria("Byprofile")} className={` font-semibold ${criteria === "Byprofile" ? "border-b-2 border-red-700 text-gray-500" : ""} pb-3`}>Search by Profile ID</div>
                                </div>
                                {
                                    criteria === "Criteria" &&
                                    <div>
                                        <div className='mx-20 text-sm mt-12 border-b pb-3 font-semibold'>
                                            <div className='text-gray-400'>Age</div>
                                            <div>18 Years - 23 Years</div>
                                        </div>
                                        <div className='mx-20 text-sm mt-12 border-b pb-3 font-semibold'>
                                            <div className='text-gray-400'>Height</div>
                                            <div>4'5''</div>
                                        </div>
                                        <div className='mx-20  mt-8 pb-3 font-semibold text-sm'>
                                            <div className='text-gray-400 text-sm '>Martial Status</div>
                                            <div className='flex text-sm mt-2 gap-5 text-gray-400'>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Doesn't Matter   +</div>
                                                <div className='border bg-pink-100 text-black flex gap-3 border-pink-500 rounded-2xl p-1'>Never Married
                                                    <IoCheckmarkSharp className='mt-1 text-red-600' />
                                                </div>
                                            </div>
                                            <div className='flex  mt-2 gap-5 text-gray-400'>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Awaiting Divorce   +</div>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Dirvorced  +</div>
                                            </div>
                                            <div className='flex mt-2 gap-5 text-gray-400'>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Widowed   +</div>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Anulled  +</div>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Married  +</div>
                                            </div>
                                        </div>
                                        <div className='mx-20  mt-6 pb-3  font-semibold text-sm'>
                                            <div className='text-gray-400 text-sm'>Religion</div>
                                            <div className='flex  mt-2 gap-5 text-gray-400'>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Doesn't Matter   +</div>
                                                <div className='border bg-pink-100 text-black flex gap-3 border-pink-500 rounded-2xl p-1'>Muslim
                                                    <IoCheckmarkSharp className='mt-1 text-red-600' />
                                                </div>
                                            </div>
                                            <div className='flex mt-2 gap-5 text-gray-400'>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Hindu   +</div>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Sikh  +</div>
                                            </div>
                                            <div className='flex  mt-2 gap-5 text-gray-400'>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Christian   +</div>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Jain  +</div>
                                                <div className='border border-gray-400 rounded-2xl p-1'>Parsi  +</div>
                                            </div>
                                        </div>
                                        <div className='mx-20 text-sm mt-5 border-b pb-3 font-semibold'>
                                            <div className='text-gray-400'>Caste</div>
                                            <div>Doesn't Matter</div>
                                        </div>
                                        <div className='mx-20 text-sm mt-8 border-b pb-3 font-semibold'>
                                            <div className='text-gray-400'>Mother tonque</div>
                                            <div>Doesn't Matter</div>
                                        </div>
                                        <div className='mx-20 text-sm mt-8 border-b pb-3 font-semibold'>
                                            <div className='text-gray-400'>Country</div>
                                            <div>United kingdom, United States</div>
                                        </div>
                                        <div className='mx-20 text-sm mt-8 border-b pb-3 font-semibold'>
                                            <div className='text-gray-400'>City Name</div>
                                            <div>Doesn't Matter</div>
                                        </div>
                                        <div className='flex items-center justify-center font-semibold mx-auto sticky bottom-0 bg-red-500 text-white border border-red-500 w-[50%] h-10 rounded-lg mt-10'>
                                            Show Me Profiles
                                        </div>
                                    </div>
                                }
                                {
                                    criteria === "Byprofile" &&
                                    <div className='mt-14'>
                                        <div className='font-semibold text-sm text-gray-500 border-b pb-3  mx-28'>Enter Profile ID</div>
                                        <div className='flex items-center justify-center font-semibold mx-auto bg-red-300 text-white w-[60%] h-10 rounded-lg mt-60'>
                                            Show Me Profile
                                        </div>
                                    </div>
                                }
                            </div>
                        }
                        {
                            content === "Mess" &&
                            <div className='w-[55vw] bg-white py-5 mt-2 px-8 rounded-xl h-[100vh]'>
                                <div className='border border-gray-300 bg-gray-50 py-5 xl:w-[50%] w-[70%] px-5 rounded-xl'>
                                    <div className='font-bold text-lg'>UP Match Hour</div>
                                    <div className='flex text-gray-400 gap-3 mt-3 pb-2 font-semibold text-sm border-b'>
                                        <div><MdOutlineCalendarToday className='mt-1' /></div>
                                        <div>11 Jan,Sat</div>
                                        <div>08:00 PM - 09:00 PM</div>
                                    </div>
                                    <div className='flex items-center ml-44 mt-4 rounded-md h-7 justify-center w-28 text-sm font-semibold bg-red-600 text-white'>Register Now</div>
                                </div>
                                <div className='mt-16 font-semibold text-xl'>My Conversations</div>
                                <div className='flex border-b border-gray-200 gap-5 mt-5 font-semibold text-sm'>
                                    <div className='border-b-2 border-red-600'>Acceptance</div>
                                    <div className='text-gray-400 '>Interest</div>
                                    <div className='text-gray-400 '>Calls</div>
                                </div>
                                <div className="flex flex-row gap-2 justify-center mt-20">
                                    <div className="w-2 h-2 rounded-full bg-red-700 animate-bounce"></div>
                                    <div className="w-2 h-2 rounded-full bg-red-700 animate-bounce [animation-delay:-.3s]"></div>
                                    <div className="w-2 h-2 rounded-full bg-red-700 animate-bounce [animation-delay:-.5s]"></div>
                                </div>
                            </div>
                        }
                        {
                            content === "Upgrade" &&
                            <div className='w-[55vw] bg-white py-5 mt-2 xl:px-10 px-0 rounded-xl'>
                                <div className='flex justify-between '>
                                    <div className='font-semibold text-xl'>Upgrade Membership</div>
                                    <div className='xl:flex hidden font-semibold text-red-500 text-sm'>Need help ?</div>
                                    <div className='xl:hidden flex font-semibold text-red-500 text-sm mr-20'>Need help ?</div>
                                </div>
                                <div className='flex w-[100%]  h-10 font-semibold mt-5 rounded-xl'>
                                    <div className='flex items-center justify-center bg-pink-50 rounded-l-lg w-[50%] border border-red-500'>Self-Service</div>
                                    <div className='flex items-center justify-center rounded-r-lg w-[50%] border-gray-400 border-y border-r text-gray-400'>Assisted</div>
                                </div>
                                <div className='flex xl:gap-5 gap-2'>
                                    <div className='flex  text-sm font-mono pt-20 flex-col space-y-5 text-gray-500'>
                                        <div className='xl:flex hidden'>Unlimited calls & contact sharing</div>
                                        <div className='xl:hidden block'>
                                            <div>Unlimited calls &</div>
                                            <div> contact sharing</div>
                                        </div>
                                        <div className='flex gap-1'>
                                            <div>Super Interest</div>
                                            <div><CiCircleInfo className='mt-1' /></div>
                                        </div>
                                        <div className='flex gap-1'>
                                            <div>Spotlights</div>
                                            <div><CiCircleInfo className='mt-1' /></div>
                                        </div>
                                        <div>Contact Views</div>
                                        <div className='flex gap-1'>
                                            <div>Sharpfinder</div>
                                            <div><CiCircleInfo className='mt-1' /></div>
                                        </div>
                                        <div className='flex gap-1'>
                                            <div>Relationship Manager</div>
                                            <div><CiCircleInfo className='mt-1' /></div>
                                        </div>
                                    </div>
                                    <div className='w-[17%] mt-8 border text-gray-400 border-gray-200 rounded-xl'>
                                        <div className='text-center text-sm font-semibold space-y-5 py-5'>
                                            <div className='!text-black'>Pro</div>
                                            <div>
                                                <input type="radio" className='w-4 h-4' />
                                            </div>
                                            <div><IoCheckmarkSharp className='mx-auto' /></div>
                                            <div>20</div>
                                            <div>3</div>
                                            <div>20</div>
                                            <div><RxCross2 className='mx-auto' /></div>
                                            <div><RxCross2 className='mx-auto' /></div>
                                        </div>
                                    </div>
                                    <div className='w-[17%] mt-8 bg-pink-100 text-gray-400 rounded-xl'>
                                        <div className='text-center text-sm font-semibold space-y-5 py-5'>
                                            <div className='!text-black'>Pro Max</div>
                                            <div>
                                                <input type="radio" className='w-4 h-4 !text-red-500' />
                                            </div>
                                            <div><IoCheckmarkSharp className='mx-auto' /></div>
                                            <div>20</div>
                                            <div>3</div>
                                            <div>20</div>
                                            <div><RxCross2 className='mx-auto' /></div>
                                            <div><RxCross2 className='mx-auto' /></div>
                                        </div>
                                    </div>
                                    <div className='w-[17%] mt-8 text-gray-400 border border-gray-200 rounded-xl'>
                                        <div className='text-center text-sm font-semibold space-y-5 py-5'>
                                            <div className='!text-black'>Pro Supreme</div>
                                            <div>
                                                <input type="radio" className='w-4 h-4' />
                                            </div>
                                            <div><IoCheckmarkSharp className='mx-auto' /></div>
                                            <div>20</div>
                                            <div>3</div>
                                            <div>20</div>
                                            <div><RxCross2 className='mx-auto' /></div>
                                            <div><RxCross2 className='mx-auto' /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex mt-10'>
                                    <div className='w-[30%] mt-3 h-px border'></div>
                                    <div className='text-sm font-semibold px-2'><span className='text-red-500'>FLAT 50% OFF</span> <span className='text-gray-500'>ON ALL PLANS</span></div>
                                    <div className='w-[30%] mt-3 h-px border'></div>
                                </div>
                                <div className='flex mt-3 space-x-5'>
                                    <div className='xl:w-[30%] w-[25%] p-2 rounded-xl border border-red-500'>
                                        <div className='flex justify-between'>
                                            <div className='text-sm text-red-500'>1 month</div>
                                            <div><input type="radio" className='w-4 h-4 text-red-500' /></div>
                                        </div>
                                        <div className='flex gap-1'>
                                            <div className='text-sm font-semibold'>₹897</div>
                                            <div className='text-xs line-through mt-0.5'>₹1,030</div>
                                        </div>
                                    </div>
                                    <div className='xl:w-[30%] w-[25%] p-2 rounded-xl border border-gray-200'>
                                        <div className='flex justify-between'>
                                            <div className='text-sm '>1 month</div>
                                            <div><input type="radio" className='w-4 h-4 text-red-500' /></div>
                                        </div>
                                        <div className='flex gap-1'>
                                            <div className='text-sm font-semibold'>₹897</div>
                                            <div className='text-xs line-through mt-0.5'>₹1,030</div>
                                        </div>
                                    </div>
                                    <div className='xl:w-[30%] w-[25%] p-2 rounded-xl border border-gray-200'>
                                        <div className='flex justify-between'>
                                            <div className='text-sm'>1 month</div>
                                            <div><input type="radio" className='w-4 h-4 text-red-500' /></div>
                                        </div>
                                        <div className='flex gap-1'>
                                            <div className='text-sm font-semibold'>₹897</div>
                                            <div className='text-xs line-through mt-0.5'>₹1,030</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center xl:mx-auto mx-8 font-semibold bg-red-600 text-white border border-red-500 w-[75%] h-10 rounded-lg mt-4'>
                                    Get Pro Max now
                                </div>
                                <div className='text-center text-sm text-gray-600'>Recurring payment, cancel anytime</div>
                            </div>
                        }
                    </div>
                    <div className='xl:w-[20%] w-[30%] bg-white border border-gray-200 rounded-lg h-fit'>
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
                    <div><TemporaryDrawer /></div>
                    <div className='flex gap-3'>
                        <div>
                            <IoPersonOutline onClick={() => setYes("pro")} className=' text-2xl cursor-pointer text-gray-400' />
                        </div>
                        <div>
                            <FaRegBell onClick={() => setYes("Noti")} className=' text-2xl cursor-pointer text-gray-400' />
                        </div>
                    </div>
                </div>
                <div>
                    {
                        yes === "Noti" && <div className="bg-white">
                            <div className='flex pt-5 px-10 gap-60'>
                                <div onClick={() => setContent("main")}><IoIosArrowBack className='mt-1 cursor-pointer' style={{ fontSize: "20px" }} /></div>
                                <div className='text-xl font-semibold'>What's New?</div>
                            </div>
                            <div className='mt-6 mx-5 font-semibold text-gray-400'>older</div>
                            <div className='flex gap-6 mx-5 px-5 mt-2 bg-[#FFE7EA] p-3 rounded-md'>
                                <div className='bg-yellow-50 text-yellow-400 rounded-full  md:w-12 w-20 h-12 flex items-center justify-center'><FaStar style={{ fontSize: "30px" }} /></div>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-semibold'>Now you can look at profiles who have shortlisted you!</div>
                                    <div className='border border-red-500 font-semibold text-red-500 w-fit p-1 rounded-md'>Check out Now</div>
                                </div>
                                <div className='text-gray-500 text-xs mt-1 font-semibold'>1w</div>
                            </div>
                            <div className='flex gap-6 mx-5 px-5 mt-4 bg-[#FFE7EA] p-3 rounded-md'>
                                <div className='bg-yellow-50 text-yellow-400 rounded-full  md:w-12 w-20 h-12 flex items-center justify-center'><FaStar style={{ fontSize: "30px" }} /></div>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-semibold'>Now you can look at profiles who have shortlisted you!</div>
                                    <div className='border border-red-500 font-semibold text-red-500 w-fit p-1 rounded-md'>Check out Now</div>
                                </div>
                                <div className='text-gray-500 text-xs mt-1 font-semibold'>2w</div>
                            </div>
                            <div className='flex gap-6 mx-5 px-5 mt-4 bg-[#FFE7EA] p-3 rounded-md'>
                                <div className='rounded-full   md:w-12 w-20 h-12 flex items-center justify-center'><img className='rounded-full' src='https://jeevansathi-nonscreened-photos.s3.amazonaws.com/thumbnail96/334/433/333764919iib17d0c3d674559fc0c7a0f219499a9baii9395c04821c5820c992a98d9e0d47a5d.jpeg' /></div>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-semibold'>Your photo did not upload as they were against our guidelines</div>
                                    <div className='border border-red-500 font-semibold text-red-500 w-fit p-1 rounded-md'>Try Again</div>
                                </div>
                                <div className='text-gray-500 text-xs mt-1 font-semibold'>2w</div>
                            </div>
                            <div className='flex gap-6 mx-5 px-5 mt-4 bg-[#FFE7EA] p-3 rounded-md'>
                                <div className='bg-pink-50 text-red-500 rounded-full  md:w-12 w-20 h-12 flex items-center justify-center'><IoPersonCircleOutline style={{ fontSize: "30px" }} /></div>
                                <div className='flex flex-col'>
                                    <div className='font-semibold'>Your profile is now live! Start sending interest to matches</div>
                                    <div className='font-semibold'>you like!</div>
                                </div>
                                <div className='text-gray-500 text-xs mt-1 font-semibold'>2w</div>
                            </div>
                        </div>
                    }
                    {
                        yes === "pro" && <div className='bg-white'>
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
                                <div className='border border-gray-200  py-8 mt-4 rounded-lg shadow-lg'>
                                    <div className='flex justify-between px-7'>
                                        <div className='text-xl font-semibold'>Basic Details</div>
                                        <div className='mt-1'><MdModeEdit className='text-gray-400' style={{ fontSize: "20px" }} /></div>
                                    </div>
                                    <div className='space-y-3 px-7'>
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
                                <div className='border border-gray-200 py-8 mt-4 rounded-lg shadow-lg'>
                                    <div className='flex justify-between px-7'>
                                        <div className='text-xl font-semibold'>About Me</div>
                                        <div className='mt-1'><MdModeEdit className='text-gray-400' style={{ fontSize: "20px" }} /></div>
                                    </div>
                                    <div className='space-y-3 px-7'>
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
                                <div className='border border-gray-200 py-8 mt-4 rounded-lg shadow-lg'>
                                    <div className='flex justify-between px-7'>
                                        <div className='text-xl font-semibold'>Education</div>
                                        <div className='mt-1'><MdModeEdit className='text-gray-400' style={{ fontSize: "20px" }} /></div>
                                    </div>
                                    <div className='space-y-3 px-7'>
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
                    {yes === "match" &&
                        <div>
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
                        </div>
                    }
                    {
                        yes === "Active" &&
                        <div className='h-fit bg-white'>
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
                    }
                    {
                        yes === "Sea" &&
                        <div className='w-[100%] border border-gray-100 shadow-md relative bg-white pb-5 rounded-xl h-fit'>
                            <div className='flex sticky top-0 z-50 bg-white gap-5 pt-8 border-b mx-10 justify-center'>
                                <div className='border-b-2 font-semibold border-red-700 pb-3'>Search by Criteria</div>
                                <div>Search by Profile ID</div>
                            </div>
                            <div className='mx-20 text-sm mt-12 border-b pb-3 font-semibold'>
                                <div className='text-gray-400'>Age</div>
                                <div>18 Years - 23 Years</div>
                            </div>
                            <div className='mx-20 text-sm mt-12 border-b pb-3 font-semibold'>
                                <div className='text-gray-400'>Height</div>
                                <div>4'5''</div>
                            </div>
                            <div className='mx-20  mt-8 pb-3 font-semibold text-sm'>
                                <div className='text-gray-400 text-sm '>Martial Status</div>
                                <div className='flex text-sm mt-2 gap-5 text-gray-400'>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Doesn't Matter   +</div>
                                    <div className='border bg-pink-100 text-black flex gap-3 border-pink-500 rounded-2xl p-1'>Never Married
                                        <IoCheckmarkSharp className='mt-1 text-red-600' />
                                    </div>
                                </div>
                                <div className='flex  mt-2 gap-5 text-gray-400'>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Awaiting Divorce   +</div>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Dirvorced  +</div>
                                </div>
                                <div className='flex mt-2 gap-5 text-gray-400'>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Widowed   +</div>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Anulled  +</div>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Married  +</div>
                                </div>
                            </div>
                            <div className='mx-20  mt-6 pb-3  font-semibold text-sm'>
                                <div className='text-gray-400 text-sm'>Religion</div>
                                <div className='flex  mt-2 gap-5 text-gray-400'>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Doesn't Matter   +</div>
                                    <div className='border bg-pink-100 text-black flex gap-3 border-pink-500 rounded-2xl p-1'>Muslim
                                        <IoCheckmarkSharp className='mt-1 text-red-600' />
                                    </div>
                                </div>
                                <div className='flex mt-2 gap-5 text-gray-400'>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Hindu   +</div>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Sikh  +</div>
                                </div>
                                <div className='flex  mt-2 gap-5 text-gray-400'>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Christian   +</div>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Jain  +</div>
                                    <div className='border border-gray-400 rounded-2xl p-1'>Parsi  +</div>
                                </div>
                            </div>
                            <div className='mx-20 text-sm mt-5 border-b pb-3 font-semibold'>
                                <div className='text-gray-400'>Caste</div>
                                <div>Doesn't Matter</div>
                            </div>
                            <div className='mx-20 text-sm mt-8 border-b pb-3 font-semibold'>
                                <div className='text-gray-400'>Mother tonque</div>
                                <div>Doesn't Matter</div>
                            </div>
                            <div className='mx-20 text-sm mt-8 border-b pb-3 font-semibold'>
                                <div className='text-gray-400'>Country</div>
                                <div>United kingdom, United States</div>
                            </div>
                            <div className='mx-20 text-sm mt-8 border-b pb-3 font-semibold'>
                                <div className='text-gray-400'>City Name</div>
                                <div>Doesn't Matter</div>
                            </div>
                            <div className='flex items-center justify-center font-semibold mx-auto sticky bottom-0 bg-red-500 text-white border border-red-500 w-[50%] h-10 rounded-lg mt-10'>
                                Show Me Profiles
                            </div>
                        </div>
                    }
                    {
                        yes === "chat" &&
                        <div className='w-[100%] bg-white pt-2 mt-2 px-8 rounded-xl h-[100vh]'>
                            <div className='mt-5 font-semibold text-xl'>My Conversations</div>
                            <div className='flex border-b border-gray-200 gap-5 mt-5 font-semibold text-sm'>
                                <div className='border-b-2 border-red-600'>Acceptance</div>
                                <div className='text-gray-400 '>Interest</div>
                                <div className='text-gray-400 '>Calls</div>
                            </div>
                            <div className="flex flex-row gap-2 justify-center mt-20">
                                <div className="w-2 h-2 rounded-full bg-red-700 animate-bounce"></div>
                                <div className="w-2 h-2 rounded-full bg-red-700 animate-bounce [animation-delay:-.3s]"></div>
                                <div className="w-2 h-2 rounded-full bg-red-700 animate-bounce [animation-delay:-.5s]"></div>
                            </div>
                        </div>
                    }
                    {
                        yes === "Upg" &&
                        <div className='w-[100%] bg-white py-5 mt-2  px-10 rounded-xl'>
                            <div className='flex justify-between '>
                                <div className='font-semibold text-xl'>Upgrade Membership</div>
                                <div className=' font-semibold text-red-500 text-sm'>Need help ?</div>

                            </div>
                            <div className='flex w-[100%]  h-10 font-semibold mt-5 rounded-xl'>
                                <div className='flex items-center justify-center bg-pink-50 rounded-l-lg w-[50%] border border-red-500'>Self-Service</div>
                                <div className='flex items-center justify-center rounded-r-lg w-[50%] border-gray-400 border-y border-r text-gray-400'>Assisted</div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='flex  text-sm font-mono pt-20 flex-col space-y-5 text-gray-500'>
                                    <div className=''>Unlimited calls & contact sharing</div>

                                    <div className='flex gap-1'>
                                        <div>Super Interest</div>
                                        <div><CiCircleInfo className='mt-1' /></div>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div>Spotlights</div>
                                        <div><CiCircleInfo className='mt-1' /></div>
                                    </div>
                                    <div>Contact Views</div>
                                    <div className='flex gap-1'>
                                        <div>Sharpfinder</div>
                                        <div><CiCircleInfo className='mt-1' /></div>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div>Relationship Manager</div>
                                        <div><CiCircleInfo className='mt-1' /></div>
                                    </div>
                                </div>
                                <div className='w-[17%] mt-8 border text-gray-400 border-gray-200 rounded-xl'>
                                    <div className='text-center text-sm font-semibold space-y-5 py-5'>
                                        <div className='!text-black'>Pro</div>
                                        <div>
                                            <input type="radio" className='w-4 h-4' />
                                        </div>
                                        <div><IoCheckmarkSharp className='mx-auto' /></div>
                                        <div>20</div>
                                        <div>3</div>
                                        <div>20</div>
                                        <div><RxCross2 className='mx-auto' /></div>
                                        <div><RxCross2 className='mx-auto' /></div>
                                    </div>
                                </div>
                                <div className='w-[17%] mt-8 bg-pink-100 text-gray-400 rounded-xl'>
                                    <div className='text-center text-sm font-semibold space-y-5 py-5'>
                                        <div className='!text-black'>Pro Max</div>
                                        <div>
                                            <input type="radio" className='w-4 h-4 !text-red-500' />
                                        </div>
                                        <div><IoCheckmarkSharp className='mx-auto' /></div>
                                        <div>20</div>
                                        <div>3</div>
                                        <div>20</div>
                                        <div><RxCross2 className='mx-auto' /></div>
                                        <div><RxCross2 className='mx-auto' /></div>
                                    </div>
                                </div>
                                <div className='w-[17%] mt-8 text-gray-400 border border-gray-200 rounded-xl'>
                                    <div className='text-center text-sm font-semibold space-y-5 py-5'>
                                        <div className='!text-black'>Pro Supreme</div>
                                        <div>
                                            <input type="radio" className='w-4 h-4' />
                                        </div>
                                        <div><IoCheckmarkSharp className='mx-auto' /></div>
                                        <div>20</div>
                                        <div>3</div>
                                        <div>20</div>
                                        <div><RxCross2 className='mx-auto' /></div>
                                        <div><RxCross2 className='mx-auto' /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div className='w-[30%] mt-3 h-px border'></div>
                                <div className='text-sm font-semibold px-2'><span className='text-red-500'>FLAT 50% OFF</span> <span className='text-gray-500'>ON ALL PLANS</span></div>
                                <div className='w-[30%] mt-3 h-px border'></div>
                            </div>
                            <div className='flex mt-3 space-x-5'>
                                <div className='w-[30%] p-2 rounded-xl border border-red-500'>
                                    <div className='flex justify-between'>
                                        <div className='text-sm text-red-500'>1 month</div>
                                        <div><input type="radio" className='w-4 h-4 text-red-500' /></div>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='text-sm font-semibold'>₹897</div>
                                        <div className='text-xs line-through mt-0.5'>₹1,030</div>
                                    </div>
                                </div>
                                <div className='w-[30%] p-2 rounded-xl border border-gray-200'>
                                    <div className='flex justify-between'>
                                        <div className='text-sm '>1 month</div>
                                        <div><input type="radio" className='w-4 h-4 text-red-500' /></div>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='text-sm font-semibold'>₹897</div>
                                        <div className='text-xs line-through mt-0.5'>₹1,030</div>
                                    </div>
                                </div>
                                <div className='w-[30%] p-2 rounded-xl border border-gray-200'>
                                    <div className='flex justify-between'>
                                        <div className='text-sm'>1 month</div>
                                        <div><input type="radio" className='w-4 h-4 text-red-500' /></div>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='text-sm font-semibold'>₹897</div>
                                        <div className='text-xs line-through mt-0.5'>₹1,030</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mx-auto font-semibold bg-red-600 text-white border border-red-500 w-[75%] h-10 rounded-lg mt-4'>
                                Get Pro Max now
                            </div>
                            <div className='text-center text-sm text-gray-600'>Recurring payment, cancel anytime</div>
                        </div>

                    }
                </div>
                <div className='flex sticky bottom-0 bg-white justify-evenly mt-4 rounded-t-xl border-t shadow-lg text-gray-400'>
                    <div onClick={() => setYes("match")} className='flex flex-col text-xl font-semibold'>
                        <div className={`pt-7 flex items-center justify-center ${yes === "match" ? "text-red-700" : "text-gray-400"} h-12`}><GiSwipeCard /></div>
                        <div className='text-sm'>Interest</div>
                    </div>
                    <div onClick={() => setYes("Active")} className='flex flex-col text-xl font-semibold'>
                        <div className={`pt-7 flex items-center justify-center ${yes === "Active" ? "text-red-700" : "text-gray-400"} h-12 w-12`}><RiTimer2Line /></div>
                        <div className='text-sm'>Activity</div>
                    </div>
                    <div onClick={() => setYes("Sea")} className='flex flex-col text-xl font-semibold'>
                        <div className={`pt-7 flex items-center justify-center ${yes === "Sea" ? "text-red-700" : "text-gray-400"} h-12 w-12`}><IoSearchSharp /></div>
                        <div className='text-sm'>Search</div>
                    </div>
                    <div onClick={() => setYes("chat")} className='flex flex-col text-xl font-semibold'>
                        <div className={`pt-7 flex items-center justify-center ${yes === "chat" ? "text-red-700" : "text-gray-400"} h-12 w-12`}><IoChatbubbleOutline /></div>
                        <div className='text-sm ml-2'>Chat</div>
                    </div>
                    <div onClick={() => setYes("Upg")} className='flex flex-col text-xl font-semibold'>
                        <div className={`pt-7 flex items-center pl-4  ${yes === "Upg" ? "text-red-700" : "text-gray-400"} justify-center h-12 w-12`}><PiCrownSimple /></div>
                        <div className='text-sm ml-2'>Upgrade</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
