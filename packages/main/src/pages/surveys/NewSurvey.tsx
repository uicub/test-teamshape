/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import {
    Card,
    CardBody,
    CardHeader,
    Label,
    FormGroup,
    Select,
    Input,
    Button,
    Row,
    Col
} from "@doar/components";
import Swal from 'sweetalert2'
import React, { FC, useState, useContext } from 'react';
import { observer } from "mobx-react-lite";
import TeamStore from "../../stores/teamStore";
import DatePicker from "../../components/date-picker";
import api from "../../utils/ApiService"
import Layout from "../../layouts";
import Content from "../../layouts/content";

type TInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const NewSurvey: FC = () => {

    const [questions, setQuestions] = useState(
        [
            {"id": 1, "question": "", "title": "Q1"},
            {"id": 2, "question": "", "title": "Q2"},
            {"id": 3, "question": "", "title": "Q3"},
        ]
        )
    const [team, setTeam] = useState("")
    const [week, setWeek] = useState("1")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    
    const teamStore = useContext(TeamStore);
    const { myteams } = teamStore

    const updateQuestion = (i:number,  e:React.ChangeEvent<TInput>) => {
        const newQuestions = [...questions];
        newQuestions[i].question = e.target.value;
        setQuestions(newQuestions);
     }

     const updateTeam = (e:React.ChangeEvent<TInput>) => {
        setTeam(e.target.value)
     }
        
    const addFormFields = () => {
        const questionLen = questions.length
        const newField = {
            id: questionLen + 1,
            "question": "",
            "title": `Q${questionLen + 1}`
        }
        setQuestions([...questions, newField])
     }

     const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
        const data = {
            team,
            week,
            startDate,
            endDate,
            questions
        }
        console.log(data)
        api.postNewSuervey(data)
        .then((res) => {
            console.log("resp: ", res)
            // const redirectUrl = res?.data.redirect_url;
            if (res?.success) {
                Swal.fire(
                    "Good Job",
                    "Survey created successfully",
                    "success"
                )
                // redirect to session url
                window.location.assign('/surveys');
            } else {
                Swal.fire(
                    "AH !!",
                    "Something went wrong ",
                    "error"
                )
            }
        });
      }
    
    const changeStartDate = (name: string, date: string) => {
        setStartDate(date)
    }
    const changeEndDate = (name: string, date: string) => {
        setEndDate(date)
    }
    
  return (<>
    <Layout>
        <Content>
            <Card>
                <CardHeader>Create New Survey</CardHeader>
                <CardBody>
                    <form  onSubmit={submitForm}>
                        <Row>
                            <Col col={6}>
                                <FormGroup mb="20px">
                                    <Label display="block" mb="5px" htmlFor="teamId">
                                        Team
                                    </Label>
                                    <Select id="teamId" name="team" value={team} 
                                        onChange={updateTeam} 
                                    >
                                        <option value="0">
                                            Select a team
                                        </option>
                                        {myteams.map((mteam)=>(
                                            <option value={mteam.uid} key={mteam.uid}>{mteam.name }</option>
                                        ))}
                                    </Select>
                                </FormGroup>
                            </Col>
                            <Col col={6}>
                                <FormGroup mb="20px">
                                    <Label display="block" mb="5px" htmlFor="teamId">
                                        Week
                                    </Label>
                                    <Input id="idWeek" type="number" name="week" onChange={e=>setWeek(e.target.value)}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col col={6}>
                                <FormGroup mb="20px">
                                    <Label display="block" mb="5px" htmlFor="teamId">Start Date</Label>
                                    <DatePicker
                                        id="createStartDate"
                                        name="createStartDate"
                                        placeholder="Select Date"
                                        getDate={changeStartDate}
                                    />
                                </FormGroup>
                            </Col>
                            <Col col={6}>
                                <FormGroup mb="20px">
                                        <Label display="block" mb="5px" htmlFor="teamId">End Date</Label>
                                        <DatePicker
                                            id="createStartDate"
                                            name="createStartDate"
                                            placeholder="Select Date"
                                            getDate={changeEndDate}
                                        />
                                    </FormGroup>
                            </Col>
                        </Row>
                        
                        {questions.map((question, index) => (
                            <FormGroup mb="20px" key={question.id}>
                                <Label display="block" mb="5px" htmlFor="teamId">{question.title}</Label>
                                <Input id={question.title} type="text" name={question.title}
                                 onChange={e=>updateQuestion(index, e)} 
                                 />
                            </FormGroup>
                        ))}
                        <div className="button-section">
                            <Button mr={3}  type="button" onClick={() => addFormFields()}>Add Question</Button>
                            <Button className="button submit" type="submit">Submit</Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </Content>
    </Layout>
  </>
  );
};

export default observer(NewSurvey);
