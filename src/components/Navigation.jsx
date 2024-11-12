const Navigation = ()=>{
    return (
        <div className="navbar">
            <div className="logo">
                <img src="./images/brand_logo.png" alt="" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">menu</a></li>
                    <li><a href="#">location</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
            <button>Login</button>
        </div>
    )
};

export default Navigation;