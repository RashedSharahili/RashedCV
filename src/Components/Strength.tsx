import { Box, chakra, CircularProgress, HStack, Progress, SimpleGrid, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function Strength() {

    const bg = useColorModeValue("white", "gray.800");
    const cl = useColorModeValue("gray.800", "white");
    
  return (
    <Box id="strength">
        <br></br>
        <br></br>
        <br></br>
        <Box textAlign={"center"} ml={"13%"} mr={"13%"}>
            <chakra.h1 fontSize={"44"} fontWeight={"bold"} color={"gray.800"}>
                STRENGTH
            </chakra.h1>
            <chakra.h5 fontSize={"24"} color={"gray.800"}>
                MY KNOWLEDGE LEVEL IN 
            </chakra.h5>
            <br></br>
            <br></br>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 6 }} bg={bg} p={"5"}>
                <Box m={{ base: 2, md: 2, lg: 6 }}>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={100} />
                    <chakra.h1 color={cl}>
                        CREATIVITY
                    </chakra.h1>
                </Box>
                <Box m={{ base: 2, md: 2, lg: 6 }}>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={95} />
                    <chakra.h1 color={cl}>
                        TEAMWORK
                    </chakra.h1>
                </Box>
                <Box m={{ base: 2, md: 2, lg: 6 }}>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={90} />
                    <chakra.h1 color={cl}>
                        HARDWORKER
                    </chakra.h1>
                </Box>
                <Box m={{ base: 2, md: 2, lg: 6 }}>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={80} />
                    <chakra.h1 color={cl}>
                        COMMUNICATION
                    </chakra.h1>
                </Box>
                <Box m={{ base: 2, md: 2, lg: 6 }}>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={90} />
                    <chakra.h1 color={cl}>
                        EFFICIENCY
                    </chakra.h1>
                </Box>
                <Box m={{ base: 2, md: 2, lg: 6 }}>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={95} />
                    <chakra.h1 color={cl}>
                        RESEARCH
                    </chakra.h1>
                </Box>
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default Strength