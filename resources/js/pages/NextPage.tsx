import React from 'react';
import FloatingHearts from '../components/FloatingHearts';
import UnconditionalLove from '../components/UnconditionalLove';
import StaticTimeCounter from '../components/StaticTimeCounter';

const NextPage = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <FloatingHearts />
            <StaticTimeCounter />
            <UnconditionalLove />
        </div>
    );
};

export default NextPage; 