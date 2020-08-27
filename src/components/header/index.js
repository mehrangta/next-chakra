import React from "react";
import MainHeader from "./header";
import Navigation from "./navigation";
import SocialNav from "./social-menu";

const Header = ({}) => (
    <MainHeader>
        <Navigation menu={[{name:"ciao", link: "/page2"}]}/>
        <SocialNav menu={[]}/>
    </MainHeader>
);

export default Header;
