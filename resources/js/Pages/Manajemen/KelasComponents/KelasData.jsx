    const opsiKlasisifikasi = [
        
        {id:'klsfks1',label:'Pilih',   kategori:'', value:''},
        {id:'klsfks2',label:'SD',   kategori:'klasifikasi', value:'SD'},
        {id:'klsfks3',label:'SMP',  kategori:'klasifikasi', value:'SMP'},
        {id:'klsfks4',label:'SMA',  kategori:'klasifikasi', value:'SMA'},
    ];
    const opsiTingkat = [
        {id:'tingkat0',label:'Pilih Tingkat',     kategori:'', value:''},
        {id:'tingkat1',label:'SD',   kategori:'SD', value:'SD'},
        {id:'tingkat2',label:'MI',   kategori:'SD', value:'MI'},
        {id:'tingkat3',label:'SMP',  kategori:'SMP', value:'SMP'},
        {id:'tingkat4',label:'MTs',  kategori:'SMP', value:'MTs'},
        {id:'tingkat5',label:'SMA/U',  kategori:'SMA', value:'SMA'},
        {id:'tingkat6',label:'MA (Aliyah)',  kategori:'SMA', value:'MA'},
    ];
    const opsiJenjang = [
        {id:'jenjang0', label:'Pilih Jenjang', kategori:'', value:''},
        {id:'jenjang1', label:'1', kategori:'SD',   value:1},
        {id:'jenjang2', label:'2', kategori:'SD', value:2},
        {id:'jenjang3', label:'3', kategori:'SD', value:3},
        {id:'jenjang4', label:'4', kategori:'SD', value:4},
        {id:'jenjang5', label:'5', kategori:'SD', value:5},
        {id:'jenjang6', label:'6', kategori:'SD', value:6},
        {id:'jenjang7', label:'7', kategori:'SMP', value:7},
        {id:'jenjang8', label:'8', kategori:'SMP', value:8},
        {id:'jenjang9', label:'9', kategori:'SMP', value:9},
        {id:'jenjang10', label:'10', kategori:'SMA', value:10},
        {id:'jenjang11', label:'11', kategori:'SMA', value:11},
        {id:'jenjang12', label:'12', kategori:'SMA', value:12},
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