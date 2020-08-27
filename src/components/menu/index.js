import {Stack, Box} from "@chakra-ui/core";
import React, {useRef, useState} from "react";
import MenuButton from "./menu-button";
import MenuDrawer from "./menu-drawer";
import MenuItem from "./menu-item";
import {SocialMenu} from "../header/social-menu";

const Menu = ({menu = [{name: 'text', link: 'ciao'}]}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState();
    const buttonRef = useRef();
    return (
        <>
            <MenuButton ref={buttonRef} onClick={() => setIsMobileMenuOpen(true)}/>

            <MenuDrawer
                finalFocusRef={buttonRef}
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            >
                <Stack mt="20%" spacing={6} direction="column" as="ul" ml="0">
                    {menu.map(({name, link} , index) => (
                        <MenuItem link={link} key={name} index={`0${index + 1}`}>
                            {name}
                        </MenuItem>
                    ))}
                </Stack>

                {false && (
                    <Box marginTop={10} paddingY={5}>
                        <SocialMenu ml="0" menu={[]}/>
                    </Box>
                )}
            </MenuDrawer>
        </>
    );
};

export default Menu;
