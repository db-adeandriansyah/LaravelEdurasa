export default function KelasReducer(draft, action){
    if(action.type==='ADD'){
        draft.push(action.data);
        draft.sort((a,b)=> a.rombel && a.rombel.localeCompare(b.rombel)).sort((a,b)=>a.jenjang - b.jenjang );//a.tingkat - b.tingkat);
    }else if(action.type === 'UPDATE'){
        const index = draft.findIndex(s=>s.id===action.data.id);
        draft[index] = action.data;
        draft.sort((a,b)=> a.rombel && a.rombel.localeCompare(b.rombel)).sort((a,b)=>a.jenjang - b.jenjang );
    }else if(action.type === 'DELETE'){
        const index = draft.findIndex(s=>s.id===action.data.id);
        draft.splice(index,1);
    }
}