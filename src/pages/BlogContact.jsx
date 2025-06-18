import instagram from  "../assets/InstagramIcon.png"
import youtube from  "../assets/YouTubeIcon.png"
import github from  "../assets/octicons.svg"

export function BlogContact() {
    return (
        <>
            <div class="page">
                <div class="sub_title">
                    <h1>BLOG</h1>
                </div>

                <div class="sub_title">
                    <h2>Contact Me </h2>
                </div>
                <div class="para">
                    <p>ikkyuli2023@gmail.com</p>
                    <ul>
                        <li><a href="https://www.instagram.com/lemonsky616/"><img src={instagram} alt="Instagram icon" width="50px"/></a></li>
                        <li><a href="https://www.youtube.com/@MikoToes-dz2di"><img src={youtube} alt="Youtube icon" width="50px"/></a></li>
                        <li><a href="https://github.com/Mikotoes"><img src={github} alt="GitHub icon" width="50px"/></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}