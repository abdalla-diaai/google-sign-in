function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function decodeJwtResponse(data){
    console.log(parseJwt(data))
    signIn(parseJwt(data))
}

function signIn(payload) {
    // Example: Store user information in local storage
    localStorage.setItem('user', JSON.stringify({
        id: payload.sub,
        fullName: payload.name,
        givenName: payload.given_name,
        familyName: payload.family_name,
        imageUrl: payload.picture,
        email: payload.email
    }))
    // Example: Update the UI to show the user is signed in
    document.getElementById('user-info').innerHTML = `
        <img src="${payload.picture}" alt="User Image" />
        <h2>${payload.name}</h2>
        <p>${payload.email}</p>
    `
};

    


