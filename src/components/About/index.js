import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faJsSquare} from '@fortawesome/free-brands-svg-icons'
import {faGitAlt} from '@fortawesome/free-brands-svg-icons'
import {faCss3} from '@fortawesome/free-brands-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faAngular} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() =>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text.zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray = {['A','b','o', 'u', 't',' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>I'm a very ambitious and passionate Frontend developer with the thirst for working in an established IT company with the opportunity on working on challenging and diverse realife projects</p>
                <p>I am young, curious and have a taste beauty and cleanliness and constantly working or mastering my craft as a wed developer</p>
                <p>If I were to discribe myself in one sentence, that would be a young and energetic youth constantly seeking for opportunites to improve myself.</p>

            </div>

            <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#FO6529' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4B28' />
                </div>
            </div>
        </div>

        </div>
        <Loader type="pacman" />

        </>
        
    )
}

export default About