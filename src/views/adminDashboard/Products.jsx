import React from 'react';
import { Card, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import "../../App.css"

const columns = [
    {
        name: 'Image',
        selector: row => row.order,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.date,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
    {
        name: 'Price',
        selector: row => row.total,
        sortable: true,
    },
    {
        name: 'Action',
        selector: row => row.action,
        sortable: true,
    },
];

const data = [
    {
        "order": "123",
        "date": "Apple",
        "status": "status",
        "total": 454,
        "action": "view",
    },
    {
        "order": "312413",
        "date": "Apple",
        "status": "status",
        "total": 454,
        "action": "view",

    },
    {
        "order": "54353",
        "date": "Apple",
        "status": "status",
        "total": 454,
        "action": "view",
    },
    {
        "order": "546564",
        "date": "Apple",
        "status": "status",
        "total": 454,
        "action": "view",

    }
];

function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ',';
    const lineDelimiter = '\n';
    const keys = Object.keys(array[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach(item => {
        let ctr = 0;
        keys.forEach(key => {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];

            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function downloadCSV(array) {
    const link = document.createElement('a');
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute('href', encodeURI(csv));
    link.setAttribute('download', filename);
    link.click();
}

const Export = ({ onExport }) => <Button onClick={onExport} className='btn_filled'>Export</Button>;

export default function Products() {
    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(data);
            setPending(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const handleExport = () => {
        downloadCSV(data);
    };

    const actionsMemo = React.useMemo(() => <Export onExport={handleExport} />, []);

    return (
        <>
            <Card className='p-3'>
                <DataTable title="Products" columns={columns} data={rows} progressPending={pending} actions={actionsMemo} selectableRows pagination />
            </Card>
        </>
    )
};
