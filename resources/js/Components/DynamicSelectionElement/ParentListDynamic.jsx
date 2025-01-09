export default function ParentListDynamic({...props}){
    return(
        <ListBoxDinamyc 
            labelName="Klasifikasi" 
            optionsData={arrayKlasifikasi} 
            defaultSelectionIndex={0} 
            parentHandle={handleFirstChild}  
            className={'bg-slate-500'}/>
                            
    )
}