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
      for(var i = 0; i < 1; i++){
        // output += '<p>' + data[i].Author+ "\r"+ data[i].Link+ "\r" + '</p>';
        if(data[i].Link != "")
          output += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else 
          output += data[i].Author + '<br>';

      }
      tippy('#income_africa', {
        content: output,
        allowHTML: true,
        appendTo: document.body,
        interactive: true
      });
    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();

// tippy('#income_africa', {
//     content: "Effective interventions to strengthen early language and literacy skills in low-income countries"
//   });

/* <a target="_blank" href="https://doi.org/10.1186/1471-2431-14-281">Wallander, J. L., Biasini, F. J., Thorsten, V., Dhaded, S. M., de Jong, D. M., Chomba, E., . . . Carlo, W. A. (2014). [India; Pakistan; Zambia]</a> */
// test commit from work laptop