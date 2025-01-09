
import TapelButtonModal from "./TapelButtonModal";
import TapelTabel from "./TapelTable";

export default function TapelCrud({tapel, onAdd, onChange,onDelete}){
    
    return(
        <>
            <div className="flex justify-end me-3 mb-2">
                <TapelButtonModal
                    classButton='bg-green-400 px-3'
                    labelButton = "Tambah"
                    isDeleted = {false}
                    currentData={{ tahunawal:'' }}
                    onChange = {onAdd}
                    titleModal="Tambah Data Tapel"
                    tapel={tapel}
                />
            </div>
            <TapelTabel tapel={tapel} onChange={onChange} onDelete={onDelete}/>
        </>
    )
}