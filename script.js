document.addEventListener("DOMContentLoaded", function () {
    fetch('mainnet-db-snapshot.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("dataDisplay");

            // Create HTML elements to display the JSON data
            const nameElement = document.createElement("p");
            nameElement.textContent = "ID: " + data.id;

            const ageElement = document.createElement("p");
            ageElement.textContent = "Date: " + data.db_date;

            const cityElement = document.createElement("p");
            cityElement.textContent = "Node: " + data.node_version;

            // Append the elements to the "dataDisplay" div
            dataDisplay.appendChild(idElement);
            dataDisplay.appendChild(db_dateElement);
            dataDisplay.appendChild(node_versionElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
