import { toast } from "react-toastify" 
import 'react-toastify/dist/ReactToastify.css';


const getStoredBookData = ()=>{
    const storedBookData = localStorage.getItem('read-book')
    if(storedBookData){
        return JSON.parse(storedBookData)
    } 
     return []

}
const saveBookData = (id) =>{
    const storedBookData = getStoredBookData()
    const exists = storedBookData.find(book=> book === id)
    if(exists){ 
        return toast.error('already readied')
    }
    storedBookData.push(id)
    localStorage.setItem('read-book', JSON.stringify(storedBookData)) 
    toast.success('Read the book successfully')
}
 
export { getStoredBookData, saveBookData}
 