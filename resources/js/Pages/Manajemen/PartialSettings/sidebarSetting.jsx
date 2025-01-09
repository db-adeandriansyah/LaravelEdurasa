import { BookOpenIcon, BuildingOfficeIcon, CalendarIcon, CheckBadgeIcon, XMarkIcon } from "@heroicons/react/24/solid";

const sidebarSetting = [
    {
        label:'Tapel',
        routeName:'setting.tapel',
        icon:<CalendarIcon className="h5 w-5"/>
    },
    {
        label:'Kelas',
        routeName:'setting.kelas',
        icon:<BuildingOfficeIcon className="h-5 w-5"/>
    },
    {
        label:'Mata Pelajaran',
        routeName:'setting.mapel',
        icon:<BookOpenIcon className="h-5 w-5"/>
    },
];
export default sidebarSetting;