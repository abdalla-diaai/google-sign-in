function parseJwt(token) {
  // function to handle token returned from google sign in
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  //   console.log(token);
  //   console.log(jsonPayload);

  return JSON.parse(jsonPayload);
}

function signIn(payload) {
  // store user information in local storage
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: payload.sub,
      fullName: payload.name,
      givenName: payload.given_name,
      familyName: payload.family_name,
      imageUrl: payload.picture,
      email: payload.email,
    })
  );


  window.location.href = "home.html";
   
}

function decodeJwtResponse(data) {
  //   console.log(parseJwt(data));
  signIn(parseJwt(data));
}

function handleCredentialResponse(response) {
  //   console.log(response);
  decodeJwtResponse(response.credential);
}
