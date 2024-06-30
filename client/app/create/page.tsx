import React from 'react'
import NavBar from '../components/NavBar';
import CreateAccountCard from '../components/CreateAccountCard';

const CreateAccount = () => {
    return (
        <div className="bg-black min-h-screen">
        <NavBar navButton={false} />
        <div className="flex justify-center items-center mt-10">
        <CreateAccountCard />
        </div>
        
      </div>
    );
    
}

export default CreateAccount