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
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
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
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
  const { isOpen: isViewOpen, onOpen: onViewOpen, onClose: onViewClose } = useDisclosure()
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()

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
              <Button onClick={onEditOpen}><EditIcon /></Button>
            </Tooltip>

            <Modal isOpen={isEditOpen} onClose={onEditClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Editar usuario</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input type='text' value={users[0].name}/>
                    <FormLabel>DNI</FormLabel>
                    <Input type='number' value={users[0].dni}/>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onEditClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Tooltip hasArrow label='Ver usuario' bg='red.600'>
              <Button onClick={onViewOpen}><ViewIcon /></Button>
            </Tooltip>

            <Modal isOpen={isViewOpen} onClose={onViewClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Ver datos de usuario</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text py='0'>
                    {users.length}
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='red' mr={3} onClick={onViewClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Tooltip hasArrow label='Eliminar usuario' bg='red.600'>
              <Button onClick={onDeleteOpen}><DeleteIcon /></Button>
            </Tooltip>

            <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>¿Esta seguro que desea eliminar el usuario?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text py='0'>
                    {users[0].name}
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='red' mr={3} onClick={onDeleteClose}>
                    No
                  </Button>
                  <Button colorScheme='green' mr={3}>
                    Si
                  </Button>

                </ModalFooter>
              </ModalContent>
            </Modal>

          </CardBody>
        </HStack>
      </Card>


    </>
  );
}
