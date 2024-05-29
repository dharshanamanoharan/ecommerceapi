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
        <>
            <div>

            </div>
        </>
    )
};
export default Header;