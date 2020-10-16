import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            
           <img  
           className= 'header_logo'
           src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
                   
              <div className="header_search">
                  <input
                  className='header_searchInput' type='text' />
                  {/* Logo */}
                  </div>     
                   
                   <div className='header_nav'>
                       <span className='header_option'></span>
                        
                        <span className='header_optionLineOne'>Hello Guest</span>
                       
                        <span className='header_optionLineTwo'>Sign In</span>

                </div>
                 
                 
                 <div className='header_nav'>
                       <span className='header_option'></span>

                      <span className='header_optionOne'>Returns</span>
                    
                      <span className='head_optionLineTwo'>Orders</span>

                   </div>

                   <div className='header_nav'>
                       <span className='header_option'></span>

                       <span className='header_optionOne'>Your</span>
                    
                        <span className='head_optionLineTwo'>Prime</span>

                   </div>
                   </div>
                   
                   
    );
}

export default Header


