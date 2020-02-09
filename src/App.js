import React from 'react';
import Grid from "./components/grid";
import './index.scss';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

function App() {
    //sysform data
    // cols 1-6 or auto if wants to wrap to another line need to add logic
    const groupCols = 6;
    //row or column direction
    const direction = 'row';
    //count of tables/groups
    const tableCount = 10;
    const content = [];
    //need for transforming the name of classes
    //direction - row -> need to set size of cols
    //direction - column -> need to set size of rows
    const applyDirectionCols = direction === 'row' ? 'cols' : 'rows';
    // const checkFractionOfContent = tableCount%groupCols;
    for (let i = 1; i <= tableCount; i++) {
        content.push(<Grid tableId={i} applyDirectionCols={applyDirectionCols}/>)
    }

    return <div
        className={`container 
        ${applyDirectionCols}-${groupCols}
        direction-${direction}`}
        // rows-${Math.ceil(tableCount / groupCols)}
    >
        {content}
    </div>
}

export default App;
