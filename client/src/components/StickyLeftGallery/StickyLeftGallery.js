import { useContext } from 'react';
import AppContext from '../../Context/app-context';
import './StickyLeftGallery.scss'

const StickyLeftGallery = () => {
    const { scrollPos } = useContext(AppContext)

    return (
        <aside className={`welcome-info ${scrollPos > 0 ? 'scroll-info' : ''}`}>
            <h4>SERVICES</h4>
            <h5>Full interior/exterior detailing</h5>
            <h5>Paint correction and wax</h5>
            <h5>LED lighting (interior/exterior)</h5>
            <h5>Window Tinting</h5>
            <h5>Level and suspension lefts</h5>
            <h5>Nerf vars and AMP research powerstraps</h5>
            <h5>Tires and rims</h5>
            <h5>Exhaust systme</h5>
            <h5>Vehicle wraps and design</h5>
            <h5>Remote start and keyless entry</h5>
            <h5>Vehicle car audio and video systems</h5>
            <h5>Headlight restoration</h5>
        </aside>
    )
}

export default StickyLeftGallery;