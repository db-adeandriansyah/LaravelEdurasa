import { useContext } from "react"
import KelasButtonModal from "./KelasButtonModal"
import { KelasContex } from "./KelasContext"

// export default function KelasTabel({kelas,parentOnUpdate,parentOnDelete}){
//kelasroom,handleOnAdd,handleOnUpdate, handleOnDelete
export default function KelasTabel({...props}){
        const {kelasroom} = useContext(KelasContex)
    return(
        <div className="mt-2 overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border-black border bg-slate-200">No</th>
                        <th className="border-black border bg-slate-200">Klasifikasi Kelas</th>
                        <th className="border-black border bg-slate-200">Tingkat</th>
                        <th className="border-black border bg-slate-200">Jenjang (numerik)</th>
                        <th className="border-black border bg-slate-200">Rombel</th>
                        <th className="border-black border bg-slate-200">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {kelasroom.length?(
                        kelasroom.map((item,index)=>
                            <tr key={index}>
                                <td className="border border-black p-2">{index+1}</td>
                                <td className="border border-black p-2">{item.klasifikasi}</td>
                                <td className="border border-black p-2">{item.tingkat}</td>
                                <td className="border border-black p-2">{item.jenjang}</td>
                                <td className="border border-black p-2">{item.rombel}</td>
                                <td className="border border-black p-0">
                                    <div className="flex justify-center gap-2">
                                        <KelasButtonModal action="edit" typeContent='form'  currentData={item} titleModal="Edit Kelas" classNameButton="bg-yellow-600">Edit</KelasButtonModal>
                                        <KelasButtonModal action="delete" typeContent='button' currentData={item}  titleModal="Hapus Kelas" classNameButton="bg-red-600">Hapus</KelasButtonModal>
                                    </div>
                                </td>
                            </tr>)
                        
                    ):(
                        <tr>
                            <td colSpan={6} className="border border-black text-center">Belum ada data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}