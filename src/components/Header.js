import { RxExit } from 'react-icons/rx';

function Header() {
    return(
        <div className="header">
            <div className="title">
                <h1>LOJA VIP</h1>
                <h2>FAÇA TROCAS COM SEGURANÇA</h2>
            </div>
            <div className="center-header">
                <div className="pass-status">
                    <h1>PASS</h1>
                    <h2>INATIVO</h2>
                </div>
                <div className="coins">
                    <h1>COINS</h1>
                    <h3>|</h3>
                    <h2>1.000</h2>
                </div>
                {/* <div class="money"> 
                    <h1>DINHEIRO</h1>
                    <h3>|</h3>
                    <h2>5.000</h2>
                </div> */}
                <div className="transactions">
                    <button>TRANSAÇÕES</button>
                </div>
                <div className="exit">
                    <button><RxExit /></button>
                </div>
            </div>
        </div>
    );
}

export default Header;