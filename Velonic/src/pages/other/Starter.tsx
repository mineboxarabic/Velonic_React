import React, { useState, useEffect } from 'react';

interface Character {
    id: number;
    owner: string;
    first_name: string;
    last_name: string;
    dob: string;
    cash: number;
    bankid: number;
}

const CharacterEditor: React.FC = () => {
    const [character, setCharacter] = useState<Character | null>(null);
    const [editFields, setEditFields] = useState<Record<string, any>>({});
    const [logs, setLogs] = useState<string[]>([]); 

    const addLog = (message: string) => {
        setLogs(prevLogs => [...prevLogs, `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    useEffect(() => {
        addLog('Fetching character data...');
        fetch('http://localhost:3001/characters/70') 
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch');
                }
            })
            .then(data => {
                setCharacter(data);
                setEditFields(data);
                addLog('Character data successfully fetched.');
            })
            .catch(error => {
                console.error('Error:', error);
                addLog(`Error fetching character data: ${error.message}`);
            });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        addLog(`Field ${name} changed to ${value}.`);
        setEditFields(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const updateCharacterData = () => {
        addLog('Updating character data...');
        fetch(`http://localhost:3001/characters/70`, { 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editFields),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to update');
            }
        })
        .then(updatedCharacter => {
            setCharacter(updatedCharacter);
            addLog('Character data successfully updated.');
        })
        .catch(error => {
            console.error('Error:', error);
            addLog(`Error updating character data: ${error.message}`);
        });
    };

    return (
        <div>
            {character && Object.entries(character).map(([key, value]) => (
                <p key={key}>
                    {key}: <input
                        type="text"
                        name={key}
                        value={editFields[key] ?? ''}
                        onChange={handleChange}
                    />
                </p>
            ))}
            <button onClick={updateCharacterData}>Update</button>
            <div className="logs">
                {logs.map((log, index) => (
                    <div key={index}>{log}</div>
                ))}
            </div>
        </div>
    );
};

export default CharacterEditor;
