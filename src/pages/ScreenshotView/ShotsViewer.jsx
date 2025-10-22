import React, { useState } from 'react'
import "./shotsviewer.css"
import { useEffect } from 'react';


const ShotsViewer = ({ display, gamename, id, close ,gameid}) => {
    const [imgno, setimgno] = useState();
    const [isIdlikeImg, setIsIdlikeImg] = useState(false);
    // const [img, setimg] = useState(`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${gamename}/${imgno}.jpg`);
    const [img, setimg] = useState(`https://kftaoqxgwyzsujayhbca.supabase.co/storage/v1/object/public/gamespics/public/${gameid}/${i}.jpg`);
    


    const next = () => {
        if (imgno > 3) {
            alert("No more Images");
            return;
        } else {
            let ino = imgno;
            ino = ino + 1;
            setDisplayImg(ino,isIdlikeImg);
            setimgno(ino);
        }
    }

    const previos = () => {
        if (imgno < 1) {
            alert("No more Images");
            return;
        } else {
            let ino = imgno;
            ino = ino - 1;
            setDisplayImg(ino,isIdlikeImg);
            setimgno(ino);
        }
    }

    const reload = () => {
        let ino = imgno;
        setDisplayImg(ino,true);
        setimgno(ino);
        setIsIdlikeImg(true);
    }

    const setDisplayImg = (no,withid) => {
        if(withid){
            setimg(`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${gameid}/${no}.jpg`);
            console.log(withid);
            return;
        } else {
            setimg(`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${gamename}/${no}.jpg`);
            return;
        }
    }






    useEffect(() => {
        setDisplayImg(id);
        setimgno(id);
    }, [display])



    return (
        <div className='fullview' style={{ display: display }}>
            <div className="center-container">
                <div className="imgcontainer">
                    <div className="imgviewer">
                        <img src={img} alt="" onError={() => { reload() }} />
                    </div>
                    <div className="shots-btn">
                        <button onClick={() => { previos() }} >PREW</button>
                        <button onClick={() => { next() }}>NEXT</button>
                    </div>
                    <button className='close-btn' onClick={close}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ShotsViewer