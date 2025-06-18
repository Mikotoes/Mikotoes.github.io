import profile from  "../assets/profile.png"

export function Home() {
    return (
        <>
            <div class="page">
                <div class="profile">
                    <div class="profileimg">
                        <img src={profile} alt="GitHub profile" width="300px"/>
                    </div>
                    <h1>Ikkyu Li</h1>
                </div>
                
                <div class="sub_title">
                    <h2>About Me </h2>
                    <h3>Overview</h3>
                </div>
                
                <div class="para">
                    <p>I am a student studying for the Software Systems Major at Simon Fraser 
                    University. I was born in Shanghai, China. I have been living in 
                    Richmond since 2016. My top passion is to create enjoyable and 
                    meaningful experiences, whether through writing, drawing or coding.
                    </p>
                </div>
            </div>
        </>
    )
}