/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-floating-promises */
// React Basic and Bootstrap
import React from 'react';
import { observer } from 'mobx-react-lite';

import Layout from "../../layouts";
import Content from "../../layouts/content";
import PricingContainer from '../../containers/pricing';

const PricingPlan = () => {

    return (
      
      <>
      <Layout>
        <Content>
          <PricingContainer />
        </Content>
      </Layout>
      
    </>
  );
};
export default observer(PricingPlan);
