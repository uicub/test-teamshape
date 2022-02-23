/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FC, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { observer } from "mobx-react-lite";
import Swal from "sweetalert2";
import {
    Card,
    CardBody,
    CardHeader,
    Label,
    FormGroup,
    Select,
    Button,
    Row,
    Col,
} from "@doar/components";
import Layout from "../../layouts";
import Content from "../../layouts/content";
import TeamStore from "../../stores/teamStore";
import api from "../../utils/ApiService";


const PersonalAccessment: FC = () => {
    const teamStore = useContext(TeamStore);
    const { myteams } = teamStore;

    const { register, handleSubmit } = useForm<{ team: string }>();

    const onSubmit: SubmitHandler<{ team: string }> = (data) => {
        api.sendPAMail(data).then((res) => {
            if (res?.success) {
                Swal.fire(
                    "Good Job",
                    "Email send to all team members",
                    "success"
                );
            } else {
                Swal.fire("AH !!", "Something went wrong ", "error");
            }
        });
    };
    return (
        <div>
            <Layout>
                <Content>
                    <Card>
                        <CardHeader>Create New Survey</CardHeader>
                        <CardBody>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col>
                                        <FormGroup mb="20px">
                                            <Label
                                                display="block"
                                                mb="5px"
                                                htmlFor="teamId"
                                            >
                                                Team
                                            </Label>
                                            <Select
                                                id="teamId"
                                                {...register("team")}
                                            >
                                                <option value="0">
                                                    Select a team
                                                </option>
                                                {myteams.map((mteam) => (
                                                    <option
                                                        value={mteam.uid}
                                                        key={mteam.uid}
                                                    >
                                                        {mteam.name}
                                                    </option>
                                                ))}
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <div className="button-section">
                                    <Button
                                        className="button submit"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </Content>
            </Layout>
        </div>
    );
};

export default observer(PersonalAccessment);
