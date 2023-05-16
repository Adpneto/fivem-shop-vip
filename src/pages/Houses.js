import Carousel from 'react-bootstrap/Carousel';
import ft1 from '../assets/house1.jpg'
import ft2 from '../assets/house2.jpg'
import HousesLayout from '../components/HousesLayout';
import { Link } from "react-router-dom"
import { MdOutlineKeyboardReturn } from 'react-icons/md';


function Houses() {
    return (
        <div>
            <Link to='/'><button className='return'><MdOutlineKeyboardReturn /> VOLTAR</button></Link>
            <Carousel>
                <Carousel.Item>
                    <HousesLayout ft={ft1} type='MANSÃO' name='WRAITH' leisure_areas='8' bedrooms='6' bathrooms='2' garage='10' trunk='400' iptu='15.000,00' price='2000'></HousesLayout>
                </Carousel.Item>
                <Carousel.Item>
                    <HousesLayout ft={ft2} type='MANSÃO' name='SENNA' leisure_areas='2' bedrooms='1' bathrooms='2' garage='3' trunk='160' iptu='19.000,00' price='3000'></HousesLayout>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Houses;