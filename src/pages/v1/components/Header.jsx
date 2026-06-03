export default function Header() {
    return (
        <header>
            <a href="/">
                <h1>Rayan Rizvi</h1>
                <div className="engg-logo">
                    <img src="/uofaengglogo.png" alt="engglogo" />
                </div>
            </a>
            <h4>Computer Engineering Student</h4>
            <p>"I've never done it before, so I think I can."</p>
            <br />
            <nav>
                <a className="anchor-text" href="#about"><p>About</p></a>
                <a className="anchor-text" href="#experience"><p>Experience</p></a>
                <a className="anchor-text" href="#projects"><p>Projects</p></a>
            </nav>
            <div className="social-link-container">
                <a className="social-link" href="https://www.linkedin.com/in/rayan-rizvi-1241732bb/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                <a className="social-link" href="https://www.instagram.com/s_rrizvi/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a className="social-link" href="https://github.com/srrizviii" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
        </header>
    )
}