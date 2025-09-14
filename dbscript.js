function copyCode() {
            const codeBlock = document.getElementById('myCodeBlock');
            const codeText = codeBlock.innerText;

            navigator.clipboard.writeText(codeText)
                .then(() => {
                    alert('Code copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy code: ', err);
                    alert('Failed to copy code.');
                });
        }
    
    
