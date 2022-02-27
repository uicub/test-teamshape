/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext, useState } from "react";
import { Send } from "react-feather";
import { observer } from "mobx-react-lite";
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
import { User } from "../../types/Team";
import api from "../../utils/ApiService";
import {
    StyledTheadTR,
    StyledTD,
    StyledIcon,
    StyledHeaderRight,
    StyledHeader,
} from "./style";

import { StyledButton } from "../baseStyle";

type TInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

function Employee() {
    const teamStore = useContext(TeamStore);

    const { team, myteams: allTeam } = teamStore;
    // const teamMember = team?.members;
    const teamMember = [
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
        {
            uid: "6218b16022fce5760db8a16f",
            first_name: "Madeleine Hardin",
            email: "madeleinehardin@everest.com",
            team: "Azure Developer",
            test_completed: true,
        },
        {
            uid: "6218b1608c7e21fc8ab0aa5b",
            first_name: "Walters Mcneil",
            email: "waltersmcneil@everest.com",
            team: "Windows developer",
            test_completed: true,
        },
        {
            uid: "6218b1605cc530fe16d138bf",
            first_name: "Fran Fletcher",
            email: "franfletcher@everest.com",
            team: "Windows developer",
            test_completed: true,
        },
        {
            uid: "6218b16001c24fb7856adf14",
            first_name: "Riggs Hinton",
            email: "riggshinton@everest.com",
            team: "Windows developer",
            test_completed: true,
        },
        {
            uid: "6218b16079e50365902ab571",
            first_name: "Frank Conner",
            email: "frankconner@everest.com",
            team: "Windows developer",
            test_completed: true,
        },
    ];
    const [employees, setEmployees] = useState(teamMember);
    interface IEmployee {
        uid: string | undefined;
        first_name: string | undefined;
        email: string | undefined;
        team: string | undefined;
        test_completed: boolean | undefined;
    }
    const [employee, setEmployee] = useState<IEmployee>({
        uid: "",
        first_name: " ",
        email: "",
        team: "",
        test_completed: true,
    });

    const notTestedAlert = () => {
        Swal.fire("", "Test not completed", "error");
    };

    const [show, setShow] = useState(false);
    const clickHandler = () => {
        setShow((prev) => !prev);
    };

    const [showEditForm, setEditForm] = useState(false);

    const editHandler = () => {
        setEditForm((prev) => !prev);
    };

    const [teamName, setTeamName] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [employeeMail, setEmployeeMail] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const teamHandler = (e: React.ChangeEvent<TInput>) => {
        setTeamName(e.target.value);
    };
    const employeeNameHandler = (e: React.ChangeEvent<TInput>) => {
        setEmployeeName(e.target.value);
    };
    const mailHandler = (e: React.ChangeEvent<TInput>) => {
        setEmployeeMail(e.target.value);
    };
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            uid: Math.random().toString(16).slice(2),
            team: teamName,
            first_name: employeeName,
            email: employeeMail,
            test_completed: true,
        };

        const allMembers = [...teamMember, { ...data }];
        console.log("all", data.uid);

        setEmployees(allMembers);

        // setTeamMember(allMembers);

        console.log("employee", data);
        api.postNewEmployee(data).then((res) => {
            console.log("resp: ", data);
            // teamMember?.push
            // teamMember = { ...data };

            res.success = true;
            if (res?.success) {
                Swal.fire(
                    "Good Job",
                    "Employee created successfully",
                    "success"
                );
                // redirect to session url
                // window.location.assign("/managers");
            } else {
                Swal.fire("AH !!", "Something went wrong ", "error");
            }
        });
        clickHandler();
    };

    const employeeEditHandler = (id: any) => {
        const targetEmployee = employees.find((member) => member.uid === id);

        console.log("employee", id);
        const singleEmployee = {
            uid: targetEmployee?.uid,
            first_name: targetEmployee?.first_name,
            email: targetEmployee?.email,
            team: targetEmployee?.team,
            test_completed: targetEmployee?.test_completed,
        };

        // setEmployee(singleEmployee);
        // setEmployees();
        setEmployeeId(id);
        setEditForm((prev) => !prev);
    };
    const updateEmployeeHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("id", employee.first_name);
        console.log("all members", employees);
        const existingMemberIndex = employees.findIndex(
            (eachEmployee) => eachEmployee.uid === employeeId
        );
        const existingMember = employees[existingMemberIndex];
        // const {  first_name:employeeName } = employee;
        const updatedMember = {
            ...existingMember,
            first_name: employee?.first_name || "",
            email: employee?.email || "",
            team: employee?.team || "",
            test_completed: employee?.test_completed || true,
        };

        const updateMemberList = [...employees];
        updateMemberList[existingMemberIndex] = updatedMember;

        console.log("list", updateMemberList);
    };
    const deleteEmployeeHandler = (id: any) => {
        const allMembers = employees.filter((member) => member.uid !== id);
        setEmployees(allMembers);
    };
    return (
        <>
            <Layout>
                <Content>
                    <Card height="100%">
                        <StyledHeader>
                            <SectionTitle title="Employees" />
                            <>
                                <Modal
                                    show={show}
                                    onClose={clickHandler}
                                    size="md"
                                >
                                    <form onSubmit={submitForm}>
                                        <ModalHeader>
                                            <ModalTitle>
                                                Create an Employee
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
                                                            name="teamName"
                                                            mb="10px"
                                                            onChange={
                                                                teamHandler
                                                            }
                                                        >
                                                            <option value="0">
                                                                Select a team
                                                            </option>
                                                            {allTeam.map(
                                                                (everyTeam) => (
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
                                                            name="employeeName"
                                                            id="employeeName"
                                                            placeholder="Enter name"
                                                            mb="10px"
                                                            type="text"
                                                            onChange={(e) =>
                                                                employeeNameHandler(
                                                                    e
                                                                )
                                                            }
                                                        />
                                                        <Input
                                                            name="employeeMail"
                                                            id="employeeMail"
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
                                                Create
                                            </Button>
                                        </ModalFooter>
                                    </form>
                                </Modal>

                                <Button onClick={clickHandler}>
                                    Create Employee
                                </Button>
                            </>
                            {/* <StyledHeaderRight>
                                <StyledButton size="sm" hasIcon>
                                    <Send />
                                    Create Employee
                                </StyledButton>
                            </StyledHeaderRight> */}
                        </StyledHeader>
                        <CardBody>
                            <Table theadColor="primary">
                                <thead>
                                    <StyledTheadTR>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>team</th>
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
                                                onSubmit={updateEmployeeHandler}
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
                                                                    name="teamName"
                                                                    mb="10px"
                                                                    onChange={
                                                                        teamHandler
                                                                    }
                                                                >
                                                                    <option value="0">
                                                                        Select a
                                                                        team
                                                                    </option>
                                                                    {allTeam.map(
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
                                                                    name="employeeName"
                                                                    id="employeeName"
                                                                    placeholder="Enter name"
                                                                    mb="10px"
                                                                    type="text"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        employeeNameHandler(
                                                                            e
                                                                        )
                                                                    }
                                                                />

                                                                <Input
                                                                    name="employeeMail"
                                                                    id="employeeMail"
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
                                    {employees?.map((member) => (
                                        <tr key={member.uid}>
                                            <StyledTD>
                                                {member.first_name}
                                            </StyledTD>
                                            <StyledTD>
                                                {member.email}{" "}
                                                {member.test_completed}
                                            </StyledTD>
                                            <StyledTD>{member.team}</StyledTD>
                                            <StyledTD>
                                                {member.test_completed ? (
                                                    <StyledIcon
                                                        href={`/user/${member.uid}`}
                                                    >
                                                        <i className="fa fa-eye" />
                                                    </StyledIcon>
                                                ) : (
                                                    <StyledIcon
                                                        onClick={notTestedAlert}
                                                    >
                                                        <i className="fa fa-eye" />
                                                    </StyledIcon>
                                                )}
                                                <StyledIcon
                                                    onClick={() =>
                                                        employeeEditHandler(
                                                            member.uid
                                                        )
                                                    }
                                                    ml="10px"
                                                >
                                                    <i className="fa fa-pencil-alt" />
                                                </StyledIcon>

                                                <StyledIcon
                                                    ml="10px"
                                                    onClick={() =>
                                                        deleteEmployeeHandler(
                                                            member.uid
                                                        )
                                                    }
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
}

export default observer(Employee);
