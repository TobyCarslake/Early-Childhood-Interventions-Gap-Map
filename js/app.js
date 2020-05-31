

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //  // Typical action to be performed when the document is ready:
      //  document.getElementById("demo").innerHTML = xhttp.responseText;
      const response = JSON.parse(xhttp.responseText);
      console.log(response.data);
      var data = response.data;

      let incAfr = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('Africa'));
      console.log(incAfr);
      document.getElementById("income_africa").innerHTML = incAfr.length;

      let incEast = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('East Asia'));
      console.log(incEast);
      document.getElementById("income_east").innerHTML = incEast.length;
      
      let incSth = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('South and West Asia'));
      console.log(incSth);
      document.getElementById("income_south").innerHTML = incSth.length;
      
      let incLat = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('Latin and South America'));
      console.log(incLat);
      document.getElementById("income_south").innerHTML = incLat.length;

      // res is []

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
        trigger: 'mouseenter focus',
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
      let incomeLatin = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Latin"))
        incomeLatin += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Latin"))
          incomeLatin += data[i].Author + '<br>';

      }
      tippy('#income_latin', {
        maxWidth: '9',
        trigger: 'mouseenter focus',
        hideOnClick: 'false',
        content: incomeLatin,
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
  maxWidth: '20',
  trigger: 'mouseenter focus',
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
tippy('#parent', {
  maxWidth: '',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: 'This category includes studies in which the focal point of the intervention is the parent, or wider family group.',
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});
tippy('#child', {
  maxWidth: '',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: 'This category includes all studies in which the intervention involved the provision of support for learning directly to the child.',
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});
tippy('#integrated', {
  maxWidth: '',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: 'This category includes studies of interventions that combine multiple services or supports, including across health and education.',
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});
tippy('#quality', {
  maxWidth: '',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: 'This category includes any studies of interventions which sought to improve the quality of an existing intervention. ',
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});
tippy('#comparative', {
  maxWidth: '',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: 'This small group of studies compared the effects of interventions in one or more categories.',
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});
tippy('#newborn', {
  maxWidth: '',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: 'Newborn - 0-4 weeks of age',
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});
tippy('#infant', {
  maxWidth: '',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: 'Infant - 5 weeks - 12 months (i.e. up to 12 months of age)',
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});
tippy('#toddler', {
  maxWidth: '',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: 'Toddler - 1–3 years (over 12 months and upto 3 years)',
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});
tippy('#preschooler', {
  maxWidth: '',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: 'Preschooler - 3-6 years  (over 3 years and upto 6 years)',
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});
