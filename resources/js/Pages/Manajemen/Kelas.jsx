import GuruLayout from "@/Layouts/GuruLayout";
import sidebarSetting from "./PartialSettings/sidebarSetting";
import KelasCrud from "./KelasComponents/KelasCrud";
import {useImmerReducer } from "use-immer";
import KelasReducer from "./KelasComponents/KelasReducer";


export default function Kelas (props) {
        const {title,data} = props;
        const [kelasroom,dispatch] = useImmerReducer(KelasReducer, data);
        const sidebar = sidebarSetting;
        const active = sidebar.findIndex(m=>m.routeName === route().current());

        function handleOnAdd(newItemKelas){
            dispatch({
                type:'ADD',
                data: newItemKelas
            });
        }
        function handleOnUpdate(currentItemKelas){
            dispatch({
                type:'UPDATE',
                data: currentItemKelas
            });
        }
        function handleOnDelete(currentItemKelas){
            
            dispatch({
                type:'DELETE',
                data: currentItemKelas
            });
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
                    
                </div>
            </GuruLayout>
            
        )
    }