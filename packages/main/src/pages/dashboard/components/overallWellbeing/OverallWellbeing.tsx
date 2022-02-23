/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import "antd/lib/switch/style/index.css";
import { Switch } from 'antd';
// import RangeValue from 'rc-picker';
import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Dot,
    // Tooltip,
    DotProps,
} from "recharts";
import TeamStore from "../../../../stores/teamStore";
// import { constants } from './OverallWellbeing.constants';
import styles from "./OverallWellbeing.module.css";

// const { RangePicker } = DatePicker;

const CustomizedActiveDot = (
    props: JSX.IntrinsicAttributes &
        JSX.IntrinsicClassAttributes<Dot> &
        Readonly<DotProps> &
        Readonly<{ children?: React.ReactNode }>
) => {
    return <Dot {...props} />;
};

const OverallWellbeing = () => {
    const teamStore = useContext(TeamStore);
    const { formattedWellbeing } = teamStore;
    const [mental, setMental] = useState(true);
    const [people, setPeople] = useState(true);
    const [leadership, setLeadership] = useState(true);
    const [selected, setSelected] = useState("");
    return (
        <>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>Overall wellbeing timeline</div>
            <div className={styles.switchesContainer}>
              <div className={styles.switchContainer}>
                <div className={styles.switchMental}>
                  <Switch checked={mental} onChange={(val) => setMental(val)} />
                </div>
                <div className={styles.switchLabel}>Mental Health</div>
              </div>
              <div className={styles.switchContainer}>
                <div className={styles.switchPeople}>
                  <Switch checked={people} onChange={(val) => setPeople(val)} />
                </div>
                <div className={styles.switchLabel}>People & Culture</div>
              </div>
              <div className={styles.switchContainer}>
                <div className={styles.switchLeadership}>
                  <Switch
                    checked={leadership}
                    onChange={(val) => setLeadership(val)}
                  />
                </div>
                <div className={styles.switchLabel}>Leadership</div>
              </div>
            </div>
            <div className={styles.selectContainer}>
              {/* <RangePicker
                value={teamStore.overallDateFilter as unknown as RangeValue<moment.Moment>}
              /> */}
            </div> 
          </div>
          <div className={styles.content}>
            {formattedWellbeing && !!Object.keys(formattedWellbeing).length && (
              <ResponsiveContainer>
                <ComposedChart width={500} height={400} data={formattedWellbeing}>
                  <defs>
                    <linearGradient
                      id="colorPeopleCulture"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="10%" stopColor="#2B5CFF" stopOpacity={0.5} />
                      <stop offset="90%" stopColor="#2B5CFF" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorLeadership"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="10%" stopColor="#F3781A" stopOpacity={0.8} />
                      <stop offset="90%" stopColor="#F3781A" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorMentalHealth"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="10%" stopColor="#F1466E" stopOpacity={0.8} />
                      <stop offset="90%" stopColor="#F1466E" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="date" />
                  <YAxis type="number" domain={[0, 100]} />
                  {/* <Tooltip
                    formatter={(value: unknown, name: string | number) => [value, constants.labels[name]]}
                  /> */}
                  {people && selected !== 'peopleCulture' && (
                    <Line
                      type="monotone"
                      connectNulls
                      dataKey="peopleCulture"
                      stroke="#2B5CFF"
                      onClick={() => {
                        setSelected('peopleCulture');
                      }}
                      dot={false}
                      activeDot={
                        <CustomizedActiveDot
                          onClick={() => setSelected('peopleCulture')}
                        />
                      }
                    />
                  )}
                  {people && selected === 'peopleCulture' && (
                    <Area
                      type="monotone"
                      dataKey="peopleCulture"
                      fillOpacity={1}
                      fill="url(#colorPeopleCulture)"
                      stroke="#2B5CFF"
                      dot={{ stroke: '#fff', strokeWidth: 2 }}
                    />
                  )}
                  {leadership && selected !== 'leadership' && (
                    <Line
                      type="monotone"
                      connectNulls
                      dataKey="leadership"
                      stroke="#F3781A"
                      onClick={() => {
                        setSelected('leadership');
                      }}
                      dot={false}
                      activeDot={
                        <CustomizedActiveDot
                          onClick={() => setSelected('leadership')}
                        />
                      }
                    />
                  )}
                  {leadership && selected === 'leadership' && (
                    <Area
                      type="monotone"
                      dataKey="leadership"
                      fillOpacity={1}
                      fill="url(#colorLeadership)"
                      stroke="#F3781A"
                      dot={{ stroke: '#fff', strokeWidth: 2 }}
                    />
                  )}
                  {mental && selected !== 'mentalHealth' && (
                    <Line
                      type="monotone"
                      connectNulls
                      dataKey="mentalHealth"
                      stroke="#F1466E"
                      onClick={() => {
                        setSelected('mentalHealth');
                      }}
                      dot={false}
                      activeDot={
                        <CustomizedActiveDot
                          onClick={() => setSelected('mentalHealth')}
                        />
                      }
                    />
                  )}
                  {mental && selected === 'mentalHealth' && (
                    <Area
                      type="monotone"
                      dataKey="mentalHealth"
                      fillOpacity={1}
                      fill="url(#colorMentalHealth)"
                      stroke="#F1466E"
                      dot={{ stroke: '#fff', strokeWidth: 2 }}
                    />
                  )}
                </ComposedChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
        </>
      );
    };
    
    export default observer(OverallWellbeing);