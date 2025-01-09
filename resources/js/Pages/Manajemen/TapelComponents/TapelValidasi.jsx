export default function TapelValidasi(list,tahunawal,id=''){
    let finalData = {};
    let isValid = false;
    
    let tahunakhir = 0;
    let long = "";
    let short = "";
    let berlaku_at = "";
    let kadaluarsa_at = "";
    //proses
   
    function isValidInputan(thAwal){
        return thAwal !=="" && thAwal.length === 4;
    }
    let isUnique = list.filter(s=>s.tahunawal == tahunawal).length===0;

    if(isValidInputan(tahunawal)){
        if(isUnique){
            isValid = true;
        }else{
            isValid = false;
        }
        let ntahunawal = Number(tahunawal);
        tahunakhir = Number(tahunawal)+1;
        long = tahunawal+'/'+tahunakhir;
        short = ntahunawal.toString().slice(2,4)+tahunakhir.toString().slice(2,4);
        berlaku_at = new Date(tahunawal,6,1);
        kadaluarsa_at = new Date(tahunakhir,5,30);

        finalData.tahunawal = ntahunawal;
        finalData.tahunakhir = tahunakhir;
        finalData.long = long;
        finalData.short = short;
        finalData.berlaku_at = berlaku_at;
        finalData.kadaluarsa_at = kadaluarsa_at;
    }else{
        isValid = false;
    }

   
    finalData.isValid = isValid;

    return finalData;
}