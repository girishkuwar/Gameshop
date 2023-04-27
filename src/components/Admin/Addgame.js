import React, { useState } from 'react'
import supabase from '../../config/supabaseclient';
import { v4 as uuidv4 } from 'uuid';


const Addgame = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);
  const [price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("")

  const handleImg = (e) => {
    setImg(e.target.files[0]);
  }

  const uploadDetails = async (imgpath) => {
    const { data, error } = await supabase
      .from('games')
      .insert([{ name, desc, price, Quantity, imgurl:imgpath , category }])

    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
    alert("game added")
  }


  const uploadData = async () => {
    const { data, error } = await supabase
      .storage
      .from('gamespics')
      .upload("public/" + uuidv4(), img)
    if (data) {
      console.log(data.path);
      let imgpath = "https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/" + data.path;
      uploadDetails(imgpath);
    } else {
      console.log(error);
    }
  }

  return (
    <div className='addgame'>
      <h5>Game Cover</h5>
      <input className='file' type="file" src="" alt="" onChange={handleImg} />
      <h5>Name</h5>
      <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} value={name} />
      <h5>Description</h5>
      <textarea name="" id="" cols="30" rows="10" onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
      <h5>Price</h5>
      <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
      <h5>Category</h5>
      <input type="text" name="" id="" onChange={(e) => setCategory(e.target.value)} value={category} />
      <h5>Quantity</h5>
      <input type="number" name="" id="" onChange={(e) => setQuantity(e.target.value)} value={Quantity} />
      <button onClick={uploadData}>Submit</button>
    </div>
  )
}

export default Addgame
