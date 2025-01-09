export default function KelasValidate(data){
    try{
        //axios.post(route('setting.create'),data).then(m=>{
        return axios.post(route('kelas.create'),data).then(m=>{
            return {
                isValid:true,
                data:m
            }
        }).catch(er=>{
            return {
                isValid : false,
                massage : 'Ada yang error saat pengiriman ke server '+er,
                data:undefined
            }
        });
    }catch(er){
        return {
            isValid : false,
            massage : 'Ada yang error saat pengiriman ke server',
            data:undefined
        }
    }
}