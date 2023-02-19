import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch,BsCartCheck } from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import { BsHeartHalf } from 'react-icons/bs'
import { BsArrowClockwise } from 'react-icons/bs'
export const Header = () => {
    return (
        <>
            <header className='header-top-stript py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>free Shipping Over $1000 & Free Returns</p>
                        </div>

                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>
                                <p>HotLine :   <a href="tel:+91 7778013500"> +91 7778013500</a></p>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-2'>
                            <h2>
                                <Link className='text-white'>dev Corner</Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control py-2" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2"></input>
                                <span class="input-group-text" id="basic-addon2"><BsSearch /></span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>
                                <div>
                                    <Link className='d-flex align-items-center gap-3 text-white'  to='/compareproducts'>
                                    <BsArrowClockwise className='fs-1'/>
                                        <p className='mb-0 text-white'>Compare <br /> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-3 text-white' to='/WishList'>
                                    <BsHeartHalf className='fs-1'/>
                                        <p className='mb-0 text-white'>Favourite <br /> Wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-3 text-white' to='/login'>
                                    <BiUser className='fs-1'/>
                                        <p className='mb-0 text-white'>Login <br /> My Account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-3 text-white'>
                                    <BsCartCheck className='fs-1'/>
                                        <div className='d-flex flex-column'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0 text-white'>$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='header-bottom py-1'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-5'>
                                <div class="dropdown ">
                                    <div>
                                        <div class="dropdown d-flex align-item-center">
                                            <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxXoTQ8pvjd6zj7wR5VU2PLJuS3U_ArZruw&usqp=CAU' height={30} width={30}></img>
                                                <span className='me-5 d-inline-block'>Show Categories</span>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                                                <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                                                <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                                            </ul>
                                        </div>
                                    </div> 
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-5'>
                                        <NavLink to='/'>Home</NavLink>
                                        <NavLink to='/store'>Our Store</NavLink>
                                        <NavLink to='/blogs'>Blogs</NavLink>
                                        <NavLink to='/contact'>Contact</NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
