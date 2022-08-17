const firebaseConfig = {
    apiKey: "AIzaSyBj_hQwQi3ukPdI0_I8y6IDGarqSrwyyMc",
    authDomain: "codeigniter-37d8b.firebaseapp.com",
    databaseURL: "https://codeigniter-37d8b-default-rtdb.firebaseio.com/",
    projectId: "codeigniter-37d8b",
    storageBucket: "codeigniter-37d8b.appspot.com",
    messagingSenderId: "582393896570",
    appId: "1:582393896570:web:19148daa10e9dcd928a5c3"
};
firebase.initializeApp(firebaseConfig);
var dbRef = firebase.database();
var RegistartionRef = dbRef.ref('registartion');

//submit data
$("document").ready(function() {
    var baseUrl = $(".main-body").attr("data-url"); //Get base url
    $("#basic-form").submit(function(e) {
        e.preventDefault();
    });
    $('#basic-form').validate({
        submitHandler: function(form) {
            $(".submitbtn").html(`<i class="fa fa-spinner fa-spin mr-2"></i> Please Wait...`);
            $(".submitbtn").attr("disabled", "disabled");
            RegistartionRef.push({
                name: $('#name').val(),
                email: $('#email').val(),
                dob: $('#dob').val(),
                color: $('#color').val(),
            }, (error) => {
                if (error) {
                    alert("Data not inserted");
                } else {
                    $('#basic-form').trigger('reset');
                    $(".submitbtn").html(`Submit`);
                    $(".submitbtn").removeAttr("disabled");
                    $(".notice").html(`<div class="alert alert-success" role="alert">Data inserted Successfully</div>`);
                    setTimeout(function() {
                        $(".notice").html('');
                    }, 3000);
                }
            });
        }
    });
});

//get all data
$(document).ready(function() {
    RegistartionRef.on("value", function(snapshot) {
        $(".dynamic-data").html('');
        var i = 1;
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            $(".dynamic-data").append(`<tr><td>${i}</td><td>${childData.name}</td><td>${childData.email}</td><td>${childData.dob}</td><td><div style="background:${childData.color}" class="colorDiv"></div></td><td><button class="btn btn-primary custom-btn mr-2 editData" data-toggle="modal" data-target="#exampleModalCenter" data-key="${key}">Edit</button><button class="btn btn-danger custom-btn deleteData" data-key="${key}">Delete</button></td></tr>`);
            i++;

        });
    }, function(error) {
        console.log("Error: " + error.code);
    });
});

//delete data by key
$(document).ready(function() {
    $(document).on("click", ".deleteData", function() {
        var dataKey = $(this).attr("data-key");
        dbRef.ref('registartion/' + dataKey).remove().then();
    });
});

//get single data by key
$(document).ready(function() {
    $(document).on("click", ".editData", function() {
        var dataKey = $(this).attr("data-key");
        dbRef.ref('registartion/' + dataKey).on("value", function(snapshot) {
            var childData = snapshot.val();
            $(".editName").val(childData.name);
            $(".editDob").val(childData.dob);
            $(".editEmail").val(childData.email);
            $(".editColor").val(childData.color);
            $(".EditKey").val(dataKey);
        }, function(error) {
            console.log("Error: " + error.code);
        });
    });
});

//update data
$("document").ready(function() {
    var baseUrl = $(".main-body").attr("data-url"); //Get base url
    $("#Edit-basic-form").submit(function(e) {
        e.preventDefault();
    });
    $('#Edit-basic-form').validate({
        submitHandler: function(form) {
            var dataKey = $(".EditKey").val();
            $(".editBtn").html(`<i class="fa fa-spinner fa-spin mr-2"></i> Please Wait...`);
            $(".editBtn").attr("disabled", "disabled");
            dbRef.ref('registartion/' + dataKey).update({
                name: $('.editName').val(),
                email: $('.editEmail').val(),
                dob: $('.editDob').val(),
                color: $('.editColor').val(),
            }, (error) => {
                if (error) {
                    alert("not update");
                } else {
                    $('#Edit-basic-form').trigger('reset');
                    $(".editBtn").html(`Update`);
                    $(".editBtn").removeAttr("disabled");
                    $(".Editnotice").html(`<div class="alert alert-success" role="alert">Data Updated Successfully</div>`);
                    setTimeout(function() {
                        $(".Editnotice").html('');
                        $('#exampleModalCenter').modal('hide');
                    }, 1000);
                }
            });

        }
    });
});