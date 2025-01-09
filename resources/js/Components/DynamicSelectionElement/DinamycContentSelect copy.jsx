import { useState } from "react";
import ListBoxDinamyc from "./ListBoxDinamycWithChildren";

const optionsFirst = [
    {id:'1', label:'Pra'},
    {id:'2', label:'SD'},
    {id:'3', label:'SMP'},
    {id:'4', label:'SMA'}
]
const optionsSeconds = [
    {id:'a1',label:'A Kecil',kategori:'Pra'},
    {id:'a2',label:'A Besar',kategori:'Pra'},
    {id:'a3',label:'1',kategori:'SD'},
    {id:'a4',label:'2',kategori:'SD'},
    {id:'a5',label:'3',kategori:'SD'},
    {id:'a6',label:'4',kategori:'SD'},
    {id:'a7',label:'5',kategori:'SD'},
    {id:'a8',label:'6',kategori:'SD'},
    {id:'a9',label:'7',kategori:'SMP'},
    {id:'a10',label:'8',kategori:'SMP'},
    {id:'a11',label:'9',kategori:'SMP'},
    {id:'a12',label:'10',kategori:'SMA'},
    {id:'a13',label:'11',kategori:'SMA'},
    {id:'a14',label:'12',kategori:'SMA'}
    
]

export default function DynamicContentSelect({...props}){
    const [firstSelection, setFirstSelection] = useState('');
    const [secondSelection, setSecondSelection] = useState('');
    
    const [secondOption, setSecondOption] = useState(optionsSeconds.filter(s=>s.kategori==='Pra'))
 
    function handleFirstSelection(item){
        setFirstSelection(item);
       
        let filteringOptions = optionsSeconds.filter(s=>s.kategori === item);
        setSecondOption(()=>filteringOptions);
        handleSecondSelection(filteringOptions[0].label)
    }
    
    
    function handleSecondSelection(item){
        setSecondSelection(item);
        console.log(secondSelection)
    }
    return(
        <>
            <div className="flex flex-row>">
                <div className="border border-red-400 p-3">
                    <label htmlFor="klasifikasi_id">Klasifikasi</label>
                    <select id="klasifikasi_id" value={firstSelection} onChange={(e)=>handleFirstSelection(e.target.value)}>
                        {optionsFirst.map(m=>(
                            <option key={m.id} value={m.label}>{m.label}</option>
                        ))}
                    </select>
                    <label htmlFor="tingkat_id">Tingkat</label>
                    <select id="tingkat_id" value={secondSelection} onChange={(e)=>handleSecondSelection(e.target.value)}>
                        {secondOption.map(m=>{
                                return <option key={m.id} value={m.label}>{m.label}</option>
                            })
                        }
                    </select>
                        
                </div>
                <div className="border grow p-3">
                    <h1>Elemen di Tingkat</h1>
                    {firstSelection}
                    <h2>Tingkat</h2>
                    {secondSelection}
                </div>

            </div>
        </>

    )
}