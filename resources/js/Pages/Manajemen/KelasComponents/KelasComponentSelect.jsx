import InputLabel from "@/Components/InputLabel";
import ListBoxSelect from "@/Components/ListBoxSelect";
import TextInput from "@/Components/TextInput";
import { useState } from "react";



export default function KelasComponentSelect({...props}){
    const {
            getOpsi,
            opsiTingkat,
            opsiJenjang,
            selectedKlasifikasi,
            handleKlasifikasi,
            selectedTingkat,
            handleTingkat,
            selectedJenjang,
            handleJenjang,
            handleInput,
            rombel,
            refInput
        } = props;
    
    return(
        <div className="border p-2">
            <ListBoxSelect 
                labelTitle ="Klasifikasi"
                optionsData ={getOpsi('klasifikasi')}
                selected ={selectedKlasifikasi}
                onChangeSelected={handleKlasifikasi}
            />
            <ListBoxSelect 
                labelTitle ="Tingkat"
                optionsData ={opsiTingkat}
                selected ={selectedTingkat}
                onChangeSelected={handleTingkat}
            />
            
            <ListBoxSelect 
                labelTitle ="Jenjang"
                optionsData ={opsiJenjang}
                selected ={selectedJenjang}
                onChangeSelected={handleJenjang}
            />
            <InputLabel htmlFor="final-rombel" value="Rombel"/>
            <TextInput ref={refInput} id="final-rombel" type="text" value={rombel||""} onChange={handleInput} className="text-[10px] w-full" placeholder='Contoh: A, B, atau lainnya'/>
        </div>
    )
}