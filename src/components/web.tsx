import style from './web.module.css';
import { FiMenu } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
import Navigtion from './navigtion';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

export default function Web() {
    const [list, setlist] = useState(false)
    return (
        <>
      
        <div className={`${style.main} p-3 position-relative  `}>
            <div className="container-fluid d-flex  justify-content-between align-items-center">
                <div className="col-2 logo">
                    <h1> Glint<span>.</span></h1>
                </div>
                <div className={`${style.menu} col-md-1 text-decoration-none text-white position-relative`}>
                    <div className='d-flex align-items-center' onClick={() => setlist(!list)}>
                        <h6>Menu</h6>
                        <div className='d-flex flex-column'>
                            {list ? <RxCross2 className='fs-1 ms-2' /> : <FiMenu className='fs-1 ms-2' />}

                        </div>
                    </div>
                    <Navigtion list={list} />

                </div>
            </div>
            <div className={`container mt-5 ${style.bef} position-relative `}>
                <div className="row d-sm-flex justify-content-between ">
                    <div className="col-sm-8 mt-5 ">
                        <h5>Welcome to Glint</h5>
                        <h1>We are a creative group
                            of people who design
                            influential brands and
                            digital experiences.</h1>
                        <div className='mt-5  d-md-flex'>
                            <button className={` ${style.btn} col-12 col-md-6 border px-4 py-2 border-white`}>Start  Project</button>
                            <button className={` ${style.btn} col-12 col-md-6  ms-md-3 mt-2 mt-md-0 border px-4 py-2 border-white`}>Start  Project</button>

                        </div>
                    </div>
                    <div className={`${style.icondiv} col-2 mt-5 d-none d-sm-block`}>
                        <div className={` ${style.icn} mt-3`}>
                            <FaFacebookF className={`${style.icn2} border  fs-2 p-2 rounded-circle`} />
                        </div>
                        <div className={`${style.icn} mt-3 `}>
                            <FaTwitter className={` ${style.icn2} border   fs-2 p-2 rounded-circle`} />
                        </div>
                        <div className={`${style.icn} mt-3`}>

                            <FaInstagram className={`${style.icn2} border  fs-2 p-2 rounded-circle`} />
                        </div>
                        <div className={`${style.icn} mt-3`}>
                            <FaBehance className={`${style.icn2} border fs-2 p-2 rounded-circle`} />
                        </div>

                    </div>
                </div>
            </div>
        </div>


        </>
    )
}
