import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';

function Quran() {
    const [quran, setQuran] = useState({});
    const tableRef = useRef(null);
    const dataTableRef = useRef(null);

    useEffect(() => {
        const fetchQuran = async () => {
            const response = await fetch('https://api.alquran.cloud/v1/quran');
            const data = await response.json();
            setQuran(data);
        };
        fetchQuran();
    }, []);

    useEffect(() => {
        if (!quran.data?.surahs?.length || !tableRef.current || dataTableRef.current) {
            return;
        }

        dataTableRef.current = new DataTable(tableRef.current);

        return () => {
            if (dataTableRef.current) {
                dataTableRef.current.destroy();
                dataTableRef.current = null;
            }
        };
    }, [quran]);

    return (
        <div>
            <table id="myTable" ref={tableRef}>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {quran.data?.surahs?.map((surah) => (
                        <tr key={surah.number}>
                            <td>{surah.number}</td>
                            <td>
                                <Link to={`/surah/${surah.number}`}>{surah.name}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Quran; 