import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalBuy(props) {
    return (
        <div>
            <Modal {...props} centered>
                
                <div className="modals-template">
                    <h1>Tem certeza que deseja adquirir {props.days} dias por {props.price} coins?</h1>
                    <p>
                        Antes de prosseguirmos com a venda, gostaria de confirmar se você está certo(a) de que deseja adquirir este produto. É importante ressaltar que não será possível realizar estornos ou devoluções após a compra, então é necessário ter certeza da decisão. Caso ainda tenha alguma dúvida ou precise de mais informações, por favor não hesite em perguntar em nosso suporte!.
                    </p>
                    <div className='buttons-buy'>
                        <Button variant="success">Comprar</Button>
                        <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalBuy;