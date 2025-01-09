import GuruLayout from "@/Layouts/GuruLayout";
import sidebarSetting from "./PartialSettings/sidebarSetting";
import { useImmerReducer } from "use-immer";
import TapelCrud from "./TapelComponents/TapelCrud";

import TapelReducer from "./TapelComponents/TapelReducer";



export default function Tapel ({...props}) {
    const {title,data} = props;
    const sidebar = sidebarSetting;
    const active = sidebar.findIndex(m=>m.routeName ===route().current());
    const [tapel, dispatch] = useImmerReducer(TapelReducer, data);
    
    function handleOnAdd(newTapel){
            dispatch({
                type:'ADD_TAPEL',
                data:newTapel
            })
    }

    function handleOnUpdate(itemTapel){
            dispatch({
                type:'UPDATE_TAPEL',
                data:itemTapel
            })
    }

    function handleOnDelete(itemTapel){
        dispatch({
            type:'DELETE_TAPEL',
            data:itemTapel
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