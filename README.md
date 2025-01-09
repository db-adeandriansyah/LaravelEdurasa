# Belajar 1 CRUD dengan Modal dan ReactJs

Di sesi ini kita akan belajar CRUD di Laravel dengan bantuan Modal sebagai formulir pengisiannya. Jadi, untuk menampilkan formulir CRUD kita tidak merender halaman dari sisi server (tidak dibuat di controller). Kita akan memanfaatkan _axios_ untuk proses pengiriman datanya.

## Alur kerja CRUD Modal
- User membuka fitur, ditampilkan _component tabel_ yang berisi data-data inputan dan _component button_ untuk menampilkan formullir CRUD
- fitur pertama kali pastinya tidak punya data, maka ditampilkan keterangan *belum punya data* pada _component tabelnya_
- _component button_ untuk menambahkan data berlabel "tambah" dan ketika diklik maka akan muncul formulir (form) untuk menampilkan data
- Setelah _client_ mengisikan data dan mengirimkannya, maka modal akan ditutup dan halaman akan menampilkan data baru di _component tabel_ nya

## Proses Pembuatan
### Laravel
- buat model dengan artisan. Gunakan:
``` php artisan make:modal -a ```
perintah di atas selaian membuatkan file Model, juga untuk membuat controller, migration, request, policy, dll dan kebutuhan yang dibutuhkan
- buat Route di ``` /route/fitur.php ``` (karena fitur menyediakan rute untuk). Route yang dibuat adalah get, post, put, dan delete. Buatkan _name route_ untuk masing-masing method index, store, update, destroy;
- setiap route dipastikan melakukan _*Route Model Binding*_ dengan menuliskan nama modelnya untuk keperluan dependency
- masih di file ``` app/Http/Controllers/FiturController.php ``` buatkan kode untuk method *index*, *store*, *update*, dan *destroy*
