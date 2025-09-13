    // script.js
    document.addEventListener('DOMContentLoaded', () => {
        fetch('data.json') // Path to your JSON file
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('data-container');
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.innerHTML = `
                        <h2>${item.name}</h2>
                        <p>Age: ${item.age}</p>
                        <p>City: ${item.city}</p>
                    `;
                    container.appendChild(div);
                });
            })
            .catch(error => console.error('Error fetching JSON:', error));
    });
