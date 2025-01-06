import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import Divider from '@mui/material/Divider';
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareGooglePlus } from "react-icons/fa6";
import New from './New';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const Navigate = useNavigate();
    return (
        <div className='bg-gray-200'>
            <div className="md:block hidden py-10 bg-cover bg-center" style={{ backgroundImage: 'url("https://static.jeevansathi.com/images/jspc/commonimg/header-inner1.jpg")' }}>
                <div className='flex bg-slate-700 xl:mx-28 lg:mx-10 mx-0 justify-between'>
                    <div className='flex items-center justify-center lg:gap-10 gap-3'>
                        <div className='md:flex hidden'>
                            <img
                                className='h-24 md:h-16 bg-white p-2'
                                src='https://static.jeevansathi.com/images/jspc/commonimg/desktopLogo25Years.svg'
                                alt='Jeevansathi Logo'
                            />
                        </div>
                        <div className='md:hidden flex'>
                            <img
                                className='bg-white'
                                src='https://static.jeevansathi.com/images/jspc/commonimg/desktopLogo25Years.svg'
                                alt='Jeevansathi Logo'
                            />
                        </div>
                        <div className='md:flex hidden text-white md:gap-2 gap-0 md:text-sm text-xs whitespace-nowrap'>
                            BROWSE PROFILES BY
                            <div><IoIosArrowDown className='my-1' /></div>
                        </div>
                        <div className='flex md:hidden text-white md:gap-2 gap-0 md:text-sm text-xs whitespace-nowrap'>
                            BROWSE
                            <div><IoIosArrowDown className='my-1' /></div>
                        </div>
                        <div className='flex text-white md:gap-2 gap-0 md:text-sm text-xs'>
                            SEARCH
                            <div><IoIosArrowDown className='my-1' /></div>
                        </div>
                        <div className='flex md:text-sm text-xs text-white'>
                            HELP
                        </div>
                    </div>
                    <div className='flex lg:gap-10 md:gap-5 gap-0 items-center justify-center md:text-sm text-xs'>
                        <div className='flex text-white md:gap-2 gap-0'>
                            LOGIN
                            <div><MdPerson className='my-1' /></div>
                        </div>
                        <div className='md:flex hidden'>
                            <div className='h-16 w-40 bg-blue-500 text-white p-2 text-center py-4'>REGISTER FREE</div>
                        </div>
                        <div className='md:hidden flex'>
                            <div className='h-5 w-10 bg-blue-500 text-white p-2 text-center py-4'>REGISTER FREE</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden block py-10 bg-cover bg-center" style={{ backgroundImage: 'url("https://static.jeevansathi.com/images/jspc/commonimg/header-inner1.jpg")' }}>
                <div className='flex bg-slate-700 xl:mx-28 lg:mx-10 mx-0 gap-3'>
                    <div className='flex items-center justify-center lg:gap-10 gap-3'>
                        <div className='md:flex hidden'>
                            <img
                                className='h-24 md:h-16 bg-white p-2'
                                src='https://static.jeevansathi.com/images/jspc/commonimg/desktopLogo25Years.svg'
                                alt='Jeevansathi Logo'
                            />
                        </div>
                        <div className='md:hidden flex'>
                            <img
                                className='bg-white'
                                src='https://static.jeevansathi.com/images/jspc/commonimg/desktopLogo25Years.svg'
                                alt='Jeevansathi Logo'
                            />
                        </div>
                        <div className='md:flex hidden text-white md:gap-2 gap-0 md:text-sm text-xs whitespace-nowrap'>
                            BROWSE PROFILES BY
                            <div><IoIosArrowDown className='my-1' /></div>
                        </div>
                        <div className='flex md:hidden text-white md:gap-2 gap-0 md:text-sm text-xs whitespace-nowrap'>
                            BROWSE
                            <div><IoIosArrowDown className='my-1' /></div>
                        </div>
                        <div className='flex text-white md:gap-2 gap-0 md:text-sm text-xs'>
                            SEARCH
                            <div><IoIosArrowDown className='my-1' /></div>
                        </div>
                        <div className='flex md:text-sm text-xs text-white'>
                            HELP
                        </div>
                    </div>
                    <div className='flex lg:gap-10 md:gap-5 gap-0 items-center justify-center md:text-sm text-xs'>
                        <div className='flex text-white md:gap-2 gap-0'>
                            LOGIN
                            <div><MdPerson className='my-1' /></div>
                        </div>
                        <div className='flex whitespace-nowrap'>
                            <div className='h-5 w-28 bg-blue-500 text-white text-center'>REGISTER FREE</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white mt-5 lg:w-[50%] w-[80%] h-[100%] py-5 md:mx-20 mx-5'>
                <div className='md:pl-28 pl-10'>
                    <div className='pt-5'>You have successfully logged out</div>
                    <div>
                        <input type='text' className='my-5 p-5 w-[80%] outline-none border border-black' placeholder='Email ID/Mobile Number' />
                    </div>
                    <div>
                        <input type='text' className='p-5 w-[80%] outline-none border border-black' placeholder='Password' />
                    </div>
                    <div className='md:mx-36 mx-16 my-5'>Forgot Password</div>
                    <div onClick={() => Navigate("/dash")} className='p-5 cursor-pointer w-[80%] text-white text-center bg-slate-700'>
                        LOGIN
                    </div>
                </div>
                <div className='mt-10 w-[80%] mx-auto'>
                    <Divider className='bg-black' />
                </div>
                <div className='text-center my-5'>New on Jeevansathi?</div>
                <div  className='p-5 md:mx-28 mx-10 w-[65%] text-white text-center bg-[#D9475C] mb-10'>
                    REGISTER FREE
                </div>
            </div>
            <div className='bg-[#afb1b2] w-[100%] h-[90vh] mt-10 flex md:px-32 px-0 gap-10'>
                <div className=''>
                    <img className='h-[70%] my-16 md:w-[50vw] w-[100vw]' src='https://static.jeevansathi.com/images/jspc/commonimg/android.png' />
                </div>
                <div className='my-28'>
                    <div className='md:text-3xl text-lg font-thin'>Jeevansathi Apps</div>
                    <div className='my-10 md:text-lg text-sm font-thin'>Access quick & simple search, instant updates and a great user experience on your phone. Download our apps which are the best rated in online matrimony segment.</div>
                    <div className='flex md:gap-5 gap-2'>
                        <div><img className='md:h-16 h-10 md:w-52 w-40' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png' /></div>
                        <div><img className='md:h-16 h-10 md:w-52 w-40' src='https://rtv.org.tw/wp-content/uploads/2022/01/appstore_zh.png' /></div>
                    </div>
                    <div className='lg:my-10 my-5 md:text-lg text-sm font-normal'>
                        <span className='text-red-500'>Click Here</span> <span>to know more about apps.</span>
                    </div>
                </div>
            </div>
            <div className='bg-gray-50 flex flex-col justify-center items-center'>
                <div className='md:text-2xl text-lg font-thin text-gray-600 my-10'>Browse Matrimonial Profiles by</div>
                <div className='flex md:gap-5 gap-2'>
                    <div className='border md:p-1 p-0 whitespace-nowrap bg-gray-300 font-thin'>Mother tongue</div>
                    <div className='pt-2 flex md:gap-5 gap-2 text-sm font-thin'>
                        <div>Caste</div>
                        <div>Religion</div>
                        <div>City</div>
                        <div>Occupation</div>
                        <div>State</div>
                        <div>NRI</div>
                        <div>College</div>
                    </div>
                </div>
                <div className='flex md:gap-5 gap-2 text-sm font-thin mt-3 mb-16'>
                    <div className='border-r border-black md:w-20 w-12'>Hindu</div>
                    <div className='border-r border-black md:w-20 w-12'>Muslim</div>
                    <div className='border-r border-black md:w-20 w-14'>Christian</div>
                    <div className='border-r border-black md:w-20 w-8'>Sikh</div>
                    <div className='border-r border-black md:w-20 w-14'>Buddhist</div>
                    <div className='border-r border-black md:w-20 w-8'>Jain</div>
                    <div className='border-r border-black md:w-20 w-12'>Bahai</div>
                </div>
            </div>
            <div className='flex md:mx-32 mx-0 gap-5 py-8'>
                <div>
                    <img className='md:h-10 md:w-48 h-8 w-52 rounded-md' src='https://www.jeevansathi.com/favicon1.ico' />
                </div>
                <div>
                    <div>
                        <span>Jeevansathi.com</span> <span className='text-gray-600 font-normal text-xs'>is one of the leading and most trusted matrimony websites in India. Making happy marriages happen since 1998, Jeevansathi understands the importance of choosing the right partner for marriage, especially in the Indian cultural setup. It believes in providing the most secure and convenient matchmaking experience to all its members by ensuring 100% screening,exclusive privacy options, photo protection features and verification of phone numbers and more information. While the online matrimonial site connects millions of people directly, Jeevansathi also maintains a dedicated Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and /or families.</span>
                    </div>
                    <div>
                        <span>Please note:</span> <span className='text-gray-600 font-normal text-xs'>Jeevansathi is only meant for users with a bonafide intent to enter into a matrimonial alliance and is not meant for users interested in dating only. Jeevansathi platform should not be used to post any obscene material, such actions may lead to permanent deletion of the profile used to upload such content.</span>
                    </div>
                </div>
            </div>
            <div className='bg-gray-600 flex justify-evenly py-5'>
                <div className='flex md:text-sm text-xs flex-col text-white'>
                    <div>Explore</div>
                    <div className='font-thin md:text-sm text-xs space-y-1 mt-1'>
                        <div>Home</div>
                        <div>Advanced search</div>
                        <div>Success stories</div>
                        <div>Sitemap</div>
                        <div>Create Horoscope</div>
                    </div>
                    <div className='mt-20 md:text-sm text-xs'>
                        App available on
                    </div>
                    <div className='flex'>
                        <div><img className='h-14' src='https://www.pngplay.com/wp-content/uploads/9/Android-Download-Free-PNG.png' /></div>
                        <div><img className='h-14' src='https://cdn3.iconfinder.com/data/icons/social-media-logos-i-filled-line/2048/5315_-_Apple-512.png' /></div>
                    </div>
                </div>
                <div className='flex flex-col text-white md:text-sm text-xs'>
                    <div>Services</div>
                    <div className='font-thin space-y-1 mt-1'>
                        <div>Membership Options</div>
                        <div>Careers</div>
                    </div>
                    <div className='md:mt-40 mt-44'>
                        Follow us
                    </div>
                    <div className='flex gap-3'>
                        <div><IoLogoFacebook style={{ fontSize: '40px' }} /></div>
                        <div className='mt-0.5'><FaSquareTwitter style={{ fontSize: '37px' }} /></div>
                        <div className='mt-1'><GrLinkedin style={{ fontSize: '32px' }} /></div>
                        <div className='mt-0.5'><FaSquareGooglePlus style={{ fontSize: '37px' }} /></div>
                    </div>
                </div>
                <div className='flex flex-col text-white md:text-sm text-xs' >
                    <div>Help</div>
                    <div className='font-thin space-y-1 mt-1'>
                        <div>Contact us</div>
                        <div>Jeevansathi centers (32)</div>
                    </div>
                </div>
                <div className='flex flex-col text-white md:text-sm text-xs'>
                    <div>Legal</div>
                    <div className='font-thin space-y-1 mt-1'>
                        <div>About Us</div>
                        <div>Fraud Alert</div>
                        <div>Terms of use</div>
                        <div>3rd party terms of use</div>
                        <div>Privacy policy</div>
                        <div>Cookie policy</div>
                        <div>Privacy Features</div>
                        <div>Summons/Notices</div>
                        <div>Grievances</div>
                    </div>
                </div>
            </div>
            <div className='lg:px-96 px-0 bg-white'>
                <New />
            </div>
            <div className='text-sm text-center'>
                All rights reserved © 2016 Jeevansathi Internet Services.
            </div>
        </div>
    )
}

export default Login
