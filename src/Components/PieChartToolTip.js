import React, { useState, ComponentProps } from 'react';
import ReactTooltip from 'react-tooltip';
import { PieChart } from 'react-minimal-pie-chart';

function makeTooltipContent(entry) {
    return `${entry.value} students voted this option`;
}

function PieChartToolTip(props) {
    const [hovered, setHovered] = useState(null);
    const data = props.data.map(({ title, ...entry }) => {
        return {
            ...entry,
            tooltip: title,
        };
    });
    
    const defaultLabelStyle = {
        fontSize: '8px',
        fontFamily: 'sans-serif',
    };

    return (
        <div data-tip="" data-for="chart">
            <PieChart
                data={data}
                onMouseOver={(_, index) => {
                    setHovered(index);
                }}
                onMouseOut={() => {
                    setHovered(null);
                }}
                label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                labelStyle={{
                    ...defaultLabelStyle,
                }}
                style={{ height: '150px', }}
                animate
            />
            <ReactTooltip
                id="chart"
                getContent={() =>
                    typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
                }
            />
        </div>
    );
}

export default PieChartToolTip;