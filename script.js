    // script.js
    document.addEventListener('DOMContentLoaded', () => {
        fetch('https://primestakepool.github.io/dbsnapshot/mainnet-db-snapshot.json') // Path to your JSON file
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('data-container');
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.innerHTML = `
                        <h2>${item.id}</h2>
                        <p>DB Date: ${item.db_date}</p>
                        <p>Node Version: ${item.node_version}</p>
                    `;
                    container.appendChild(div);
                });
            })
            .catch(error => console.error('Error fetching JSON:', error));
    });
