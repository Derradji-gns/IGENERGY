import "./inter.css";
import Papier from "./papier";
function OurInterests(){

    return(
        <div className="theBig">
            <div className="titre">
                <h2>Our interests</h2>
                <p>We can proudly say that what distinguishes us from other scientific clubs is our interests:</p>
            </div>
            <div className="conten">
                <Papier title="Programming" img="./graphics/svg1.svg"/>
                <Papier title="Design" img="./graphics/ldesign.svg"/>
                <Papier title="Social Media" img="./graphics/socia.svg"/>
                <Papier title="Podcasting" img="./graphics/podcasting.svg"/>
                <Papier title="Public Speaking" img="./graphics/speak.svg"/>
                <Papier title="Coding" img="./graphics/lcode.svg"/>
                <Papier title="Gamming" img="./graphics/play.svg"/>
                <Papier title="Hiking" img="./graphics/hik.svg"/>

            </div>
            
            
        </div>
        
    )
}

export default OurInterests;
