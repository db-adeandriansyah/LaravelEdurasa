import KelasButtonModal from "./KelasButtonModal";
import KelasTabel from "./KelasTabel";

export default function KelasCrud({...props}){
    const {kelas,parentOnAdd,parentOnUpdate,parentOnDelete} = props;
    const draftFirstData = {
        id:'',
        klasifikasi:'',
        jenjang:'',
        tingkat:'',
        rombel:null
    }
    
    return(
        <>
            <div className="flex justify-end mt-3 pe-3">
                <KelasButtonModal action="add" kelas={kelas} typeContent='form' changeData={parentOnAdd} currentData={draftFirstData} titleModal="Tambah Kelas">Tambah</KelasButtonModal>
            </div>
            <KelasTabel kelas={kelas} parentOnUpdate={parentOnUpdate} parentOnDelete={parentOnDelete}/>
        </>
    )
}