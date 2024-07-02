import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import DemoAccounts from '../components/DemoAccounts';

const demoAccounts = () => {
    return (
        <>
        <DashboardLayout children={<DemoAccounts></DemoAccounts>} currentNavItemName='Demo Accounts'></DashboardLayout>
        </>

    )
}

export default demoAccounts