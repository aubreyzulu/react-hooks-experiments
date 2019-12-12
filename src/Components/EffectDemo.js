import React, { useState, useEffect } from 'react';

const EffectDemo = () => {
    //state
    const [fullName, setFullName] = useState({ name: 'name', familyName: 'family' });
    const [title, setTitle] = useState('useEffect() in Hooks');


    // useEffect
    useEffect(() => {
        console.log('useEffect has been called!');
        setFullName({ name: 'Aubrey', familyName: 'Chinkula' });
    }, [])

    return (
        <div>
            <h1>Title:{title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
        </div>
    );
};



export default EffectDemo