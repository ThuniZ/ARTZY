
import React from 'react'
import '../styles/Admin.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function admin() {
  return (
    
    <div>
        <Navbar />
        <div className="adminContainer">
        <div className="adminHeader">
            <h1>Approve new members</h1>
        </div>
        
        <div className="searchBar">
            <h2>Search</h2>
        
            <input type="text" id="search" placeholder="Search User or UserID"></input>
        <div className="searchButton">
            <button> <i className="fa-solid fa-magnifying-glass"></i></button>
            </div>    
        </div>
        <div>
            <button id="filterButton"><h2>Filter</h2></button>
            <br></br>
            <button>Members</button>
        </div>
        <div className="listHeader">
            <p>Users</p>
            <p>Registered date</p>
            <p>UserID</p>
            <p>Action</p>
        </div>
        <div>
            <li>Adam Sandler 2018-06-26 776382 <button>Yes</button><button>No</button></li>
            <li>Adam Sandler 2018-06-26 776382 <button>Yes</button><button>No</button></li>
            <li>Adam Sandler 2018-06-26 776382 <button>Yes</button><button>No</button></li>
            <li>Adam Sandler 2018-06-26 776382 <button>Yes</button><button>No</button></li>

            </div>
        </div>
        <Footer />
    </div>
    
  )
}