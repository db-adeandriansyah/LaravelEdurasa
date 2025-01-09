import HeaderNavbar from '@/CostumComponents/HeaderNavbar';
import { Head } from '@inertiajs/react';
import  '../../images/template/crownTown.webp';
import NavigationFooter from '@/CostumComponents/NavigationFooter';

function Beranda({auth}){
    
    return (
        <>
            <Head title='Beranda'>
                <meta head-key="description" name="description" content="This is the default description" />
            </Head>

            <HeaderNavbar>{auth.user?null:'Beranda'}</HeaderNavbar>
            
            <main className="bg-[url(../images/crownTown.webp)] bg-no-repeat bg-center bg-cover py-2 md:pt-16 px-2">
                <div className="max-w-6xl mx-auto">
                    <div className="flex-row-reverse md:flex  justify-between gap-2 text-white">
                        <div className='border border-white flex justify-center items-center rounded w-full h-60 md:h-screen'>
                            <div className='w-full mx-2 rounded'>
                                <div className='my-auto w-full relative border border-sky-400'>
                                    <div className='bg-[url(../images/crownTown.webp)] bg-no-repeat bg-center z-0 bg-cover h-52 m-3 text-center align-middle'>Gambar</div>
                                    <div className='absolute bottom-7 w-5/6 start-7 md:start-11 bg-slate-400'>teextr</div>
                                </div>
                            </div>
                        </div>
                        <div className='border border-white rounded w-full h-80 md:h-screen p-5 flex flex-col justify-around'>
                            <div className='text-center border border-white'>
                                <h3 className='text-3xl text-bold'>Selamat Datang di <span className='font-brush text-5xl'>Edurasa Publik</span></h3>
                                <p>Sebuah platform digital untuk mempermudah Asesmen dan Administrasi Sekolah</p>
                            </div>

                            <div className='text-center  border border-white h-96 flex justify-center items-center'>
                                <div className='border h-8'>
                                Tempat SignIn NISN

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <div  className='min-h-screen shadow-lg '>1</div>
            <div  className='min-h-screen shadow-lg'>2</div>
            <div  className='min-h-screen shadow-lg'>3</div>
            <footer className="relative md:hidden">
                <div className='fixed w-full pt-2 bottom-0'>
                    <NavigationFooter/>
                </div>  
            </footer>
        </> 
    )
}


export default Beranda