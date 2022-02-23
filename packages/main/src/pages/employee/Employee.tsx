/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from "react";
import { Send } from "react-feather";
import { observer } from 'mobx-react-lite';
import Swal from "sweetalert2";
import {
    Card,
    CardBody,
    Table,
    SectionTitle,
} from "@doar/components";
import Layout from "../../layouts";
import Content from "../../layouts/content";
import TeamStore from "../../stores/teamStore";
import {
    StyledTheadTR,
    StyledTD,
    StyledIcon,
    StyledHeaderRight,
    StyledHeader,
} from "./style";
import { StyledButton } from "../baseStyle";

function Employee() {
    const teamStore = useContext(TeamStore);
    const { team } = teamStore;
    const teamMember = team?.members;

    const notTestedAlert = () => {
        Swal.fire(
            "",
            "Test not completed",
            "error"
        );
    }

    return (
        <>
            <Layout>
                <Content>
                    <Card height="100%">
                        <StyledHeader>
                            <SectionTitle title="Employees" />
                            <StyledHeaderRight>
                                <StyledButton 
                                size="sm"
                                hasIcon>
                                  <Send />
                                  Invite
                                </StyledButton>
                            </StyledHeaderRight>
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
                                    {teamMember?.map((member) => (
                                        <tr key={member.uid}>
                                            <StyledTD>
                                                {member.first_name}
                                            </StyledTD>
                                            <StyledTD>{member.email} {member.test_completed }</StyledTD>
                                            <StyledTD>{member.team}</StyledTD>
                                            <StyledTD>
                                                {member.test_completed ? (
                                                    <StyledIcon href={`/user/${member.uid}`}>
                                                        <i className="fa fa-eye" />
                                                    </StyledIcon>
                                                ):
                                                (
                                                    <StyledIcon onClick={notTestedAlert}>
                                                        <i className="fa fa-eye" />
                                                    </StyledIcon>
                                                )}
                                                

                                                <StyledIcon href="/" ml="10px">
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
