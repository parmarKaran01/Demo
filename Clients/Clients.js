import React from 'react'
import './Clients.css';
import mainImage from "./../assets/images/oilAndGas.png";
import TataMoterLogo from './../assets/Logos/clients/Auto/2017-logo-Tata-Motors.jpg'
import SuzukiLogo from './../assets/Logos/clients/Auto/SUZUKI_MOTORS.png'
import CarltonLogo from './../assets/Logos/clients/Chemical/CARLTON_LOGO.jpg'
import FMCLogo from './../assets/Logos/clients/Chemical/fmc_corporation_logo.jpg'
import GrasimLogo from './../assets/Logos/clients/Chemical/GRASIM_LOGO.jpg'
import HMELLogo from './../assets/Logos/clients/Chemical/HMEL_LOGO.png'
import HuntsmanLogo from './../assets/Logos/clients/Chemical/Huntsman_logo.png'
import IEFCLLogo from './../assets/Logos/clients/Chemical/IEFCL_LOGO.png'
import IndoramaLogo from './../assets/Logos/clients/Chemical/INDORAMA_PETROCHEMICALS_LOGO.jpg'
import MeghmaniLogo from './../assets/Logos/clients/Chemical/MEGHMANI_FINECHEM_LOGO.jpg'
import OrientLogo from './../assets/Logos/clients/Chemical/ORIENT_LOGO.jpg'
import SukhbirLogo from './../assets/Logos/clients/Chemical/SUKHBIR_AGRO_LOGO.jpg'

import AdaniLogo from './../assets/Logos/clients/Food & Beverages/ADANI_WILMAR_LOGO.jpg'
import AllandSayajiLogo from './../assets/Logos/clients/Food & Beverages/ALLAND_SAYAJI_LOGO.png'


import HalLogo from './../assets/Logos/clients/Oil & Gas/HAL_OFFSHORE_LOGO.jpg'
import IndianOilLogo from './../assets/Logos/clients/Oil & Gas/IndianOil_Logo_Fulla.jpg'
import NayaraLogo from './../assets/Logos/clients/Oil & Gas/NAYARA_LOGO.png'
import ONGCLogo from './../assets/Logos/clients/Oil & Gas/ONGC_LOGO.png'
import PetronasLogo from './../assets/Logos/clients/Oil & Gas/Petronas_Logo.svg.png'


import AlembicLogo from './../assets/Logos/clients/Pharma/ALEMBIC.png'
import ApotheconLogo from './../assets/Logos/clients/Pharma/APOTHECON_PHARMA.png'
import CadilaLogo from './../assets/Logos/clients/Pharma/CADILA_LOGO.jpg'
import ConcordLogo from './../assets/Logos/clients/Pharma/CONCORD_BIOTECH_LOGO.png'
import ElysiumLogo from './../assets/Logos/clients/Pharma/ELYSIUM_PHARMA_LOGO.png'
import EmcureLogo from './../assets/Logos/clients/Pharma/EMCURE_LOGO.jpg'
import LaRenonLogo from './../assets/Logos/clients/Pharma/LA_RENON_LOGO.png'
import TorrentLogo from './../assets/Logos/clients/Pharma/Torrent_Pharma.jpg'
import ZydusLogo from './../assets/Logos/clients/Pharma/ZYDUS_LOGO.jpg'










function Clients() {
    return (
        <>
        <img src={mainImage} alt="" className="mainImage" />
        <div className='clients'>
            <h1 className='title'>OUR ELITE CUSTOMERS</h1>
            <div className='company__section'> 
                <h4>AUTOMOBILE INDUSTRIES</h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {TataMoterLogo} alt =''/> 
                    <img className = 'ilogo' src = {SuzukiLogo} alt =''/> 
                </div>
            </div>
            <div className='company__section'> 
                <h4>CHEMICAL INDUSTRIES</h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {FMCLogo} alt =''/> 
                    <img className = 'ilogo' src = {GrasimLogo} alt =''/> 
                    <img className = 'ilogo' src = {HMELLogo} alt =''/> 
                    <img className = 'ilogo' src = {HuntsmanLogo} alt =''/>
                    <img className = 'ilogo' src = {MeghmaniLogo} alt =''/> 
                    <img className = 'ilogo' src = {OrientLogo} alt =''/> 
                    <img className = 'ilogo' src = {SukhbirLogo} alt =''/> 
                </div>
                <h4>PETROCHEMICAL INDUSTRIES</h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {PetronasLogo} alt =''/>  
                    <img className = 'ilogo' src = {IEFCLLogo} alt =''/> 
                    <img className = 'ilogo' src = {IndoramaLogo} alt =''/> 
                </div>
            </div>
            <div className='company__section'> 
                <h4>FOODS AND BEVERAGES</h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {AdaniLogo} alt =''/> 
                    <img className = 'ilogo' src = {AllandSayajiLogo} alt =''/> 
                </div>
            </div>
            <div className='company__section'> 
                <h4>OIL & GAS & REFINERIES </h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {IndianOilLogo} alt =''/> 
                    <img className = 'ilogo' src = {NayaraLogo} alt =''/> 
                    <img className = 'ilogo' src = {ONGCLogo} alt =''/> 
                </div>
                <h4>EPC COMPANIES </h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {CarltonLogo} alt =''/> 
                    <img className = 'ilogo' src = {HalLogo} alt =''/> 
                </div>
            </div>
            <div className='company__section'> 
                <h4>PHARMACEUTICALS</h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {AlembicLogo} alt =''/> 
                    <img className = 'ilogo' src = {ApotheconLogo} alt =''/> 
                    <img className = 'ilogo' src = {CadilaLogo} alt =''/> 
                    <img className = 'ilogo' src = {ConcordLogo} alt =''/> 
                    <img className = 'ilogo' src = {ElysiumLogo} alt =''/> 
                    <img className = 'ilogo' src = {EmcureLogo} alt =''/> 
                    <img className = 'ilogo' src = {LaRenonLogo} alt =''/> 
                    <img className = 'ilogo' src = {TorrentLogo} alt =''/> 
                    <img className = 'ilogo' src = {ZydusLogo} alt =''/> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Clients
