import { useState } from 'react';
import AppContext from './app-context';

const AppState = (props) => {

    const [test, setTest] = useState('TESTER_TESTER')
    return (
        <AppContext.Provider
            value={{
                test,
                setTest
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;