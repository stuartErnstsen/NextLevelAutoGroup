import { useContext } from 'react';
import AppContext from '../../Context/app-context';
// import StickyLeftGallery from '../StickyLeftGallery/StickyLeftGallery';
import './Landing.scss'
const Landing = props => {
    const { scrollPos } = useContext(AppContext)

    return (
        <main className={scrollPos > 0 ? 'scroll-content' : ''}>
            <section className="landing-welcome">
            </section>
            <section className="landing-welcome">
            </section>
            <section className="landing-welcome">
            </section>
        </main>
    )
}

export default Landing;