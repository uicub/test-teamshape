/* eslint-disable @typescript-eslint/no-floating-promises */
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { observer } from "mobx-react-lite";
import {
    Label,
    FormGroup,
    Card,
    CardHeader,
    CardBody,
    Button,
} from "@doar/components";
import Swal from "sweetalert2";
import session from "../../../stores/sessionStore";
import { IProfileInput } from "../../../types/Team";


const UpdateOption: FC = () => {
    const {
        register,
        handleSubmit,
    } = useForm<IProfileInput>();

    const formdata = new FormData();
    formdata.append("photo", "");

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            formdata.append("photo", e.target.files[0]);
        }
    };

    const onSubmit: SubmitHandler<IProfileInput> = (data) => {
        formdata.append("first_name", data.first_name);
        formdata.append("last_name", data.last_name);
        formdata.append("old_password", data.old_password);
        formdata.append("new_password", data.new_password);

        console.log(formdata);
        session.updateProfile(formdata).then((resp) => {
            console.log("in then: ", resp);
            if (!resp?.error) {
                console.log("success");
                Swal.fire(
                    "Success !!",
                    "Profile Updated SUccessfully",
                    "success"
                );
            } else {
                const respMsg: string = resp?.data?.msg;
                console.log("respMsg", respMsg);
                Swal.fire("Failed !!", respMsg, "error");
            }
        });
    };
    const user = session.sessionUser;
    return (
        <Card>
            <CardHeader>Update Profile</CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup mb="20px">
                        <Label display="block" mb="5px" htmlFor="teamId">
                            First Name
                        </Label>
                        <input
                            id="firstName"
                            type="text"
                            defaultValue={user?.first_name}
                            {...register("first_name")}
                        />
                    </FormGroup>
                    <FormGroup mb="20px">
                        <Label display="block" mb="5px" htmlFor="teamId">
                            Last Name
                        </Label>
                        <input
                            id="lastName"
                            type="text"
                            defaultValue={user?.last_name}
                            {...register("last_name")}
                        />
                    </FormGroup>
                    <FormGroup mb="20px">
                        <Label display="block" mb="5px" htmlFor="teamId">
                            Email
                        </Label>
                        <input
                            id="email"
                            type="text"
                            defaultValue={user?.email}
                            {...register("email")}
                        />
                    </FormGroup>
                    <FormGroup mb="20px">
                        <Label display="block" mb="5px" htmlFor="teamId">
                            Old Password
                        </Label>
                        <input
                            id="oldPassword"
                            type="password"
                            {...register("old_password")}
                        />
                    </FormGroup>
                    <FormGroup mb="20px">
                        <Label display="block" mb="5px" htmlFor="teamId">
                            New Password
                        </Label>
                        <input
                            id="newPassword"
                            type="password"
                            {...register("new_password")}
                        />
                    </FormGroup>
                    <FormGroup mb="20px">
                        <Label display="block" mb="5px" htmlFor="teamId">
                            Update Photo
                        </Label>
                        <input
                            id="idPhoto"
                            type="file"
                            onChange={changeHandler}
                        />
                    </FormGroup>

                    <div className="button-section">
                        <Button className="button submit" type="submit">
                            Update Profile
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
};

export default observer(UpdateOption);
