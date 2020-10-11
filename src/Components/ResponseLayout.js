import React from 'react'
import PieChartToolTip from './PieChartToolTip'

function ResponseLayout(props) {

    const color = ['#E38627', '#C13C37', '#6A2135', '#6A6139']

    return (
        <div>
            <div className="response-layout-root">
                <div className="response-layout">
                    <div className="question-heading"><p>Question:</p> <p style={{ marginLeft: 5 }}>{props.question}</p></div>
                    <div className="options" >{props.options.map((option, index) => (
                        <p style={{display: 'flex', alignItems: 'center'}}>
                            <div className="color-box" style={{backgroundColor:`${color[index]}`}}>
                                
                            </div>
                            {option}
                        </p>
                    ))}
                    </div>
                </div>
                <div className="pie-chart-root">
                    <PieChartToolTip
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}

                    />
                </div>
            </div>
        </div>
    )
}

export default ResponseLayout
