import style from './Sessiontwo.module.css'

export default function Sessiontwo() {
    return (
        <div className={`${style.main} pt-5`}>
            <div className="container mt-5">
                <div className="row">
                    <div className={` mx-auto text-center col-md-9 pb-5 `}>
                        <h5>Hello There</h5>
                        <h1 className='text-white border-bottom'>We are Glint</h1>
                        <p className='mt-5 '>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                        </p>
                        <div className='d-flex flex-wrap justify-content-around'>
                            <div className={`${style.count}   pe-4 col-lg-2 col-md-3 col-sm-6`}>
                                <h1 className='text-white'>1234</h1>
                                <h6>Award Received</h6>
                            </div>
                            <div className={`${style.count}  pe-4 col-lg-2 col-md-3 col-sm-6`}>
                                <h1 className='text-white'>7854</h1>
                                <h6>Award Received</h6>
                            </div>
                            <div className={`${style.count}  pe-4 col-lg-2 col-md-3 col-sm-6`}>
                                <h1 className='text-white'>634</h1>
                                <h6>Award Received</h6>
                            </div>
                            <div className={`${style.count}  pe-4 col-lg-2 col-md-3 col-sm-6`}>
                                <h1 className='text-white'>4664</h1>
                                <h6>Projects Com</h6>
                            </div>
                            
                           
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
