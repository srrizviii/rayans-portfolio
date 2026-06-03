export default function Experience() {
    return (
        <>
        <section id="experience">
            <div className="sticky-header">
                <h2 className="lightText">Experience</h2>
            </div>
            <div className="experience-contents">
                <div className="experience-card">
                    <a className="tenure">
                        <div className="experience-image-container">
                            <img src="/public/eigenspace-logo.jpg" alt="eigenspacelogo"/>
                        </div>
                        <p>Jun 2024 - Aug 2024,<br/>May 2025 - Aug 2025</p>
                    </a>
                    <div className="card-column">
                        <a target="_blank" href="https://www.eigenspace.ca/">
                            <h3 className="anchor-text card-header">Field Engineering Intern ⋅ Eigenspace Consulting Ltd. <i class="fa-solid fa-arrow-right anchor-icon"></i></h3>
                        </a>
                        <p>Surveyed and staked multi-phase construction sites (grading, underground utilities, services, and roads) under senior supervision, using Trimble GNSS/GPS technology with various staking techniques to translate engineering drawings into field layout, coordinating with senior surveyors, engineers, and site foremen to interpret design requirements</p>
                        <div className="tag-container">
                            <div className="tag">
                                <p>Trimble GPS/GNSS</p>
                            </div>
                            <div className="tag">
                                <p>Surveying</p>
                            </div>
                            <div className="tag">
                                <p>Leveling</p>
                            </div>
                            <div className="tag">
                                <p>Layout</p>
                            </div>
                            <div className="tag">
                                <p>Offset/Line/Surface Staking</p>
                            </div>
                            <div className="tag">
                                <p>GPS Data Collection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a target="_blank" href="/public/Rayan_Rizvi_resume.pdf" class="anchor-text"><p>View Full Resume <i className="fa-solid fa-arrow-right anchor-icon"></i></p></a>
        </section>
        </>
    )
}