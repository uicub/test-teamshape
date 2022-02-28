/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import Swal from "sweetalert2";
// import api from "../../utils/ApiService";

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
    Container,
    Row,
    Col,
    Input,
    Select,
} from "@doar/components";

import Layout from "../../layouts";
import Content from "../../layouts/content";
import TeamStore from "../../stores/teamStore";
import { StyledTheadTR, StyledTD, StyledIcon, StyledHeader } from "./style";

type TInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const Groups: React.FC = () => {
    const teamStore = useContext(TeamStore);
    // const { myteams } = teamStore;

    const teamList = [
        {
            uid: "6218b160673ff5e571b863d8",
            name: "Azure Developer",
        },
        {
            uid: "6218b1604b8e7e3cd7d033c9",
            name: "Windows Developer",
        },
    ];
    // Modal show and close
    const [show, setShow] = useState(false);
    const clickHandler = () => {
        setShow((prev) => !prev);
    };

    // Modal edit

    const [showEditForm, setEditForm] = useState(false);

    const editHandler = () => {
        setEditForm((prev) => !prev);
    };

    // group state
    const [myteams, setMyteams] = useState(teamList);
    const [groupName, setGroupName] = useState("");
    const [groupId, setGroupId] = useState("");

    const groupHandler = (e: React.ChangeEvent<TInput>) => {
        setGroupName(e.target.value);
    };

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTeam = {
            uid: Date.now().toString(36) + Math.random().toString(36).substr(2),
            name: groupName,
        };
        const teams = [...myteams, newTeam];
        setMyteams(teams);

        // api.postNewManager(data).then((res) => {
        //     console.log("resp: ", res);
        //     res.success = true;
        //     if (res?.success) {
        //         Swal.fire("Done!", "Invitation Sent", "success");
        //         // redirect to session url
        //         // window.location.assign("/managers");
        //     } else {
        //         Swal.fire("AH !!", "Something went wrong ", "error");
        //     }
        // });
        clickHandler();
    };
    // pass id for editing info
    const groupEditHandler = (id: any) => {
        setGroupId(id);
        setEditForm((prev) => !prev);
    };

    // update employee info
    const updateGroupHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const existingTeamIndex = myteams.findIndex(
            (eachGroup) => eachGroup.uid === groupId
        );
        const existingGroup = myteams[existingTeamIndex];
        // const {  first_name:employeeName } = employee;
        const updatedTeam = {
            ...existingGroup,
            name: groupName || "",
        };

        const updateTeamList = [...myteams];
        updateTeamList[existingTeamIndex] = updatedTeam;
        setMyteams(updateTeamList);
        setEditForm((prev) => !prev);
    };
    const deleteTeamHandler = (id: any) => {
        const allTeam = myteams.filter((team) => team.uid !== id);
        setMyteams(allTeam);
    };
    return (
        <>
            <Layout>
                <Content>
                    <Card height="100%">
                        <StyledHeader>
                            <SectionTitle title="Groups" />
                            <>
                                <Modal
                                    show={show}
                                    onClose={clickHandler}
                                    size="md"
                                >
                                    <form onSubmit={submitForm}>
                                        <ModalHeader>
                                            <ModalTitle>
                                                Enter Group Name
                                            </ModalTitle>
                                            <ModalClose onClose={clickHandler}>
                                                x
                                            </ModalClose>
                                        </ModalHeader>
                                        <ModalBody>
                                            <Container>
                                                <Row>
                                                    <Col col>
                                                        <Input
                                                            name="groupName"
                                                            id="groupName"
                                                            placeholder="Enter group Name"
                                                            mb="10px"
                                                            type="text"
                                                            onChange={(e) =>
                                                                groupHandler(e)
                                                            }
                                                        />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ModalBody>

                                        <ModalFooter>
                                            <Button
                                                color="secondary"
                                                onClick={clickHandler}
                                            >
                                                Close
                                            </Button>
                                            <Button
                                                type="submit"
                                                color="primary"
                                            >
                                                Create
                                            </Button>
                                        </ModalFooter>
                                    </form>
                                </Modal>

                                <Button onClick={clickHandler}>
                                    Create Group
                                </Button>
                            </>
                        </StyledHeader>
                        <CardBody>
                            <Table theadColor="primary">
                                <thead>
                                    <StyledTheadTR>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </StyledTheadTR>
                                </thead>
                                <tbody>
                                    <>
                                        <Modal
                                            onClose={editHandler}
                                            size="md"
                                            show={showEditForm}
                                        >
                                            <form onSubmit={updateGroupHandler}>
                                                <ModalHeader>
                                                    <ModalTitle>
                                                        Edit Info
                                                    </ModalTitle>
                                                    <ModalClose
                                                        onClose={editHandler}
                                                    >
                                                        x
                                                    </ModalClose>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <Container>
                                                        <Row>
                                                            <Col col>
                                                                <Input
                                                                    name="name"
                                                                    id="name"
                                                                    placeholder="Enter name"
                                                                    mb="10px"
                                                                    type="text"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        groupHandler(
                                                                            e
                                                                        )
                                                                    }
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button
                                                        color="secondary"
                                                        onClick={editHandler}
                                                    >
                                                        Close
                                                    </Button>
                                                    <Button
                                                        type="submit"
                                                        color="primary"
                                                    >
                                                        Save changes
                                                    </Button>
                                                </ModalFooter>
                                            </form>
                                        </Modal>
                                        {/* <Button onClick={editHandler}>
                                            Open Modal
                                        </Button> */}
                                    </>
                                    {myteams?.map((team) => (
                                        <tr key={team.uid}>
                                            <StyledTD>{team.name}</StyledTD>

                                            <StyledTD>
                                                <StyledIcon
                                                    onClick={() =>
                                                        groupEditHandler(
                                                            team.uid
                                                        )
                                                    }
                                                >
                                                    <i className="fa fa-pencil-alt" />
                                                </StyledIcon>

                                                <StyledIcon
                                                    onClick={() =>
                                                        deleteTeamHandler(
                                                            team.uid
                                                        )
                                                    }
                                                    ml="10px"
                                                >
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

export default observer(Groups);
