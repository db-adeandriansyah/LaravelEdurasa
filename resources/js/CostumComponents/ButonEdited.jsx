import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Login from "@/Pages/Auth/Login";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function ButtonEdited({...props}){
    const {sourceData, children} = props;
   
    const {
        data,
        setData,
        reset,

    }=useForm({
        tahunawal : sourceData.tahunawal,
        tahunakhir : sourceData.tahunakhir,
        long        : sourceData.long,
        short        : sourceData.short,
    });
    console.log(data);
    const [showModal, setShowModal] = useState(false);
    
    
    function showData(){
        setShowModal(true);
        
    }
    function closeModal(){
        setShowModal(false);

    };
    function handleOnChange(e){
        setData('tahunawal',e.target.value);
        console.log('tipe yang diinput',typeof(e.target.value));
    }
    return(
        <>
            <span onClick={showData} >{children}</span>
            <Modal show={showModal} onClose={closeModal} >
                <form>
                    <InputLabel htmlFor="input_tahunawal" value="Tapel Panjang" />
                    <TextInput id="input_tahunawal" type="number" value={data.tahunawal} onChange={handleOnChange} />
                    
                    </form>
            </Modal>
        </>
    )
}