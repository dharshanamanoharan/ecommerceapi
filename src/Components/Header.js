import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    //Fixed Scroll Up Arrow 
    const [visible,setVisible]=useState(false);
    const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    (scrolled > 150)?setVisible(true):setVisible(false) 
    }; 

    //Scrolling to top using window
    const scrollToTop = () =>{ 
        window.scrollTo({ top: 0,  behavior: 'smooth'});
        //Smooth behaviour is mentioned to ensure smooth transition
     }; 

    //Tracking scroll event and calling the toggle visible function to display accordingly
    window.addEventListener('scroll', toggleVisible); 

    return(
        <section className="container-fluid">
            <div className="container-fluid">
                <p>We are accepting online orders now! Delivering pan India. <span>Dismiss</span></p>
            </div>
            <div className="container-fluid">
                <p>Special Offers! Sign up to receive the latest Topdeal exclusives discounts Learn more
                <span>Learn more</span></p>
            </div>
            <div className="container-fluid">
                <p>Welcome to Maganlal Chikki,Lonavala! <Link to="/">Join Free</Link>or<Link to="/">Sign in</Link></p>
                <span>Learn more</span>
            </div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary"> 
                <div class="container-fluid">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All Departments
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Chikki</a></li>
                            <li><a class="dropdown-item" href="#">Dry Fruit Roll</a></li>
                            <li><a class="dropdown-item" href="#">Fudge</a></li>
                            <li><a class="dropdown-item" href="#">Namkeen</a></li>
                        </ul>
                    </li>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>          
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
};
export default Header;