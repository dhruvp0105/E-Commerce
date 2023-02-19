import React from 'react'
import { Link } from "react-router-dom";
export const Login1 = () => {
    return (
        <>
            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card'>
                                <h3 className='text-center'>Login</h3>
                                <form action='' className='d-flex flex-column gap-3 mt-3'>
                                    <div>
                                        <input type='Email' className='form-control' placeholder='Email'></input>
                                    </div>
                                    <div>
                                        <input type='password' className='form-control' placeholder='Password'></input>
                                    </div>
                                    <div>
                                        <Link className='l2'>Forgot Password ?</Link>
                                    </div>
                                    <div className='d-flex justify-content-center gap-4 align-items-center'>
                                        <button className='button'>Login</button>
                                        <Link to='/signup' className='button'>SignUp</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
