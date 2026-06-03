export default function Projects() {
    return (
        <>
            <section id="projects">
                <div className="sticky-header">
                    <h2 className="lightText">Projects (Stay Tuned)</h2>
                </div>
                <div className="project-contents">
                    <div className="project-card">
                        <div className="project-image-container">
                            <img src="/googlehomepageclone.png" alt="gghomepageclone" />
                        </div>
                        <div className="card-column">
                            <a target="_blank" href="https://rayan-google-clone.netlify.app/" rel="noreferrer">
                                <h3 className="anchor-text card-header">Google Homepage Clone<i className="fa-solid fa-arrow-right anchor-icon"></i></h3>
                            </a>
                            <p>Simple Google homepage I built using HTML and CSS to learn the basics of these core web development technologies, deployed using Netlify.</p>
                            <div className="tag-container">
                                <div className="tag"><p>HTML</p></div>
                                <div className="tag"><p>CSS</p></div>
                                <div className="tag"><p>VS Code</p></div>
                                <div className="tag"><p>Netlify</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image-container">
                            <img src="/todo-app-pic.png" alt="todoapppic" />
                        </div>
                        <div className="card-column">
                            <a target="_blank" href="https://cooltodoapp15.netlify.app/" rel="noreferrer">
                                <h3 className="anchor-text card-header">Minimalist Todo App<i className="fa-solid fa-arrow-right anchor-icon"></i></h3>
                            </a>
                            <p>A modern todo application featuring persistent local storage and interactive task management, deployed using Netlify.</p>
                            <div className="tag-container">
                                <div className="tag"><p>HTML/CSS</p></div>
                                <div className="tag"><p>JavaScript</p></div>
                                <div className="tag"><p>VS Code</p></div>
                                <div className="tag"><p>React.js</p></div>
                                <div className="tag"><p>Vite</p></div>
                                <div className="tag"><p>Netlify</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/srrizviii" target="_blank" className="project-archive-link" rel="noreferrer"><p>View All Projects (my GitHub) <span>&rarr;</span></p></a>
            </section>
        </>
    )
}