//Thêm đoạn code check mã code + firebase vào chỗ này.
// https://github.com/KhoaPham-dev/webdhsv_hsv_vn/blob/master/public/diem-danh/index.js
let msdb = document.getElementById("scannedTextMemo");

var d = new Date();
//let wait = document.getElementById("wait");
//let infor = document.getElementById("infor");
//jsqrscanner.succeeded = jsqrscanner();

function submitCheckIn() {
  var database = firebase.database();
  //wait.innerText = "Đang xử lý...";
  //wait.style.color = "black";
  //wait.style.display = "block";
  if (msdb.value) {
    try {
      database.ref("APP-Q3/")
        .once("value")
        .then(async (snapshot) => {
          let isFinded = false;
          snapshot = snapshot.val();
          for (let i in snapshot) {
            let dataID = snapshot[i];
            if (dataID.id) {
              if (dataID.id == msdb.value) {
                let updates = {};
                //pdates["/APP-Q3/" + i + "/checkin"] = 1;
                updates["/APP-Q3/" + i + "/checkin"] = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds(); 
                await database.ref().update(updates);
                isFinded = true;
                alert("Hoàn thành!");
                //wait.innerText = "Hoàn thành";
                //wait.style.color = "green";
                document.getElementById("hoten").innerText =
                  dataID.name;
                document.getElementById("donvi").innerText =
                  dataID.organization;
                document.getElementById("MSDH").innerText =
                  dataID.id;
              }
              if (isFinded) {
                msdb.value = "";
                break;
              }
            }
          }
          //if (!isFinded) {
            //wait.style.display = "none";
          //  msdb.value = "";
          //  alert("Không tìm thấy, vui lòng nhập lại!");
          //}
        });
    } catch (error) {
      msdb.value = "";
      //wait.style.display = "none";
      alert(error);
    }
  } else {
    //wait.style.display = "none";
    alert("Vui lòng nhập mã đại biểu");
  }
}


function onQRCodeScanned(scannedText)
{  
    var scannedTextMemo = document.getElementById("scannedTextMemo");
    if (scannedTextMemo) {
      if (scannedTextMemo.value != scannedText) {
        scannedTextMemo.value = scannedText;
        document.getElementById('results').style.display = 'block'
        submitCheckIn();
      }
    }

}
  
function provideVideo()
{
    var n = navigator;

    if (n.mediaDevices && n.mediaDevices.getUserMedia)
    {
      return n.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment"
        },
        audio: false
      });
    } 
    
    return Promise.reject('Your browser does not support getUserMedia');
}

function provideVideoQQ()
{
    return navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
        var exCameras = [];
        devices.forEach(function(device) {
        if (device.kind === 'videoinput') {
          exCameras.push(device.deviceId)
        }
     });
        
        return Promise.resolve(exCameras);
    }).then(function(ids){
        if(ids.length === 0)
        {
          return Promise.reject('Could not find a webcam');
        }
        
        return navigator.mediaDevices.getUserMedia({
            video: {
              'optional': [{
                'sourceId': ids.length === 1 ? ids[0] : ids[1]//this way QQ browser opens the rear camera
                }]
            }
        });        
    });                
}

//this function will be called when JsQRScanner is ready to use
function JsQRScannerReady()
{
    //create a new scanner passing to it a callback function that will be invoked when
    //the scanner succesfully scan a QR code
    var jbScanner = new JsQRScanner(onQRCodeScanned);
    //var jbScanner = new JsQRScanner(onQRCodeScanned, provideVideo);
    //reduce the size of analyzed image to increase performance on mobile devices
    jbScanner.setSnapImageMaxSize(300);
    var scannerParentElement = document.getElementById("scanner");
    if(scannerParentElement)
    {
        //append the jbScanner to an existing DOM element
        jbScanner.appendTo(scannerParentElement);
    }        
}