import { useFormik } from 'formik';
import React, { useState } from 'react'
import { PostBlog } from '../Services/Admin Blog';

const NewBlog = ({ state }) => {
  console.log("itemsss..", state)

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const formik = useFormik({
    initialValues: {
      category_id: state?.id || "",
      title: state?.title || "",
      meta_title: state?.meta_title || "",
      meta_description: state?.meta_description || "",
      sub_title: state?.sub_title || "",
      images: null,
      content: state?.content || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const req = new FormData();
      req.append("category_id", values.category_id);
      req.append("title", values.title);
      req.append("images", values.images);
      req.append("meta_title", values.meta_title);
      req.append("meta_description", values.meta_description);
      req.append("sub_title", values.sub_title);
      req.append("content", values.content);

      PostBlog(req);
    },
  })
  return (
    <div>
      <div onClick={handleOpen} className='flex justify-end'>Add</div>
      {open && (
        <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20'>
          <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
            <form onSubmit={formik.handleSubmit} className='lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'>
              <div className='font-semibold text-3xl mt-5 text-center'>Add New Blog</div>
              {/* <div className='text-center'>Brief outline of User's information</div> */}
              <div className='grid grid-cols-2 gap-2'>
                <div>
                  <div className='text-gray-400'>Title</div>
                  <input
                    name='title'
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    className='outline-none h-8 rounded-md border border-gray-400'
                    type='text'
                  />
                </div>
                <div>
                  <div className='text-gray-400'>Sub_title</div>
                  <input
                    name='sub_title'
                    onChange={formik.handleChange}
                    value={formik.values.sub_title}
                    className='outline-none h-8 rounded-md border border-gray-400'
                    type='text'
                  />
                </div>
                <div>
                  <div className='text-gray-400'>Meta_Title</div>
                  <input
                    name='meta_title'
                    onChange={formik.handleChange}
                    value={formik.values.meta_title}
                    className='outline-none h-8 rounded-md border border-gray-400'
                    type='text'
                  />
                </div>
                <div>
                  <div className='text-gray-400'>Meta_description</div>
                  <input
                    name='meta_description'
                    onChange={formik.handleChange}
                    value={formik.values.meta_description}
                    className='outline-none h-8 rounded-md border border-gray-400'
                    type='text'
                  />
                </div>
                <div>
                  <div className='text-gray-400'>Content</div>
                  <input
                    name='content'
                    onChange={formik.handleChange}
                    value={formik.values.content}
                    className='outline-none h-8 rounded-md border border-gray-400'
                    type='text'
                  />
                </div>
                <div>
                  <div className='text-gray-400'>Image</div>
                  <input
                    type="file"
                    id='images'
                    name="images"
                    accept="image/*"
                    onChange={(e) => formik?.setFieldValue("images", e.target?.files[0])}
                  />
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
  )
}

export default NewBlog
