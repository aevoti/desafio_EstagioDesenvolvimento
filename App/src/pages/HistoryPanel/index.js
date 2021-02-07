import React from 'react';

import './style.css';
import HistoryTable from '../../components/HistoryTable';

function HistoryPanel(props) {
    return (
        <HistoryTable className={props.className}>
            {props.rows}
        </HistoryTable>
    )
}

export default HistoryPanel;