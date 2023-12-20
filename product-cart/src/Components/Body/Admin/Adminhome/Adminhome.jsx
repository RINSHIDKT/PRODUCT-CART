import React from 'react'
import './Adminhome.css'
import { Link } from 'react-router-dom';

const Adminhome = () => {
  return (
    <div className='admin-home-main-img'>
        <nav class="navbar">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
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
    </div>
  )
}

export default Adminhome
