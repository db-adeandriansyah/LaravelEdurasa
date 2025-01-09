import GuruLayout from "@/Layouts/GuruLayout";
import sidebarSetting from "./PartialSettings/sidebarSetting";


export default function Setting (props) {
        
        const sidebar = sidebarSetting;
        const active = sidebar.findIndex(m=>m.routeName ==='manajemen.tapel');
        return (
            <GuruLayout namafitur="Setting" sidebar={sidebar} active={active}>
                <h2>Ini Setting</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam atque delectus sed sint fuga sit veniam numquam corrupti porro, eius illum aspernatur, unde molestias eaque accusamus maiores necessitatibus exercitationem!</p>

            </GuruLayout>
            
        )
    }