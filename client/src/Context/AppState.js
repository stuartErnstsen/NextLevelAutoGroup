import { useState, useEffect } from 'react';
import AppContext from './app-context';

const AppState = (props) => {

    const [scrollPos, setScrollPos] = useState(0)

    const handleScroll = () => {
        const pos = window.pageYOffset;
        setScrollPos(pos);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <AppContext.Provider
            value={{
                scrollPos
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;