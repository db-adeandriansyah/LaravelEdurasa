import Modal from "@/Components/Modal";
import { useState } from "react";
import ModalForm from "./ModalForm";

export default function TapelButtonModal({...props}){
    const {classButton, labelButton,titleModal,isDeleted, tapel, currentData,onChange} = props;
    const [showModal, setShowModal] = useState(false);

    function handleShowModal(){
        setShowModal(true);
    }

    function handleCloseModal(){
        setShowModal(false);
    }

    return(
        <>
            <button onClick={handleShowModal} className={`border rounded px-3 ${classButton}`}>{labelButton}</button>
            <Modal show={showModal} maxWidth="2xl" closeable={false}>
                <ModalForm 
                    titleModal={titleModal} 
                    currentData={currentData} 
                    onChange={onChange}
                    isDeleted={isDeleted} 
                    onCloseModal={handleCloseModal}
                    tapel={tapel}
                    labelButton={labelButton}
                />
            </Modal>
        </>
    )
}