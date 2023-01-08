import { Box } from "@chakra-ui/react";

import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

interface User {
  name: string;
  dni: number;
  fecha_nac: string;
}

const users: User[] = [
  {
    name: "Jorge Garcia",
    dni: 34193612,
    fecha_nac: "27/12/1988",
  },
  {
    name: "Lucas Garcia",
    dni: 36588230,
    fecha_nac: "27/01/1992",
  }];

export default function Clients() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg="tomato" w="20%" h="100%" p={4} color="white">
        Pagina de clientes
      </Box>

      <Card>
        <HStack>
          <CardBody>
            <Heading size='md'>{users[0].name}</Heading>
            <Text py='0'>
              {users[0].dni}
            </Text>
            <Text py='0'>
              {users[0].fecha_nac}
            </Text>
            <Tooltip hasArrow label='Editar usuario' bg='red.600'>
              <Button onClick={onOpen}>Editar</Button>
            </Tooltip>

            {/* <Button onClick={onOpen}>Open Modal</Button> */}

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text py='0'>
                    {users[0].fecha_nac}
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </CardBody>
        </HStack>
      </Card>


    </>
  );
}
