
import { usePage } from "@inertiajs/react";

import DropdownAuthenticated from "./DropdownAuthenticated";
import logolamaso from "../../images/logolamaso.png"
import { useEffect, useState } from "react";

function CurrentTimeTapel(){
    const date = new Date();
    const monthIndex = date.getMonth();
    const monthReal = monthIndex +1;
    const year = date.getFullYear();

    const semesterNumber = monthIndex>5?1:2;
    const firstYear = semesterNumber === 1?year:year-1;
    const secondYear = semesterNumber == 1?year+1:year;

    const firstYearString = firstYear.toString().slice(2,4);

    const Tapel = {
        'tapel':firstYear+'/'+secondYear,
        'semester':semesterNumber
    }

    return Tapel;
}
function LeftItemNavbar({children}){
    const textTapel = 'Tapel '+ CurrentTimeTapel().tapel+' Semester  '+ CurrentTimeTapel().semester;
    return (
        
            <div className="flex items-center space-x-5">
                
                <img src={logolamaso} className="h-10 w-10 rounded bg-white" alt="logo"/>
                <div className="hidden lg:inline-flex">
                    <a href='/' title="Beranda" className="text-white no-underline">
                        {children|| textTapel}
                    </a>
                </div>
            </div>
                            
        
    )
};
function LeftItemNavbarFitur({children}){
    
    return (
        
            <div className="flex items-center space-x-5">
                <a href="/" title="Kembali Ke Beranda">
                    <img src={logolamaso} className="h-10 w-10 rounded bg-white" alt="logo"/>
                </a>
                <div className="hidden lg:inline-flex">
                    <a href={route('dashboard')} title="Kembali Ke Dashboard" className="text-white no-underline">
                        {children|| 'Fitur'}
                    </a>
                </div>
            </div>
                            
        
    )
};
function RightItemNavbar({children}){
    const page = usePage()
    const user = page.props.auth;
    const isDashboard = page.url === '/dashboard';
    
    let navAuth = [];
    
    if(user.user && !isDashboard){
        children = user.user.name;
        navAuth = [
            { 'link':'profile.edit', 'text':'Profile' },
            { 'link':'dashboard', 'text':'Dashboard' },
            { 'link':'logout', 'text':'Logout','method':'post', 'as':'button'  }
        ];
    }else if(user.user && isDashboard){
        children = user.user.name;
        navAuth = [
            { 'link':'profile.edit', 'text':'Profile' },
            { 'link':'logout', 'text':'Logout','method':'post', 'as':'button'  }
        ];
    } else{

        navAuth = [
            { 'link':'login', 'text':'Login',},
            { 'link':'register', 'text':'Register' }
        ];
    }
    return (
        <>
        <div className="hidden sm:ms-6 sm:flex sm:items-center">
            <div className="relative ms-3">
                <DropdownAuthenticated children={children} navAuth={navAuth}></DropdownAuthenticated>
            </div>
        </div>
        </>
    )
}
export function HeaderNavbarStatic({bg,children}){
    
    return(
        <>
            <header className={`shadow-lg hidden ${bg} w-full transition-transform duration-300 ease-in-out delay-150 z-40 md:relative md:block top-0 -translate-y-0`}>
                <nav className="py-2 shadow-lg">
                    <div className="mx-auto max-w-6xl px-4 sm:px-2 lg:px-8">
                        <div className="flex justify-between">
                            <LeftItemNavbarFitur>{children}</LeftItemNavbarFitur>
                            <RightItemNavbar>Gabung Yuk!</RightItemNavbar>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default function HeaderNavbar({children}){
    const [scrollPosition, setScrollPosition] = useState(0);
    const [timeToAddClass, setTimeToAddClass] = useState(true);
    
    useEffect(()=>{
        const windowMediumSize = window.matchMedia('(min-width:768px)');
        const handleScroll = ()=>{
            const currentScrollState = window.scrollY;
            if(currentScrollState === 0){
                setTimeToAddClass(true);
            }else if(currentScrollState > scrollPosition && currentScrollState > 50){
                setTimeToAddClass(true);
            }else{
                setTimeToAddClass(false);
            }
            setScrollPosition(currentScrollState)

        }
        if(windowMediumSize.matches){
            window.addEventListener('scroll',handleScroll);
            return (()=>{
                window.removeEventListener('scroll',handleScroll)
            })

        }
    },[scrollPosition,timeToAddClass])

    return(
        <>
            <header className={`shadow-lg bg-transparent hidden w-full transition-transform duration-300 ease-in-out delay-150 z-40 md:fixed md:block top-0 ${timeToAddClass?'translate-y-0':'-translate-y-full'} ${scrollPosition>50?'bg-violet-500':'bg-transparent'}`}>
                <nav className="py-2 shadow-lg">
                    <div className="mx-auto max-w-6xl px-4 sm:px-2 lg:px-8">
                        <div className="flex justify-between">
                            <LeftItemNavbar>{children}</LeftItemNavbar>
                            <RightItemNavbar>Gabung Yuk!</RightItemNavbar>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}