import { Box, Button, chakra, Link } from '@chakra-ui/react'
import React from 'react'
import Cv from './../assets/CV/RashedCV2.pdf'

function About() {
  return (
    <Box id="about">
        <br></br>
        <br></br>
        <br></br>
        <Box ml={"15%"} mr={"15%"}>
            <chakra.h1 fontSize={"44"} fontWeight={"bold"} color={"gray.800"}>
                HEY I <chakra.span color={"#ae936f"}>'</chakra.span>M
            </chakra.h1>
            <chakra.h1 fontSize={"44"} fontWeight={"bold"} color={"gray.800"}>
                RASHED SHARAHILI
            </chakra.h1>
        </Box>
        <Box bg={"#ae936f"} p={"10"} boxShadow={"dark-lg"} opacity={"0.9"} ml={"17%"} mr={"17%"} textAlign={"center"} color={"white"} letterSpacing={"0.05em"} lineHeight={"1.7em"} pos={"relative"} fontSize={"18px"}>
            <chakra.p mb={"8"}>
                We are the wind and we are the sea and the ships.
            </chakra.p>
            <chakra.p mb={"8"}>
            I have graduated from The College of Telecom and Information majored in Computer Programming. I Think, I analyze, and I will be open to new ideas. Being a right-brained and creative minded person, I realized that I can use my skills in many different ways. Doesn’t matter what position you hold in programming, your creativity drives the whole concept that why I am passionate about it  !!
            </chakra.p>
            <chakra.p mb={"8"}>
                I’m excited to see where this career path takes me and am excited to learn even more. What is the point in doing something for the rest of your life if you don’t enjoy what you’re getting out of bed for? It’s not something I do, its something I live.
            </chakra.p>
            <Link href={Cv} download>
            <Button id="download_resume" pos={"absolute"} mt={"10px"} ml={"-100px"} p={"7"}>
                Download Resume
            </Button>
            </Link>
        </Box>
    </Box>
  )
}

export default About