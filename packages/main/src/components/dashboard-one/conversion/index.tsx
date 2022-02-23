import { FC } from "react";
import { ApexRadialChart, Card, CardBody } from "@doar/components";
import { observer } from "mobx-react-lite";
import { IConversion } from "@doar/shared/types";
// import { useAppSelector } from "../../../redux/hooks";
import {
    StyledCardTitle,
    StyledChart,
} from "./style";

type IProps = Omit<IConversion, "id">;

const Conversion: FC<IProps> = ({ title, rate }) => {

    
    const options = {
        chart: {
          height: 280,
          type: "radialBar",
        },
        series: [rate],
        colors: ["#20E647"],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            track: {
              background: '#333',
              startAngle: -135,
              endAngle: 135,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                fontSize: "30px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "butt"
        },
        labels: ["Progress"]
      };

    return (
        <Card>
            <CardBody>
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledChart>
                    <ApexRadialChart options={options} series={options.series}/>
                </StyledChart>
                {/* <StyledCardBottom>
                    <StyledCardRate>{rate}</StyledCardRate>
                    {/* <StyledCardText>
                        <StyledChangePercent $growth={change.growth}>
                            {change?.percentage}{" "}
                            {change?.growth === "up" && (
                                <i className="fa fa-arrow-up" />
                            )}
                            {change?.growth === "down" && (
                                <i className="fa fa-arrow-down" />
                            )}{" "}
                        </StyledChangePercent>
                        {change?.time && <>{change?.time}</>}
                    </StyledCardText>
                </StyledCardBottom> */}
                
            </CardBody>
        </Card>
    );
};

export default observer(Conversion);
