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
import UpdateForm from "./Form/UpdateForm";

type TInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

function Employee() {
    const teamStore = useContext(TeamStore);
    const { team, myteams } = teamStore;
    const teamMember = team?.members;

    const notTestedAlert = () => {
        Swal.fire("", "Test not completed", "error");
    };

    // const tempTeam = [
    //     { name: "windows", uid: 1 },
    //     { name: "apple", uid: 2 },
    //     { name: "linux", uid: 3 },
    // ];

    const employees: User[] = [];
    // tempTeam.map((eachTeam) => employees.push(eachTeam.members));

    const [show, setShow] = useState(false);
    const clickHandler = () => {
        setShow((prev) => !prev);
    };
    const [showEditForm, setEditrForm] = useState(false);
    type Props = {
        id: string;
    };
    const editHandler = () => {
        setEditrForm((prev) => !prev);
    };
    const editDataHandler = ({ id }: Props) => {
        console.log("id", id);

        setEditrForm((prev) => !prev);
    };
    const [groupName, setGroupName] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [employeeMail, setEmployeeMail] = useState("");
    const groupHandler = (e: React.ChangeEvent<TInput>) => {
        setGroupName(e.target.value);
    };
    const employeeHandler = (e: React.ChangeEvent<TInput>) => {
        setEmployeeName(e.target.value);
    };
    const mailHandler = (e: React.ChangeEvent<TInput>) => {
        setEmployeeMail(e.target.value);
    };
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            groupName,
            employeeName,
            employeeMail,
        };
        console.log("employee", data);

        api.postNewEmployee(data).then((res) => {
            console.log("resp: ", res);
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
                                                            name="groupName"
                                                            mb="10px"
                                                            onChange={
                                                                groupHandler
                                                            }
                                                        >
                                                            <option value="0">
                                                                Select a team
                                                            </option>
                                                            {myteams.map(
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
                                                                employeeHandler(
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
                                                Send Invite
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
                                                <p>test</p>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button
                                                    color="secondary"
                                                    onClick={editHandler}
                                                >
                                                    Close
                                                </Button>
                                                <Button color="primary">
                                                    Save changes
                                                </Button>
                                            </ModalFooter>
                                        </Modal>
                                        {/* <Button onClick={editHandler}>
                                            Open Modal
                                        </Button> */}
                                    </>
                                    {teamMember?.map((member) => (
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
                                                    // onClick={() =>
                                                    //     editDataHandler(6)
                                                    // }
                                                    ml="10px"
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
}

export default observer(Employee);
