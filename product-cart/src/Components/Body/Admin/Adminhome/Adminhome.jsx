import React, { useEffect,useState } from 'react'
import './Adminhome.css'
import { Link } from 'react-router-dom';
import axios from 'axios';











const Adminhome = () => {

  

  return (
    <div className='admin-home-main-img'>
        <nav class="navbar">
          <div class="container-fluid">
            <form class="d-flex" role="search">
            <div className='admin-home-logout-session'>
              <div className='admin-home-logout-session-head'>RINSHID.KT</div>
                <button class="Btn">
                    <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                    <div class="text">Logout</div>
                </button>
            </div>
            </form>
          </div>
        </nav>
        <div className="admin-home-btn-main">
            <div className='admin-home-btn-product-head'>
              <h1>PRODUCT</h1>
              <button>
                    <span class="box">
                        ADD
                    </span>
              </button>
            </div>
            <div className='admin-home-btn-category-head'>
              <h1>CATEGORY</h1>
              <Link to={"/admincategory"}><button>
                    <span class="box">
                        ADD
                    </span>
              </button></Link>
            </div>
        </div>
        <div className="admin-home-category-contents">
              <div className="category-content"><span>Casual</span></div>
              <div className="category-content-delete-edit">
                    <div className='category-edit'><button>Edit</button></div>
                    <div className='category-delete'><button>Delete</button></div>
              </div>
        </div>
    </div>
  )
}

export default Adminhome












