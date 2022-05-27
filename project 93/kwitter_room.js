user_name = localStorage.getItem("user_name");

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database.ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name)
    window.location = "kwitter_room.html"
}
localStorage.setItem("room_name", room_name)

const firebaseConfig = {
    apiKey: "AIzaSyA0gasJGc95G0br5fJ11bJnEyyhhLqy8-g",
    authDomain: "project-93-e08e8.firebaseapp.com",
    databaseURL: "https://project-93-e08e8-default-rtdb.firebaseio.com",
    projectId: "project-93-e08e8",
    storageBucket: "project-93-e08e8.appspot.com",
    messagingSenderId: "1034168377852",
    appId: "1:1034168377852:web:7235d62f5136fa5ed15279",
    measurementId: "G-M0FQ5D1B0V"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("room name-" + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
          });
    });