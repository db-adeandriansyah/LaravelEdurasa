import GuruLayout from "@/Layouts/GuruLayout";
import sidebarSetting from "../PartialSettings/sidebarSetting";
import { useImmer } from "use-immer";
import TapelCrud from "./TapelCrud";
import validasiInput from "./ValidasiTapel";



export default function Tapel ({...props}) {
    const {title,data} = props;
    const sidebar = sidebarSetting;
    const active = sidebar.findIndex(m=>m.routeName ===route().current());

    const [tapel, setTapel] = useImmer(data);

    function handleOnAdd(newtapel){
        const cek = validasiInput(tapel,newtapel);
        if(cek.isValid){
            setTapel((draft)=>{
                draft.push(cek.data);
                draft.sort((a,b)=>a.tahunawal - b.tahunawal);
            })
        }
    }

    function handleOnUpdate(itemTapel){
        const cek = validasiInput(tapel,itemTapel,true);
        
        if(cek.isValid){
            setTapel((draft)=>{ 
                const findIndex = draft.findIndex(item=>item.id === itemTapel.id)
                draft[findIndex] = cek.data;
                draft.sort((a,b)=>a.tahunawal - b.tahunawal);
            })
        }
    }

    function handleOnDelete(itemTapel){
        setTapel((draft)=>{ 
            const findIndex = draft.findIndex(item=>item.id === itemTapel.id)
            draft.splice(findIndex,1);
            draft.sort((a,b)=>a.tahunawal - b.tahunawal);
        })
    }

    return (
        <GuruLayout 
            title ={title}
            namafitur='Tapel'
            sidebar={sidebar} 
            bg={'bg-katulistiwa bg-cover bg-fixed bg-center'}
            active={active }>
                <div className="m-2 p-3">
                    <div className="border border-red-400 rounded">
                        Info di database:
                        Jumlah data di database: {data.length} data;
                    </div>
                    <TapelCrud 
                        tapel={tapel} 
                        onChange={handleOnUpdate} 
                        onAdd={handleOnAdd}
                        onDelete={handleOnDelete}
                    />
                </div>
        </GuruLayout>
    )
}