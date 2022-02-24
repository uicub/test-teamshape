import { useState } from "react";

import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter,
    Button,
} from "@doar/components";

type Props = {
    name?: string;
};

function UpdateForm({ name }: Props) {

    const [show, setShow] = useState(false);
    const clickHandler = () => {
        setShow((prev) => !prev);
    };
    return (
        <>
            <Modal onClose={clickHandler} size="md" show={show}>
                <ModalHeader>
                    <ModalTitle>Modal Title</ModalTitle>
                    <ModalClose>x</ModalClose>
                </ModalHeader>
                <ModalBody>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using &apos;Content here, content
                        here&apos;, making it look like readable English.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary">Close</Button>
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
            <Button onClick={clickHandler}>Open Modal</Button>
        </>
    );
}

export default UpdateForm;
