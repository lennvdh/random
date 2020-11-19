import {useState, useEffect} from 'react'

export default function useSreenSize(initialvalue){
const [isSmallScreen, setIsSmallScreen] = useState(false);

let checkScreenSize = () => {
    if(setIsSmallScreen(window.innerWidth < 600)){
        console.log('small')
    }
}

useEffect(()=>{
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
}, [])

return isSmallScreen;

}