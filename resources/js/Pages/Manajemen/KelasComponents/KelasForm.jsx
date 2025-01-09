
import { useEffect, useState } from "react";
import KelasComponentSelect from "./KelasComponentSelect";
import DATA_SETTING_KELAS from "./KelasData";
import { useForm } from "@inertiajs/react";
import KelasValidate from "./KelasValildate";

export default function KelasForm({kelas, action, onClose,currentDataForm, onChangeData,...props}){
    const {data, setData,reset} = useForm(currentDataForm);
    const dataKlasifikasi = getOpsi('klasifikasi');
    const dataTingkat = getOpsi('tingkat');
    const dataJenjang = getOpsi('jenjang');
    const objekFirstData = getFirstOpsiFromParent(currentDataForm);
    const [optionTingkat, setOptionTingkat] = useState(getOpsi('tingkat')[0]);
    const [optionJenjang, setOptionJenjang] = useState(getOpsi('jenjang')[0]);
    const [selectedKlasifikasi, setSelectedKlasifikasi] = useState(objekFirstData.klasifikasi);
    const [selectedTingkat, setSelectedTingkat] = useState(objekFirstData.tingkat);
    const [selectedJenjang, setSelectedJenjang] = useState(objekFirstData.jenjang);
    const [rombel, setRombel]=useState(data.rombel)
    const [massageValidate, setMassageValidate] = useState(false);
    const [loadAdd, setLoadAdd] = useState(false);
    
    useEffect(()=>{
        if(loadAdd){
            console.log('cophyan data useEffefct',action, data);
            if(action === 'add'){
                axios.post(route('kelas.store'),data).then(m=>{
                    console.log(m);
                    onChangeData(data);
                    reset();
                    onClose();
                    
                }).catch((error)=>{
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                      } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                      } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                      }
                      console.log(error.config);
                })
            }else if(action === 'edit'){
                axios.put(route('kelas.update',data),data).then(m=>{
                    console.log(m);
                    onChangeData(data);
                    reset();
                    onClose();
                    
                }).catch((error)=>{
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                      } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                      } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                      }
                      console.log(error.config);
                })
            }
        }
    },[loadAdd])
    
    const handleKlasifikasi = (item)=>{
        const arrayTingkat = dataTingkat.filter(s=>s.kategori === item.value);
        const arrayJenjang = dataJenjang.filter(s=>s.kategori === arrayTingkat[0].kategori);

        setSelectedKlasifikasi(item);
        setOptionTingkat(arrayTingkat);
        setSelectedTingkat(arrayTingkat[0] );
        setOptionJenjang(arrayJenjang)
        setSelectedJenjang(arrayJenjang[0] );
        
        setData('klasifikasi' ,item.value);
        setData('tingkat' ,arrayTingkat[0].value);
        setData('jenjang' ,arrayJenjang[0].value);
        setMassageValidate(false);
        setMassageValidate(false);
        console.log('data handleKlasifikasi', data);
    }
    
    const handleTingkat=(item)=>{
        setSelectedTingkat(item);
        

        setOptionJenjang(dataJenjang.filter(s=>s.kategori === item.kategori));
        
        
        
        setData('tingkat' , selectedTingkat.value);
        setMassageValidate(false);
        setMassageValidate(false);
        console.log('data handleTingkat',selectedKlasifikasi, data);
    }
    const handleJenjang = (item)=>{

        
        setSelectedJenjang(item);
        
        setData('jenjang' , item.value);
        console.log('cek update dataForm by handleJenjang',item.value,data);
        setMassageValidate(false);
    }
    const handleInput = (e)=>{
        setRombel(e.target.value);
        setData('rombel',e.target.value);
        setMassageValidate(false);
        console.log(e.target.value, rombel,data);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log('handleSubmit',data);
        if(isDataValid(data)){
            console.log('isValidate', isDataValid(data),data);
            setLoadAdd(true);
            setMassageValidate(false);
        }else{
            setMassageValidate(true);
        }
    };

    function getOpsi(kategori){
        return DATA_SETTING_KELAS.filter(s=>s.opsi === kategori)[0]['data'];
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
    function isDataValid(dataCreate){
        const isEmpty = (dataCreate.klasifikasi !=="" && dataCreate.tingkat !==""  && dataCreate.jenjang !=="" );
        
        if(isEmpty){
            return kelas && kelas.filter(s=>s.klasifikasi === dataCreate.klasifikasi && 
                                s.tingkat === dataCreate.tingkat &&
                                s.jenjang == dataCreate.jenjang &&
                                s.rombel === dataCreate.rombel
                            ).length === 0
        }
        return isEmpty;
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
                    handleInput = {handleInput}
                    rombel={rombel}
                />
                <div className="border w-full flex flex-col justify-between p-3">
                    <div>
                        Keterangan
                        {massageValidate?(

                            <p className="text-red-500 text-sm">Data Tidak valid, cek pilihan dan isian Anda. Periksa juga jika data sudah diinput.</p>
                        ):(
                            null
                        )
                        }

                    </div>
                    <div className="mt-3 flex justify-end gap-2">
                        <button className="border px-2 rounded-lg mx-2" type="submit">Simpan</button>
                        <button className="border px-2 rounded-lg mx-2" onClick={onClose} type="button">Batal</button>
                    </div>
                </div>
            </div>
        </form>
    )
}