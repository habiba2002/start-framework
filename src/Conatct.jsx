import React from 'react'

export default function Conatct() {
    return <>
        <div className='row'>
            <div className='contact text-center contact col-12 '>
                <h2 className="fw-bold text-uppercase m-0 py-5">Contact Component</h2>
                <div className='star w-50 mx-auto position-relative'><i className='fa-solid fa-star'></i></div>
                <form className='py-5 d-flex justify-content-center mx-3'>
                    <div>
                        <input className='w-100 border-0 px-3 py-2 my-4 rounded-1 shadow-sm' type='text' placeholder='Enter Your Name' required />
                        <input className='w-100 border-0 px-3 py-2 my-4 rounded-1 shadow-sm' type='number' placeholder='Enter Your Age' required />
                        <input className='w-100 border-0 px-3 py-2 my-4 rounded-1 shadow-sm' type='email' placeholder='Enter Your Email' required />
                        <input className='w-100 border-0 px-3 py-2 my-4 rounded-1 shadow-sm' type='password' placeholder='Enter Your Password' required />
                        <button className='btn btn-success my-3'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
