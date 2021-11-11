
import { React, useState } from 'react';

export default function UseState() {
    const [repositories, setRespositories] = useState([

        { id: 1, name: "repo-1" },
        { id: 2, name: "repo-2" },
        { id: 3, name: "repo-3" },
    ]);

    function handleAddRepository() {
        setRespositories([...repositories,
        { id: Math.random(), name: "New Repository" }
        ]);
    }

    return (
        <>
        <h1>Welcome to the hook UseState</h1>
            <ul>
                {repositories.map(repo => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>

            <button onClick={handleAddRepository}>Add new Repositorie in list</button>
        </>
    );
}
