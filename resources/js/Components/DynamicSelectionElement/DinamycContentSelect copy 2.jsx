import {useEffect, useState } from "react";
import ListBoxDinamyc from "./ListBoxDinamycWithChildren";

//Refrensi keren:
//https://codesandbox.io/p/sandbox/recharts-examples-45zgu?file=%2Fsrc%2Fcharts%2FChart.js%3A11%2C12
//https://codesandbox.io/p/sandbox/stack-overflow-0s1y3?file=%2Fsrc%2FApp.js
// /https://stackoverflow.com/questions/66340062/add-the-selected-option-from-one-select-to-another-select-in-reactjs

const optionsFirst = [
    {id:'1', label:'Pra',value:'Pra'},
    {id:'2', label:'SD',value:'SD'},
    {id:'3', label:'SMP',value:'SMP'},
    {id:'4', label:'SMA',value:'SMA'}
];
const optionsSeconds = [
    {id:'a1',label:'A Kecil',   value:'Pra'},
    {id:'a2',label:'A Besar',   value:'Pra'},
    {id:'a3',label:'1',         value:'SD'},
    {id:'a4',label:'2',         value:'SD'},
    {id:'a5',label:'3',         value:'SD'},
    {id:'a6',label:'4',         value:'SD'},
    {id:'a7',label:'5',         value:'SD'},
    {id:'a8',label:'6',         value:'SD'},
    {id:'a9',label:'7',         value:'SMP'},
    {id:'a10',label:'8',        value:'SMP'},
    {id:'a11',label:'9',        value:'SMP'},
    {id:'a12',label:'10',       value:'SMA'},
    {id:'a13',label:'11',       value:'SMA'},
    {id:'a14',label:'12',       value:'SMA'}
    
]

export default function DynamicContentSelect({...props}){
    const [selectFromFirst, setFromSelectFirst] = useState(optionsSeconds);
    const [itemSelectedFirst, setItemSelectedFirst] = useState('');
    const [isFxFirst, setIsFxFirst] = useState(false);
    
    useEffect(()=>{
        console.log('cek selectFromFirs from useEffect', selectFromFirst);
        if(isFxFirst){
            setFromSelectFirst(getOptionsSecondElement(itemSelectedFirst, optionsSeconds));
            setIsFxFirst(false);
        }
    },)
    function getOptionsSecondElement(value,options){
        let final = [];
        final = options.filter(s=>s.value === value.value);
        return final;
    };
        
    function handleChangeFirst(item){
        setItemSelectedFirst(item.value);
        setIsFxFirst(true);
    }
    
    function handleChangeSecond(item){
        console.log('handleChangeSecond',item)
    }
    
    return(
        <>
            <div className="flex flex-row>">
                <div className="border border-red-400 p-3">
                    
                <ListBoxDinamyc
                        labelTitle="Klasifikasi"
                        parentHandle={handleChangeFirst}
                        optionsData={optionsFirst}
                        />
                <ListBoxDinamyc
                    labelTitle="Tingkat"
                    parentHandle={handleChangeSecond}
                    optionsData={selectFromFirst}
                    />
                    
                    {/* <label htmlFor="klasifikasi_id">Klasifikasi</label>
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
                    </select> */}
                        
                </div>
                <div className="border grow p-3">
                    <h1>Elemen di Tingkat</h1>
                    
                    <h2>Tingkat</h2>
                    
                </div>

            </div>
        </>

    )
}