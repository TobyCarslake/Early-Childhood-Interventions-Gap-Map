

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //  // Typical action to be performed when the document is ready:
      //  document.getElementById("demo").innerHTML = xhttp.responseText;
      const response = JSON.parse(xhttp.responseText);
      console.log(response.data);
      data = response.data;
      // const incAfr = Object.keys(data).filter(k=> data[k].Intervention == 'Income supplementation') && (k=> data[k].Intervention == 'Africa and the Middle East'.map(k=>data[k]).sort((a,b)=>+a.ID-b.ID));
      // console.log(incAfr);
      let incomeAfrica = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Africa"))
        incomeAfrica += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Africa"))
          incomeAfrica += data[i].Author + '<br>';

      }
      tippy('#income_africa', {
        maxWidth: '9',
        trigger: 'click',
        hideOnClick: 'false',
        content: incomeAfrica,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });
      let incomeEast = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("East Asia"))
        incomeEast += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("East Asia"))
          incomeEast += data[i].Author + '<br>';

      }
      tippy('#income_east', {
        maxWidth: '9',
        trigger: 'click',
        hideOnClick: 'false',
        content: incomeEast,
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

tippy('#income', {
  maxWidth: '',
  trigger: 'click',
  hideOnClick: 'false',
  content: 'This category includes interventions which aim to improve children\'s learning through direct injections of funds into the home environment.',
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});
console.log(data);

var data = { 5: { "ID": "0", "Status": "Valid" } }; // some OBJECT from server response

data = { ...data,
  0: { "ID": "1", "Status": "Valid" },
  1: { "ID": "2", "Status": "Invalid" },
  2: { "ID": "3", "Status": "Valid" }
}


// https://stackoverflow.com/questions/8925820/javascript-object-push-function
// // solution 1: where output is sorted filtred array
// let arr=Object.keys(data).filter(k=> data[k].Status!='Invalid').map(k=>data[k]).sort((a,b)=>+a.ID-b.ID);
  
// // solution2: where output is filtered object
// Object.keys(data).map(k=> data[k].Status=='Invalid' && delete data[k])
  
// // show
// console.log('Object',data);
// console.log('Array ',arr);