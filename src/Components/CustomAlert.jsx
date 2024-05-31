import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
} from '@chakra-ui/react';

const CustomAlert = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Alert</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Please select one option before proceeding.</Text>
                </ModalBody>
                <Button
                    mt={4}
                    mb={4}
                    borderTopRightRadius={"50%"}
                    borderTopLeftRadius={"50%"}
                    _hover={{ bgColor: "#fff", border: "1px solid lime", color: "#000" }}
                    onClick={onClose}
                    alignSelf="center"
                    color="#fff"
                    bgColor="#79abd2">
                    OK
                </Button>
            </ModalContent>
        </Modal>
    );
};

export default CustomAlert;
