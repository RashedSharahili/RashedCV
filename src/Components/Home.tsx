import React from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, chakra, Divider, Heading, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Logo from './../assets/images/rashed_logo_trasparent.png'
import About from './About';
import Projects from './Projects';
import Strength from './Strength';
import HowIWork from './HowIWork';
import Contact from './Contact';

function Home() {
  return (
    <>
    <br></br>
    <br></br>
    <Box opacity={"0.9"} id="home">
        <Box id="background">
            <Box textAlign={"center"} ml={"10%"} mr={"10%"}>
                <Image src={Logo} w={"100%"} h={"35vw"}></Image>
                <chakra.h1 fontSize={44} fontWeight={"bold"} color={"gray.700"}>
                    RASHED SHARAHILI
                </chakra.h1>
                <chakra.h5 fontSize={32} color={"#ae936f"}>
                    WEB DEVELOPER
                </chakra.h5>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Box bg={"#ae936f"} p={"10"} boxShadow={"dark-lg"} opacity={"0.9"}>
                <Box textAlign={"center"} color={"gray.800"} fontSize={{ base:"16", md: "16", lg: "32" }} fontWeight={"bold"} ml={"22%"} mr={"22%"}>
                    <chakra.h1>
                        " Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. "
                    </chakra.h1>
                    <br></br>
                    <chakra.h1>
                        Roy T. Bennett
                    </chakra.h1>
                </Box>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <About/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Projects/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Strength/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <HowIWork/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Contact/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    </Box>
    </>
  )
}

export default Home