import Modal from "@/Components/Modal";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react"
import KelasForm from "./KelasForm";
import KelasFormDelete from "./KelasFormDelete";

export default function KelasButtonModal({
    classNameButton='bg-green-600',
    children,
    titleModal = 'Judul Modal belum dibuat',
    typeContent,
    
    currentData,
    changeData,
    action,
    ...props
    }){
    const [showModal, setShowModal] = useState(false);

    function handleClickButton(){
        setShowModal(true);
    }
    function closeModal(){
        setShowModal(false);
    }
    
    return(
        <>
            <button onClick={handleClickButton} className={`border ${classNameButton} rounded px-2 text-white font-bold`}>{children}</button>
            <Modal show={showModal} closeable={false}>
                <div className="bg-sky-300 shadow-md py-3 px-2 flex justify-between">
                    <h3 className={'font-bold text-lg'}>{titleModal}</h3>
                    <XMarkIcon onClick={closeModal} className="h-8 w-8 text-red-600" role="button"/>
                </div>
                {typeContent==='form'?(
                    <KelasForm 
                        
                        action={action}
                        currentDataForm={currentData} 
                        
                        onClose={closeModal}/>

                ):(
                    <KelasFormDelete currentDataForm={currentData}  onClose={closeModal}/>

                )}
            </Modal>
        </>
    )
}