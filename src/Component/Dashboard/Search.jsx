import React from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'

const Search = () => {
    return (
        <div>
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
        </div>
    )
}

export default Search
