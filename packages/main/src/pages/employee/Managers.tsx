/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import {
    Card,
    CardBody,
    Table,
    SectionTitle,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter,
    Button,
} from "@doar/components";
import Layout from "../../layouts";
import Content from "../../layouts/content";
import TeamStore from "../../stores/teamStore";
import { StyledTheadTR, StyledTD, StyledIcon, StyledHeader } from "./style";
import { User } from "../../types/Team";

const Managers: React.FC = () => {
    const teamStore = useContext(TeamStore);
    const { myteams } = teamStore;
    const managers: User[] = [];
    myteams.map((team) => managers.push(team.manager));
    const [show, setShow] = useState(false);
    const clickHandler = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            <Layout>
                <Content>
                    <Card height="100%">
                        <StyledHeader>
                            <SectionTitle title="Managers" />
                            <>
                                <Modal
                                    show={show}
                                    onClose={clickHandler}
                                    size="sm"
                                >
                                    <ModalHeader>
                                        <ModalTitle>Modal Title</ModalTitle>
                                        <ModalClose>x</ModalClose>
                                    </ModalHeader>
                                    <ModalBody>
                                        <p>
                                            It is a long established fact that a
                                            reader will be distracted by the
                                            readable content of a page when
                                            looking at its layout. The point of
                                            using Lorem Ipsum is that it has a
                                            more-or-less normal distribution of
                                            letters, as opposed to using
                                            &apos;Content here, content
                                            here&apos;, making it look like
                                            readable English.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button
                                            color="secondary"
                                            onClick={clickHandler}
                                        >
                                            Close
                                        </Button>
                                        <Button color="primary">
                                            Save changes
                                        </Button>
                                    </ModalFooter>
                                </Modal>
                                <Button onClick={clickHandler}>
                                    Open Modal
                                </Button>
                            </>
                        </StyledHeader>
                        <CardBody>
                            <Table theadColor="primary">
                                <thead>
                                    <StyledTheadTR>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Group</th>
                                        <th>Action</th>
                                    </StyledTheadTR>
                                </thead>
                                <tbody>
                                    {managers?.map((member) => (
                                        <tr key={member.uid}>
                                            <StyledTD>
                                                {member.first_name}
                                            </StyledTD>
                                            <StyledTD>{member.email}</StyledTD>
                                            <StyledTD>{member.team}</StyledTD>
                                            <StyledTD>
                                                <StyledIcon href="/">
                                                    <i className="fa fa-pencil-alt" />
                                                </StyledIcon>

                                                <StyledIcon href="/" ml="10px">
                                                    <i className="fa fa-trash-alt" />
                                                </StyledIcon>
                                            </StyledTD>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Content>
            </Layout>
        </>
    );
};

export default observer(Managers);
