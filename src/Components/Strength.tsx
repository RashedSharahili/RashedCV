import { Box, chakra, CircularProgress, HStack, Progress, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'

function Strength() {
  return (
    <Box id="strength">
        <br></br>
        <br></br>
        <br></br>
        <Box textAlign={"center"} ml={"17%"} mr={"17%"}>
            <chakra.h1 fontSize={"44"} fontWeight={"bold"} color={"gray.800"}>
                STRENGTH
            </chakra.h1>
            <chakra.h5 fontSize={"24"} color={"gray.800"}>
                MY KNOWLEDGE LEVEL IN 
            </chakra.h5>
            <br></br>
            <br></br>
            <SimpleGrid columns={6} bg={"white"} p={"10"}>
                <Box>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={100} />
                    <chakra.h1 color={"gray.800"}>
                        CREATIVITY
                    </chakra.h1>
                </Box>
                <Box>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={95} />
                    <chakra.h1 color={"gray.800"}>
                        TEAMWORK
                    </chakra.h1>
                </Box>
                <Box>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={90} />
                    <chakra.h1 color={"gray.800"}>
                        HARDWORKER
                    </chakra.h1>
                </Box>
                <Box>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={80} />
                    <chakra.h1 color={"gray.800"}>
                        COMMUNICATION
                    </chakra.h1>
                </Box>
                <Box>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={90} />
                    <chakra.h1 color={"gray.800"}>
                        EFFICIENCY
                    </chakra.h1>
                </Box>
                <Box>
                    <CircularProgress size={"100px"} color={"#ae936f"} value={95} />
                    <chakra.h1 color={"gray.800"}>
                        RESEARCH
                    </chakra.h1>
                </Box>
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default Strength