export default function TapelReducer(draft, action){
    
    if(action.type==='ADD_TAPEL'){
        draft.push(action.data);
        draft.sort((a,b)=>a.tahunawal - b.tahunawal);
    }else if(action.type ==='UPDATE_TAPEL'){
        const findIndex = draft.findIndex(item=>item.id === action.data.id)
        draft[findIndex] = action.data;
        draft.sort((a,b)=>a.tahunawal - b.tahunawal);
    }else if(action.type ==='DELETE_TAPEL'){
        const findIndex = draft.findIndex(item=>item.id === action.data.id)
        draft.splice(findIndex,1);
        draft.sort((a,b)=>a.tahunawal - b.tahunawal);
    }
}