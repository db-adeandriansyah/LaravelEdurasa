import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import validasiInput from "./ValidasiTapel";
import TapelValidasi from "./TapelValidasi";

export default function ModalForm({tapel,currentData,onChange,isDeleted,onCloseModal,labelButton,titleModal}){
    const {
        data,
        setData,
        post,
        put,
        destroy,
        processing, 
        errors, 
        reset,
        onSucces 
    } = useForm(currentData);
    
    const tapelRef = useRef(null);
    const [showWarning, setShowWarning] = useState(false);
    const [loadAdd, setLoadAdd] = useState(false);
    const [loadUpdate, setLoadUpdate] = useState(false);
    const [loadDestroy, setLoadDestroy] = useState(false);

    useEffect(()=>{
        if(loadAdd){
            axios.post(route('setting.create'),data).then(m=>{
                onChange(m.data.data);
                reset();
                onCloseModal(false);
                setData('tahunawal','');
            })  ;
            
        }
        if(loadUpdate){
            axios.put(route('setting.update',data),data).then(m=>{
                onChange(m.data.data);
                reset();
                onCloseModal(false);
                setData('tahunawal','');
            })  ;
            
        }
        if(loadDestroy){
            axios.delete(route('setting.delete',data)).then(m=>{
                onChange(m.data.data);
                reset();
                onCloseModal(false);
                setData('tahunawal','');
            })  ;
            
        }
    },[loadAdd,loadUpdate,loadDestroy])

    
    
    function handleChangeForm(e){
        let cData = TapelValidasi(tapel, e.target.value);
        if(cData.isValid){
            if(labelButton==='Tambah'){
                setData('id','');
            }else{
                setData('id',currentData.id)
            }
            setData('tahunawal',cData.tahunawal);
            setData('tahunakhir',cData.tahunakhir);
            setData('long',cData.long);
            setData('short',cData.short);
            setData('berlaku_at',cData.berlaku_at);
            setData('kadaluarsa_at',cData.kadaluarsa_at);
            setShowWarning(false);
            
        }else{
            
            setData('tahunawal',e.target.value);
            setData('tahunakhir','');
            setData('long','');
            setData('short','');
            setData('berlaku_at','');    
            setData('kadaluarsa_at','');
            setShowWarning(true);
        }
    }

    async function handleClickForm(e){
        e.preventDefault();

        if(isDeleted){
            setLoadDestroy(true);
        }else{
                if(labelButton==='Tambah'){
                    setLoadAdd(true);
                }else{
                    setLoadUpdate(true)
                }
        }
    }

    return(
        <>
            <div className="bg-sky-300 shadow-md py-3 px-2 flex justify-between">
                <h3 className={'font-bold text-lg'}>{titleModal}</h3>
                <XMarkIcon onClick={onCloseModal} className="h-8 w-8 text-red-600" role="button"/>
            </div>
            <div className="w-full p-3">
                <form onSubmit={handleClickForm}>
                    {
                        isDeleted ?(
                            <>
                                <p>Anda yakin ingin menghapus data: {data.tahunawal}?</p>
                                <DangerButton type="submit">Hapus</DangerButton>
                                <button className="border bg-green-400 rounded-full px-2 me-2" type="button" onClick={onCloseModal}>Batal</button>
                            </>
                        ):(
                            <>
                                <p>Masukkan angka tahun awal saja untuk membuat/mengedit data Tapel (Tahun Pelajaran)</p>

                                <InputLabel
                                    value="Tahun Awal"
                                    htmlFor="tapelawal"

                                    />
                                <TextInput
                                    id="tapelawal"
                                    type="number"
                                    value={data.tahunawal}
                                    onChange={handleChangeForm}
                                    name="tapelawal"
                                    ref={tapelRef}
                                    
                                    // disabled={processing}
                                    />
                                <DangerButton type="submit" disabled={processing}>{processing?'sedang menyimpan':''} Simpan</DangerButton>
                                {
                                    ((showWarning)?<p className="text-red-500">Ada yang salah. Pastikan angkanya lebih dari 4 digit dan/atau belum pernah diisi sebelumnya.</p>:"")
                                    
                                }
                            </>
                        )
                    }
                    
                </form>
            </div>
        </>
    )
}