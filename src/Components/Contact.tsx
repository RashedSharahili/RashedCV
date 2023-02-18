import { Box, chakra, Link, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { BsGithub, BsLinkedin, BsTelephoneFill, BsTwitter } from 'react-icons/bs'

function Contact() {

    const bg = useColorModeValue("white", "gray.800");
    const cl = useColorModeValue("gray.800", "white");
    
  return (
    <Box id="contact" ml={"17%"} mr={"17%"}>
        <br></br>
        <br></br>
        <br></br>
        <Box textAlign={"center"} ml={"17%"} mr={"17%"}>
            <chakra.h1 fontSize={"44"} fontWeight={"bold"} color={"gray.800"}>
                CONTACT
            </chakra.h1>
        </Box>
        <br></br>
        <br></br>
        <Box textAlign={"center"}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
                <Box bg={bg} p={"10"} shadow={"dark-lg"}>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <chakra.h1 fontSize={"larger"} fontWeight={"bold"}>Call</chakra.h1>
                        <BsTelephoneFill fontSize={"larger"} />
                    </Box>
                    <Link href={"tel:+966500939420"} target={"_blank"}><chakra.h1 fontWeight={"bold"}>+966500939420</chakra.h1></Link>
                </Box>
                <Box bg={bg} p={"10"} shadow={"dark-lg"}>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <chakra.h1 fontSize={"larger"} fontWeight={"bold"}>GitHub</chakra.h1>
                        <BsGithub fontSize={"larger"} />
                    </Box>
                    <Link href={"https://github.com/RashedSharahili"} target={"_blank"}><chakra.h1 fontWeight={"bold"}>Rashed Sharahili</chakra.h1></Link>
                </Box>
                <Box bg={bg} p={"10"} shadow={"dark-lg"}>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <chakra.h1 fontSize={"larger"} fontWeight={"bold"}>Twitter</chakra.h1>
                        <BsTwitter fontSize={"larger"} />
                    </Box>
                    <Link href={"https://twitter.com/rashdtech"} target={"_blank"}><chakra.h1 fontWeight={"bold"}>@Rashdtech</chakra.h1></Link>
                </Box>
                <Box bg={bg} p={"10"} shadow={"dark-lg"}>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <chakra.h1 fontSize={"larger"} fontWeight={"bold"}>LinkedIn</chakra.h1>
                        <BsLinkedin fontSize={"larger"} />
                    </Box>
                    <Link href={"https://www.linkedin.com/in/rashed-sharahili"} target={"_blank"}><chakra.h1 fontWeight={"bold"}>Rashd Sharahili</chakra.h1></Link>
                </Box>
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default Contact