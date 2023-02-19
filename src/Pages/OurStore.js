import React from 'react'
import ReactStars from "react-rating-stars-component";
import { TbHeart } from 'react-icons/tb'
import { Link } from 'react-router-dom';

export const OurStore = () => {
  return (
    <>
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories </h3>
                <div>
                  <ul>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>

              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By </h3>
                <div>
                  <h6 className='sub-title'>Availability</h6>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      In Stock (2)
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                    <label class="form-check-label" for="flexCheckChecked">
                      Out of Stock (0)
                    </label>
                  </div>
                  <h6 className='sub-title mt-2'>Price</h6>
                  <div className='d-flex text-align-center gap-3'>
                    <form class="form-floating">
                      <input type="email" class="form-control" id="floatingInputValue" placeholder='from'></input>
                      <label for="floatingInputValue">From</label>
                    </form>

                    <form class="form-floating">
                      <input type="email" class="form-control" id="floatingInputValue" placeholder='To'></input>
                      <label for="floatingInputValue">To</label>
                    </form>
                  </div>

                  <h5 className='sub-title mt-3'>Colors</h5>
                  <div>
                    <ul className='colors'>
                      <li className='l1'></li>
                      <li className='l2'></li>
                      <li className='l3'></li>
                      <li className='l4'></li>
                      <li className='l5'></li>
                      <li className='l6'></li>
                      <li className='l7'></li>
                      <li className='l8'></li>
                      <li className='l9'></li>
                      <li className='l10'></li>
                      <li className='l11'></li>
                      <li className='l12'></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags </h3>
                <div className="product-tags d-flex flex-wrap gap-1 align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Speakers
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Camera
                  </span>
                </div>
              </div>

              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Product</h3>
                <div>
                  <div className='random-product d-flex'>
                    <div className='w-50'>
                      <img src='https://raw.githubusercontent.com/navdeep1676/digitic-website/master/src/images/watch.jpg' className='img-fluid'></img>
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids Watches - Shop Kids watches online at Titan
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>

                  <div className='random-product d-flex mt-4'>
                    <div className='w-50'>
                      <img src='https://raw.githubusercontent.com/navdeep1676/digitic-website/master/src/images/headphone.jpg' className='img-fluid'></img>
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 105</b>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className='col-9'>

              <div className='filter-sort-grid'>
                <div className='d-flex gap-5 align-items-center'>
                  <div className='d-flex align-items-center gap-2'>
                    <p className='mb-0'>Sort By</p>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                      <option selected>Best Selling</option>
                      <option value="1">Alphabetically, A-Z</option>
                      <option value="2">Alphabetically, Z-A</option>
                      <option value="3">Price, Low to High</option>
                      <option value="3">Price, High to Low </option>

                    </select>
                  </div>
                  <div className='product-items'>
                    <div className='d-flex gap-3 align-items-center'>
                      <p className='total-products'>25 Products</p>
                      <div className='d-flex gap-3 align-items-center grid' >
                        <img src='https://raw.githubusercontent.com/navdeep1676/digitic-website/f37869e69bff663b0045ea0e3faaad4182aa226a/public/images/gr.svg' className='mb-2 img-fluid' height={30} width={30}></img>
                        <img src='https://raw.githubusercontent.com/navdeep1676/digitic-website/f37869e69bff663b0045ea0e3faaad4182aa226a/public/images/gr2.svg' className='mb-2 img-fluid' height={20} width={15}></img>
                        <img src='https://raw.githubusercontent.com/navdeep1676/digitic-website/f37869e69bff663b0045ea0e3faaad4182aa226a/public/images/gr3.svg' className='mb-2 img-fluid' height={30} width={20}></img>
                        <img src='https://raw.githubusercontent.com/navdeep1676/digitic-website/f37869e69bff663b0045ea0e3faaad4182aa226a/public/images/gr4.svg' className='mb-2 img-fluid' height={30} width={30}></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-flex align-items-center gap-4'>
                <div className='col-4 mt-3'>
                  <div className='product-card position-relative'>
                  <div className='wishlist-icon position-absolute'>
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                    <div className='card-image'>
                      <img src='https://images.jdmagicbox.com/quickquotes/images_main/boat-stone-170-portable-bluetooth-speakers-with-true-wireless-sound-compact-ipx-6-water-resistant-design-and-hd-premium-sound-charcoal-black-178079064-bnk6z.jpg' className='img-fluid' alt='blog'></img>
                    </div>
                    <div className='product-details'>

                      <h6 className='brand'>Boat</h6>
                      <p className='desc'>boAt Stone 1010 14W Portable Bluetooth Speaker (IPX5 Water Resistant, Monstrous Sound, Black)</p>
                      <ReactStars
                        count={5}
                        value='4'
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className='price'>$100.00</p>

                    </div>
                  </div>
                </div>

                <div className='col-4 mt-3'>
                  <div className='product-card position-relative'>
                  <div className='wishlist-icon position-absolute'>
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                    <div className='card-image'>
                      <img src='https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1668271007/Croma%20Assets/Communication/Wearable%20Devices/Images/262061_0_loco0j.png/mxw_2048,f_auto' className='img-fluid' alt='blog'></img>
                    </div>
                    <div className='product-details'>
                      <h6 className='brand'>Apple</h6>
                      <p className='desc'>Apple Watch SE with Sports Band (44mm Retina LTPO OLED Display, Midnight Aluminium Case)</p>
                      <ReactStars
                        count={5}
                        size={24}
                        value='4'
                        edit={false}

                        activeColor="#ffd700"
                      />
                      <p className='price'>$500.00</p>

                    </div>
                  </div>
                </div>


                <div className='col-4 mt-3'>
              <div className='product-card position-relative'>
              <div className='wishlist-icon position-absolute'>
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                <div className='card-image'>
                  <img src='https://5.imimg.com/data5/SL/UR/MY-54138444/jbl-headset-500x500.jpg' className='img-fluid' alt='blog'></img>
                </div>
                <div className='product-details'>
                  <h6 className='brand'>JBL</h6>
                  <p className='desc'>JBL Tune 710 JBLT710BTBLK Bluetooth Headset with Mic (50 Hours Playback, On Ear, Black)</p>
                  <ReactStars
                    count={5}
                    size={24}
                    value='4'
                    edit={false}

                    activeColor="#ffd700"
                  />
                  <p className='price'>$85.00</p>

                </div>
              </div>
            </div>


              </div>

              <br>
              </br>

              <div className='d-flex align-items-center gap-4'>
                <div className='col-4 mt-3'>
                  <div className='product-card position-relative'>
                  <div className='wishlist-icon position-absolute'>
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                    <div className='card-image'>
                      <img src='https://www.reliancedigital.in/medias/Dell-D560790WIN9BE-Laptop-492850472-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTg0OXxpbWFnZS9qcGVnfGltYWdlcy9oY2QvaGVmLzk4MzgzNzU2NjU2OTQuanBnfDY1YjExYjdiMjVjZDY0MTFlZTA4MTU0ZjAwNTRlYmIyMjgzMWJlZjc5ZjY4MGJhMzA3OTg4YjIwMDM4NWY1YTE' className='img-fluid' width={270} alt='blog'></img>
                    </div>
                    <div className='product-details'>

                      <h6 className='brand'>Dell</h6>
                      <p className='desc'>Dell Inspiron 3515 Laptop (AMD Ryzen 5 3450U/8GB RAM/512GB SSD/AMD Vega Graphics/Windows 11/MSO/FHD)</p>
                      <ReactStars
                        count={5}
                        value='4'
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className='price'>$399.00</p>

                    </div>
                  </div>
                </div>

                <div className='col-4 mt-3'>
                  <div className='product-card position-relative'>
                  <div className='wishlist-icon position-absolute'>
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                    <div className='card-image'>
                      <img src='https://www.reliancedigital.in/medias/Samsung-Galaxy-Z-Flip-3-Smartphone-491997493-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNTI0MDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGIwL2hmMS85NjE3NTAxMjI0OTkwLmpwZ3w3NDY2MjRhZjZlMTAwZWZhNTA0ZTFhY2E0YTFiY2I3NjI3OGM3NGZmM2FhNDZkODNkZmY5NjkzZjIyNzI1MTBi' className='img-fluid' alt='blog'></img>
                    </div>
                    <div className='product-details'>
                      <h6 className='brand'>Samsung</h6>
                      <p className='desc'>Samsung Galaxy Z Series Flip3 5G 256 GB, 8 GB RAM, Cream, Mobile Phone</p>
                      <ReactStars
                        count={5}
                        size={24}
                        value='4'
                        edit={false}

                        activeColor="#ffd700"
                      />
                      <p className='price'>$199.00</p>

                    </div>
                  </div>
                </div>


                <div className='col-4 mt-3'>
              <div className='product-card position-relative'>
              <div className='wishlist-icon position-absolute'>
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                <div className='card-image'>
                  <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJUJntpUGhe1W2ekpU1--zYlyPCExGNLosnR5aMLR2j0S8K-wkOgWYbWLtZfPZhx-Qmu9AU640OPJD8NgeeX3CH8ME-7gSwRM7Yhaj4ZjeEDA5PzDoYggS&usqp=CAE' className='img-fluid' alt='blog'></img>
                </div>
                <div className='product-details'>
                  <h6 className='brand'>SONY</h6>
                  <p className='desc'>Sony Bravia 108 cm (43 Inch) 4K Ultra HD Smart LED Google TV 43X80J</p>
                  <ReactStars
                    count={5}
                    size={24}
                    value='4'
                    edit={false}

                    activeColor="#ffd700"
                  />
                  <p className='price'>$250.00</p>

                </div>
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
