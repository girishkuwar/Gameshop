import React, { useState } from 'react'
import "./shotsviewer.css"


const ShotsViewer = ({ display, gamename, id}) => {
    const [imgno, setimgno] = useState(id)
  
    const [img, setimg] = useState(`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${gamename}/${imgno}.jpg`)

    const next = () => {
        if (imgno < 5) {
            setimgno((imgno) => imgno + 1)
            console.log("Next",img);
            setimg(`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${gamename}/${imgno}.jpg`);
        }
    }
    
    const previos = () => {
        if (imgno >= 0) {
            setimgno((imgno) => imgno - 1)
            console.log("prew",img);
            setimg(`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${gamename}/${imgno}.jpg`);
        }
    }


    return (
        <div className='fullview' style={{ display: display }}>
            <img src={img} alt="" />
            <div className="shots-btn">
            <button onClick={() => {previos()}} >Prew</button>
            <button onClick={() => {next()}}>Next</button>
            </div>
        </div>
    )
}

export default ShotsViewer