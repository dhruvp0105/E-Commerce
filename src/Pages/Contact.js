import React from 'react'
import { FaHome } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
export const Contact = () => {
  return (
    <>
      <div className='contact-wrapper home-wrapper-2   py-5'>
        <div className='container-xxl'>
          <div className="row">
            <div className='col-12'>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.901773149182!2d72.7780240505085!3d21.19606068735258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c4a9b65bf65%3A0x9156175adc86439a!2sShanti%20Sagar%20Row%20House%2C%20Adajan%20Gam%2C%20L.P.Savani%2C%20Surat%2C%20Gujarat%20395009!5e0!3m2!1sen!2sin!4v1676797700401!5m2!1sen!2sin" width="1300" height="450" className="border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-3 mt-3'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name'></input>
                    </div>
                    <div>
                      <input type='text' className='form-control' placeholder='Email'></input>
                    </div>
                    <div>
                      <input type='text' className='form-control' placeholder='Mobile Number'></input>
                    </div>
                    <div>
                      <textarea className='form-control' name='' id='' cols={70} rows={8} placeholder='Comments'></textarea>
                    </div>

                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div className='get-touch'>
                  <h3 className='contact-title'>Get in Touch with us</h3>
                  <div>
                    <ul>
                      <li className='mb-3 mt-4 d-flex align-items-center gap-4'><FaHome /><address>Hno 162 , L.P Savani Road, Adajan Surat </address></li>
                      
                      <li className='mb-4 d-flex align-items-center gap-4'><BiPhoneCall /><a href='tel:+91 6355612097'>+91 6355612097</a></li>
                      <li className='mb-4  d-flex align-items-center gap-4'><AiOutlineMail /><a href='mailto:abc@gmail.com'>abc@gmail.com</a></li>
                      <li className='mb-4 d-flex align-items-center gap-4'><BsInfoCircle /><p className='mb-0'>Monday-Friday 10AM-8PM</p></li>
                    </ul>
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
