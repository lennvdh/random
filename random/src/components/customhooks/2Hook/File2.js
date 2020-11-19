import React from 'react'
import useScreenSize from './useScreenSize'

export default function File2() {

    const onSmallScreen = useScreenSize();
    return (
        <div>
            {onSmallScreen}
        </div>
    )
}
