import Roblox1 from  "../assets/RobloxGameProject1.png"
import Roblox2 from  "../assets/RobloxGameProject2.png"
import digital1 from  "../assets/digitalDrawing1.png"
import digital2 from  "../assets/digitalDrawing2.png"
import digital3 from  "../assets/digitalDrawing3.png"
import oil1 from  "../assets/oilPainting.jpg"

export function ProjectsInterests() {
    return (
        <>
            <h2>Projects</h2>
            <h3>What I work on</h3>
            <p><b>Project 1: Resume</b></p>
            <ul>
                <li>2021</li>
                <li>Resume was created on Wix. 
                    It has not been regularly maintained since 
                    2021. Due to privacy reasons, personal resume is not 
                    attached to this section. 
                </li>
            </ul>
            <p><b>Project 2: Roblox game - Assimilation(demo)</b></p>
            <ul>
                <li>Jun 2024 - current</li>
                <li>The game is coded in Lua language and is actively 
                    being worked on. In-game icons were made using Krita, 
                    several in-game items were made using Blender.
                </li>
            </ul>
            <p><a href="https://www.roblox.com/games/17871072453/Assimilation-demo">
            Link To the Game Page</a></p>
            <img src={Roblox1} alt="Roblox game project 1" width="400px"/>
            <img src={Roblox2} alt="Roblox game project 2" width="400px"/>    

            <h2>Hobbies</h2>
            <h3>Off work</h3>
            <p><b>Hobby 1: game developing</b></p>
            <p><b>Hobby 2: digital drawing</b></p>
            <img src={digital1} alt="digital drawing 1" width="300px"/>
            <img src={digital2} alt="digital drawing 2" width="300px"/>
            <img src={digital3} alt="digital drawing 3" width="500px"/>
            <p><b>Hobby 3: oil painting</b></p>
            <img src={oil1} alt="oil painting" height="400px"/>
            <p><b>Hobby 4: watercoloring</b></p>
            <p><b>Hobby 5: gaming</b></p>
            <p><b>Hobby 6: music</b></p>
        </>
    )
}