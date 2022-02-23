import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { observer } from 'mobx-react-lite';

interface Data {
  [key: string]: string | number;
}

type PropsType = {
  data: Data[];
  height: number;
  colors: string[];
  keys: string[];
};

const Radar: React.FC<PropsType> = ({ data, height, colors, keys }) => {
  return (
    <div style={{ height }}>
      <ResponsiveRadar
        data={data}
        keys={keys}
        indexBy="type"
        maxValue={100}
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [] }}
        gridLabelOffset={15}
        dotSize={6}
        dotColor={{ from: 'color', modifiers: [] }}
        dotBorderColor={{ from: 'color', modifiers: [] }}
        enableDotLabel
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={colors}
        fillOpacity={0.3}
        animate={false}
        isInteractive
        legends={[]}
      />
    </div>
  );
};

export default observer(Radar);
