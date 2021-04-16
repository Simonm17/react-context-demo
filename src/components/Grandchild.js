import React, { useContext } from 'react';
import { TokenContext } from '../TokenContext';

function GrandChild() {

    const [token, setToken] = useContext(TokenContext);

    return (
        <>
            <button onClick={() => setToken('GrandChildToken')}>GrandChild Token</button>
        </>
    )
}

export default GrandChild;