let activechild;
export default function clearDisplay(value){
    activechild=value.lastChild;
    if(activechild!=null)
    {
        value.removeChild(activechild);
    }
    
}
// 