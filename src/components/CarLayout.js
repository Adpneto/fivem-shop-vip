function CarLayout(props) {
    return (
        <div className="CarLayoutDealer">
            <img className="PhotoCarDealer" src={props.ft} alt=""/>
            <div className="content-car-dealer">
                <div className="CarName">
                    <h1>{props.manufacturer}</h1>
                    <h2>{props.name}</h2>
                </div>
                <div className="car-status">
                    <div>
                        <div className="status-style">
                            <h1>Porta Malas</h1>
                            <h2>{props.trunk} Espaços</h2>
                        </div>
                        <div className="status-style">
                            <h1>Tanque de Combustivel</h1>
                            <h2>{props.tank} Litros</h2>
                        </div>
                        <div className="status-style">
                            <h1>Lugares</h1>
                            <h2>{props.seats} Bancos</h2>
                        </div>
                    </div>
                    <div>
                        <div className="status-style">
                            <h1>Velocidade Maxima</h1>
                            <h2>{props.topspeed} km/h</h2>
                        </div>
                        <div className="status-style">
                            <h1>De 0 a 100 km/h</h1>
                            <h2>{props.velocity} Segundos</h2>
                        </div>
                        <div className="status-style">
                            <h1>IPVA</h1>
                            <h2>R$ {props.ipva}</h2>
                        </div>
                    </div>
                </div>
                <div className="buttons-car-dealer">
                    <div className='price-car'>
                        <h1>VALOR DE <br/><span>COMPRA</span></h1>
                        <h3>|</h3>
                        <h2>{props.price}</h2>
                    </div>
                    <div>
                        <button>COMPRAR</button>
                        <button>TEST DRIVE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarLayout;