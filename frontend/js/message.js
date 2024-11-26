function sendRequest() {
    const requestData = {
        message: 'Hey, just wanting to let you know that you have a visitor!'
    };
    
    fetch('https://web.doremy.ch/visitor_stop', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server response:', data.reply); 
    })
    .catch(error => console.error('Error:', error));
}

