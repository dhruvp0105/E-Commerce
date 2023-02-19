import React from 'react'
import { RxCross1 } from 'react-icons/rx'

export const WishList = () => {
    return (
        <>
            <div className='wishlist-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <RxCross1 className='position-absolute cross' />
                                <div className='product-card-img'>
                                    <img src='https://m.media-amazon.com/images/I/71eUw15rVbL._AC_UY327_FMwebp_QL65_.jpg' width={235} alt='watch'></img>
                                </div>
                                <div className='bg-white px-3 mt-4'>
                                    <h5 className='title'>Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black)</h5>
                                    <h6 className='price'>$150.00</h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <RxCross1 className='position-absolute cross' />
                                <div className='product-card-img'>
                                    <img src='https://m.media-amazon.com/images/I/51aBTOiXRlL._AC_UY327_FMwebp_QL65_.jpg' width={150} alt='watch'></img>
                                </div>
                                <div className='bg-white px-3 mt-4'>
                                    <h5 className='title'>boAt Rockerz 255 Pro+ in-Ear Bluetooth Neckband with Upto 40 Hours Playback</h5>
                                    <h6 className='price'>$95.00</h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <RxCross1 className='position-absolute cross' />
                                <div className='product-card-img'>
                                    <img src='https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg' width={115} alt='watch'></img>
                                </div>
                                <div className='bg-white px-3 mt-4'>
                                    <h5 className='title'>boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Driver</h5>
                                    <h6 className='price'>$88.00</h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <RxCross1 className='position-absolute cross' />
                                <div className='product-card-img'>
                                    <img src='https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY327_FMwebp_QL65_.jpg' width={129} alt='watch'></img>
                                </div>
                                <div className='bg-white px-3 mt-4'>
                                    <h5 className='title'>Apple Watch SE (GPS, 40mm) - Gold Aluminium Case with Starlight Sport Band - Regular</h5>
                                    <h6 className='price'>$395.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
