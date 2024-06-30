
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Dash from '../components/Dash';

const Dashboard = () => {
    return (
        <>
        <DashboardLayout children={<Dash></Dash>} currentNavItemName='Dashboard'></DashboardLayout>
        </>

    )
}

export default Dashboard