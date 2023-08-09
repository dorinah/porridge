import React from "react";
import Container from 'react-bootstrap/Container';
import Modal from "react-bootstrap/Modal";
import Levels from "react-activity/dist/Levels";
import "react-activity/dist/Levels.css";

const ActivityIndicator = (isLoading:any) => {
    return (
        <Container>
            <Modal show={isLoading.isLoading} >
                <Modal.Body className="text-center">
                    <Levels />
                </Modal.Body>
            </Modal>
        </Container>
    );
}
export default ActivityIndicator