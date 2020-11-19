import {useState} from 'react'

export default function useEnable() {
    const [disable, setDisable] = useState(true)
    const [btnText, setBtnText] = useState('enable')

    const btnDisable = () =>{
        if (disable === true){
            setDisable(false)
            setBtnText('enable')
        }else{
            setDisable(true)
            setBtnText('disable')
        }
    }

    return [disable, btnText, btnDisable];
}
