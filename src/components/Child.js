import React, { useContext } from 'react';
import { TokenContext } from '../TokenContext';
import GrandChild from './Grandchild';


function Child() {

    const [token, setToken] = useContext(TokenContext);

    return (
        <>
            <button onClick={() => setToken('ChildToken')}>Child Token</button>
            <GrandChild />
        </>
    )
}

export default Child;