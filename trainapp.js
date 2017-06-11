 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDQgpJ47k0jBD4KoLS7eDttueqeGPY1YnU",
    authDomain: "train-hw-2.firebaseapp.com",
    databaseURL: "https://train-hw-2.firebaseio.com",
    projectId: "train-hw-2",
    storageBucket: "train-hw-2.appspot.com",
    messagingSenderId: "747527706213"
  };


  firebase.initializeApp(config);

  var database = firebase.database();

  var name;
  var destination;
  var starttime;
  var rate;

  
  database.ref().on('child_added', function(snapshot) {

  		var tableRow = $("<tr>");
  		var tableDate = $("<td>");

  		var convertedDate = moment(new Date(starttime));

  		

  		console.log(moment(convertedDate).diff(moment(), "months"));

  		tableRow.append('<td>' + snapshot.val().name + '</td>');
  		tableRow.append('<td>' + snapshot.val().destination + '</td>');
  		tableRow.append('<td>' + snapshot.val().starttime + '</td>');
  		tableRow.append('<td>' + snapshot.val().rate + '</td>');



  		$('table').append(tableRow);


  		console.log(snapshot.val().name);
  		console.log(snapshot.val().destination);
  		console.log(snapshot.val().starttime);
  		console.log(snapshot.val().rate);
  		console.log(snapshot.val().dateAdded);



  });

  $('#submit').on('click', function(e) {

  	e.preventDefault();

  	name = $('#name').val().trim();
  	destination = $('#destination').val().trim();
  	starttime = $('#starttime').val().trim();
  	rate = $('#rate').val().trim();

  	database.ref().push({

  		name: name,
  		destination: destination,
      starttime: starttime,
  		rate: rate,
  		dateAdded: firebase.database.ServerValue.TIMESTAMP


  	}); // END DATABASE PUSH

  	$('#name').val("");
  	$('#destination').val("");
  	$('#starttime').val("");
  	$('#rate').val("");


  });

