import React from 'react'
import {withTheme} from 'emotion-theming'
import {Code, Icon, Link as ChakraLink, List, ListIcon, ListItem, Text,} from '@chakra-ui/core'
import Header from "../components/header";
import {Hero} from '../components/Hero'
import Flex from "@chakra-ui/core/dist/Flex";

const Index = () => (
    <Flex direction={"column"}>
        <Header />
        <Hero title="pd" />
        <Text>
            Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
        </Text>


        <List spacing={3} my={0}>
            <ListItem>
                <ListIcon icon="check-circle" color="green.500"/>
                <ChakraLink
                    isExternal
                    href="https://chakra-ui.com"
                    flexGrow={1}
                    mr={2}
                >
                    Chakra UI <Icon name="external-link" mx="2px"/>
                </ChakraLink>
            </ListItem>
            <ListItem>
                <ListIcon icon="check-circle" color="green.500"/>
                <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
                    Next.js <Icon name="external-link" mx="2px"/>
                </ChakraLink>
            </ListItem>
        </List>
    </Flex>
)

export default withTheme(Index)
