// let id = 0;
export default function validasiInput(list,currentItem,isEdited=false){
    let isValid = false;
    let dataValidation = {};
    let tahunawal = 0;
    let tahunakhir = 0;
    let long = "";
    let short = "";
    let berlaku_at = "";
    let kadaluarsa_at = "";
    //proses
    tahunawal = Number(currentItem.tahunawal);
    tahunakhir = Number(currentItem.tahunawal)+1;
    long = currentItem.tahunawal+'/'+tahunakhir;
    short = tahunawal.toString().slice(2,4)+tahunakhir.toString().slice(2,4);
    berlaku_at = new Date(tahunawal,6,1);
    kadaluarsa_at = new Date(tahunakhir,5,30);

    if(list.length === 0){
        if(currentItem.tahunawal ===""){
            isValid = false;
        }else{
            if(currentItem.tahunawal && currentItem.tahunawal.length === 4){
                isValid = true;
            }else{
                isValid = false
            }
        }
    }else{
        if(list.filter(s=>s.tahunawal == currentItem.tahunawal).length===0){
            if(currentItem.tahunawal ===""){
                isValid = false;
            }else{
                if(currentItem.tahunawal.length === 4){
                    isValid = true;
                }else{
                    isValid =false;
                }
            }
        }else{
            isValid = false;
        }
    }

    dataValidation = {
        'data':{
            id:currentItem.id,
            tahunawal       : tahunawal,
            tahunakhir      : tahunakhir,
            long            : long,
            short           : short,
            berlaku_at      : berlaku_at,
            kadaluarsa_at   : kadaluarsa_at
        },
        'isValid':isValid
    }
    return dataValidation;
}