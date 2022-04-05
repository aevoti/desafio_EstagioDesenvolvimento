import { Button } from "primereact/button";
import React from "react";
import Modal from 'react-modal';


export function ModalPersonalizado({ abreModal, fechaModal, itens, buttonModal }) {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            height: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '',
            border: '0',
        }
    };

    return (
        <>
            <Modal
                isOpen={abreModal}
                onRequestClose={fechaModal}
                style={customStyles}
            >
                {itens}
                {/* <Button style={{ position: "absolute", top: '130px' }}>fechar</Button> */}
                <Button label="Fechar" icon="pi pi-times"
                    onClick={() => buttonModal(false)}
                    style={{ position: "absolute", top: '130px',left:'0px' }} />
            </Modal>
        </>
    )


}
