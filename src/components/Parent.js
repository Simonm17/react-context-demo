import React, { useContext } from 'react';
import { TokenContext } from '../TokenContext';
import Child from './Child';

function Parent() {

    const [token, setToken] = useContext(TokenContext);

    return (
        <>
            {token}
            <button onClick={() => setToken('ParentToken')}>Parent Token</button>
            <Child />
        </>
    )
}

export default Parent;