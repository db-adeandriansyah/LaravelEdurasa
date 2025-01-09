import TapelButtonModal from "./TapelButtonModal";

export default function TapelTrow({tapel,onChange, onDelete}){
    return(
        tapel.map((item,index)=>
            <tr key={index}>
                <td className="border border-slate-900 p-2 text-center">{index+1}</td>
                <td className="border border-slate-900 p-2 text-center">{item.id}</td>
                <td className="border border-slate-900 p-2 text-center">{item.tahunawal}</td>
                <td className="border border-slate-900 p-2 text-center">{item.tahunakhir}</td>
                <td className="border border-slate-900 p-2 text-left">{item.long}</td>
                <td className="border border-slate-900 p-2 text-center">{item.short}</td>
                <td className="border border-slate-900 p-2 text-center">{new Date(item.berlaku_at).toLocaleString('id-ID',{dateStyle:'long'})}</td>
                <td className="border border-slate-900 p-2 text-center">{new Date(item.kadaluarsa_at).toLocaleString('id-ID',{dateStyle:'long'})}</td>
                <td className="border border-slate-900 p-2 text-center">
                    <TapelButtonModal
                        classButton="bg-green-500"
                        labelButton="Edit"
                        onChange={onChange}
                        isDeleted = {false}
                        currentData={{ tahunawal:item.tahunawal,id:item.id }}
                        titleModal={`Edit Tapel ${item.long}`}
                        tapel={tapel}
                    />
                    <TapelButtonModal
                        classButton="bg-red-500"
                        labelButton="Hapus"
                        onChange={onDelete}
                        isDeleted = {true}
                        currentData={{ tahunawal:item.tahunawal,id:item.id }}
                        titleModal={`Hapus Tapel ${item.long}`}
                        tapel={tapel}
                    />
                </td>
            </tr>

        )
    )
}