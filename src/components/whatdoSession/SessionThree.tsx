import style from './Sessionthree.module.css'
import { PiPaintBrushBroad, PiSquaresFourDuotone } from "react-icons/pi";
import { HiSpeakerphone } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import { LuBox } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";






export default function SessionThree() {
    const dta = [
        {
            title: 'Brand Identity',
            dis: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
            icon: <PiPaintBrushBroad className='fs-1 me-3' />,
        },
        {
            title: 'Illustration',
            dis: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
            icon: <PiSquaresFourDuotone className='fs-1 me-3' />,
        },
        {
            title: 'Marketing',
            dis: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
            icon: < HiSpeakerphone className='fs-1 me-3' />,
        },
        {
            title: 'Web Design',
            dis: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
            icon: < BiWorld className='fs-1 me-3' />,
        },
        {
            title: 'Packaging Design',
            dis: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
            icon: < LuBox className='fs-1 me-3' />,
        },
        {
            title: 'Web Development',
            dis: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
            icon: <CgWebsite className='fs-1 me-3' />,
        },
    ]
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className={`${style.main} col-md-8 mt-5 text-center mx-auto mb-5 `}>
                    <h6 className=''>What we Do</h6>
                    <h1 className='border-bottom pb-4 border-2 border-success'>We’ve got everything you need to launch and grow your business</h1>
                </div>
                <div className='mt-5 d-flex flex-wrap justify-content-between pb-5 mb-5'>
                    {dta.map((val: any, i: number) => {
                        return (

                            <div className="col-sm-5 d-flex mt-5 " key={i}>
                                <div style={{ color: '#39b54a' }}>
                                    {val.icon}
                                </div>
                                <div>
                                    <h3>{val.title}</h3>
                                    <p>{val.dis}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
