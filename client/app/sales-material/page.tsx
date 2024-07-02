import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Dash from '../components/Dash';
import SalesMaterials from '../components/SalesMaterials';

const salesMaterial = () => {
    return (
        <>
        <DashboardLayout children={<SalesMaterials></SalesMaterials>} currentNavItemName='Sales Material'></DashboardLayout>
        </>

    )
}

export default salesMaterial