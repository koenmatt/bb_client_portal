import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import ContentLibrary from '../components/ContentLibrary';

const contentLibrary = () => {
    return (
        <>
        <DashboardLayout children={<ContentLibrary></ContentLibrary>} currentNavItemName='Content Library'></DashboardLayout>
        </>

    )
}

export default contentLibrary