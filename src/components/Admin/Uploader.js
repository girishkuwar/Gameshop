import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import supabase from '../../config/supabaseclient';
import Loader from '../Loader';

const Uploader = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [img, setImg] = useState(null);
    const [screnshots, setScreenshots] = useState([]);
    const [loader, setLoader] = useState(false);

    const handleImg = (e) => {
        setImg(e.target.files[0]);
    }

    const handleShot = (e) => {
        setScreenshots(e.target.files);
    }

    useEffect(() => {
        setLoader(true);
        const getGame = async () => {
            const { data, error } = await supabase
                .from("games")
                .select()
                .eq('id', id)
                .single()

            if (data) {
                setName(data.name);
                setLoader(false);
            } else {
                console.log(error);
                // navigate("/");
            }
        }
        getGame();
    }, [id])


    const uppd = () => {
        for (let i = 0; i < screnshots.length; i++) {
            uploadSceenshot(i);
        }
    }

    const uploadSceenshot = async (i) => {
        console.log(screnshots[i])
        const { data, error } = await supabase
            .storage
            .from('gamespics')
            .upload("public/" + id + "/" + i + ".jpg", screnshots[i])
        if (data) {
            console.log(data);
        } else {
            console.log(error);
        }

    }

    const uploadData = async () => {
        setLoader(true);
        const { data, error } = await supabase
            .storage
            .from('gamespics')
            .upload("public/" + id + "/cover.jpg", img)
        if (data) {
            // console.log(data.path);
            let imgpath = "https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/" + data.path;
            updateCoverDetails(imgpath);
            uppd();
        } else {
            console.log(error);
        }

    }

    const updateCoverDetails = async (imgpath) => {
        const { data, error } = await supabase
            .from("games")
            .update({ imgurl: imgpath })
            .eq('id', id)

        if (data) {
            console.log(data);
        } else {
            console.log(error);
        }
        setLoader(false);
    }



    return (<>
        <div className="addgame">
            <h1>{name}</h1>
            <h5>Game Cover</h5>
            <input className='file' type="file" src="" alt="" onChange={handleImg} />
            <h5>Screenshots</h5>
            <input type="file" className='file' src='' alt='' multiple onChange={handleShot} />
            <button onClick={uploadData}>Submit</button>
            {(loader) && <div className="loader-m"><Loader /></div>}
        </div>
    </>
    )
}

export default Uploader