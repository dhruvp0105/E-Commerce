import React from 'react'

export const Blogs = () => {
    return (
        <>
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Find By Categories </h3>
                                <div>
                                    <ul>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='blog-card'>
                                <div className='card-image'>

                                    <img src='https://raw.githubusercontent.com/navdeep1676/digitic-website/master/src/images/blog-1.jpg' className='img-fluid' alt='blog'></img>
                                </div>
                                <div className='blog-content'>
                                    <p className='date'>14 FEB, 2023</p>
                                    <h5 className='title'>Amazon Valentine’s Day Edition Jackpot Quiz answers today: win Rs 30,000 and more</h5>
                                    <p className='desc'>Amazon Valentine’s Day Edition Jackpot Quiz is a new contest by Amazon India and it arrived under the Fuzone section of the Amazon shopping app. With this quiz, Amazon users can test their knowledge on Valentine’s day in attempt to win Rs 30,000. However, since this is a “spin and win” style quiz.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='blog-card'>
                                <div className='card-image'>
                                    <img src='https://raw.githubusercontent.com/navdeep1676/digitic-website/master/src/images/blog-4.webp' className='img-fluid' alt='blog'></img>
                                </div>
                                <div className='blog-content'>
                                    <p className='date'>25 NOV, 2022</p>
                                    <h5 className='title'>Amazon’s Cyber Monday sale starts November 26: Here’s everything you need to know to plan your shopping</h5>
                                    <p className='desc'>Amazon’s Cyber Monday weekend event starts Saturday, November 26, and runs through Monday, November 28. The sale features deals across categories from popular brands like Anastasia Beverly Hills, Segway, Mr. Coffee, and Bose.Get more with the Amazon Store Card</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
              <div className='blog-card'>
                <div className='card-image'>
                  <img src='https://cdn.mos.cms.futurecdn.net/Qze2uwbL5ohfPqHDhs6jpB.jpg' className='img-fluid1' alt='blog'></img>
                </div>
                <div className='blog-content'>
                  <p className='date'>12 DEC, 2022</p>
                  <h5 className='title'>practical tips to help you stay safe and avoid scams when shopping at Amazon</h5>
                  <p className='desc'>We want to help consumers avoid impersonation scams this holiday season. These happen when a scammer pretends to be a trusted company and reaches out to try to get access to sensitive information like social security numbers, bank information, or Amazon account details.</p>
                </div>
              </div>
            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
