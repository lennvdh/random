import {useEffect, useState} from 'react'
import axios from 'axios'


export default function useFetch(url, options){
    const [data, setData] = useState(options)

    const getData = async () => {
        try{
            let resp = await axios.get(url, options)
            console.log(resp.data)
            setData({
                isLoading: false,
                data
            })
        }
        catch(e){
            console.log('error: ' + e)
        }





    }
    useEffect((url)=>{
        getData(url);
    },[])
    return [ data ];

}