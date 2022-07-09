import React, { useEffect, useState } from "react"
import Square from "./Square"

const Header = () => {
    const numberOfSquares = 500
    const [squaresToDisplay, setSquaresToDisplay] = useState()

    const generateSquares = () => {
        let data = []
        for (let i =0; i < numberOfSquares; i++) {
            data.push(<Square />)
        }
        return data
    }

    useEffect(() => {
        setSquaresToDisplay(generateSquares())
    }, [])
    
    return (
        <header className='flex h-32 md:h-56 bg-mothBlack-0 items-center justify-center w-full relative'>
             {squaresToDisplay?.map((_, index) => {
        return squaresToDisplay[index]
      })}
            <div className="flex flex-col w-2/5 h-11/12 bg-mothPurple-0/50 items-center justify-center rounded-lg z-20">
       <h1 className='text-[48px] md:text-[96px] font-bold text-mothGreen-0 -mt-4'>mothDama</h1>
       <h2 className="text-[36px] md:text-[36px] font-bold text-mothOrange-0 -mt-6 pb-4">Bring thine hiney into the shiney</h2>
       
       </div>
     
       
      </header>
    )
}

export default Header