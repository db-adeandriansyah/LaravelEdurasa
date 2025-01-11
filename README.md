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

### ReactJs
- entry point dari fitur CRUD ini berada di file *Kelas.jsx* jsx yang berada di directory ``` resources/Js/Pages/Manajemen/*.jsx ```. Contohnya ``` resources/Js/Pages/Manajemen/Kelas.jsx ```
- di dalam *Kelas.jsx* akan mengembalikan komponen CRUD yang dibuat dalam file jsx *KelasCrud.jsx* yang saya buat di directory ``` resources/Js/Pages/Manajemen/KelasComponents/KelasCrud.jsx ```
    - di *Kelas.jsx* terdapat beberapa function/method yang berfokus pada paradigma CRUD itu sendiri. Misalnya ``` handleOnAdd```, ```handleOnUpdate```, dan ```handleOnDelete```
    - method ini dikirimkan ke komponen CRUD melalui propsnya. Jadi, nantinya di file *KelasCrud.jsx* akan dibuatkan nama props yang dikirimkan dari sini.
- file *KelasCrud.jsx* hanya menerima props saja dan tidak dibuatkan method apapun. Karena nantinya method-method itu dijalankan di masing-masing kompenen yang dikembalikan. KelasCrud terdapat pada directory ``` resources/Js/Pages/Manajemen/KelasComponents/ ```. Tujuan pembuatan directory ini agar mudah pengelolaannya.
    - *KelasCrud.jsx* hanya mengembalikan komponen dan tidak menyediakan method apapun di file ini
        - di kelas ini akan menyedikan satu data objek untuk diteruskan ke *KelasButtonModal.jsx* melalui props-nya. Tujuannya untuk membuat pengisian data baru.
        -  terdapat 2 Komponen yang dikembalikan. Yaitu:
            - Komponen button untuk menampilkan tombol dan Modal. Komponen dibuat di file *KelasButtonModal.jsx*
            - komponen tabel untuk menampilkan data. Di dalam komponen ini dibuat file *KelasTabel*
    - *KelasButtonModal.jsx*:
        - akan mengembalikan komponen button dan komponen modal. Komponen Modal sudah disediakan Laravel-Breeze-ReactJs sendiri yang mengambil library *@handlesui reactJs*
        - KelasButtonModal menyediakan berbagai props untuk diteruskan di dalam file ini
        - KelasButtonModal untuk Tambah dan Edit disedikan dalam props ```action``` karena nantinya, data ini akan mengeksekusi proses pengiriman data ke server berdasarkan tipe action-nya. Misalnya action="add" maka saat submit form akan diarahkan ke _route name_ ```kelas.create``` / ```kelas.store```.
    - *KelasTabel.jsx*:
        - mengembalikan 2 komponen, yaitu:
        - Tabel yang di dalamnya memanfaatkan looping list menggunakan ```.map``` function sehingga data yang diteruskna ke *KelasButtonModal.jsx* dapat dieksekusi di file ini
        - *KelasButtonModal.jsx*. Komponen kelasButtonModal bertugas untuk pengeditan dan penghapusan data.
    - *Modal.jsx* :
        - adalah pengembelian salah satu dari file *KelasButtonModal.jsx* yang dikembangkan dari ```@handlesUi```.
        - berada di directory ``` resources/Js/Pages/Components/Modal.jsx
        - bertugas untuk menampilkan form dengan isian format formnya diisikan sendiri melalui props children
    - *KelasForm.jsx*:
        - form yang diisikan sebagai *children* pada *Modal.jsx*
        - berisikan/mengembalikan tag form yang berisikan *KelasComponentsSelect.jsx*

## Pemahaman/Penerapan
### Laravel
- *fitur.php*:
    - berisi rute untuk fitur aplikasi
    - _*class static method*_ / _*verb request*_ yang dibuat hanya bertugas untuk menerima request berupa permintaan pengiriman dan penambilan data
    - tidak berisi route yang berisi menampilkan halaman create dan edit. Sebab halaman ini dibuat dengan Modal oleh ReactJs
    - Menerapkan *Route Model Binding* disetiap route yang membutuhkan _wildcard_ pada url-nya.
    - sangat disarankan membuat _*name route*_ menggunakan method name dan menamai setiap route yang dibuat
    - *name route* ini dapat dipanggil melalui helper function pada frontend
- Artisan:
    - buat controller:
    ```
    php artisan make:modal Classroom -a
    ```
    - artisan ini menghasilan beberapa file:
        - Modal Classroom
        - Controller ClassroomController dan include binding-nya
        - Request: StoreclassromRequest dan UpdateclassroomRequest
        - Policies: ClassroomPolicy
        - migration: <timestamp>create_classrooms_table.php
### ReactJs
    - helper route yang dibuat oleh ziggy, mirip helper route pada bawaan Laravel
    - menerapkan:
        - useState
        - useImmer
        - useForm
        - useEffect
        - axios
        
    


