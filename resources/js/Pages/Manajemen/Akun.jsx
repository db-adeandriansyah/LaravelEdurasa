
import GuruLayout from "@/Layouts/GuruLayout";

export default function Akun({...props})

{
    const {sidebar,active} = props;
    return (
        <GuruLayout namafitur={'Akun'} sidebar={sidebar} active={active}>
            <h2>Ini Akun</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam atque delectus sed sint fuga sit veniam numquam corrupti porro, eius illum aspernatur, unde molestias eaque accusamus maiores necessitatibus exercitationem!</p>
        </GuruLayout>
    )
}