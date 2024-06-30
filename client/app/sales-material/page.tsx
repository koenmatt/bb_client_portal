import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Dash from '../components/Dash';

const salesMaterial = () => {
    return (
        <>
        <DashboardLayout children={<Dash></Dash>} currentNavItemName='Sales Material'></DashboardLayout>
        </>

    )
}

export default salesMaterial