import { useState } from "react";
import ButtonEdited from "./ButonEdited";
import { PencilIcon } from "@heroicons/react/24/solid";

export default function Mytable({...props}){
    const {dataColumns,sourceData} = props;
    
    const [data, setData] = useState(sourceData)
   
    return(
        <table className="table-auto w-full">
            <thead>
                <tr className="bg-slate-500">
                    {dataColumns.map((item,index)=>{
                        return <th key={index} className="border border-white p-2">{item.label}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                    {data.map((item,index)=>{
                        return(
                            <tr key={index} >
                                <td className="border border-slate-950 border-1 p-2 text-center">{index+1}</td>
                                <td className="border border-slate-950 border-1 p-2 text-center">{item.long}</td>
                                <td className="border border-slate-950 border-1 p-2 text-center">{item.short}</td>
                                <td className="border border-slate-950 border-1 p-2 text-center">
                                    <ButtonEdited sourceData={item}><PencilIcon className="text-green-500 h-5 w-5 border border-red-400 rounded" role="button"/></ButtonEdited>
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}