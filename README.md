# Belajar 3 CRUD dengan Modal dan ReactJs

## Afirmasi:
Pada _branch_ belajar2, kita menerapkan context, reducer, dan immerReducer. Kita juga telah belajar bagaimana membuat animasi proses pada Modal. Mengingat prinsip alur kerja aplikasi pada modal di proyek ini tidak menuju halaman tertentu melainkan berupa data json. Sederhananya, aplikasi ini tidak me-redirect menuju halaman tertentu setelah proses CRUD.
Namun, masih ada temuan pada belajar2. Di antaranya membuat validasi yang berjalan di sisi client. Data yang diinginkan dalam fitur kelas ini tidak boleh ada nama rombel yang duplikat. Permasalahannya, ketika berinteraksi dengan modal. 
Contohnya, anggap pada data telah memuat Klasifikasi = SD, tingkat = SD, jenjang = 1, dan rombel = "" (tidak ada nama rombel). Seharusnya untuk pengisian selanjutnya, pengisian formulir sudah ditanganai oleh function isDataalidate. sayangnya, ketika Client memanipulasi pengisian komponen INPUT dengan cara mengisikan spasi, lalu menghapusnya, ternyata function isDataValidation tidak berhasil menangkap data publikasi ini.

## Membahas:
- ReactJs: 
    - Bagaimana memfilter data apabila salah satunya bernilai null?
    - Proses pengiriman data berupa kosong, ternyata diisikan di database sebagai null. Bukan empty string.

## Pembahasan:
- Laravel:
    - Di laravel, ketika kita mengirimkan data isian form yang berisi empty string, maka akan diinput di table database sebagai null. Berikut dokumentasinya: <a href="https://laravel.com/docs/11.x/validation#a-note-on-optional-fields" target="_blank">Validation: a Nota on Optional Field</a>;
- ReactJs:
    - *KelasForm.jsx*:
        - oleh karena itu, agar bisa mengirimkan data kosong, ```""```, ```" "```,```"       "```, maka pada handleInput di element ini divalidasi manual. Contohnya
        ```
        // ...
        function handleOnInput(item){
            setData('rombel',(e.replace(/\s+/,'')===""||e===""||e === null)?null:e))
        }
        ...
        ````
        - kode return: di file component input
        ```
        <TextInput ... onInput={(e)=>handleInput(e.target.value)} >
        ```
        - Masih di file ini, kita akan memisahkan _business logic_ yang berkaitan dengan pengiriman data melalui axios. Oleh karena itu, saya pisahkan kode pengiriman ini ke *kelasFormRequest.jsx*. Setidaknya, dengan memisahkan ini saya telah menerapkan SOLID Priciple, terutama Single Responsibility Principle. Selain itu, design pattern yang berhubungan dengan CRUD disebut juga dengan Repository Design Pattern;
    - *kelasFormRequest.jsx*
        - ini berisi kode untuk mengirimkan data ke Laravel




## Tahap (cek ditiap nama commit pada file repo):
- commit ```menerapkan reducer di fitur kelas```:
    - file baru *KelasReducer.jsx* di KelasComponents
    - file update di *Kelas.jsx*
- commit ``` menerapkan Contex dan Reducer di fitur Kelas ```;
    - file baru *KelasContext.jsx* di KelasComponents
    - file udpate:
        - *Kelas.jsx*
        - *KelasCrud*
        - *KelasButtonModal.jsx*
        - *KelasTabel.jsx*
        - *KelasForm.jsx*
        - *KelasFromDelete*
        - *KelasComponentTabel*

## Temuan di setiap branch
- [x] Masalah validasi input yang dilakukan input type text. Kasusnya untuk data rombel yang dihapus masih lolos untuk difilter (dari belajar2, solve di belajar3)
- [x] Masih terlihat kode/_business logic_ di *KelasForm.jsx* yang menumpuk di sini. Bisakah kode _business logic_ ini dipindah dalam satu file lain? (belajar2)
    - hipotesis: penerapan *Repository design pattern* untuk alur pengiriman data di axios. Tapi bagaimana jika hasil dari response axios ini juga mempengaruh state yang ada di atasnya (dari belajar2, solve dan sukses di belajar 3).

