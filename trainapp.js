 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC0ngiAJ3a6NdWrAHV4CLhUMB4xcGFXybw",
    authDomain: "train-project-hw.firebaseapp.com",
    databaseURL: "https://train-project-hw.firebaseio.com",
    projectId: "train-project-hw",
    storageBucket: "train-project-hw.appspot.com",
    messagingSenderId: "753772917983"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var name;
  var title;
  var startdate;
  var monthlyrate;

  
  database.ref().on('child_added', function(snapshot) {

  		var tableRow = $("<tr>");
  		var tableDate = $("<td>");

  		var convertedDate = moment(new Date(startdate));

  		

  		console.log(moment(convertedDate).diff(moment(), "months"));

  		tableRow.append('<td>' + snapshot.val().name + '</td>');
  		tableRow.append('<td>' + snapshot.val().title + '</td>');
  		tableRow.append('<td>' + snapshot.val().startdate + '</td>');
  		tableRow.append('<td>' + snapshot.val().monthlyrate + '</td>');



  		$('table').append(tableRow);


  		console.log(snapshot.val().name);
  		console.log(snapshot.val().title);
  		console.log(snapshot.val().startdate);
  		console.log(snapshot.val().monthlyrate);
  		console.log(snapshot.val().dateAdded);



  });

  $('#submit').on('click', function(e) {

  	e.preventDefault();

  	name = $('#name').val().trim();
  	title = $('#title').val().trim();
  	startdate = $('#startdate').val().trim();
  	monthlyrate = $('#monthlyrate').val().trim();

  	database.ref().push({

  		name: name,
  		title: title,
  		startdate: startdate,
  		monthlyrate: monthlyrate,
  		dateAdded: firebase.database.ServerValue.TIMESTAMP


  	}); // END DATABASE PUSH

  	$('#name').val("");
  	$('#title').val("");
  	$('#startdate').val("");
  	$('#monthlyrate').val("");


  });

