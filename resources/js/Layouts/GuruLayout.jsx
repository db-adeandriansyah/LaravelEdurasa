import {HeaderNavbarStatic} from '@/CostumComponents/HeaderNavbar';
import NavigationFooter from '@/CostumComponents/NavigationFooter';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export default function GuruLayout({...props}) {
    const {title,bg,children,sidebar,active} = props;
    const [show, setShow] = useState(false);
    
    function toggleOpen(){
        setShow((curState)=>!curState);
    }

    return (
        <>
            <Head title={title}>
                <meta head-key="description" name="description" content="This is the default description" />
            </Head>
                
            <HeaderNavbarStatic bg={bg??'bg-sky-300'}>{title||'Fitur Belum dibuat'}</HeaderNavbarStatic>
            
            <main className='bg-katulistiwa bg-center bg-cover bg-fixed'>
                <div className='max-w-6xl mx-auto relative'>
                    <div className='flex justify-between z-30 sticky top-0 bg-cyan-300 w-full md:rounded-b-2xl'>
                        <div className='flex justify-start items-center gap-3 overflow-hidden'>
                            <div onClick={toggleOpen} className='text-lg text-lime-300 font-bold'>
                                {show?
                                    (
                                        <XMarkIcon className='text-lg font-extrabold text-black h-8 w-8' role="button"/>
                                    ):
                                    (
                                        <Bars3Icon className='text-lg font-extrabold text-black h-8 w-8' role="button"/>

                                    )
                                }
                            </div>
                                
                            <div className='font-extrabold md:text-xl py-2'>{title||'Fitur Belum dibuat'} &gt; {sidebar[active].label}</div>
                        </div>
                        <div className='text-base py-2 px-2'>Menu Kiri Alat Cetak</div>
                    </div>

                    <div className='flex justify-center'>
                        {show &&
                            (
                                <div className='md:basis-1/4 fixed md:relative w-full backdrop-blur-sm bg-sky-400/30 ps-2 transition-transform duration-500 ease-in-out'>
                                    {sidebar && (
                                        <>
                                            <h2 className='text-lg font-bold shadow-lg  border-slate-500' >Sub Menu</h2>
                                            <ul>
                                                {sidebar.map((el,i)=>{
                                                    return (
                                                        <li key={i} className={`${active===i?'bg-sky-400':'bg-transparent shadow-sm'} my-2`}>
                                                            <Link href={route(el.routeName)}
                                                                className='flex justify-start gap-3'>
                                                                {el.icon}
                                                                {el.label}
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>   
                                        </>
                                    )}
                                </div>
                            )
                        }
                        
                        <div className={`border border-white bg-white ${show?'md:basis-3/4 w-full':'w-full'}`}>
                            {children &&(
                                    <div className='min-h-screen px-2'>
                                        {children}
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </div>
            </main>
            
            <footer className="relative md:hidden ">
                <div className='fixed w-full pt-2 bottom-0'>
                    <NavigationFooter/>
                </div>
            </footer>
        </>
        
    );
}
