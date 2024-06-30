
import Image from "next/image";
import NavBar from "./components/NavBar";
import LoginCard from "./components/LoginCard";
import TestLoginCard from "./components/TestLoginCard";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <NavBar navButton={true}/>
      <div className="flex justify-center items-center mt-10">

      <LoginCard />
      </div>
      
    </div>
  );
}


