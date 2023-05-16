function HousesLayout(props) {
    return (
        <div className="HosesLayoutDealer">
            <img className="PhotoHosesDealer" src={props.ft} alt=""/>
            <div className="content-Hoses-dealer">
                <div className="HosesName">
                    <h1>{props.type}</h1>
                    <h2>{props.name}</h2>
                </div>
                <div className="Hoses-status">
                    <div>
                        <div className="status-style">
                            <h1>Áreas de Lazer</h1>
                            <h2>{props.leisure_areas} Áreas</h2>
                        </div>
                        <div className="status-style">
                            <h1>Quartos</h1>
                            <h2>{props.bedrooms} Quartos</h2>
                        </div>
                        <div className="status-style">
                            <h1>Banheiros</h1>
                            <h2>{props.bathrooms} Banheiros</h2>
                        </div>
                    </div>
                    <div>
                        <div className="status-style">
                            <h1>Garagem</h1>
                            <h2>{props.garage} Vagas</h2>
                        </div>
                        <div className="status-style">
                            <h1>Bau</h1>
                            <h2>{props.trunk} Espaços</h2>
                        </div>
                        <div className="status-style">
                            <h1>IPTU</h1>
                            <h2>R$ {props.iptu}</h2>
                        </div>
                    </div>
                </div>
                <div className="buttons-Hoses-dealer">
                    <div className='price-Hoses'>
                        <h1>VALOR DE <br/><span>COMPRA</span></h1>
                        <h3>|</h3>
                        <h2>{props.price}</h2>
                    </div>
                    <div>
                        <button>COMPRAR</button>
                        <button>MARCAR LOCALIZAÇÃO</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HousesLayout;