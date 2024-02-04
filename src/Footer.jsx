import React from 'react'

export default function Footer() {
    return <>
        <div className='row footer text-white text-center'>
            <div className='col-md-4'>
                <div className='py-5'>
                    <h5 className='fw-bold text-uppercase'>Location</h5>
                    <small>2215 John Daniel Drive</small>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='py-5'>
                    <h5 className='fw-bold text-uppercase'>Around The Web</h5>
                    <div className='d-flex gap-2 pt-3 justify-content-center'>
                        <div className='d-flex justify-content-center align-items-center border border-2 border-white rounded-circle p-2'><i className='fa-brands fa-facebook-f'></i></div>
                        <div className='d-flex justify-content-center align-items-center border border-2 border-white rounded-circle p-2'><i className='fa-brands fa-twitter'></i></div>
                        <div className='d-flex justify-content-center align-items-center border border-2 border-white rounded-circle p-2'><i className='fa-brands fa-linkedin-in'></i></div>
                        <div className='d-flex justify-content-center align-items-center border border-2 border-white rounded-circle p-2'><i className='fa-solid fa-earth'></i></div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='py-5'>
                    <h5 className='fw-bold text-uppercase'>About Freelancer</h5>
                    <small>Freelance is a free to use, licensed Bootstrap <br /> theme created by Route</small>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='lower-footer text-center col-12 text-white fw-bold py-3'>
                <small>Copyright © Your Website 2021</small>
            </div>
        </div>

    </>
}
