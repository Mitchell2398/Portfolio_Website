import React, { useEffect } from "react";
import { Link as SmoothLink } from "react-scroll";
import SideMenu from "/components/SideMenu.jsx";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [headerColour, setHeaderColour] = React.useState(true);
  const [trackScroll, setTrackScroll] = React.useState(0);
  const [isSideMenuClicked, setIsSideMenuClicked] = React.useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  // Adjust header css
  useEffect(() => {
    function changeHeader() {
      const currentPosition = window.scrollY;
      if (currentPosition > 5) {
        setHeaderColour(false);
      } else {
        setHeaderColour(true);
      }
    }

    window.addEventListener("scroll", changeHeader);
    return () => window.removeEventListener("scroll", changeHeader);
  }, [trackScroll]);

  function scrollToTop() {
    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  // Side Menu

  function activateSideMenu() {
    setIsSideMenuClicked(true);
  }

  function deactivateSideMenu() {
    setIsSideMenuClicked(false);
  }

  return (
    <div
      className="headerBackground"
      style={{
        backgroundColor: headerColour ? "transparent" : "#424567",
        boxShadow: headerColour ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <svg
        className="logo"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        enableBackground="new 0 0 1000 1000"
        xmlSpace="preserve"
      >
        <g>
          <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
            <path
              d="M1095.8,4984.2c-356.9-74.9-707.9-352.9-863.7-678.3c-43.4-92.7-90.7-216.9-104.5-276.1C103.9,3941.1,100,3243.1,100,86.2v-3835.2l55.2-157.8c116.3-329.3,333.3-587.6,619.2-735.5c321.4-165.6-71-151.8,4225.6-151.8c4292.7,0,3906.2-13.8,4221.7,149.8c289.9,149.9,516.6,418,623.1,733.5l55.2,161.7V105.9c0,3687.3-2,3860.8-35.5,3973.2c-67.1,216.9-169.6,384.5-339.2,552.1c-181.4,183.4-356.9,285.9-593.5,345.1c-149.9,39.4-232.7,39.4-3929.9,37.5C1847,5013.8,1202.3,5007.9,1095.8,4984.2z M8569,4475.5c297.7-100.6,573.8-327.3,703.9-573.8c134.1-256.3,126.2,5.9,120.3-3839.2l-5.9-3476.3l-47.3-118.3c-136-343.1-386.5-585.6-731.5-703.9l-128.2-45.3H5009.9H1539.4l-142,45.3c-181.4,57.2-414.1,213-532.4,354.9c-104.5,128.2-209,341.1-240.6,493c-15.8,74.9-21.7,1082.5-21.7,3500c0,2967.6,3.9,3411.3,29.6,3521.7c106.5,447.6,489,800.6,940.6,867.6c71,9.9,1559.7,15.8,3505.9,13.8C8318.6,4512.9,8464.5,4510.9,8569,4475.5z"
              fill="whitesmoke"
            />
            <path
              d="M5769,742.8c0-1835.8-2-1845.6-108.4-2058.6c-74.9-145.9-238.6-299.7-378.6-354.9c-94.6-39.4-149.9-47.3-321.4-45.3c-183.4,0-220.8,5.9-325.4,53.2c-65.1,31.6-151.8,88.7-195.2,128.2c-94.7,90.7-181.4,270.1-199.2,404.2c-5.9,57.2-15.8,136.1-21.7,177.5l-11.8,73h-295.8h-297.7l11.8-195.2c11.8-207,76.9-441.7,157.7-573.8c69-112.4,250.4-293.8,366.8-362.8c252.4-151.8,571.8-222.8,926.8-203.1c256.3,13.8,396.3,49.3,613.2,155.8c232.7,112.4,431.8,315.5,546.2,548.2c155.8,321.4,149.8,228.7,157.7,2194.7l7.9,1749h-315.5H5769V742.8z"
              fill="whitesmoke"
            />
          </g>
        </g>
      </svg>

      {!isSmallScreen ? (
        <ul className="headerList">
          <li>
            <SmoothLink
              className="RouterLink"
              to="/"
              onClick={scrollToTop}
              smooth={true}
              duration={500}
              offset={15}
              activeClass="active"
            >
              Home
            </SmoothLink>
          </li>

          <li>
            <SmoothLink
              to="aboutMe"
              className="SmoothLink"
              smooth={true}
              duration={500}
              offset={15}
              activeClass="active"
            >
              About Me
            </SmoothLink>
          </li>

          <li>
            <SmoothLink
              to="projects"
              className="SmoothLink"
              smooth={true}
              duration={500}
              offset={-175}
              activeClass="active"
            >
              Projects
            </SmoothLink>
          </li>

          <SmoothLink
            to="connect"
            className="SmoothLink"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
          >
            Connect
          </SmoothLink>
        </ul>
      ) : (
        <img
          src="https://res.cloudinary.com/dheko2ynz/image/upload/v1688845527/Icons_SVG/meunuIconWhite_copy_eowgcz.svg"
          className="sideMenu"
          onClick={activateSideMenu}
        />
      )}

      {isSideMenuClicked && <SideMenu handleClick={deactivateSideMenu} />}
    </div>
  );
}
