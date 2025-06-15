import profile from  "../assets/profile.png"

export function Home() {
    return (
        <>
            <img src={profile} alt="GitHub profile" width="300px"/>
            <h1>Ikkyu Li</h1>

            <h2>About Me </h2>
            <h3>Overview</h3>
            <p>I am a student studying for the Software Systems Major at Simon Fraser 
                University. I was born in Shanghai, China. I have been living in 
                Richmond since 2016. My top passion is to create enjoyable and 
                meaningful experiences, whether through writing, drawing or coding.
            </p>
        </>
    )
}