
import { useState } from "react";
import KelasComponentSelect from "./KelasComponentSelect";
import DATA_SETTING_KELAS from "./KelasData";
import { useForm } from "@inertiajs/react";

export default function KelasForm({onClose,currentDataForm, onChangeData,...props}){
    const {data, setData,reset} = useForm(currentDataForm);
    const dataKlasifikasi = getOpsi('klasifikasi');
    const dataTingkat = getOpsi('tingkat');
    const dataJenjang = getOpsi('jenjang');
    const objekFirstData = getFirstOpsiFromParent(currentDataForm);
    console.log('currentDataForm',currentDataForm);
    console.log('dataFirstObjek',data,getFirstOpsiFromParent(currentDataForm));

    const [optionTingkat, setOptionTingkat] = useState(getOpsi('tingkat')[0]);
    const [optionJenjang, setOptionJenjang] = useState(getOpsi('jenjang')[0]);


    const [selectedKlasifikasi, setSelectedKlasifikasi] = useState(objekFirstData.klasifikasi);
    const [selectedTingkat, setSelectedTingkat] = useState(objekFirstData.tingkat);
    const [selectedJenjang, setSelectedJenjang] = useState(objekFirstData.jenjang);

    
    const handleKlasifikasi = (item)=>{
        const arrayTingkat = dataTingkat.filter(s=>s.kategori === item.value);
        const arrayJenjang = dataJenjang.filter(s=>s.kategori === arrayTingkat[0].kategori);
        setSelectedKlasifikasi(item);
        
        setOptionTingkat(arrayTingkat);
        setSelectedTingkat(arrayTingkat[0] );
        setOptionJenjang(arrayJenjang)
        setSelectedJenjang(arrayJenjang[0] );
        
        setData('id', currentDataForm.id===""?new Date().getTime():currentDataForm.id);
        setData('klasifikasi' ,item.value);
        setData('tingkat' ,arrayTingkat[0].value);
        setData('jenjang' ,arrayJenjang[0].value);
        console.log('cek update dataForm byKlasifikasi',item.value,data);
    }
    const handleTingkat=(item)=>{
        setSelectedTingkat(item);
        

        setOptionJenjang(dataJenjang.filter(s=>s.kategori === item.kategori));
        
        
        
        setData('tingkat' , item.value);
        console.log('cek update dataForm by handleTingkat',item.value,data);
    }
    const handleJenjang = (item)=>{

        
        setSelectedJenjang(item);
        
        setData('jenjang' , item.value);
        console.log('cek update dataForm by handleJenjang',item.value,data);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        
        
        onChangeData(data);
        reset();
        onClose();
    }
    function getOpsi(kategori){
        return DATA_SETTING_KELAS.filter(s=>s.opsi === kategori)[0]['data'];
        }
    function getOpsiDinamic(kategori,opsi){
        return opsi.filter(s=>s.kategori === kategori)[0]
        }
    function getFirstOpsiFromParent(objekParent){
        let klasifikasi = dataKlasifikasi.filter(s=>s.value === objekParent.klasifikasi);
        let klasifikasiItem = klasifikasi[0];
        let tingkat = dataTingkat.filter(s=>s.kategori === klasifikasiItem.value && s.value === objekParent.tingkat);    
        let tingkatItem = tingkat[0];
        let jenjang = dataJenjang.filter(s=>s.kategori === klasifikasiItem.value && s.value === objekParent.jenjang);
        let jenjangItem = jenjang[0];
        return {
            klasifikasi: klasifikasiItem,
            tingkat : tingkatItem,
            jenjang : jenjangItem
        }

    }
    return(
        <form onSubmit={handleSubmit} className="mx-2 p-3">
            <div className="flex flex-col md:flex-row gap-2">
                <KelasComponentSelect 
                    getOpsi={getOpsi}
                    opsiTingkat = {optionTingkat}
                    opsiJenjang = {optionJenjang}
                    handleKlasifikasi={handleKlasifikasi}
                    selectedKlasifikasi={selectedKlasifikasi}
                    handleTingkat={handleTingkat}
                    selectedTingkat={selectedTingkat}
                    handleJenjang = {handleJenjang}
                    selectedJenjang ={selectedJenjang}
                />
                <div className="border w-full flex flex-col justify-between p-3">
                    <div>Keterangan</div>
                    <div className="mt-3 flex justify-end gap-2">
                        <button className="border px-2 rounded-lg mx-2" type="submit">Simpan</button>
                        <button className="border px-2 rounded-lg mx-2" onClick={onClose} type="button">Batal</button>
                    </div>
                </div>
            </div>
        </form>
    )
}