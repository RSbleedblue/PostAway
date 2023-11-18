function loginModal() {
    const email = document.getElementById('emailModal').value;
    const password = document.getElementById('passwordModal').value;
    
    fetch('http://localhost:3700/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(async response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const token = await response.text(); 
        console.log('Token:', token);
        return token;
    })
    .then(data => {
        console.log('Token:', data);
        $('#loginModal').modal('hide');
    })
    .catch(error => {
        console.log('Error:', error);
    });
}

async function SignUpModal() {
    try {
        const name = document.getElementById('NameModal').value;
        const email = document.getElementById('emailSign').value;
        const password = document.getElementById('passwordSign').value;

        const response = await fetch('http://localhost:3700/api/signup', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Response was not ok');
        }

        const data = await response.json();
        if (data.token) {
            console.log('Token:', data.token);

            $('#SignUpModal').modal('hide');
            $('#loginModal').modal('show');
        } else {
            console.error('Token not found in response:', data);
        }
    } catch (error) {
        console.error('Error during SignUp:', error);
    }
}

