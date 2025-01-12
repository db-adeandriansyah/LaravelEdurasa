    const opsiKlasisifikasi = [
        
        {id:'klsfks1',name:'klasifikasi',label:'Pilih',   kategori:'', value:''},
        {id:'klsfks2',name:'klasifikasi',label:'SD',   kategori:'klasifikasi', value:'SD'},
        {id:'klsfks3',name:'klasifikasi',label:'SMP',  kategori:'klasifikasi', value:'SMP'},
        {id:'klsfks4',name:'klasifikasi',label:'SMA',  kategori:'klasifikasi', value:'SMA'},
    ];
    const opsiTingkat = [
        {id:'tingkat0',name:'tingkat',label:'Pilih Tingkat',     kategori:'', value:''},
        {id:'tingkat1',name:'tingkat',label:'SD',   kategori:'SD', value:'SD'},
        {id:'tingkat2',name:'tingkat',label:'MI',   kategori:'SD', value:'MI'},
        {id:'tingkat3',name:'tingkat',label:'SMP',  kategori:'SMP', value:'SMP'},
        {id:'tingkat4',name:'tingkat',label:'MTs',  kategori:'SMP', value:'MTs'},
        {id:'tingkat5',name:'tingkat',label:'SMA/U',  kategori:'SMA', value:'SMA'},
        {id:'tingkat6',name:'tingkat',label:'MA (Aliyah)',  kategori:'SMA', value:'MA'},
    ];
    const opsiJenjang = [
        {id:'jenjang0',  name:'jenjang', label:'Pilih Jenjang', kategori:'', value:''},
        {id:'jenjang1',  name:'jenjang', label:'1', kategori:'SD',   value:1},
        {id:'jenjang2',  name:'jenjang', label:'2', kategori:'SD', value:2},
        {id:'jenjang3',  name:'jenjang', label:'3', kategori:'SD', value:3},
        {id:'jenjang4',  name:'jenjang', label:'4', kategori:'SD', value:4},
        {id:'jenjang5',  name:'jenjang', label:'5', kategori:'SD', value:5},
        {id:'jenjang6',  name:'jenjang', label:'6', kategori:'SD', value:6},
        {id:'jenjang7',  name:'jenjang', label:'7', kategori:'SMP', value:7},
        {id:'jenjang8',  name:'jenjang', label:'8', kategori:'SMP', value:8},
        {id:'jenjang9',  name:'jenjang', label:'9', kategori:'SMP', value:9},
        {id:'jenjang10', name:'jenjang',  label:'10', kategori:'SMA', value:10},
        {id:'jenjang11', name:'jenjang',  label:'11', kategori:'SMA', value:11},
        {id:'jenjang12', name:'jenjang',  label:'12', kategori:'SMA', value:12},
    ]
const DATA_SETTING_KELAS = [
    {
        opsi:'klasifikasi',
        data:opsiKlasisifikasi
    },
    {
        opsi:'tingkat',
        data:opsiTingkat
    },
    {
        opsi:'jenjang',
        data:opsiJenjang
    },
];
export default DATA_SETTING_KELAS;