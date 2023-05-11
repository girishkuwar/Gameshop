import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import supabase from '../../config/supabaseclient';
import { v4 as uuidv4 } from 'uuid';

const UpdateGame = () => {
  const [name, setName] = useState("");
  const [imgpath, setimgpath] = useState(null);
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);
  const [price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("")

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getGame = async () => {
      const { data, error } = await supabase
        .from("games")
        .select()
        .eq('id', id)
        .single()

      if (data) {
        // console.log(data);
        setName(data.name);
        setDesc(data.desc);
        setPrice(data.price);
        setQuantity(data.Quantity);
        setimgpath(data.imgurl);
        setCategory(data.category);
      } else {
        console.log(error);
        navigate("/");
      }
    }
    getGame();
  }, [id, navigate])

  const handleImg = (e) => {
    setImg(e.target.files[0]);
  }

  const updateDetails = async (newcoverpath) => {
    console.log("Update Details with " + newcoverpath);
    const { data, error } = await supabase
      .from("games")
      .update({ name, desc, price, imgurl: newcoverpath, category })
      .eq('id', id)

    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
    alert("game updated");
    navigate("/admin/gamelist")
  }

  const deleteCover = async () => {
    let localpath = imgpath.slice(76);
    console.log(localpath);
    const { error } = await supabase
      .storage
      .from('gamepics')
      .remove([localpath])

    if (error) {
      console.log(error);
    } else {
      console.log("Old Cover Deletes")
    }
  }


  const uploadData = async () => {
    const { data, error } = await supabase
      .storage
      .from('gamespics')
      .upload("public/" + uuidv4(), img)
    if (data) {
      console.log(data.path);
      setimgpath("https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/" + data.path);
      let newcoverpath = "https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/" + data.path;
      console.log("Cover Updated")
      updateDetails(newcoverpath);
    } else {
      console.log(error);
    }
  }

  const replaceCover = async () => {
    const { data, error } = await supabase
      .storage
      .from('gamespics')
      .update("public/" + id + "/cover.jpg", img, {
        cacheControl: '3600',
        upsert: true
      })
    if (data) {
      console.log(data.path);
      setimgpath("https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/" + data.path);
      let newcoverpath = "https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/" + data.path;
      console.log("Cover Updated")
      updateDetails(newcoverpath);
    } else {
      console.log(error);
    }

  }


  const uploadDatatest = async () => {
    if (!img) {
      console.log("No new Cover");
      updateDetails();
    } else {
      console.log("Changing Cover");
      replaceCover();
    }
  }



  return (
    <div>
      <div className='addgame'>
        <h5>Game Cover</h5>
        <img src={imgpath} style={{ width: "100px" }} alt="" /><br />
        <input className='file' type="file" src="" alt="" onChange={handleImg} />
        <h5>Name</h5>
        <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} value={name} />
        <h5>Description</h5>
        <textarea name="" id="" cols="30" rows="10" onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
        <h5>Price</h5>
        <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
        {/* <h5>Category</h5>
        <input type="text" name="" id="" onChange={(e) => setCategory(e.target.value)} value={category} />
        <h5>Quantity</h5>
        <input type="number" name="" id="" onChange={(e) => setQuantity(e.target.value)} value={Quantity} /> */}
        <br/>
        <button onClick={uploadDatatest}>Submit</button>
      </div>
    </div>
  )
}

export default UpdateGame
