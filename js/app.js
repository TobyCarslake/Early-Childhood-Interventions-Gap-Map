

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //  // Typical action to be performed when the document is ready:
      //  document.getElementById("demo").innerHTML = xhttp.responseText;
      var response = JSON.parse(xhttp.responseText);
      console.log(response.data);
      data = response.data;

      var output = '';
      // for(var i = 0; i < data.length; i++){
      for(var i = 0; i < 109; i++){
        if(data[i].Link != "")
          output += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else 
          output += data[i].Author + '<br>';

      }
      tippy('#income_africa', {
        maxWidth: '',
        trigger: 'click',
        hideOnClick: 'false',
        content: output,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });
    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();
