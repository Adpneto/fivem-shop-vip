import React from 'react';
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

function Home() {
    return (
        <motion.div intial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="home">
            <div className="block1">
                <div className="rent-text1 no-link">
                    <h1>ALUGUEL</h1>
                    <h2>VEICULOS <span>PREMIUM</span></h2>
                </div>
                <h3>CARROS NOVOS TODA SEMANA</h3>
            </div>
            <Link to='/vehiclepermanent' className="block2 no-link">
                <div className="block2-content">
                    <h1>EXCLISIVOS <span>PARA SEMPRE</span></h1>
                    <h2>VEICULOS <span>PREMIUM</span></h2>
                </div>
            </Link>
            <Link to='/premiunpass' className="block3 no-link">
                <div className="title-pass">
                    <h1>PREMIUM</h1>
                    <h2>PASS</h2>
                </div>
            </Link>
            <Link to='/houses' className="block4 no-link">
                    <h1>MANSÕES & YATCHS</h1>
            </Link>
        </motion.div>
    );
}

export default Home;