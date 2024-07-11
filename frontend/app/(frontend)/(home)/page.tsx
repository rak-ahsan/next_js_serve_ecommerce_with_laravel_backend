import { getDataUser } from '@/data/route';
import React from 'react'
import HomePage from './page1';

const page = async () => {
    const data = await getDataUser();

    return (
        <div>
            <HomePage data={data} />
        </div>
    )
}

export default page