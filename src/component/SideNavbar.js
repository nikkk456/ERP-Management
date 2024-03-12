import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const SideNavbar = ({ activeNavItem, setActiveNavItem, sidenavbar, setSidenavbar }) => {
    const [uppernavbar, setUppernavbar] = useState(false);

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    }

    // useEffect(() => {
    //     const handleMediaQuery = (mediaQueryList) => {
    //         if (mediaQueryList.matches) {
    //             setUppernavbar(true);
    //             console.log('Mobile screen detected');
    //         } else {
    //             setUppernavbar(false);
    //             console.log('Not a mobile screen');
    //         }
    //     }

    //     const mediaQueryList = window.matchMedia('(max-width: 767px)');

    //     mediaQueryList.addListener(handleMediaQuery);

    //     handleMediaQuery(mediaQueryList);

    //     return () => {
    //         mediaQueryList.removeListener(handleMediaQuery);
    //     };
    // }, [])



    return (
        <>
            <div className=" flex-column flex-shrink-0 p-3 text-bg-dark position-fixed" style={{ width: sidenavbar ? "225px" : "80px", minHeight: "100vh", display: "flex" }}>
                {
                    sidenavbar ?
                        <h5 style={{ display: "flex" }} >ERP Management<FontAwesomeIcon icon={faBars} style={{ color: "#618ad1", marginLeft: "35px" }} size='xl' onClick={() => setSidenavbar(!sidenavbar)} />
                        </h5>
                        : <center><FontAwesomeIcon icon={faBars} style={{ color: "#618ad1" }} size='xl' onClick={() => setSidenavbar(!sidenavbar)} /></center>
                }
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li style={{ color: "white" }}>
                        {
                            sidenavbar ?
                                <Link to="/" className= 'nav-link'>
                                    <FontAwesomeIcon icon={faHouseUser} style={{ color: "#fcfcfc", marginRight: "5px" }} />
                                    Dashboard
                                </Link>
                                : <Link to="/" style={{ width: "fit-content" }} className='nav-link'>
                                    <center><FontAwesomeIcon icon={faHouseUser} style={{ color: "#fcfcfc" }} /></center>
                                </Link>
                        }
                    </li>
                    <li style={{ color: "white" }}>
                        {
                            sidenavbar ?
                            <Link to="/orders" className= 'nav-link'>
                                <FontAwesomeIcon icon={faChartLine} style={{ color: "#f4f5f5", marginRight: "5px" }} />Order Management
                            </Link> 
                            :<Link to="/orders" style={{ width: "fit-content" }} className='nav-link'>
                                <center><FontAwesomeIcon icon={faChartLine} style={{ color: "#f4f5f5" }} /></center>
                            </Link>
                        }
                    </li>
                    <li style={{ color: "white" }}>
                        {
                            sidenavbar ?
                            <Link to="/product" className='nav-link'>
                                <FontAwesomeIcon icon={faGear} style={{ color: "#f7f7f8", marginRight: "5px" }} />
                                Product Management
                            </Link> 
                            :<Link to="/product" style={{ width: "fit-content" }} className='nav-link'>
                                <center><FontAwesomeIcon icon={faGear} style={{ color: "#f7f7f8" }} /></center>
                            </Link>
                        }
                    </li>
                </ul>
                <hr />
            </div>
        </>
    );
}

export default SideNavbar;
