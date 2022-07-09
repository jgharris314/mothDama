const Square = () => {

    const sizeMin = 2
    const sizeMax = 5

    const randSize = Math.floor(sizeMin + Math.random() * (sizeMax - sizeMin))

    const horizMin = 1
    const horizMax = 99

    const randHoriz = Math.floor(horizMin + Math.random() * (horizMax - horizMin))
    const configuredHorz = `${randHoriz}%`

     const vertMin = 1
     const vertMax = 90
     const randVert = Math.floor(vertMin + Math.random() * (vertMax - vertMin))
     const configuredVert = `${randVert}%`

     console.log(configuredVert)

    
    return (
        <div className={`w-${randSize} h-${randSize} ${randVert % 2 === 0 ? 'bg-mothOrange-0' : 'bg-mothGreen-0'} absolute z-10 left-[${configuredHorz}] top-[${configuredVert}]`} />
    )
}

export default Square