const Hero = ()=>{
    return (
        <div className="hero_con">
            <div className="heroL">
                <div className="hero_text">
                    <h1>YOUR FEET</h1>
                    <h1>DESERVE</h1>
                    <h1>THE BEST</h1>
                </div>
                <div className="hero_para">
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>
                <div className="hero_btn">
                    <button className="hero1">Shop Now</button>
                    <button className="hero2">Category</button>
                </div>
                <div className="hero_available">
                    <p>Also Available On</p>
                    <img src="./images/shops.png" alt="" />
                </div>
            </div>
            <div className="heroR">
                <img src="./images/shoe_image.png" alt="" />
            </div>
        </div>
    )
};

export default Hero;