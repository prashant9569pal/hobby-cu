import React from 'react'

const Testimonial1 = () => {
    return (
        <div className=' p-lg-5 m-lg-5 bg-light rounded-4 '>
            <div className=' flex'>
                <div className=' d-flex align-items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clip-path="url(#clip0_7806_426)">
                            <path d="M20.0002 3.33331C10.8002 3.33331 3.3335 10.8 3.3335 20C3.3335 29.2 10.8002 36.6666 20.0002 36.6666C29.2002 36.6666 36.6668 29.2 36.6668 20C36.6668 10.8 29.2002 3.33331 20.0002 3.33331ZM26.6668 21.6666H21.6668V26.6666C21.6668 27.5833 20.9168 28.3333 20.0002 28.3333C19.0835 28.3333 18.3335 27.5833 18.3335 26.6666V21.6666H13.3335C12.4168 21.6666 11.6668 20.9166 11.6668 20C11.6668 19.0833 12.4168 18.3333 13.3335 18.3333H18.3335V13.3333C18.3335 12.4166 19.0835 11.6666 20.0002 11.6666C20.9168 11.6666 21.6668 12.4166 21.6668 13.3333V18.3333H26.6668C27.5835 18.3333 28.3335 19.0833 28.3335 20C28.3335 20.9166 27.5835 21.6666 26.6668 21.6666Z" fill="#0096C8" />
                        </g>
                        <defs>
                            <clipPath id="clip0_7806_426">
                                <rect width="40" height="40" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h5 className=''>Add Your Own</h5>
                </div>

                <div>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</div>
                <button className=' mt-3 rounded-2'>Add new</button>

            </div>
        </div>



    )
}

export default Testimonial1