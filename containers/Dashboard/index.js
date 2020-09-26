import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Dashboard({ user, loading = false }) {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    "/api/clients"
                );
                setClients(data);
            } catch (error) {
                console.error("este es mi error", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>{`user dashboard: ${user.name}`}</div>
            { clients.map(client => <h3>{client.name}</h3>)}
        </>
    );
}
