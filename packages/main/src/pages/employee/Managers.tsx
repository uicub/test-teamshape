/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext } from "react";
import { observer } from 'mobx-react-lite';
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
    StyledHeader,
} from "./style";
import { User } from "../../types/Team"

const Managers:React.FC = () => {
    const teamStore = useContext(TeamStore);
    const { myteams } = teamStore;
    const managers:User[] = []
    myteams.map((team)=>(
        managers.push(team.manager)
    ))
  return (
    <>
        <Layout>
            <Content>
                <Card height="100%">
                    <StyledHeader>
                        <SectionTitle title="Managers" />
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
