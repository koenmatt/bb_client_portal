import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Dash from '../components/Dash';

const demoAccounts = () => {
    return (
        <>
        <DashboardLayout children={<Dash></Dash>} currentNavItemName='Demo Accounts'></DashboardLayout>
        </>

    )
}

export default demoAccounts