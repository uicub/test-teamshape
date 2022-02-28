/* eslint-disable @typescript-eslint/no-floating-promises */
//* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import Swal from "sweetalert2";
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
import { User, Team } from "../../types/Team";
import api from "../../utils/ApiService";

type TInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const Managers: React.FC = () => {
    const teamStore = useContext(TeamStore);
    const { myteams } = teamStore;

    // console.log("myTeam", toJS(teamName));
    const teams: Team[] = [];
    myteams.map((team) => teams.push(team));

    // const tempTeam = [
    //     { name: "windows Developer", uid: 1 },
    //     { name: "apple Developer", uid: 2 },
    //     { name: "linux Developer", uid: 3 },
    // ];
    const managers = [
        {
            uid: "6218b160673ff5e571b863d8",
            first_name: "Hallie Trevino",
            email: "hallietrevino@everest.com",
            team: "Azure Developer",
            test_completed: true,
        },
        {
            uid: "6218b1604b8e7e3cd7d033c9",
            first_name: "Luna Murray",
            email: "lunamurray@everest.com",
            team: "Azure Developer",
            test_completed: true,
        },
    ];
    // const managers: User[] = [];
    // myteams.map((team) => managers.push(team.manager));
    const [managerList, setManagerList] = useState(managers);

    console.log("MAN", managers);

    // Modal show and close
    const [show, setShow] = useState(false);
    const clickHandler = () => {
        setShow((prev) => !prev);
    };
    // edit form state
    const [showEditForm, setEditForm] = useState(false);

    const editHandler = () => {
        setEditForm((prev) => !prev);
    };
    const [groupName, setGroupName] = useState("");
    const [managerName, setManagerName] = useState("");
    const [managerMail, setManagerMail] = useState("");
    const [managerId, setManagerId] = useState("");
    const groupHandler = (e: React.ChangeEvent<TInput>) => {
        setGroupName(e.target.value);
    };

    const managerHandler = (e: React.ChangeEvent<TInput>) => {
        setManagerName(e.target.value);
    };
    const mailHandler = (e: React.ChangeEvent<TInput>) => {
        setManagerMail(e.target.value);
    };
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            groupName,
            managerName,
            managerMail,
        };

        api.postNewManager(data).then((res) => {
            console.log("resp: ", res);
            res.success = true;
            if (res?.success) {
                Swal.fire("Done!", "Invitation Sent", "success");
                // redirect to session url
                // window.location.assign("/managers");
            } else {
                Swal.fire("AH !!", "Something went wrong ", "error");
            }
        });
        clickHandler();
    };
    // pass id for editing info
    const managerEditHandler = (id: any) => {
        setManagerId(id);
        setEditForm((prev) => !prev);
    };

    // update manager info
    const updateManagerHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("all members", managers);
        const existingMemberIndex = managers.findIndex(
            (eachEmployee) => eachEmployee.uid === managerId
        );
        const existingMember = managers[existingMemberIndex];
        // const {  first_name:employeeName } = employee;
        const updatedMember = {
            ...existingMember,
            first_name: managerName || "",
            email: managerMail || "",
            team: groupName || "",
            test_completed: "" || true,
        };

        const updateMemberList = [...managers];
        updateMemberList[existingMemberIndex] = updatedMember;
        setManagerList(updateMemberList);
        setEditForm((prev) => !prev);
    };
    const deleteEmployeeHandler = (id: any) => {
        const allMembers = managers.filter((member) => member.uid !== id);
        setManagerList(allMembers);
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
                                    size="md"
                                >
                                    <form onSubmit={submitForm}>
                                        <ModalHeader>
                                            <ModalTitle>
                                                Manager Invitation
                                            </ModalTitle>
                                            <ModalClose onClose={clickHandler}>
                                                x
                                            </ModalClose>
                                        </ModalHeader>
                                        <ModalBody>
                                            <Container>
                                                <Row>
                                                    <Col col>
                                                        <Select
                                                            id=""
                                                            name="groupName"
                                                            mb="10px"
                                                            onChange={
                                                                groupHandler
                                                            }
                                                        >
                                                            <option value="0">
                                                                Select a team
                                                            </option>
                                                            {teams.map(
                                                                (team) => (
                                                                    <option
                                                                        value={
                                                                            team.name
                                                                        }
                                                                        key={
                                                                            team.uid
                                                                        }
                                                                    >
                                                                        {
                                                                            team.name
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </Select>
                                                        <Input
                                                            name="managerName"
                                                            id="managerName"
                                                            placeholder="Enter name"
                                                            mb="10px"
                                                            type="text"
                                                            onChange={(e) =>
                                                                managerHandler(
                                                                    e
                                                                )
                                                            }
                                                        />
                                                        <Input
                                                            name="managerMail"
                                                            id="managerMail"
                                                            placeholder="Enter email address"
                                                            type="email"
                                                            onChange={(e) =>
                                                                mailHandler(e)
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
                                                Send Invite
                                            </Button>
                                        </ModalFooter>
                                    </form>
                                </Modal>

                                <Button onClick={clickHandler}>
                                    Invite Manager
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
                                    <>
                                        <Modal
                                            onClose={editHandler}
                                            size="md"
                                            show={showEditForm}
                                        >
                                            <form
                                                onSubmit={updateManagerHandler}
                                            >
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
                                                                <Select
                                                                    id=""
                                                                    name="groupName"
                                                                    mb="10px"
                                                                    onChange={
                                                                        groupHandler
                                                                    }
                                                                >
                                                                    <option value="0">
                                                                        Select a
                                                                        team
                                                                    </option>
                                                                    {myteams.map(
                                                                        (
                                                                            everyTeam
                                                                        ) => (
                                                                            <option
                                                                                value={
                                                                                    everyTeam.name
                                                                                }
                                                                                key={
                                                                                    everyTeam.uid
                                                                                }
                                                                            >
                                                                                {
                                                                                    everyTeam.name
                                                                                }
                                                                            </option>
                                                                        )
                                                                    )}
                                                                </Select>
                                                                <Input
                                                                    name="managerName"
                                                                    id="managerName"
                                                                    placeholder="Enter name"
                                                                    mb="10px"
                                                                    type="text"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        managerHandler(
                                                                            e
                                                                        )
                                                                    }
                                                                />

                                                                <Input
                                                                    name="managerMail"
                                                                    id="managerMail"
                                                                    placeholder="Enter email address"
                                                                    type="email"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        mailHandler(
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
                                    {managerList?.map((member) => (
                                        <tr key={member.uid}>
                                            <StyledTD>
                                                {member.first_name}
                                            </StyledTD>
                                            <StyledTD>{member.email}</StyledTD>
                                            <StyledTD>{member.team}</StyledTD>
                                            <StyledTD>
                                                <StyledIcon
                                                    onClick={() =>
                                                        managerEditHandler(
                                                            member.uid
                                                        )
                                                    }
                                                >
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
