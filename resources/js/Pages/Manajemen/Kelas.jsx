import GuruLayout from "@/Layouts/GuruLayout";
import sidebarSetting from "./PartialSettings/sidebarSetting";
import KelasCrud from "./KelasComponents/KelasCrud";
import { useImmer } from "use-immer";


export default function Kelas (props) {
        const {title,data} = props;
        const sidebar = sidebarSetting;
        const active = sidebar.findIndex(m=>m.routeName === route().current());

        const [kelasroom,setKelasroom] = useImmer(data);
        console.log('props di kelas.jsx', props);
        console.log('zigy rout', route().current());
        console.log('kelas, data', kelasroom,data);


        function handleOnAdd(newItemKelas){
            setKelasroom((draft)=>{
                draft.push(newItemKelas);
                draft.sort((a,b)=>a.tingkat.localeCompare(b.tingkat)|| parseInt(a.jenjang)-parseInt(b.jenjang));//a.tingkat - b.tingkat);
            });
        }
        function handleOnUpdate(currentItemKelas){
            setKelasroom((draft)=>{
                const index = draft.findIndex(s=>s.id===currentItemKelas.id);
                draft[index] = currentItemKelas;
            })
        }
        function handleOnDelete(currentItemKelas){

        }

        return (
            <GuruLayout 
                title ={title}
                namafitur='Kelas'
                sidebar={sidebar} 
                active={active
            }>
                <div className="p-2">
                    <h2 className="font-bold text-2xl">Pengaturan Kelas</h2>
                    <p>Ini adalah pengaturan kelas yang disediakan secara default oleh aplikasi. Client tinggal memilih kelas berdasarkan kategori ini. Nantinya ini dapat dimanfaatkan untuk kepentingan relasi tabel data terkait dengan pengaturan data sekolah tiap client</p>
                    <KelasCrud 
                        kelas={kelasroom} 
                        parentOnAdd={handleOnAdd}
                        parentOnUpdate ={handleOnUpdate}
                        parentOnDelete = {handleOnDelete}
                    />
                    <div className="border rounded w-full mt-2">Test</div>
                </div>
            </GuruLayout>
            
        )
    }