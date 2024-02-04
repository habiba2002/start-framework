import React from 'react'
import image from './Images/beautiful-girl-with-long-black-hair-sweater_6138-239-removebg-preview.png'
export default function Home() {
    return <>
        <div className='row'>
            <div className='home d-flex col-12 justify-content-center align-items-center py-5'>
                <div className='text-center'>
                    <img className='w-75' src={image} />
                    <p className="fw-bold text-center text-uppercase m-0 py-2 display-6 ">Start Framework</p>
                    <div className='star position-relative'><i className='fa-solid fa-star'></i></div>
                    <p className='p-0 m-0'><small className='text-center' >Graphic Artist . Web Designer . Illustrator</small></p>
                </div>

            </div>
        </div>

    </>
}
