import React, { useState } from 'react'
import supabase from '../../config/supabaseclient';
import Loader from '../Loader';
import Notification from '../Notification';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "./admin.css"

const Addgame = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);
  const [price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [category, setCategory] = useState(0);
  const [catlist, setcatList] = useState([]);
  const [screnshots, setScreenshots] = useState([]);
  const [game, setGame] = useState([]);
  const [loader, setLoader] = useState(false);
  const [notify, setnotify] = useState('');
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchCate = async () => {
      const { data, error } = await supabase
        .from("category")
        .select()
  
      if (error) {
        console.log(error)
      }
      if (data) {
        setcatList(data);
        console.log(data);
      }
    }
    fetchCate();
  }, [])
  


  const handleImg = (e) => {
    setImg(e.target.files[0]);
  }

  const handleShot = (e) => {
    setScreenshots(e.target.files);
  }

  const uploadDetails = async () => {
    setLoader(true);

    const { data, error } = await supabase
      .from('games')
      .insert([{ name, desc, price, Quantity, cat_id:category }])
      .select()

    if (data) {
      navigate("/admin/addgame/uploader/" + data[0].id);
      setnotify("Game Details Uploaded ");

    } else {
      console.log(error);
      alert("Error");
      setLoader(false);
    }
  }


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
      .upload("public/" + game.id + "/" + i + ".jpg", screnshots[i])
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }

  }

  const uploadData = async () => {
    const { data, error } = await supabase
      .storage
      .from('gamespics')
      .upload("public/" + game.id + "/cover.jpg", img)
    if (data) {
      // console.log(data.path);
      let imgpath = "https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/" + data.path;
      updateCoverDetails(imgpath);
    } else {
      console.log(error);
    }

  }

  const updateCoverDetails = async (imgpath) => {
    const { data, error } = await supabase
      .from("games")
      .update({ imgurl: imgpath })
      .eq('id', game.id)

    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
    setLoader(false);
  }



  return (
    <div className='addgame'>
      <Notification msg={notify} />
      <h5>Name</h5>
      <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} value={name} />
      <h5>Description</h5>
      <textarea name="" id="" cols="30" rows="10" onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
      <h5>Price</h5>
      <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
      <h5>Category</h5>
      <select name="Category" onChange={(e) => setCategory(e.target.value)}>
        {
          catlist.map((e) => {
            return(<>
            <option value={e.id}>{e.title}</option>
            </>)
          })
        }
      </select>
      {/* <h5>Quantity</h5>
      <input type="number" name="" id="" onChange={(e) => setQuantity(e.target.value)} value={Quantity} /> */}
      <br/>
      <button onClick={uploadDetails}>Next</button>
      {(loader) && <div className="loader-m"><Loader /></div>}
    </div>
  )
}

export default Addgame
