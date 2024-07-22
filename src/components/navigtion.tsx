import style from './navigation.module.css'

export default function Navigtion(props: {
    list: any;
}) {
    const { list} = props;
    return (
     
                <div className={` me-3 ${list?style.show:style.hid} ${style.main}`} >
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Clients</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
         
    )
}
