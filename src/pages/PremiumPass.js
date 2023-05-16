import { Link } from "react-router-dom"
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import React from 'react';
import ModalBuy from "../components/ModalBuy";

function PremiumPass() {
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    return (
        <div>
            <Link to='/'><button className='return'><MdOutlineKeyboardReturn /> VOLTAR</button></Link>
            <div className="content-premium-pass-page">
                <div className="plan-content">
                    <div className="title-pass-page">
                        <h1>PREMIUM</h1>
                        <h2>PASS</h2>
                    </div>
                    <div className="infos-premium">
                        <ul>
                            <h1>VANTAGENS</h1>
                            <li>Sem limites de Residências</li>
                            <li>Sem limites de Compras de Veiculos</li>
                            <li>Verificado nas redes sociais</li>
                            <li>Não perde a mochila ao desmaiar</li>
                            <li>Pode mudar cor das suas armas</li>
                            <li>Acesso ao aplicativos de musicas</li>
                        </ul>
                        <div>
                            <button onClick={() => setModalShow1(true)}><h1>500 COINS</h1><h3>15 DIAS</h3></button>
                            <button onClick={() => setModalShow2(true)}> <h1>1000 COINS</h1><h3>30 DIAS</h3></button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalBuy
                show={modalShow1}
                price={500}
                days={15}
                onHide={() => setModalShow1(false)}
            />
            <ModalBuy
                show={modalShow2}
                price={1000}
                days={30}
                onHide={() => setModalShow2(false)}
            />
        </div>
    );
}

export default PremiumPass;