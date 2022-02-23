/* eslint-disable @typescript-eslint/no-floating-promises */
import { FC } from "react";
import { Button } from "@doar/components";
import Swal from "sweetalert2";
import "antd/lib/notification/style/index.css";
import api from "../../utils/ApiService";
import {
    StyledPricing,
    StyledIcon,
    StyleTitle,
    StyledText,
    StyledPrice,
} from "./style";

interface IProps {
    icon: string;
    title: string;
    desc: string;
    price: number;
    isActive: boolean;
    priceId: string;
}

const PricingTable: FC<IProps> = ({
    icon,
    title,
    desc,
    price,
    isActive,
    priceId,
}) => {
    // const [loading, Setloading] = useState(false);
    // Submit purchase request
    const submitFormHandler = (planPriceId: string) => {
        console.log("price id: ", planPriceId);
        api.createCheckoutSession({ planPriceId }).then((res) => {
            const redirectUrl = res?.data.redirect_url;
            if (res?.data && res?.data.success) {
                // redirect to session url
                window.location.assign(redirectUrl);
            } else {
                Swal.fire("AHH !!", "Something went rong", "error");
            }
        });
    };


    return (
        <StyledPricing>
            <StyledIcon>
                <i className={`fab ${icon}`} />
            </StyledIcon>
            <StyleTitle>{title}</StyleTitle>
            <StyledText>{desc}</StyledText>
            <StyledPrice>${price}</StyledPrice>
            <Button
                color="primary"
                fullwidth
                disabled={isActive}
                onClick={() => submitFormHandler(priceId)}
            >
                { isActive? "Activated" : "Choose Plan" }
            </Button>
        </StyledPricing>
    );
};

export default PricingTable;
