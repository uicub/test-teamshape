/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import classnames from "classnames";
import { Tooltip } from "antd";
import { TeamBigFiveParsed } from "../../../types/Team";
import Avatar from "../../avatar/Avatar";
import { constants } from "./TeamBar.constants";
import "./Teambar.css";

type PropsType = {
    members: TeamBigFiveParsed[];
    property: string;
    labelA: React.ReactElement;
    labelB: React.ReactElement;
};
const TeamBar: React.FC<PropsType> = ({
    members,
    property,
    labelA,
    labelB,
}) => {
    console.log(members, property)
    return (
        <div className="container">
            <div className="barContainer">
                <div className="bars">
                    {constants.ranges.map(() => (
                        <div key={uuidv4()} className="rangeBar" />
                    ))}
                </div>
                <div className="ranges">
                    {constants.ranges.map((range, index) => (
                        <div
                            key={uuidv4()}
                            className={classnames("label", {
                                "rangeBarAbsolute":
                                    index !== 0 &&
                                    index !== constants.ranges.length - 1,
                            })}
                            style={
                                (index !== 0 &&
                                    index !== constants.ranges.length - 1 && {
                                        left: `${range - 1}%`,
                                    }) ||
                                {}
                            }
                        >
                            {/* {`${range}%`} */}
                        </div>
                    ))}
                </div>
                <div className="bar" />

                {members.map(
                    (member) =>
                        member?.data && (
                            <Tooltip
                                key={member.user.uid}
                                placement="top"
                                title={`${member.user.first_name} ${member.user.last_name} ${member.data[property]}%`}
                            >
                                <div
                                    className="member"
                                    style={{
                                        left: `calc(${member.data[property]}% - 25px)`,
                                    }}
                                >
                                    <Avatar
                                        user={member.user}
                                        team={member.user.uid === "1"}
                                    />
                                </div>
                            </Tooltip>
                        )
                )}
            </div>
            <div className="labelsContainer">
                <div>{labelB}</div>
                <div>{labelA}</div>
            </div>
        </div>
    );
};

export default TeamBar;
