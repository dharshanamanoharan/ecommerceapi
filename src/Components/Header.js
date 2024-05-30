import { useState } from "react";
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
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
};
export default Header;