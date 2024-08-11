import Image from "next/image";
import HeroSection from "./component/home/HeroSection";
import GetStarted from "./component/home/GetStarted";
import CredentialNeed from "./component/home/CredentialNeed";
import CredentialStreamline from "./component/home/CredentialStreamline";
import CredentialGoAbout from "./component/home/CredentialGoAbout";
import CredentialExecellence from "./component/home/CredentialExecellence";
import CredentialServices from "./component/home/CredentialServices";
import PatnerSlide from './component/home/PatnerSlide'
import  CredentialDoDont  from "./component/home/CredentialDoDont";
import CredentialNegotiation from "./component/home/CredentialNegotiation";
import IPAEnrollment from "./component/home/IPAEnrollment";
export default function Home() {
  return (
    <>
    <HeroSection/>
    <GetStarted/>
    <CredentialExecellence/>
    <CredentialNeed/>
    <CredentialStreamline/>
    <CredentialGoAbout/>
    < CredentialDoDont/>
    <CredentialServices no='1'/>
    <PatnerSlide/>
    <CredentialServices no='2'/>
    <CredentialNegotiation/>
    <IPAEnrollment/>
    
    </>
  );
}
