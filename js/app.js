

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(xhttp.responseText);
      const data = response.data;
      let region = document.querySelectorAll(".region");
      let allGrid = document.querySelectorAll(".region, .age, .pubYear");
      let allGridArray = Array.from(allGrid);

    for (i=0; i < allGridArray.length; i++) {
      let y = allGridArray[i].classList[0];
      let z = allGridArray[i].classList[1];
      
      allGrid[i].innerHTML = data.filter(it => it.Intervention.includes(y) && it.Outcomes.includes(z)).length;
      
      let pop = "";
      for(var j = 0; j < 109; j++){
        
        if(data[j].Link != "" && data[j].Intervention === allGridArray[i].classList[0] && data[j].Outcomes.includes(allGridArray[i].classList[1]))
        pop += "<a target=_blank" + ' href=' + data[j].Link + '>' + data[j].Author +'</a>' + '<br>';
          else if(data[j].Link === "" && data[j].Intervention === allGridArray[i].classList[0] && data[j].Outcomes.includes(allGridArray[i].classList[1]))
          pop += data[j].Author + '<br>';
      };
      if(pop != "")
        tippy("#" + allGridArray[i].id, {
        maxWidth: '9',
        content: pop,
        allowHTML: true,
        appendTo: document.body,
        interactive: true     
      })
    pop = '';
    };
}
       };
xhttp.open("GET", "data.json", true);
xhttp.send();

tippy('#income', {
  maxWidth: '',
  content: 'This category includes interventions which aim to improve children\'s learning through direct injections of funds into the home environment.',
  // allowHTML: true,
  // boundary: 'window',
  // placement: 'auto',
  // hideOnClick: false,
  // trigger: 'click',
  interactive: true,
  appendTo: document.body
});
tippy('#parent', {
  maxWidth: '',
  content: 'This category includes studies in which the focal point of the intervention is the parent, or wider family group.',
  interactive: true,
  appendTo: document.body
});
tippy('#child', {
  maxWidth: '',
  content: 'This category includes all studies in which the intervention involved the provision of support for learning directly to the child.',
  interactive: true,
  appendTo: document.body
});
tippy('#integrated', {
  maxWidth: '',
  content: 'This category includes studies of interventions that combine multiple services or supports, including across health and education.',
  interactive: true,
  appendTo: document.body
});
tippy('#quality', {
  maxWidth: '',
  content: 'This category includes any studies of interventions which sought to improve the quality of an existing intervention. ',
  interactive: true,
  appendTo: document.body
});
tippy('#comparative', {
  maxWidth: '',
  content: 'This small group of studies compared the effects of interventions in one or more categories.',
  interactive: true,
  appendTo: document.body
});
tippy('#newborn', {
  maxWidth: '',
  content: 'Newborn - 0-4 weeks of age',
  interactive: true,
  appendTo: document.body
});
tippy('#infant', {
  maxWidth: '',
  content: 'Infant - 5 weeks - 12 months (i.e. up to 12 months of age)',
  interactive: true,
  appendTo: document.body
});
tippy('#toddler', {
  maxWidth: '',
  content: 'Toddler - 1–3 years (over 12 months and up to 3 years)',
  interactive: true,
  appendTo: document.body
});
tippy('#preschooler', {
  maxWidth: '',
  content: 'Preschooler - 3-6 years  (over 3 years and up to 6 years)',
  interactive: true,
  appendTo: document.body
});

