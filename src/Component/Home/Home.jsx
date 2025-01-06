import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const Navigate = useNavigate();
  return (
    <div className='overflow-hidden'>
      <div><img src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/logo.png' /></div>
      <div className=''>
        <div className="bg-cover bg-center mt-2 flex" style={{backgroundImage: 'url("https://www.ieplads.com/mailers/2022/jeevansathi/SEM-LP-05april/images/js-banner1_1.jpg")' }}>
          <div className='mt-96 md:mx-10 mx-0'>
            <div className='text-white text-5xl font-serif'>Now, chat for free!</div>
            <div className='text-white text-2xl font-serif'>Finding your perfect match just became easier</div>
          </div>
          <div className='xl:w-[40%] lg:w-[80%] w-[100%] lg:mx-20 md:mx-10 mx-2 my-5'>
            <div className='bg-[#D9475C] border border-white overflow-hidden'>
              <div className='text-white md:text-4xl text-lg font-semibold text-center'>REGISTER FREE</div>
              <div className='md:text-xl text-sm text-white text-center'>
                Trusted Marriage Site Over 10 Lakhs Profiles
              </div>
            </div>
            <div className='bg-white'>
              <div onClick={() => Navigate("/head")} className='flex justify-end items-end cursor-pointer mx-5 text-xs text-blue-500 py-3'>Member Login</div>
              <div className='md:mx-10 mx-4 space-y-4 md:text-sm text-xs'>
                <div className='md:flex grid justify-between'>
                  <div>Email:</div>
                  <input type='text' className='border border-slate-300 md:w-[70%] w-[100%]' />
                </div>
                <div className='md:flex grid justify-between'>
                  <div>Password:</div>
                  <input type='text' className='border border-slate-300 md:w-[70%] w-[100%]' />
                </div>
                <div className='md:flex grid justify-between'>
                  <div className=''>Create Profile For:</div>
                  <input type='text' className='border border-slate-300 md:w-[70%] w-[100%] placeholder:text-sm px-3' placeholder='Please Select' />
                </div>
                <div className='md:flex grid justify-between'>
                  <div className='whitespace-nowrap'>Date of Birth:</div>
                  <div className='md:mx-6 mx-0'>
                    <input type='text' className='border lg:mx-5 mx-0 border-slate-300 w-[20%]' placeholder='Day' />
                    <input type='text' className='border border-slate-300 w-[30%]' placeholder='Month' />
                    <input type='text' className='border lg:mx-5 mx-0 border-slate-300 w-[20%]' placeholder='Year' />
                  </div>
                </div>
                <div className='md:flex grid justify-between'>
                  <div className=''>Height:</div>
                  <input type='text' className='border relative border-slate-300 md:w-[70%] w-[100%] placeholder:text-sm px-3' placeholder='Please Select' />
                </div>
                <div className='md:flex grid justify-between'>
                  <div className=''>Martial Status:</div>
                  <input type='text' className='border relative border-slate-300 md:w-[70%] w-[100%] placeholder:text-sm px-3' placeholder='Please Select' />
                </div>
                <div className='md:flex grid justify-between'>
                  <div className=''>Mother Tonque:</div>
                  <input type='text' className='border relative border-slate-300 md:w-[70%] w-[100%] placeholder:text-sm px-3' placeholder='Please Select' />
                </div>
                <div className='md:flex grid justify-between'>
                  <div className=''>Religion:</div>
                  <input type='text' className='border relative border-slate-300 md:w-[70%] w-[100%] placeholder:text-sm px-3' placeholder='Please Type Religion' />
                </div>
                <div className='md:flex grid justify-between'>
                  <div className=''>Pin Code:</div>
                  <input type='text' className='border relative border-slate-300 md:w-[70%] w-[100%] placeholder:text-sm px-3' />
                </div>
                <div className='md:flex grid justify-between'>
                  <div className=''>Mobile Number:</div>
                  <input type='number' className='border relative border-slate-300 md:w-[70%] w-[100%] placeholder:text-sm px-3' placeholder='+91' />
                </div>
                <div className='flex pb-7'>
                  <div className='flex md:mx-10 mx-2 md:gap-3 gap-1'>
                    <input type='checkbox' />
                    <div className='text-xs'>
                      I have agreed to the Terms & Conditions & have read & understood the Privacy Policy.</div>
                  </div>
                  <div>
                    <img className='md:h-10 h-5 w-48' src='https://www.jeevansathi.com/profile/images/registration_revamp_new/joinfree.png' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex lg:px-28 md:px-14 px-0 md:space-x-8 space-x-0 bg-gray-200'>
        <div className='flex flex-col w-[33%] border-r my-10'>
          <div><img className='mx-auto' src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/icon1.png' /></div>
          <div className='font-semibold md:text-lg text-xs text-center'>Lakhs of Genuine Members
          </div>
          <div className='text-center md:text-lg text-xs'>Search by location, community, profession & more. Get matches on email as per your preferences.</div>
        </div>
        <div className='flex flex-col w-[33%] border-r my-10'>
          <div><img className='mx-auto' src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/icon2.png' /></div>
          <div className='font-semibold md:text-lg text-xs text-center'>Lakhs of Genuine Members
          </div>
          <div className='text-center md:text-lg text-xs'>Search by location, community, profession & more. Get matches on email as per your preferences.</div>
        </div>
        <div className='flex flex-col w-[33%] my-10'>
          <div><img className='mx-auto' src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/icon3.png' /></div>
          <div className='font-semibold md:text-lg text-xs text-center'>Lakhs of Genuine Members
          </div>
          <div className='text-center md:text-lg text-xs'>Search by location, community, profession & more. Get matches on email as per your preferences.</div>
        </div>
      </div>
      <div className=''>
        <div className='text-center text-3xl py-12'>Matched By Jeevansathi</div>
        <div className='flex md:px-40 px-8 md:space-x-10 space-x-3'>
          <div className='flex flex-col'>
            <div><img src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/js1.jpg' /></div>
            <div className='text-center text-sm text-gray-400'>Shipra weds Rajesh</div>
          </div>
          <div className='flex flex-col'>
            <div><img src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/js2.jpg' /></div>
            <div className='text-center text-sm text-gray-400'>Shipra weds Rajesh</div>
          </div>
          <div className='flex flex-col'>
            <div><img src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/js3.jpg' /></div>
            <div className='text-center text-sm text-gray-400'>Shipra weds Rajesh</div>
          </div>
          <div className='flex flex-col'>
            <div><img src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/js4.jpg' /></div>
            <div className='text-center text-sm text-gray-400'>Shipra weds Rajesh</div>
          </div>
        </div>
      </div>
      <div className='bg-[#33485A] md:px-32 px-5 pb-10'>
        <div className='text-center text-3xl py-12 text-white'>About Jeevansathi.com </div>
        <div className='text-sm text-white'>Jeevansathi.com is one of India’s leading matrimonial websites that has helped lakhs of members find their perfect life partner.</div>
        <div className='text-sm text-white py-2'>We believe choosing a life partner is a big and important decision, and hence work towards giving a simple and secure matchmaking experience for you and your family. Each profile registered with us goes through a manual screening process before going live on site; we provide superior privacy controls for Free; and also verify contact information of members.</div>
        <div className='text-sm text-white'>
          You can register for Free and search according to your specific criteria on age, height, community, profession, income, location and much more- on your computer, tablet or mobile. Regular custom mails and notifications make the process easier and take you closer to your Jeevansathi!
        </div>
      </div>
      <div className='bg-[#2B4051] lg:flex hidden justify-between lg:px-20 px-5 py-5'>
        <div className='flex'>
          <div className='border-r w-5 h-5'><img className='' src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/fb.png' /></div>
          <div className='border-r w-5 h-5'><img className='ml-1' src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/play.png' /></div>
          <div><img className='ml-2' src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/tw.png' /></div>
        </div>
        <div className='flex space-x-10 '>
          <div className='text-xs text-gray-400'>Copyright © 2014 Jeevansathi Internet Services</div>
          <div className='flex space-x-2'>
            <div><img src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/phone-icon2.png' /></div>
            <div className='text-sm text-white'>1800 419 6299</div>
          </div>
          <div className='flex space-x-2'>
            <div><img src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/location.png' /></div>
            <div className='text-sm text-white'>Jeevansaathi Offices</div>
          </div>
          <div className='flex space-x-2'>
            <div><img src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/mail.png' /></div>
            <div className='text-sm text-white'>feedback@jeevansathi.com</div>
          </div>
        </div>
      </div>
      <div className='bg-[#2B4051] lg:hidden flex flex-col px-5 py-5'>
        <div className='flex mx-auto'>
          <div className='border-r w-5 h-5'><img className='' src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/fb.png' /></div>
          <div className='border-r w-5 h-5'><img className='ml-1' src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/play.png' /></div>
          <div><img className='ml-2' src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/tw.png' /></div>
        </div>
        <div className='text-xs text-gray-400 mx-auto'>Copyright © 2014 Jeevansathi Internet Services</div>
        <div className='flex md:space-x-10 space-x-0 mx-auto'>
          <div className='flex space-x-2'>
            <div><img src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/phone-icon2.png' /></div>
            <div className='md:text-sm text-xs text-white'>1800 419 6299</div>
          </div>
          <div className='flex space-x-2'>
            <div><img src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/location.png' /></div>
            <div className='md:text-sm  text-xs text-white'>Jeevansaathi Offices</div>
          </div>
          <div className='flex space-x-2'>
            <div><img className='' src='https://www.ieplads.com/mailers/2016/jeevansathi/js-lp-21sept/images/mail.png' /></div>
            <div className='md:text-sm text-xs text-white'>feedback@jeevansathi.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
