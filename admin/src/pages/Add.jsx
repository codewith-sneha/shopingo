import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { assets } from "../../../client/src/assets/admin_assets/assets";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";
import { resolvePath } from "react-router-dom";

const Add = () => {
  const [sizes, setSizes] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');

  const {token , backendUrl}=useContext(AdminContext);
  const ChangeSize = (e) => {
    const sizeCopy = sizes.slice();
    if (sizes.includes(e.target.value)) {
      setSizes(() => sizeCopy.filter((prev) => prev != e.target.value));
    } else {
      setSizes((prev) => [...prev, e.target.value]);
    }
  };

const HandleSubmit = async (e)=>{
  try {
    e.preventDefault();
    const formData = new FormData;
    formData.append('name',name);
    formData.append('description',description);
    formData.append('price',price),
    formData.append('sizes',JSON.stringify(sizes));
    formData.append('bestseller',bestseller);
    formData.append('category',category);
    formData.append('subCategory',subCategory);

    // appending image 
    image1 && formData.append('image1',image1);
     image2 && formData.append('image2',image2);
      image3 && formData.append('image3',image3);
       image4 && formData.append('image4',image4);
      


       console.log(token);
    const response = await axios.post(`${backendUrl}api/product/add`,formData,{headers:{token}});
    console.log(response)
    if( response.data.success){
      toast.success(response.data.message);
      setBestseller(false);
      setDescription("");
      setName("");
      setPrice("");
      setCategory("men");
      setSubCategory("Topwear");
      setImage1(''); setImage2(''); setImage3('');  setImage4('');
      setSizes([]);

    }
    else{
         toast.error(response.data.message);
    }
  } catch (error) {
          toast.error(error.message);
  }
}

  return (
    <div className="bg-gray-100 mb-10 p-2 sm:p-6 px-3 mr-1 sm:px-10 sm:w-[80%] md:w-[60%] flex sm:m-auto">
      <form onSubmit={HandleSubmit} className="py-4 sm:w-[90%] w-full flex flex-col gap-4 ">
        <div className="flex flex-col w-full sm:gap-2">
          <p className="capitalize  sm:text-lg text-purple-800">
            enter product name :
          </p>
          <input
            type="text"
            placeholder="Eg. cotton shirt"
            className="p-1 sm:p-2 sm:px-4 border w-full rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col w-full sm:gap-2">
          <p className="capitalize  sm:text-lg text-purple-800">
            enter description :
          </p>
          <input
            type="text"
            placeholder="Eg. balended cotton"
            className="p-1 sm:p-2 sm:px-4 border w-full rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-4 sm:gap-8 lg:flex-row ">
          <div className="flex flex-col w-full sm:gap-2">
            <p className="capitalize  sm:text-lg text-purple-800">
              enter price :
            </p>
            <input
              type="number"
              placeholder="Eg. 200"
              className="p-1 sm:p-2 sm:px-4 border w-full rounded-md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col w-full sm:gap-2">
            <p className="capitalize  sm:text-lg text-purple-800">
              select size :
            </p>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  onChange={ChangeSize}
                  value="S"
                  name="S"
                  className="sm:w-5 "
                />
                <p className="sm:text-xl">S</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  onChange={ChangeSize}
                  value="M"
                  name="M"
                  className="sm:w-5 "
                />
                <p className="sm:text-xl">M</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  onChange={ChangeSize}
                  value="L"
                  name="L"
                  className="sm:w-5 "
                />
                <p className="sm:text-xl">L</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  onChange={ChangeSize}
                  value="XL"
                  name="XL"
                  className="sm:w-5 "
                />
                <p className="sm:text-xl">XL</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  onChange={ChangeSize}
                  value="2XL"
                  name="2XL"
                  className="sm:w-5 "
                />
                <p className="sm:text-xl">2XL</p>
              </div>
            </div>
          </div>
        </div>

        {/* category and sub category  */}
        <div className="flex flex-col lg:flex-row w-full gap-6 justify-between">
          <div className="flex flex-col gap-2 w-full">
            {/* categories */}
            <p className="capitalize  sm:text-lg text-purple-800">
              Select Category :
            </p>
            <select name="category" className="rounded-lg relative   border p-2 w-full max-w-full" id="" onChange={(e)=>setCategory(e.target.value)}>
                <option className="" value="men">Men</option>
                <option className=" " value="women">women</option>
                <option className=" " value="kids">Kids</option>
            </select>
          </div>
            <div className="flex flex-col gap-2 w-full">
            {/* sub categories */}
            <p className="capitalize  sm:text-lg text-purple-800">
              Select Sub-Category :
            </p>
            <select name="subcategory" className="relative   border p-2 w-full max-w-full rounded-lg " id="" onChange={(e)=>setSubCategory(e.target.value)}>
                <option className="" value="Topwear">Topwear</option>
                <option className=" " value="Bottomwear">Bottomwear</option>
                <option className=" " value="Winterwear">Winterwear</option>
            </select>
          </div>
        </div>
        {/* images input  */}
       <div className="flex flex-col gap-2">
        <p className="capitalize  sm:text-lg text-purple-800">Upload images : </p>
         <div className="flex gap-2">
    <label htmlFor="image1">
      <img className="w-40 aspect-square cursor-pointer" src={image1?URL.createObjectURL(image1):assets.upload_area} alt="" />
      <input type="file" onChange={(e)=>setImage1(e.target.files[0])}  id="image1" hidden />
    </label>
    <label htmlFor="image2">
      <img className="w-40 aspect-square cursor-pointer" src={image2?URL.createObjectURL(image2):assets.upload_area} alt="" />
      <input onChange={(e)=>setImage2(e.target.files[0])} type="file"  id="image2" hidden />
    </label>
    <label htmlFor="image3">
      <img className="w-40 aspect-square cursor-pointer" src={image3?URL.createObjectURL(image3):assets.upload_area} alt="" />
      <input onChange={(e)=>setImage3(e.target.files[0])} type="file"  id="image3" hidden />
    </label>
    <label htmlFor="image4">
      <img className="w-40 aspect-square cursor-pointer" src={image4?URL.createObjectURL(image4):assets.upload_area} alt="" />
      <input onChange={(e)=>setImage4(e.target.files[0])} type="file"  id="image4" hidden />
    </label>
        </div>
       </div>

      {/* bestseller option */}
       <div className="flex gap-2 items-center cursor-pointer sm:gap-2" >
          <p className="capitalize  sm:text-lg text-purple-800">
            add to best-seller:
          </p>
          <input
            type="checkbox"
            placeholder="Eg. cotton shirt"
            className=""
            checked={bestseller}
           onChange={(e) => setBestseller(e.target.checked)}
          />
        </div>

       {/* submit button  */}
       <button type="submit" className="p-2 bg-green-700 rounded-lg text-xl w-full  lg:w-[70%] m-auto text-white cursor-pointer hover:bg-green-800">Add Product</button>
      </form>
    </div>
  );
};

export default Add;
