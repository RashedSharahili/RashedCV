import { Box, Card, CardBody, chakra, Link, SimpleGrid, Image, Stack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Proj1 from './../assets/images/projects/1.png'
import Proj2 from './../assets/images/projects/proj2.png'
import Proj3 from './../assets/images/projects/proj3.png'
import Proj4 from './../assets/images/projects/proj4.png'

function Projects() {
  return (
    <Box id="projects">
        <br></br>
        <br></br>
        <br></br>
        <Box textAlign={"center"} ml={"17%"} mr={"17%"}>
            <chakra.h1 fontSize={"44"} fontWeight={"bold"} color={"gray.800"}>
                PROJECTS
            </chakra.h1>
            <chakra.h5 fontSize={"24"} color={"gray.800"}>
                SOME OF MY WORK
            </chakra.h5>
            <br></br>
            <br></br>
            <SimpleGrid columns={2} spacing={1}>
                <Link href={"https://ertiwa.tech"} _hover={{ textDecoration: "none", transform: "scale(1.2)", zIndex: "1" }} target={"_blank"}>
                    <Card maxW='md'>
                        <CardBody>
                            <Image
                            src={Proj1}
                            alt='Project 1'
                            backgroundColor={"white"}
                            borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                            <Heading size='md'>Ertiwa Initiative</Heading>
                            </Stack>
                        </CardBody>
                    </Card>
                </Link>
                <Link href={"https://rashedservices.com/academies"} _hover={{ textDecoration: "none", transform: "scale(1.2)", zIndex: "1" }} target={"_blank"}>
                <Card maxW='md'>
                    <CardBody>
                        <Image
                        src={Proj2}
                        alt='ETC'
                        borderRadius='lg' />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>ETC Portal</Heading>
                        </Stack>
                    </CardBody>
                </Card>
                </Link>
                <Link href={"https://front-end-react-ts.vercel.app/"} _hover={{ textDecoration: "none", transform: "scale(1.2)", zIndex: "1" }} target={"_blank"}>
                <Card maxW='md'>
                    <CardBody>
                        <Image
                        src={Proj3}
                        alt='Tic Tac Toe'
                        borderRadius='lg' />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Know your Stock</Heading>
                        </Stack>
                    </CardBody>
                </Card>
                </Link>
                <Link href={"https://rashedsharahili.github.io/todolist/"} _hover={{ textDecoration: "none", transform: "scale(1.2)", zIndex: "1" }} target={"_blank"}>
                <Card maxW='md'>
                    <CardBody>
                        <Image
                        src={Proj4}
                        alt='To Do List'
                        borderRadius='lg' />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>To Do List</Heading>
                        </Stack>
                    </CardBody>
                </Card>
                </Link>
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default Projects
