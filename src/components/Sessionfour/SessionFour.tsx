import style from './SessionFOur.module.css'
import img1 from '../../assets/Screenshot 2024-07-21 052707.png'
import img2 from '../../assets/Screenshot 2024-07-21 052745.png'
import img3 from '../../assets/Screenshot 2024-07-21 053354.png'
import img4 from '../../assets/Screenshot 2024-07-21 053422.png'
import Footer from '../footer/footer'
export default function SessionFour() {
    return (
        <>
            <div className={style.main}>
                <div className="container mt-5 pt-5">
                    <div className='text-white col-8 mx-auto  text-center pt-5 pb-5'>
                        <h6>RECENT WORKS</h6>
                        <h1>We love what we do, check out some of our latest works</h1>
                    </div>

                    <div className='d-flex flex-wrap pb-5'>
                        <div className="col-6">
                            <img src={img1} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-6">
                            <img src={img2} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-6">
                            <img src={img3} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-6">
                            <img src={img4} style={{ width: '100%', height: '100%' }} />
                        </div>

                    </div>

                </div>
                <div className="container-fluid" style={{backgroundColor:"#39b54a",color:'white'}}>
                    <Footer />

                </div>
            </div>
        </>
    )
}
