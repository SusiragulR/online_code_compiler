import { useState, useEffect } from 'react'

export default function useLocalStorage(key,initialValue) {

    const PREFIX = 'code-editor-'

    const saveDirectory = PREFIX + key;

    const response = localStorage.getItem(saveDirectory)

    const [value,setValue] = useState(()=>{
        if(response != null){
            return(JSON.parse(response))
        }
        else{
            return initialValue
        }
    })
        
    useEffect(()=>{
        localStorage.setItem(saveDirectory,JSON.stringify(value))
    },[saveDirectory, value])
    
    return [value,setValue]
}
