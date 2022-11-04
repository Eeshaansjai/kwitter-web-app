// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDz3yK2HhKrMnTSKfBSXnID9G4_AQRU93k",
      authDomain: "kwitter-59bd6.firebaseapp.com",
      projectId: "kwitter-59bd6",
      storageBucket: "kwitter-59bd6.appspot.com",
      messagingSenderId: "161945057113",
      appId: "1:161945057113:web:4ec711f5ba6acbf345fe48"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id= "+Room_name+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
 
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
}