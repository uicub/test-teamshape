/* eslint-disable @typescript-eslint/no-floating-promises */
import { useContext, FC } from "react";
import { Row, Col } from "@doar/components";
import { observer } from 'mobx-react-lite';
import PricingTable from "../../components/pricing-table";
import PricingStore from "../../stores/PricingStore";

const PricingContainer: FC = () => {
    
    // const [ success, Setsuccess ] = useState(false);

    const PricingStores = useContext(PricingStore);
    const { plans } = PricingStores;

    return (
        <Row justifyContent="center">
            { plans.map((pricing) => (
            <Col col={10} sm={6} md={3} lg={3} key={pricing.id}>
                <PricingTable
                    icon="fa-accessible-icon"
                    title={pricing.name}
                    desc="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
                    price={pricing.price_per_month}
                    isActive={ pricing.is_active }
                    priceId={ pricing.price_id }
                />
            </Col>
            ))}
        </Row>
    );
};

export default observer(PricingContainer);
