
import { useState } from "react";
import KelasComponentSelect from "./KelasComponentSelect";
import DATA_SETTING_KELAS from "./KelasData";
import { useForm } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";

export default function KelasFormDelete({kelas, onClose,currentDataForm, onChangeData,...props}){
    const {data, setData,reset} = useForm(currentDataForm);
    
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.delete(route('kelas.delete',data)).then(m=>{
            
            onChangeData(data);
            reset();
            onClose();

        });
        


    };

    return(
        <form onSubmit={handleSubmit} className="mx-2 p-3">
            <p>Anda yakin ingin menghapus data ini?</p>
            <DangerButton type="submit">Hapus</DangerButton>
            <button className="border bg-green-400 rounded-full px-2 me-2" type="button" onClick={onClose}>Batal</button>
                                        
        </form>
    )
}