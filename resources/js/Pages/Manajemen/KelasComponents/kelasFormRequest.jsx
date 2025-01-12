
export const kelasFormRequest = async (data,action, onAdd, onUpdate, reset, onClose) => {
    
    try {
        
        const response = action === 'add' 
            ? await axios.post(route('kelas.store'),data) 
            : await axios.put(route('kelas.update',data),data);
        
        if (action === 'add') {
            onAdd(response.data.data);
        } else {
            onUpdate(response.data.data);
        }
        
        reset();
        onClose();
    } catch (error) {
        if (error.response) {
            console.error('Error Response:', error.response.data);
            console.error('Status Code:', error.response.status);
        } else if (error.request) {
            console.error('Error Request:', error.request);
        } else {
            console.error('Error Message:', error.message);
        }
        console.error('Error Config:', error.config);
    }
};