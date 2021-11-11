
import { React, useState, useEffect } from 'react';

export default function UseEffect() {
    const [repositories, setRespositories] = useState([]);


    useEffect(async () => {
        const response = await fetch('https://api.github.com/users/gabrielmagevski/repos');
        const data = await response.json();

        setRespositories(data);
    }, []);

    useEffect(() => {
        const filtered = repositories.filter(repo => repo.favorite)

        document.title = `Você tem ${filtered.length} favoritos`
    }, [repositories]);


    function handleFavorite(id) {
        const newRepositories = repositories.map(repo => {
            return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
        });

        setRespositories(newRepositories);
    }

    return (
        <>
            <h1>Welcome to the Hook useEffect!</h1>
            <ul>
                {repositories.map(repo => (
                    <>
                        <li key={repo.id}>
                            {repo.name}</li>
                        {repo.favorite && <span>(Favorite)</span>}
                        <button onClick={() => handleFavorite(repo.id)}>Favorite Repository</button>
                    </>
                ))}
            </ul>
        </>
    );
}
