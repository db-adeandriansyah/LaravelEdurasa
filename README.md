# Belajar 2 CRUD dengan Modal dan ReactJs

## Afirmasi:
Pada _branch_ belajar1, dijelaskan bagaimana membuat CRUD dengan ReactJs. Akan tetapi, cara penulisan kode pada ReactJs terlihat _messy_. Oleh karena itu, kita akan buat kode-kode yang berasal dari belajar1 menjadi lebih rapi lagih.

## Membahas:
- ReactJs: 
    - Bagaimana menerapkan Context, Reducer, dan ImmerReducer
    - Menambahkan state untuk animasi proses kirim di Modal dengan axios/xmlHttpRequest

## Tahap (cek ditiap nama commit pada file repo):
- commit ```menerapkan reducer di fitur kelas```:
    - file baru *KelasReducer.jsx* di KelasComponents
    - file update di *Kelas.jsx*
- commit ``` menerapkan Contex dan Reducer di fitur Kelas ```;
    - file baru *KelasContext.jsx* di KelasComponents
    - file udpate:
        - *Kelas.jsx*
        - KelasCrud
        - KelasButtonModal.jsx
        - KelasTabel.jsx
        - KelasForm.jsx
        - KelasFromDelete
        - KelasComponentTabel

## Temuan
- [] Masalah validasi input yang dilakukan input type text. Kasusnya untuk data rombel yang dihapus masih lolos untuk difilter
- [] Masih terlihat kode/_business logic_ di *KelasForm.jsx* yang menumpuk di sini. Bisakah kode _business logic_ ini dipindah dalam satu file lain? 
    - hipotesis: penerapan *Repository design pattern* untuk alur pengiriman data di axios. Tapi bagaimana jika hasil dari response axios ini juga mempengaruh state yang ada di atasnya.

