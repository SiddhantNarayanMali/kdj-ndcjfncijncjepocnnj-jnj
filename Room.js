
var firebaseConfig = {
    apiKey: "AIzaSyAnTxfYTvTBN-B6qrCioT3p-ZGTfwncSqE",
    authDomain: "kwitter-bc916.firebaseapp.com",
    projectId: "kwitter-bc916",
    storageBucket: "kwitter-bc916.appspot.com",
    messagingSenderId: "333279384797",
    appId: "1:333279384797:web:39457b1c9536adb966f734"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  User = localStorage.getItem("Username");
  document.getElementById("username").innerHTML = "Welcome "+User+"!";
  function rooming()
  {
        Roomname = document.getElementById("Roomname").value;
        firebase.database().ref("/").child(Roomname).update({
              purpose: "adding room in kwitter"
        });

        localStorage.setItem("room", RoomName);
        window.location = "Page.html";

        
  }

  function getData() {firebase.database().ref("/").on('value',
      function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(
            function(childSnapshot) {childKey =
  childSnapshot.key;
   Rooms = childKey;
   //Start code
   console.log("roomname - "+Rooms);
   Row = "<div class='Roomname' id="+Rooms+" onclick='redirect(this.id)'#"+Rooms+"</div>"
   document.getElementById("output").innerHTML += Row;
   //End code
                  });
            });
      }
  getData();

  function redirect(PS)
  {
      console.log(PS);
      localStorage.setItem("Room", PS);

      window.location = "Page.html";
  }

  function logout()
  {
        localStorage.removeItem("Username");
        localStorage.removeItem("Username");

        window.location.replace("index.html");
  }
  