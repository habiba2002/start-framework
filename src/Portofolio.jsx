import React from 'react'
import image from './Images/port3.png'
import image2 from './Images/poert1.png'
export default function Portofolio() {
  return <>
    <div className='row'>
      <div className='portofolio text-center contact col-12 '>
        <h2 className="fw-bold text-uppercase m-0 py-5">Portofolio Component</h2>
        <div className='star w-50 mx-auto position-relative'><i className='fa-solid fa-star'></i></div>
        <div className='container py-4'>
          <div className='row g-3'>
            <div className='col-md-4'>
              <div className='item position-relative overflow-hidden' data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <img className='w-100 rounded-1' src={image} />
                <div className='layer d-flex justify-content-center align-items-center position-absolute w-100 h-100 rounded-1'>
                  <i className='fa-solid fa-plus'></i>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item position-relative overflow-hidden' data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img className='w-100 rounded-1' src={image2} />
                <div className='layer d-flex justify-content-center align-items-center position-absolute w-100 h-100 rounded-1'>
                  <i className='fa-solid fa-plus'></i>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item position-relative overflow-hidden' data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <img className='w-100 rounded-1' src={image} />
                <div className='layer d-flex justify-content-center align-items-center position-absolute w-100 h-100 rounded-1'>
                  <i className='fa-solid fa-plus'></i>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item position-relative overflow-hidden' data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img className='w-100 rounded-1' src={image2} />
                <div className='layer d-flex justify-content-center align-items-center position-absolute w-100 h-100 rounded-1'>
                  <i className='fa-solid fa-plus'></i>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item position-relative overflow-hidden' data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <img className='w-100 rounded-1' src={image} />
                <div className='layer d-flex justify-content-center align-items-center position-absolute w-100 h-100 rounded-1'>
                  <i className='fa-solid fa-plus'></i>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item position-relative overflow-hidden' data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img className='w-100 rounded-1' src={image2} />
                <div className='layer d-flex justify-content-center align-items-center position-absolute w-100 h-100 rounded-1'>
                  <i className='fa-solid fa-plus'></i>
                </div>
              </div>
            </div>

            <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-transparent border-0">
                  <div className="modal-body">
                    <img className='w-100 rounded-1' src={image} />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-transparent border-0">
                  <div className="modal-body">
                    <img className='w-100 rounded-1' src={image2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}


