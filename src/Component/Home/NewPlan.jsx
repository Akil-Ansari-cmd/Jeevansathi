import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { Plan, PostPlan } from '../Services/Admin Plan';
import { CiSquarePlus } from 'react-icons/ci';

const NewPlan = () => {
    const location = useLocation();
    const { state } = location; // This is the data you passed via Navigate

    const [data, setData] = useState();

    const DataApi = async () => {
        try {
            const response = await Plan(); // Call the Plan function to fetch data
            setData(response?.data?.data); // Set the data to the state
        } catch (error) {
            console.error("Error fetching plan data:", error);
        }
    };

    useEffect(() => {
        DataApi();
    }, []);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const formik = useFormik({
        initialValues: {
            planmodule: state?.id ? [state?.id] : [], // Initializing with selected ID as an array
            plan_type: state?.plan_type || "",
            plan_validity: state?.plan_validity || "",
            price: state?.price || "",
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            PostPlan(values); // Handle submitting the form data to the server
        },
    });

    // Handle the checkbox change event
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            // If checked, add to planmodule array
            formik.setFieldValue('planmodule', [...formik.values.planmodule, value]);
        } else {
            // If unchecked, remove from planmodule array
            formik.setFieldValue('planmodule', formik.values.planmodule.filter(item => item !== value));
        }
    };

    // Array of plan modules
    const planModules = [
        { id: 'basic', name: 'Basic Plan' },
        { id: 'premium', name: 'Premium Plan' },
        { id: 'enterprise', name: 'Enterprise Plan' },
    ];

    return (
        <div>
            <div className='fixed top-5 right-5 z-50'>
                <div onClick={handleOpen} className='flex justify-center items-center text-2xl bg-blue-500 text-white rounded-full w-12 h-12 cursor-pointer'>
                    <CiSquarePlus className='mt-1' />
                </div>
            </div>
            {open && (
                <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20'>
                    <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
                        <form onSubmit={formik.handleSubmit} className='lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'>
                            <div className='font-semibold text-3xl mt-5 text-center'>Add New Plan</div>

                            <div className='grid grid-cols-2 gap-2'>
                                <div>
                                    <div className='text-gray-400'>Plan</div>
                                    <input
                                        name='plan_type'
                                        onChange={formik.handleChange}
                                        value={formik.values.plan_type}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Validity</div>
                                    <input
                                        name='plan_validity'
                                        onChange={formik.handleChange}
                                        value={formik.values.plan_validity}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Price</div>
                                    <input
                                        name='price'
                                        onChange={formik.handleChange}
                                        value={formik.values.price}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>

                                {/* Checkboxes for selecting multiple plans */}
                                <div>
                                    <div className='text-gray-400 mt-2'>Planmodule</div>
                                    <div>
                                        {planModules.map((item) => (
                                            <div key={item.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={item.id}
                                                    value={item.id}
                                                    onChange={handleCheckboxChange}
                                                    checked={formik.values.planmodule.includes(item.id)}
                                                    className="mr-2"
                                                />
                                                <label htmlFor={item.id}>{item.name}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-end mt-5 gap-2'>
                                <div onClick={handleClose} className='border cursor-pointer border-indigo-500 text-indigo-500 w-28 h-9 py-1 rounded-md text-center'>Close</div>
                                <button type='submit' className='bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white w-28 h-9 py-1 rounded-md text-center'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewPlan;



