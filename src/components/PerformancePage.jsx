import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PerformancePage = () => {
    const [performanceData, setPerformanceData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/performance');
                setPerformanceData(response.data);
            } catch (error) {
                console.error('Error fetching performance data:', error);
                setError('Unable to fetch performance data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Employee Performance</h1>
            <ul>
                {performanceData.map(performance => (
                    <li key={performance._id}>
                        Employee ID: {performance.employeeId}<br />
                        Date: {performance.date}<br />
                        Performance Score: {performance.performanceScore}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PerformancePage;
