import React from 'react';
import DataGrid from 'devextreme-react/data-grid';
import {customers} from '../data/data'

const Grid = (props) => {
    const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
    const generateSize = () => {
        switch (props.tableId) {
            case 1:
                return '1';
            case 2:
                return '2';
            case 3:
                return '3';
            case 4:
                return '4';
            case 5:
                return '5';
            case 6:
                return '6';
            default:
                return 'full'

        }
    };

    return <div className={`grid table-${props.tableId} table-${props.applyDirectionCols}-${generateSize()}`}>
        <h1>{`Table-${props.tableId}`}</h1>
        <DataGrid
            dataSource={customers}
            defaultColumns={columns}
            showBorders={true}
            columnMinWidth={150}
        />
    </div>
};

export default Grid;