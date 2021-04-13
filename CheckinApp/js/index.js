function openIntro() {
  document.getElementById("introScr").style.display = "block";
  document.getElementById("searchScr").style.display = "none";
  document.getElementById("mapScr").style.display = "none";
}

function openMap() {
  document.getElementById("introScr").style.display = "none";
  document.getElementById("searchScr").style.display = "none";
  document.getElementById("mapScr").style.display = "block";
}

function openSearch() {
  document.getElementById("introScr").style.display = "none";
  document.getElementById("searchScr").style.display = "block";
  document.getElementById("mapScr").style.display = "none";
}

function closeSearch() {
  document.getElementById("mapScr").style.display = "block";
  document.getElementById("searchScr").style.display = "none";
}


$(document).ready(function () {
  
  var database = firebase.database();
    var comat = '';
    var vang = '';

    database.ref('/APP-Q3/').on('value', function(snapshot){
      let data = snapshot.val();
      console.log(data); 
      comat = data.Yes;
      vang = data.No;
      //console.log(comat);
      
      if(snapshot.exists()){
        var content = '';
        snapshot.forEach(function(data){
          var val = data.val();
          content +='<tr>';
          content += '<td>' + val.id + '</td>';
          content += '<td>' + val.name + '</td>';
          content += '<td>' + val.birthday + '</td>';
          content += '<td>' + val.phone + '</td>';
          content += '<td>' + val.organization + '</td>';
          content += '</tr>';
        });
        console.log(content);
        $('#myTable').append(content);
        $( "#mytable" ).load( "file:///D:/Github%20Web%20Template/April_Projects/CheckinApp/index.html #mytable" );
        highlight_row();
        loadChart(comat, vang);
      }
    });

/*
    // FETCHING DATA FROM JSON FILE
    $.getJSON("https://harrisstudio.gq/testjsonfile/info.json", 
            function (data) {
        var student = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            student += '<td>' + 
                value.id + '</td>';

            student += '<td>' + 
                value.name + '</td>';
    
            student += '<td>' + 
                value.birthday + '</td>';

            student += '<td>' + 
                value.phone + '</td>';

            student += '<td>' + 
                value.organization + '</td>';

            student += '</tr>';
        });
          
        //INSERTING ROWS INTO TABLE 
        $('#myTable').append(student);
  highlight_row();
    });

    */

$("#myInput").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#myTable tr").filter(function() {
    $(this).toggle($(this).text()
    .toLowerCase().indexOf(value) > -1)
  });
  });
});

function highlight_row() {
var table = document.getElementById('myTable');
var cells = table.getElementsByTagName('td');

for (var i = 0; i < cells.length; i++) {
    // Take each cell
    var cell = cells[i];
    // do something on onclick event for cell
    cell.onclick = function () {
        // Get the row id where the cell exists
        var rowId = this.parentNode.rowIndex;
        var rowSelected = table.getElementsByTagName('tr')[rowId];
        rowSelected.className += " selected";

        msg = 'The ID of the company is: ' + rowSelected.cells[0].innerHTML;
        msg += '\nThe cell value is: ' + this.innerHTML;  
        //alert(msg);
        console.log(msg);

        $('#search-to-a').html(rowSelected.cells[0].innerHTML);
        $('#search-to-b').html(rowSelected.cells[1].innerHTML); 
        $('#search-to-c').html(rowSelected.cells[2].innerHTML); 
        $('#search-to-d').html(rowSelected.cells[3].innerHTML); 

    }
}
}

function loadChart(comat, vang) {
  google.charts.load("current", {packages:["corechart"]});

  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Hiện diện', 'Số lượng'],
      ['Vắng', comat],
      ['Có mặt', vang],
    ]);
  
    var options = {
      title: 'Thống Kê Điểm Danh',
      pieHole: 0.4,
      width: 400,
      height: 200,
      
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }
}


