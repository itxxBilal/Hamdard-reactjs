import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [contacts, setContacts] = useState([]);

    // Fetch the contact messages when the component mounts
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('http://localhost:5000/contacts');
                const data = await response.json();
                setContacts(data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>

            <section className="contact-messages">
                <h3>Contact Messages</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact._id}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.message}</td>
                                <td>{new Date(contact.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default AdminDashboard;
