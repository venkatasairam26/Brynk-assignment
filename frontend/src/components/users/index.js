import './index.css'
import { useState, useEffect } from 'react'
const Users = () => {
    const [usersHeading, setUsersHeading] = useState('')
    const TOTAL_STEPS = 5;
    const [currentStep, setCurrentStep] = useState(1);

    const handleStepClick = (step) => {
        setCurrentStep(step);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://brynk-assignment-tq58.onrender.com/data')
            const data = await response.json()
            setUsersHeading(data[0].heading)
        }
        fetchUsers()
    }, [])
    return (
        <div className='users'>
            <div className='users-top-container'>
                <div className='left-card'>
                    <h1 className='heading' dangerouslySetInnerHTML={{ __html: usersHeading }} />
                    <p className='para'>Powerful AI solutions that go beyond mere data sorting and <br />exploration. Use our array of AI enabled solutions that understand <br />your business and recommend the optimal way forward. </p>
                    <button className='btn' type='button'>Get started</button>
                </div>
                <div className='right-card'>

                </div>
            </div>
            <div className='users-bottom-container'>
                <div className="tab-list">
                    <div className="tab-itm multi-source">
                        <h4>Multi-source data</h4>
                        <p>Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.</p>
                    </div>
                    <div className="tab-itm ready-to-go-algos">
                        <h4>Ready to Go Algos</h4>
                        <p>We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.</p>
                    </div>
                    <div className="tab-itm stakeholder-alignment">
                        <h4>Stakeholder alignment</h4>
                        <p>No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.</p>
                    </div>
                    <div className="tab-itm internal-capability-building">
                        <h4>Internal capability building</h4>
                        <p>We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.</p>
                    </div>
                    <div className="tab-itm continuous-engagement">
                        <h4>Continuous engagement</h4>
                        <p>We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.</p>
                    </div>
                    <div className="progress-container">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${((currentStep - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
                        />
                        <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`} onClick={() => handleStepClick(1)} />
                        <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`} onClick={() => handleStepClick(2)} />
                        <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`} onClick={() => handleStepClick(3)} />
                        <div className={`progress-step ${currentStep >= 4 ? 'active' : ''}`} onClick={() => handleStepClick(4)} />
                        <div className={`progress-step ${currentStep >= 5 ? 'active' : ''}`} onClick={() => handleStepClick(5)} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Users
