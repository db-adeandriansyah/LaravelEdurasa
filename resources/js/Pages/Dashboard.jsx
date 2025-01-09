import {HeaderNavbarStatic} from '@/CostumComponents/HeaderNavbar';
import NavigationFooter from '@/CostumComponents/NavigationFooter';
import { Head, Link } from '@inertiajs/react';


import gallery from '@/Utilities/importAll';

export default function Dashboard({auth,menu}) {
    console.log('gallery', gallery);
    console.log('menu', menu);
    return (
        <>

            <Head title='Dashboard'>
                                <meta head-key="description" name="description" content="This is the default description" />
                            </Head>
                
            <HeaderNavbarStatic bg={'bg-katulistiwa bg-cover bg-fixed bg-center'}>{auth.user?'Dashboard':null}</HeaderNavbarStatic>
            <main className='md:pt-16 h-screen bg-katulistiwa bg-cover bg-fixed bg-center'>
                <div className='flex flex-wrap max-w-5xl mx-auto justify-center items-center gap-6'>
                    {menu.filter(s=>s.isReady).map((item, index)=>{
                        return (
                            <Link href={route(item.nameRoute)} key={index} className='border border-white  text-xs md:text-base text-center align-middle rounded p-2'>
                                <img src={(gallery[item.urlImage])} className='h-14 w-auto  bg-red-500 rounded-full bg-center bg-cover overflow-visible mx-auto'/>
                                <span className='text-xs'>{item.title}</span>
                            </Link>
                        )

                    })}
                </div>
            </main>
            

            <footer className="relative md:hidden">
                <div className='fixed w-full pt-2 bottom-0'>
                    <NavigationFooter/>
                </div>
            </footer>
        </>
        
    );
}
