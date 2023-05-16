import Carousel from 'react-bootstrap/Carousel';
import ft1 from '../assets/car1.png'
import ft2 from '../assets/car2.png'
import ft3 from '../assets/car3.png'
import CarLayout from '../components/CarLayout';
import { Link } from "react-router-dom"
import { MdOutlineKeyboardReturn } from 'react-icons/md';


function VehiclesPermanent() {
    return (
        <div>
            <Link to='/'><button className='return'><MdOutlineKeyboardReturn /> VOLTAR</button></Link>
            <Carousel>
                <Carousel.Item>
                    <CarLayout ft={ft1} manufacturer='ROLLS ROYCE' name='WRAITH' trunk='20' tank='60' seats='2' topspeed='240' velocity='6' ipva='150.000,00' price='3000'></CarLayout>
                </Carousel.Item>
                <Carousel.Item>
                    <CarLayout ft={ft2} manufacturer='MCLAREN' name='SENNA' trunk='30' tank='65' seats='2' topspeed='270' velocity='6' ipva='250.000,00' price='4500'></CarLayout>
                </Carousel.Item>
                <Carousel.Item>
                    <CarLayout ft={ft3} manufacturer='NISSAN' name='GTR R35' trunk='35' tank='50' seats='2' topspeed='300' velocity='6' ipva='456.000,00' price='5600'></CarLayout>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default VehiclesPermanent;