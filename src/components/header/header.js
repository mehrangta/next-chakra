import {Box, Flex} from "@chakra-ui/core";
import React from "react";
import MobileMenu from "../menu";
import Link from "next/link";

const SiteHeader = props => (
    <Box
        as="header"
        transition="transform ease .25s"
        width="100%"
        pos="fixed"
        top="0"
        left="0"
        bg="teal.500"
        zIndex="90"
        {...props}
    />
);

const SiteHeaderInner = props => (
    <Flex
        align="center"
        width={{base: "auto", sm: "92%"}}
        mx="auto"
        height={{sm: "70px"}}
        maxW="1550px"
        {...props}
    />
);

const Logo = ({isImage = true, src}) =>
    isImage ? (
        <Box as="img" src={src} width="120px"/>
    ) : (
        <Box
            fontSize="2xl"
            color="white"
            fontFamily="heading"
            textTransform="uppercase"
            fontWeight="bold"
        >
            {src}
        </Box>
    );

const SiteLogo = ({src, isImage = true}) => {
    // check if the logo is a url,
    // we assume, if it's a url, it points to an image, else it's a text
    return (
        <Box display="block" flexShrink="0">
            <Link href="/">
                <Logo isImage={isImage} src={src}/>
            </Link>
        </Box>
    );
};

const Header = ({children, ...props}) => (
    <SiteHeader {...props}>
        <SiteHeaderInner>
            <MobileMenu/>
            <SiteLogo/>
            {children}
        </SiteHeaderInner>
    </SiteHeader>
);

export default Header;
