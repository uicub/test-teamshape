// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from "react";
import { observer } from 'mobx-react-lite';
import { Col } from "@doar/components";
// import { conversions } from "@doar/shared/data/dashboard-one";
import Conversion from "../../../components/dashboard-one/conversion";
import { Wellbeing } from '../../../types/Team';
import { constants, types } from '../Wellbeing.constants';

type PropsType = {
    data: Array<Wellbeing>;
  };

  

const RowOne: FC<PropsType> = ({data}) => {
    console.log("chart data: ", data)
    if (!data) {
        return null;
      }
    return (
        <>
        {Object.values(types).map((val) => (
            <Col
                sm={6}
                lg={3}
                mt={["10px", null, null, "0px"]}
                // eslint-disable-next-line react/no-array-index-key
                key={val}
            >
                <Conversion
                    title={constants.strings[val]}
                    rate={data[val]}
                />
            </Col>
        ))}
        </>
    );
};

export default observer(RowOne);
