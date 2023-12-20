import React , {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Admincategory.css'
import { Link } from 'react-router-dom';

const Admincategory = () => {


    
   const navigate=useNavigate()
   const[val,setVal]=useState({
           categoryname:'',
           description:"",
           

           
   });
   
   const getData=(e)=>{
       setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
   }
   
   
   const addData=async(e)=>{
       e.preventDefault();
       console.log({...val});
       
       const res=await axios.post("http://localhost:3370/productcart/addcategory",{...val});
         
       if(res.status!=201){
         alert("Data Not Added")
       }
      
       else{
          
            alert("Category Added Successfully")
               navigate("/adminhome");
          
       }
   }




  return (
    <div className='admin-cate-main-img'>
        <div className="admin-category-main">
            <div className="admin-category-input">
               <p><Link className='admin-category-back-btn' to={"/adminhome"}><i class="fa fa-times" aria-hidden="true"></i></Link></p>
                <h2>ADD CATEGORY</h2>
                <input type="text" name='categoryname' onChange={getData} placeholder='Category' />
                <input type="text" name='description' onChange={getData} placeholder='Category Discription'/>
                <button onClick={addData} className='admin-category-add-btn'>
                    <span class="box">
                        ADD
                    </span>
              </button>
              
            </div>
        </div>
    </div>
  )
}

export default Admincategory







