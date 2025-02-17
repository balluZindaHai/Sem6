import React, { useState } from 'react';
import './home.css';
import img from './default1.png';
import img1 from './mensfashion.png';
import img2 from './women3.png';
import img3 from './airjordan.png'


function Home() {
  // State to handle search input
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="Header">
        <div className="header-left">
          <img className="profileimage" src={img} alt="Profile" />
          {/* <h1 className="brand-name">BrandName</h1> */}
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            <li>Home</li>
          
            <select className='Dropdown'>
              <option>Category</option>
            <option>Shoes</option>
            <option>Accesories</option>
            <option>Men Clothes</option>
            <option>Electronic</option>
            </select>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <div className="banner2"> 

      </div>
      <h1>Trending Products</h1>
      <hr />
      <div className='card'>
        <div className='box'>
        <p></p>  
        <h2 className='hh2'>M e n ' s F a s h i o n</h2> 
        <img className="cardimg" src={img1} alt="Profile" />
            <button>Explore Now!</button>
        </div>

        <div className='box'>
        <h2 className='hh2'>Woman's Fashion</h2>  
          <img className="cardimg2" src={img2} alt="Profile" /> 
              <button>Explore Now!</button>
        </div>

        <div className='box'>
        <p>Nike Jordans</p>  
          <img className="cardimg3" src={img3} alt="Profile" /> 
              <button>Explore Now!</button>
        </div>
        {/* <div className='box'>
        <p></p>  
          
        <img className="cardimg" src={img1} alt="Profile" />
    
            <p> NIKE shoes</p> 
            <b>₹2099</b> 
            <button>buy</button>
        </div> */}
      </div>
      {/* Footer Section */}
      <footer className='foot'>
                   
                   <div className='Customer care'>
                       <h2>Contact Us</h2>
                       <p>Call Now: +91 999 888 6123</p>
                       <p>FAQ</p>
                       <p>E-mail</p>
                       <p>info@EzyBuy.com</p>
                   </div>

                       <div className='Company'>
                          <h2>Company</h2>
                          <p> About </p>
                          <p> Privacy Policy </p>
                          <p> Terms of Service </p>
                       </div>

                       <div className='Social'>
                           <h2>Follow Us</h2>
                           <p>Facebook</p>
                           <p>Instagram</p>
                           <p>Twitter</p>
                       </div>
                       <div className='Service'>
                           <h2>Services</h2>
                           <p>Fast Delivery</p>
                           <p>Track Orders</p>
                           <p>World Wide Shipping</p>
                       </div>             
               </footer>
               <footer className='foot-2'>
               <div className='copyright'>
                       <hr></hr>
                           <p>© 2024 EzyBuy by Manhart group | All Rights Reserved. </p>
                       </div> 
               </footer>
    </div>
  );
}

export default Home;

// import './home.css'
// import img from './default1.png' ;

// function Home(){
//  return(
//    <>
//         <header className="Header">
//         <img  className="profileimage" src={img} height={200}></img>
//             <input type="search" placeholder='🔍 Search...' />        
//                 <nav>
//                         <ul>
//                             <li>Home</li>
//                             <li>Products</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                 </nav>
//         </header><br />
//    </>
//  )   
// }

// export default Home