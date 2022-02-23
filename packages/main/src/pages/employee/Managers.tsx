/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
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

type TInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const Managers: React.FC = () => {
    const teamStore = useContext(TeamStore);
    const { myteams, teamName } = teamStore;

    console.log("myTeam", toJS(teamName));
    const teams: Team[] = [];
    myteams.map((team) => teams.push(team));

    const managers: User[] = [];
    myteams.map((team) => managers.push(team.manager));

    const [show, setShow] = useState(false);
    const clickHandler = () => {
        setShow((prev) => !prev);
    };
    const [groupName, setGroupName] = useState("");
    const [managerName, setManagerName] = useState("");
    const [mail, setMail] = useState("");
    const teamHandler = (e: React.ChangeEvent<TInput>) => {
        setGroupName(e.target.value);
    };
    const managerHandler = (e: React.ChangeEvent<TInput>) => {
        setManagerName(e.target.value);
    };
    const mailHandler = (e: React.ChangeEvent<TInput>) => {
        setMail(e.target.value);
    };
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            groupName,
            managerName,
            mail,
        };
        console.log(data);
    };
    const inviteManagers = () => {
        console.log("hello");

        clickHandler();
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
                                            <form onSubmit={submitForm}>
                                                <Row>
                                                    <Col col>
                                                        <Select
                                                            id=""
                                                            name="groupName"
                                                            mb="10px"
                                                            onChange={
                                                                teamHandler
                                                            }
                                                        >
                                                            <option
                                                                value="DEFAULT"
                                                                disabled
                                                            >
                                                                Select Team
                                                            </option>
                                                            {teams.map(
                                                                (team) => (
                                                                    <option
                                                                        value={
                                                                            team.uid
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
                                                        />
                                                    </Col>
                                                </Row>
                                            </form>
                                        </Container>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button
                                            color="secondary"
                                            onClick={clickHandler}
                                        >
                                            Close
                                        </Button>
                                        <Button color="primary">
                                            Send Invite
                                        </Button>
                                    </ModalFooter>
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
