import {Link, usePage } from "@inertiajs/react";
import { useState } from "react"

export default function NavigationFooter(){
    const [openMenuSatu, setOpenMenuSatu] = useState(false);
    const [openMenuDua, setOpenMenuDua] = useState(false);
    const isDashboard= usePage().url==='/dashboard';
    

    
    function handleClickMenuSatu(){
        setOpenMenuSatu((cur)=>!cur);
        if(openMenuDua){
            setOpenMenuDua(false);
        }
    }
    function handleClickMenuDua(){
        setOpenMenuDua((cur)=>!cur);
        
        if(openMenuSatu){
            setOpenMenuSatu(false);
        }
    }
    return (
        <>
            {(openMenuSatu||openMenuDua) && 
                (
                    <div className='fixed border bottom-0 h-screen bg-red-600 w-full' onClick={()=>{ setOpenMenuSatu(false), setOpenMenuDua(false)} }>test</div>
                )
            }
            <div className={`fixed border bottom-0 h-96 bg-red-300 transition-transform duration-700 ease-in-out ${openMenuSatu?'translate-y-0':'translate-y-full'} w-full`}>

            </div>
            <div className={`fixed border bottom-0 h-80 bg-red-400 transition-transform duration-700 ease-in-out ${openMenuDua?'translate-y-0':'translate-y-full'} w-full`}>content menu 1</div>
            <div className="relative bg-slate-500 bottom-0 flex justify-around py-2">
                    
                <Link href={route('profile.edit')} className='border border-sky-300 rounded-xl p-2'>
                    Profil
                </Link>
                {!isDashboard && <div className='border border-sky-300 rounded-xl p-2' onClick={handleClickMenuSatu}>
                    Dashboard
                </div>}
                <div className='border border-sky-300 rounded-xl p-2' onClick={handleClickMenuDua}>
                    Menu2
                </div>

            </div> 
        </>
    )
};