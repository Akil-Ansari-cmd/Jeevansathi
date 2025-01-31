import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { BiSolidDownArrow, BiSort } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { MdDelete, MdEdit, MdPeopleAlt } from "react-icons/md";
import { ActiveApi, AdminManage, StatusUpdate } from '../Services/Get Otp';
import { GrBlog } from "react-icons/gr";
import Edit from './Edit';
import { Switch } from '@mui/material';
import Blog from './Blog';
const Admin = () => {
    const [content, setContent] = useState("Preferences")
    const [data, setData] = useState();


    const AdminApi = async () => {

        const response = await AdminManage();
        console.log("data..........", response?.data);
        setData(response?.data?.data)
    };
    useEffect(() => {
        AdminApi();
    }, [])

    console.log("data aa ra hai", data);



    const [status, setStatus] = useState()

    const StatusApi = async () => {

        const response = await StatusUpdate();
        console.log("data..........", response?.data?.data);
        setStatus(response?.data?.data)
    };

    useEffect(() => {
        StatusApi();
    }, [])
    console.log("ttttt", status);




    const CheckedApi = async (req) => {

        console.log(req)
        const response = await ActiveApi(req);
        console.log("object", response);

    }



    const handleChecked = (e, id) => {
        const newStatus = e.target.checked ? "active" : "deactive";
        console.log("id", id)

        console.log(e.target.checked)

        const req = {
            status: newStatus,
            profile_id: id

        }

        CheckedApi(req)

        console.log("dghdsfjd")


    }

    return (
        <div>
            <div className='flex h-screen'>
                <div className='bg-slate-700 w-[20%]  fixed top-0 left-0 h-full overflow-y-auto'>
                    <div className='flex items-center justify-center h-14 text-xl !bg-white w-full'>Master Admin</div>
                    {/* <div className='!bg-slate-700 h-screen'>
                        <Accordion className='!bg-slate-700 !gap-1'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='text-white' />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className='!bg-slate-700'
                            >
                                <Typography component="span" className='text-white flex gap-2'>
                                    <AiFillDashboard className='mt-1' />
                                    Dashoard
                                </Typography>
                            </AccordionSummary>
                            <div className='text-white ml-7 my-2'>
                                <div>Name 1</div>
                                <div>Name 1</div>
                            </div>
                        </Accordion>
                        <Accordion className='!bg-slate-700 !gap-1'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='text-white' />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                className='!bg-slate-700'

                            >
                                <Typography component="span" className='text-white flex gap-2'>
                                    <MdPeopleAlt className='mt-1' />
                                    User's
                                </Typography>
                            </AccordionSummary>
                            <div className='text-white ml-7 my-2'>
                                <div>Name 1</div>
                                <div>Name 1</div>
                            </div>
                        </Accordion>
                        <Accordion className='!bg-slate-700 !gap-1'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='text-white' />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                className='!bg-slate-700'

                            >
                                <Typography component="span" className='text-white flex gap-2'>
                                    <IoSettings className='mt-1' />
                                    Settings
                                </Typography>
                            </AccordionSummary>
                            <div className='text-white ml-7 my-2'>
                                <div>Name 1</div>
                                <div>Name 1</div>
                            </div>
                        </Accordion>
                    </div> */}
                    <div className='gap-3 space-y-4 mt-3'>
                        <div onClick={() => setContent("Preferences")} className='flex justify-between text-white'>
                            <div className='flex text-xl gap-2'>
                                <div><AiFillDashboard className='mt-1' /></div>
                                <div>Dashboard</div>
                            </div>
                            <div><ExpandMoreIcon /></div>
                        </div>
                        <div onClick={() => setContent("User")} className='flex justify-between text-white'>
                            <div className='flex text-xl gap-2'>
                                <div><MdPeopleAlt className='mt-1' /></div>
                                <div>User's</div>
                            </div>
                            <div><ExpandMoreIcon /></div>
                        </div>
                        <div onClick={() => setContent("Blog")} className='flex justify-between text-white'>
                            <div className='flex text-xl gap-2'>
                                <div><GrBlog className='mt-1'/></div>
                                <div>Blog</div>
                            </div>
                            <div><ExpandMoreIcon /></div>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] h-screen ml-[20%]'>
                    <div className='flex justify-between text-white px-10 h-14 bg-slate-700 items-center text-xl 
                             fixed top-0 left-[20%] w-[80%] z-50 shadow-md'>
                        <div><GiHamburgerMenu /></div>
                        <div className='flex'>
                            <div>Admin</div>
                            <div><BiSolidDownArrow className='mt-2' style={{ fontSize: "12px" }} /></div>
                        </div>
                    </div>

                    <div className="overflow-y-auto mt-12 p-5 h-[100vh]">
                        {content === "Preferences" &&
                            <div className='border border-gray-300 rounded-md m-5'>
                                <div className='flex justify-between pt-5 px-7'>
                                    <div className='flex '>
                                        <div>Search:</div>
                                        <input className='border border-slate-400 outline-none ml-3 rounded-sm h-6 my-0.5' type='text' />
                                    </div>
                                    {/* <div><Head2 /></div> */}
                                </div>

                                <div className='border border-gray-300 my-5 mx-7 rounded-sm overflow-y-auto max-h-[60vh]'>
                                    <div className='flex text-sm border-b-2'>
                                        <div className='w-[5%] font-semibold p-1 py-2 pl-2 border-r border-gray-300'>#</div>
                                        <div className='w-[10%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Name
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Age
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Height
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Status
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Address
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Profession
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        {/* <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Status
                                    <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                </div> */}
                                        <div className='w-[20%] font-semibold py-2 px-3 border-gray-300 flex justify-between'>Action
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                    </div>
                                    <div className="overflow-y-auto">
                                        {data && data.map((item, index) => (
                                            <div key={index} className='flex text-sm border-t text-gray-500'>
                                                <div className='w-[5%] p-1 py-2 pl-2 border-r border-gray-300'>{index + 1}</div>
                                                <div className='w-[10%] py-2 px-3 border-r border-gray-300'>Turtle
                                                </div>
                                                <div className='w-[15%]  py-2 px-3 border-r border-gray-300 '>{item?.age}
                                                </div>
                                                <div className='w-[15%] py-2 px-3 border-r border-gray-300 '>{item?.height}
                                                </div>
                                                <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{item?.marital_status}
                                                </div>
                                                <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{item.address}
                                                </div>
                                                <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{item.profession}
                                                </div>
                                                {/* <div className='w-[10%]  py-2 px-3 border-r border-gray-300'><div>
                                                   <Switch onChange={(e) => setStatus(e.target.checked)} />
                                                   </div>
                                                </div> */}
                                                <div className='flex w-[20%] gap-3 py-2 px-2'>
                                                    <div><Edit item={item} AdminApi={AdminApi} /></div>
                                                    <div className=''> <MdDelete className='w-8 h-5 text-xs rounded-md text-white bg-red-500' />
                                                    </div>
                                                </div>
                                            </div>))}
                                    </div>
                                </div>
                            </div>
                        }
                        {content === "User" &&
                            <div className='border border-gray-300 rounded-md m-5'>
                                <div className='flex justify-between pt-5 px-7'>
                                    <div className='flex '>
                                        <div>Search:</div>
                                        <input className='border border-slate-400 outline-none ml-3 rounded-sm h-6 my-0.5' type='text' />
                                    </div>
                                </div>
                                <div className='flex flex-col border border-gray-300 my-10 mx-7 rounded-sm overflow-y-scroll'>
                                    <div className='flex text-sm border-b-2'>
                                        <div className='w-[5%] h-[9%] font-semibold p-1 py-2 pl-2 border-r border-gray-300'>#</div>
                                        <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Name
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Age
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Height
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Gender
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Marital Status
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Address
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Profession
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Status
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        {/* <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-gray-300 flex justify-between'>Action
                                    <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                </div> */}
                                    </div>
                                    {status && status.map((i, index) => (
                                        <div key={index} className='flex text-sm border-t text-gray-500'>
                                            <div className='w-[5%] p-1 py-2 pl-2 border-r border-gray-300'>{index + 1}</div>
                                            <div className='w-[10%] py-2 px-3 border-r border-gray-300'>{i?.user_name}
                                            </div>
                                            <div className='w-[10%]  py-2 px-3 border-r border-gray-300 '>{i?.age}
                                            </div>
                                            <div className='w-[10%] py-2 px-3 border-r border-gray-300 '>{i?.height}
                                            </div>
                                            <div className='w-[10%] py-2 px-3 border-r border-gray-300 '>{i?.gender}
                                            </div>
                                            <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{i?.marital_status}
                                            </div>
                                            <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{i?.address}
                                            </div>
                                            <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{i?.profession}
                                            </div>
                                            <div className='w-[10%]  py-2 px-3 border-r border-gray-300'><div>
                                                <Switch onChange={(e) => handleChecked(e, i?.id)} />
                                            </div>
                                            </div>
                                        </div>))}
                                </div>
                            </div>
                        }
                        {
                            content === "Blog" &&
                            <div><Blog /></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
