import React from 'react'

export const Signup = () => {
  return (
    <>
        <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card'>
                                <h3 className='text-center'>Sign Up</h3>
                                <form action='' className='d-flex flex-column gap-3 mt-3'>
                                <div>
                                        <input type='text' className='form-control' placeholder='Name'></input>
                                    </div>
                                    <div>
                                        <input type='Email' className='form-control' placeholder='Email'></input>
                                    </div>
                                    <div>
                                        <input type='password' className='form-control' placeholder='Password'></input>
                                    </div>
                                    <div>
                                        <input type='text' className='form-control' placeholder='Mobile-No'></input>
                                    </div>
                                    <div className='d-flex justify-content-center gap-4 align-items-center'>
                                        <button className='button'>SignUp</button>
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
