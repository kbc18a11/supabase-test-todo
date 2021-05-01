import React, { useEffect } from 'react';
import { findAdd, create } from '../supabase/user';

const Index = () => {
    const getUser = async () => {
        console.log(await findAdd());
    }

    const createUser = async () => {
        console.log(await create('homo'));
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <button onClick={createUser}>作る</button>
        </div>
    );
};

export default Index
