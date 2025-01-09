const modules = import.meta.glob('@assets/dashboardImage/*.{png,jpg,jpeg,PNG,JPEG,webp}',{ eager: true, query: '?url' });
const emv = import.meta.env.PROD
const gallery = {};
// // console.log('cek environtment', emv);
// console.log('modules environtment', modules);
for (const path in modules) {
    
    const k = path.match(/(?<=\/)[^\/]+(?=\.\w+$)/)[0]
    console.log('path in importAll',path);
    if(emv){
        gallery[k]= modules[path].default;
    }else{
        const p = new URL(path, import.meta.url).href;
        gallery[k]=p;
        
    }
}
// const gallery = Object.values(import.meta.glob('@assets/dashboardImage/*.{png,jpg,jpeg,PNG,JPEG,webp', { eager: true, as: 'url' }))
// const gallery = modules.keys().map(image => modules(image));
export default gallery