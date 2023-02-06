import { Box, chakra, Link, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

function Contact() {
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
            <SimpleGrid columns={2} spacing={5}>
                <Box bg={"white"} p={"10"} shadow={"dark-lg"}>
                    <chakra.h1>Call</chakra.h1>
                    <Link href={"tel:+966500939420"} target={"_blank"}><chakra.h1>+966500939420</chakra.h1></Link>
                </Box>
                <Box bg={"white"} p={"10"} shadow={"dark-lg"}>
                    <chakra.h1>GitHub</chakra.h1>
                    <Link href={"https://github.com/RashedSharahili"} target={"_blank"}><chakra.h1>Rashed Sharahili</chakra.h1></Link>
                </Box>
                <Box bg={"white"} p={"10"} shadow={"dark-lg"}>
                    <chakra.h1>Twitter</chakra.h1>
                    <Link href={"https://twitter.com/rashdtech"} target={"_blank"}><chakra.h1>@Rashdtech</chakra.h1></Link>
                </Box>
                <Box bg={"white"} p={"10"} shadow={"dark-lg"}>
                    <chakra.h1>LinkedIn</chakra.h1>
                    <Link href={"https://www.linkedin.com/in/rashed-sharahili"} target={"_blank"}><chakra.h1>Rashd Sharahili</chakra.h1></Link>
                </Box>
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default Contact