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
                                <img src="/eigenspace-logo.jpg" alt="eigenspacelogo" />
                            </div>
                            <br />
                            <p>May 2026 - present</p>
                        </a>
                        <div className="card-column">
                            <a target="_blank" href="https://www.eigenspace.ca/" rel="noreferrer">
                                <h3 className="experience-anchor-text card-header">Software Developer ⋅ Eigenspace Consulting Ltd. <i className="fa-solid fa-arrow-right anchor-icon"></i></h3>
                            </a>
                            <p>Building AutoCAD automation tools/plugins to automate input/output of service report information to and from AutoCAD/Civil3D and Excel</p>
                            <div className="tag-container">
                                <div className="experience-tag"><p>AutoCAD</p></div>
                                <div className="experience-tag"><p>C#</p></div>
                                <div className="experience-tag"><p>.NET</p></div>
                                <div className="experience-tag"><p>OOP</p></div>
                                <div className="experience-tag"><p>Visual Studio</p></div>
                                <div className="experience-tag"><p>Civil3D</p></div>
                                <div className="experience-tag"><p>CAD Automation</p></div>
                                <div className="experience-tag"><p>Excel Automation</p></div>
                                <div className="experience-tag"><p>AutoCAD plugins</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-card">
                        <a className="tenure">
                            <div className="experience-image-container">
                                <img src="/eigenspace-logo.jpg" alt="eigenspacelogo" />
                            </div>
                            <br />
                            <p>Jun 2024 - Aug 2024,<br />May 2025 - Aug 2025</p>
                        </a>
                        <div className="card-column">
                            <a target="_blank" href="https://www.eigenspace.ca/" rel="noreferrer">
                                <h3 className="experience-anchor-text card-header">Field Engineering Intern ⋅ Eigenspace Consulting Ltd. <i className="fa-solid fa-arrow-right anchor-icon"></i></h3>
                            </a>
                            <p>Surveyed and staked multi-phase construction sites (grading, underground utilities, services, and roads) under senior supervision, using Trimble GNSS/GPS technology with various staking techniques to translate engineering drawings into field layout, coordinating with senior surveyors, engineers, and site foremen to interpret design requirements</p>
                            <div className="tag-container">
                                <div className="experience-tag"><p>Trimble GPS/GNSS</p></div>
                                <div className="experience-tag"><p>Surveying</p></div>
                                <div className="experience-tag"><p>Leveling</p></div>
                                <div className="experience-tag"><p>Layout</p></div>
                                <div className="experience-tag"><p>Offset/Line/Surface Staking</p></div>
                                <div className="experience-tag"><p>GPS Data Collection</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a target="_blank" href="/Rayan_Rizvi_resume.pdf" className="anchor-text" rel="noreferrer"><p>View Full Resume (April 2026)<i className="fa-solid fa-arrow-right anchor-icon"></i></p></a>
            </section>
        </>
    )
}