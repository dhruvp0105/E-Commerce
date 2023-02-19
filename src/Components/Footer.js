import React from 'react'
import { Link } from 'react-router-dom'
import {BsInstagram,BsLinkedin,BsGithub,BsYoutube} from 'react-icons/bs'
export const Footer = () => {
  return (
    <>
        <footer className='py-4'>
            <div className='container-xxl'>
                <div className='row align-items-center'>
                    <div className='col-5'>
                           <div className='footer-top-data d-flex gap-30 align-items-center'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEBL4lfFMd0JAH61qN7j8gF6XhYl22IVmRWzR8eFMgiFyDBxk6TAISZS-razcsZVy8iQ&usqp=CAU' alt='sub' height={100} width={100}></img>
                            <h2 className='mb-0 text-white'>Sign Up for News Letter</h2>
                           </div> 
                    </div>
                    <div className='col-7'>
                    <div class="input-group mb-2">
                                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"></input>
                                <span className="input-group-text py-2" id="basic-addon2">Subscribe</span>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className='py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-4'>
                        <h4 className='text-white mb-4'>Contact Us</h4>
                        <div>
                            <address className='text-white fs-6'>Hno : 162 Near L.P Savani School, Adajan, Surat<br/>Pincode : 395009
                            </address>
                            <a href='tel:+91 7778013500' className='mt-4 d-block mb-2 '>+91 7778013500</a>
        
                            <a href='mailto:dhruvpanchal576@gmail.com' className='mt-3 d-block mb-2'>dhruvpanchal576@gmail.com</a>
                        </div>
                        <div className='social-icons d-flex align-item-center gap-5 mt-4'>
                             <a href='#'>
                                <BsLinkedin className='text-white fs-3'/>
                             </a>
                             <a href='#'>
                                <BsInstagram className='text-white fs-3'/>
                             </a>
                             <a href='#'>
                                <BsGithub className='text-white fs-3'/>
                             </a>
                             <a href ='#'>
                             <BsYoutube className='text-white fs-3'/>
                             </a>  
                        </div>
                    </div>
                    <div className='col-3'>
                        <h4 className='text-white mb-4'>Information</h4>
                        <div className='footer-link d-flex flex-column'>
                            <Link className='text-white mb-1 py-2'>Privacy Policy</Link>
                            <Link className='text-white mb-1 py-2' >Refund Policy</Link>
                            <Link className='text-white mb-1 py-2' >Shipping Policy</Link>
                            <Link className='text-white mb-1 py-2'>Terms & Conditions</Link>
                            <Link className='text-white mb-1 py-2'>Blogs</Link>
                        </div>
                    </div>
                    <div className='col-3'>
                        <h4 className='text-white mb-4'>Account</h4>
                        <div className='footer-link d-flex flex-column'>
                            <Link className='text-white mb-1 py-2'>About</Link>
                            <Link className='text-white mb-1 py-2'>Faq</Link>
                            <Link className='text-white mb-1 py-2'>Contact</Link>
                        </div>
                    </div>
                    <div className='col-2'>
                        <h4 className='text-white mb-4'>Quick Links</h4>
                        <div className='footer-link d-flex flex-column'>
                            <Link className='text-white mb-1 py-2'>Laptops</Link>
                            <Link className='text-white mb-1 py-2' >HeadPhones</Link>
                            <Link className='text-white mb-1 py-2'>Mobiles</Link>
                            <Link className='text-white mb-1 py-2'>Watches</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className='py-4'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Powered by Developer's corner </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
