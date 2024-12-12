"use client";

const Table = ({data, setData}) => {
    if(!data || data.length === 0) {
        return <p>No data available</p>;
    }

    const headingKeys = Object.keys(data[0]);

    const deleteRow = (index) => {
        setData((prevData) => prevData.filter((_, i) => i !== index));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                   {headingKeys.map((headingKey, index) => (
                        <th key={index}>
                            {headingKey.charAt(0).toUpperCase() + headingKey.slice(1)}
                        </th>
                    ))}
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{rowIndex+1}</td>
                        {headingKeys.map((headingKey, colIndex) => (
                        <td key={colIndex}>
                            {row[headingKey]}
                        </td>
                        ))}
                        <td>
                            <button 
                                onClick={() => deleteRow(rowIndex)} 
                                className="text-2xl font-bold text-red-600"
                            >x</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;