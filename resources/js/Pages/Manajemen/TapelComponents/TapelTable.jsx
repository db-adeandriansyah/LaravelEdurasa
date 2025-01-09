import TapelTrow from "./TapelTrow";

export default function TapelTabel({tapel,onChange, onDelete}){
    return (
        
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-900 p-2">No</th>
                        <th className="border border-slate-900 p-2">ID</th>
                        <th className="border border-slate-900 p-2">Tahun Awal</th>
                        <th className="border border-slate-900 p-2">Tahun Akhir</th>
                        <th className="border border-slate-900 p-2">Nama Tapel</th>
                        <th className="border border-slate-900 p-2">Singkatan</th>
                        <th className="border border-slate-900 p-2">Mulai Berlaku</th>
                        <th className="border border-slate-900 p-2">Selesai Berlaku</th>
                        <th className="border border-slate-900 p-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <TapelTrow tapel={tapel} onChange={onChange} onDelete={onDelete}/>
                </tbody>
            </table>

        </div>
    )
}