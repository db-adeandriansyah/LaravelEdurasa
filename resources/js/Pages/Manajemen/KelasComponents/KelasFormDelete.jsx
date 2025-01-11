
import { useContext } from "react";
import { useForm } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import { KelasContex } from "./KelasContext";

export default function KelasFormDelete({onClose,currentDataForm, ...props}){
    const {data, reset} = useForm(currentDataForm);
    const {handleOnDelete} = useContext(KelasContex);
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.delete(route('kelas.delete',data)).then(m=>{
            
            handleOnDelete(m.data.data);
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