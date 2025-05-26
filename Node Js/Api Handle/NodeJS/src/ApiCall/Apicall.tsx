import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiCall = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 3000));
            const response = await axios.get('https://dummyjson.com/users');
            setData(response.data.users);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <h3>Api Call Component</h3>
            <button onClick={fetchData}>Fetch Data</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={4}>Loading...</td>
                        </tr>
                    ) : (
                        data.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
};

export default ApiCall;
