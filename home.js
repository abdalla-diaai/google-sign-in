 var userData = JSON.parse(localStorage.getItem("user"))
 
 // update the UI to show the user is signed in
 document.getElementById("user-info").innerHTML = `
 <img src="${userData.imageUrl}" alt="User Image" />
 <h2>${userData.fullName}</h2>
 <p>${userData.email}</p>
 `;