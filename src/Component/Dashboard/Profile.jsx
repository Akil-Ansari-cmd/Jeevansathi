import React from 'react'
import Divider from '@mui/material/Divider';
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
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  
    return (
        <div>
            <div className='bg-white'>
                <div className='bg-cover bg-center rounded-t-lg' style={{ height: "60vh", backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg")' }}>
                    <div className='pt-56 pl-10 text-2xl font-sans'>Person Name</div>
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
        </div>
    )
}

export default Profile
