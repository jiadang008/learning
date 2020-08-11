function easyHTTP(){
    this.http = new XMLHttpRequest();

}
// Make HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null,self.http.responseText)
        }else{
            callback('Error: ', self.http.status)
        }
    }
    this.http.send();
}

// Make HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);

    this.send(JSON.stringify(data));
    this.http.setRequestHeader('Constent.type')
}

// Make HTTP PUT Request

// Make HTTP DELETE Request
const http = new easyHTTP;

http.get('google.com')

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>EasyHTTP Example</title>
</head>
<body>
  <h1>EasyHTTP Example</h1>

  <script src="easyhttp.js"></script>
  <script src="app.js"></script>
</body>
</html>