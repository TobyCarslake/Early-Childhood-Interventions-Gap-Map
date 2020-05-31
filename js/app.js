

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //  // Typical action to be performed when the document is ready:
      //  document.getElementById("demo").innerHTML = xhttp.responseText;
      const response = JSON.parse(xhttp.responseText);
      console.log(response.data);
      var data = response.data;
//income variables
      let incAfr = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('Africa'));
      document.getElementById("income_africa").innerHTML = incAfr.length;

      let incEast = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('East Asia'));
      document.getElementById("income_east").innerHTML = incEast.length;

      let incSth = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('South and West Asia'));
      document.getElementById("income_south").innerHTML = incSth.length;

      let incLat = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('Latin America and the Caribbean'));
      document.getElementById("income_latin").innerHTML = incLat.length;

      let incPac = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('The Pacific'));
      document.getElementById("income_pacific").innerHTML = incPac.length;

      let inc1998 = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('1998-2005'));
      document.getElementById("income_1998").innerHTML = inc1998.length;

      let inc2006 = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('2006-2009'));
      document.getElementById("income_2006").innerHTML = inc2006.length;

      let inc2010 = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('2010-2013'));
      document.getElementById("income_2010").innerHTML = inc2010.length;

      let inc2014 = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('2014-2017'));
      document.getElementById("income_2014").innerHTML = inc2014.length;

      let incNew = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('Newborn'));
      document.getElementById("income_newborn").innerHTML = incNew.length;

      let incInf = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('Infant'));
      document.getElementById("income_infant").innerHTML = incInf.length;

      let incTod = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('Toddler'));
      document.getElementById("income_toddler").innerHTML = incTod.length;

      let incPre = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('Preschooler'));
      document.getElementById("income_preschooler").innerHTML = incPre.length;

      let incOth = data.filter(it => it.Intervention.includes('Income') && it.Outcomes.includes('Other'));
      document.getElementById("income_other").innerHTML = incOth.length;

// Parent-focused variables

      let parAfr = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('Africa'));
      document.getElementById("parent_africa").innerHTML = parAfr.length;

      let parEast = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('East Asia'));
      document.getElementById("parent_east").innerHTML = parEast.length;

      let parSth = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('South and West Asia'));
      document.getElementById("parent_south").innerHTML = parSth.length;

      let parLat = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('Latin America and the Caribbean'));
      document.getElementById("parent_latin").innerHTML = parLat.length;

      let parPac = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('The Pacific'));
      document.getElementById("parent_pacific").innerHTML = parPac.length;

      let par1998 = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('1998-2005'));
      document.getElementById("parent_1998").innerHTML = par1998.length;

      let par2006 = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('2006-2009'));
      document.getElementById("parent_2006").innerHTML = par2006.length;

      let par2010 = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('2010-2013'));
      document.getElementById("parent_2010").innerHTML = par2010.length;

      let par2014 = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('2014-2017'));
      document.getElementById("parent_2014").innerHTML = par2014.length;

      let parNew = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('Newborn'));
      document.getElementById("parent_newborn").innerHTML = parNew.length;

      let parInf = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('Infant'));
      document.getElementById("parent_infant").innerHTML = parInf.length;

      let parTod = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('Toddler'));
      document.getElementById("parent_toddler").innerHTML = parTod.length;

      let parPre = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('Preschooler'));
      document.getElementById("parent_preschooler").innerHTML = parPre.length;

      let parOth = data.filter(it => it.Intervention.includes('Parent') && it.Outcomes.includes('Other'));
      document.getElementById("parent_other").innerHTML = parOth.length;
// Child-focused variables

let chAfr = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('Africa'));
document.getElementById("child_africa").innerHTML = chAfr.length;

let chEast = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('East Asia'));
document.getElementById("child_east").innerHTML = chEast.length;

let chSth = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('South and West Asia'));
document.getElementById("child_south").innerHTML = chSth.length;

let chLat = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('Latin America and the Caribbean'));
document.getElementById("child_latin").innerHTML = chLat.length;

let chPac = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('The Pacific'));
document.getElementById("child_pacific").innerHTML = chPac.length;

let ch1998 = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('1998-2005'));
document.getElementById("child_1998").innerHTML = ch1998.length;

let ch2006 = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('2006-2009'));
document.getElementById("child_2006").innerHTML = ch2006.length;

let ch2010 = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('2010-2013'));
document.getElementById("child_2010").innerHTML = ch2010.length;

let ch2014 = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('2014-2017'));
document.getElementById("child_2014").innerHTML = ch2014.length;

let chNew = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('Newborn'));
document.getElementById("child_newborn").innerHTML = chNew.length;

let chInf = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('Infant'));
document.getElementById("child_infant").innerHTML = chInf.length;

let chTod = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('Toddler'));
document.getElementById("child_toddler").innerHTML = chTod.length;

let chPre = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('Preschooler'));
document.getElementById("child_preschooler").innerHTML = chPre.length;

let chOth = data.filter(it => it.Intervention.includes('Child') && it.Outcomes.includes('Other'));
document.getElementById("child_other").innerHTML = chOth.length;

// Integrated variables

let intAfr = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('Africa'));
document.getElementById("integrated_africa").innerHTML = intAfr.length;

let intEast = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('East Asia'));
document.getElementById("integrated_east").innerHTML = intEast.length;

let intSth = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('South and West Asia'));
document.getElementById("integrated_south").innerHTML = intSth.length;

let intLat = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('Latin America and the Caribbean'));
document.getElementById("integrated_latin").innerHTML = intLat.length;

let intPac = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('The Pacific'));
document.getElementById("integrated_pacific").innerHTML = intPac.length;

let int1998 = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('1998-2005'));
document.getElementById("integrated_1998").innerHTML = int1998.length;

let int2006 = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('2006-2009'));
document.getElementById("integrated_2006").innerHTML = int2006.length;

let int2010 = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('2010-2013'));
document.getElementById("integrated_2010").innerHTML = int2010.length;

let int2014 = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('2014-2017'));
document.getElementById("integrated_2014").innerHTML = int2014.length;

let intNew = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('Newborn'));
document.getElementById("integrated_newborn").innerHTML = intNew.length;

let intInf = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('Infant'));
document.getElementById("integrated_infant").innerHTML = intInf.length;

let intTod = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('Toddler'));
document.getElementById("integrated_toddler").innerHTML = intTod.length;

let intPre = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('Preschooler'));
document.getElementById("integrated_preschooler").innerHTML = intPre.length;

let intOth = data.filter(it => it.Intervention.includes('Integrated') && it.Outcomes.includes('Other'));
document.getElementById("integrated_other").innerHTML = intOth.length;

// Quality variables

let qualAfr = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('Africa'));
document.getElementById("quality_africa").innerHTML = qualAfr.length;

let qualEast = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('East Asia'));
document.getElementById("quality_east").innerHTML = qualEast.length;

let qualSth = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('South and West Asia'));
document.getElementById("quality_south").innerHTML = qualSth.length;

let qualLat = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('Latin America and the Caribbean'));
document.getElementById("quality_latin").innerHTML = qualLat.length;

let qualPac = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('The Pacific'));
document.getElementById("quality_pacific").innerHTML = qualPac.length;

let qual1998 = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('1998-2005'));
document.getElementById("quality_1998").innerHTML = qual1998.length;

let qual2006 = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('2006-2009'));
document.getElementById("quality_2006").innerHTML = qual2006.length;

let qual2010 = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('2010-2013'));
document.getElementById("quality_2010").innerHTML = qual2010.length;

let qual2014 = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('2014-2017'));
document.getElementById("quality_2014").innerHTML = qual2014.length;

let qualNew = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('Newborn'));
document.getElementById("quality_newborn").innerHTML = qualNew.length;

let qualInf = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('Infant'));
document.getElementById("quality_infant").innerHTML = qualInf.length;

let qualTod = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('Toddler'));
document.getElementById("quality_toddler").innerHTML = qualTod.length;

let qualPre = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('Preschooler'));
document.getElementById("quality_preschooler").innerHTML = qualPre.length;

let qualOth = data.filter(it => it.Intervention.includes('Quality') && it.Outcomes.includes('Other'));
document.getElementById("quality_other").innerHTML = qualOth.length;

// Comparative variables

let compAfr = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('Africa'));
document.getElementById("comparative_africa").innerHTML = compAfr.length;

let compEast = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('East Asia'));
document.getElementById("comparative_east").innerHTML = compEast.length;

let compSth = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('South and West Asia'));
document.getElementById("comparative_south").innerHTML = compSth.length;

let compLat = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('Latin America and the Caribbean'));
document.getElementById("comparative_latin").innerHTML = compLat.length;

let compPac = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('The Pacific'));
document.getElementById("comparative_pacific").innerHTML = compPac.length;

let comp1998 = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('1998-2005'));
document.getElementById("comparative_1998").innerHTML = comp1998.length;

let comp2006 = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('2006-2009'));
document.getElementById("comparative_2006").innerHTML = comp2006.length;

let comp2010 = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('2010-2013'));
document.getElementById("comparative_2010").innerHTML = comp2010.length;

let comp2014 = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('2014-2017'));
document.getElementById("comparative_2014").innerHTML = comp2014.length;

let compNew = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('Newborn'));
document.getElementById("comparative_newborn").innerHTML = compNew.length;

let compInf = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('Infant'));
document.getElementById("comparative_infant").innerHTML = compInf.length;

let compTod = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('Toddler'));
document.getElementById("comparative_toddler").innerHTML = compTod.length;

let compPre = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('Preschooler'));
document.getElementById("comparative_preschooler").innerHTML = compPre.length;

let compOth = data.filter(it => it.Intervention.includes('Comparative') && it.Outcomes.includes('Other'));
document.getElementById("comparative_other").innerHTML = compOth.length;

/// ********************************************************** Income
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

      let income1998 = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("1998"))
        income1998 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("1998"))
          income1998 += data[i].Author + '<br>';
      }
      tippy('#income_1998', {
        maxWidth: '9',
        trigger: 'mouseenter focus',
        hideOnClick: 'false',
        content: income1998,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });

      
      let income2006 = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("2006"))
        income2006 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("2006"))
          income2006 += data[i].Author + '<br>';
      }
      tippy('#income_2006', {
        maxWidth: '9',
        trigger: 'mouseenter focus',
        hideOnClick: 'false',
        content: income2006,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });

      
      
      let income2010 = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("2010"))
        income2010 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("2010"))
          income2010 += data[i].Author + '<br>';
      }
      tippy('#income_2010', {
        maxWidth: '9',
        trigger: 'mouseenter focus',
        hideOnClick: 'false',
        content: income2010,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });
      
      
      let income2014 = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("2014"))
        income2014 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("2014"))
          income2014 += data[i].Author + '<br>';
      }
      tippy('#income_2014', {
        maxWidth: '9',
        trigger: 'mouseenter focus',
        hideOnClick: 'false',
        content: income2014,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });
      
      
      let incomeNewborn = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Newborn"))
        incomeNewborn += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Newborn"))
          incomeNewborn += data[i].Author + '<br>';
      }
      tippy('#income_newborn', {
        maxWidth: '9',
        trigger: 'mouseenter focus',
        hideOnClick: 'false',
        content: incomeNewborn,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });
      
      let incomeInfant = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Infant"))
        incomeInfant += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Infant"))
          incomeInfant += data[i].Author + '<br>';
      }
      tippy('#income_infant', {
        maxWidth: '9',
        trigger: 'mouseenter focus',
        hideOnClick: 'false',
        content: incomeInfant,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });
      
      let incomeToddler = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Toddler"))
        incomeToddler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Toddler"))
          incomeToddler += data[i].Author + '<br>';
      }
      tippy('#income_toddler', {
        maxWidth: '9',
        trigger: 'mouseenter focus',
        hideOnClick: 'false',
        content: incomeToddler,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });
      
      let incomePreschooler = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Preschooler"))
        incomePreschooler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Preschooler"))
          incomePreschooler += data[i].Author + '<br>';
      }
      tippy('#income_preschooler', {
        maxWidth: '9',
        trigger: 'mouseenter focus',
        hideOnClick: 'false',
        content: incomePreschooler,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });
      
      let incomeOther = '';
      // for(var i = 0; i < data.length; i++){      
      for(var i = 0; i < 109; i++){
        
        if(data[i].Link != "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Other"))
        incomeOther += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
          else if(data[i].Link === "" && data[i].Intervention === "Income supplementation" && data[i].Outcomes.includes("Other"))
          incomeOther += data[i].Author + '<br>';
      }
      tippy('#income_other', {
        maxWidth: '9',
        trigger: 'mouseenter focus',
        hideOnClick: 'false',
        content: incomeOther,
        allowHTML: true,
        appendTo: document.body,
        boundary: 'window',
        placement: 'auto',
        placement: 'auto-start',
        placement: 'auto-end',
        interactive: true
      });

/// ********************************************************** Parent
let parentAfrica = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Africa"))
  parentAfrica += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Africa"))
    parentAfrica += data[i].Author + '<br>';

}
tippy('#parent_africa', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parentAfrica,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let parentEast = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("East Asia"))
  parentEast += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("East Asia"))
    parentEast += data[i].Author + '<br>';

}
tippy('#parent_east', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parentEast,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let parentSouth = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("South and West Asia"))
  parentSouth += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("South and West Asia"))
    parentSouth += data[i].Author + '<br>';

}
tippy('#parent_south', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parentSouth,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let parentLatin = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Latin"))
  parentLatin += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Latin"))
    parentLatin += data[i].Author + '<br>';
}
tippy('#parent_latin', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parentLatin,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let parent1998 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("1998"))
  parent1998 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("1998"))
    parent1998 += data[i].Author + '<br>';
}
tippy('#parent_1998', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parent1998,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let parent2006 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("2006"))
  parent2006 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("2006"))
    parent2006 += data[i].Author + '<br>';
}
tippy('#parent_2006', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parent2006,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});



let parent2010 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("2010"))
  parent2010 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("2010"))
    parent2010 += data[i].Author + '<br>';
}
tippy('#parent_2010', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parent2010,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let parent2014 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("2014"))
  parent2014 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("2014"))
    parent2014 += data[i].Author + '<br>';
}
tippy('#parent_2014', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parent2014,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let parentNewborn = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Newborn"))
  parentNewborn += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Newborn"))
    parentNewborn += data[i].Author + '<br>';
}
tippy('#parent_newborn', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parentNewborn,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let parentInfant = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Infant"))
  parentInfant += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Infant"))
    parentInfant += data[i].Author + '<br>';
}
tippy('#parent_infant', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parentInfant,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let parentToddler = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Toddler"))
  parentToddler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Toddler"))
    parentToddler += data[i].Author + '<br>';
}
tippy('#parent_toddler', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parentToddler,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let parentPreschooler = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Preschooler"))
  parentPreschooler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Parent-focused" && data[i].Outcomes.includes("Preschooler"))
    parentPreschooler += data[i].Author + '<br>';
}
tippy('#parent_preschooler', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: parentPreschooler,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

///*********************************************************child */

let childAfrica = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Africa"))
  childAfrica += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Africa"))
    childAfrica += data[i].Author + '<br>';

}
tippy('#child_africa', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: childAfrica,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let childEast = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("East Asia"))
  childEast += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("East Asia"))
    childEast += data[i].Author + '<br>';

}
tippy('#child_east', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: childEast,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let childSouth = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("South and West Asia"))
  childSouth += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("South and West Asia"))
    childSouth += data[i].Author + '<br>';

}
tippy('#child_south', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: childSouth,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let childLatin = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Latin"))
  childLatin += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Latin"))
    childLatin += data[i].Author + '<br>';
}
tippy('#child_latin', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: childLatin,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let childPacific = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Pacific"))
  childPacific += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Pacific"))
    childPacific += data[i].Author + '<br>';
}
tippy('#child_pacific', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: childPacific,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let child1998 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("1998"))
  child1998 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("1998"))
    child1998 += data[i].Author + '<br>';
}
tippy('#child_1998', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: child1998,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let child2006 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("2006"))
  child2006 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("2006"))
    child2006 += data[i].Author + '<br>';
}
tippy('#child_2006', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: child2006,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});



let child2010 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("2010"))
  child2010 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("2010"))
    child2010 += data[i].Author + '<br>';
}
tippy('#child_2010', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: child2010,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let child2014 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("2014"))
  child2014 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("2014"))
    child2014 += data[i].Author + '<br>';
}
tippy('#child_2014', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: child2014,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let childNewborn = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Newborn"))
  childNewborn += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Newborn"))
    childNewborn += data[i].Author + '<br>';
}
tippy('#child_newborn', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: childNewborn,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let childInfant = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Infant"))
  childInfant += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Infant"))
    childInfant += data[i].Author + '<br>';
}
tippy('#child_infant', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: childInfant,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let childToddler = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Toddler"))
  childToddler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Toddler"))
    childToddler += data[i].Author + '<br>';
}
tippy('#child_toddler', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: childToddler,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let childPreschooler = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Preschooler"))
  childPreschooler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Preschooler"))
    childPreschooler += data[i].Author + '<br>';
}
tippy('#child_preschooler', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: childPreschooler,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let childOther = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Other"))
  childOther += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Child-focused" && data[i].Outcomes.includes("Other"))
    childOther += data[i].Author + '<br>';
}
tippy('#child_other', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: childOther,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
}); 

///********************************************** Integrated */

let integratedEast = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("East Asia"))
  integratedEast += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("East Asia"))
    integratedEast += data[i].Author + '<br>';

}
tippy('#integrated_east', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integratedEast,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let integratedLatin = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Latin"))
  integratedLatin += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Latin"))
    integratedLatin += data[i].Author + '<br>';
}
tippy('#integrated_latin', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integratedLatin,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let integrated1998 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("1998"))
  integrated1998 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("1998"))
    integrated1998 += data[i].Author + '<br>';
}
tippy('#integrated_1998', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integrated1998,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let integrated2006 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("2006"))
  integrated2006 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("2006"))
    integrated2006 += data[i].Author + '<br>';
}
tippy('#integrated_2006', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integrated2006,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});



let integrated2010 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("2010"))
  integrated2010 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("2010"))
    integrated2010 += data[i].Author + '<br>';
}
tippy('#integrated_2010', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integrated2010,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let integrated2014 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("2014"))
  integrated2014 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("2014"))
    integrated2014 += data[i].Author + '<br>';
}
tippy('#integrated_2014', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integrated2014,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let integratedNewborn = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Newborn"))
  integratedNewborn += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Newborn"))
    integratedNewborn += data[i].Author + '<br>';
}
tippy('#integrated_newborn', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integratedNewborn,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let integratedInfant = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Infant"))
  integratedInfant += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Infant"))
    integratedInfant += data[i].Author + '<br>';
}
tippy('#integrated_infant', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integratedInfant,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let integratedToddler = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Toddler"))
  integratedToddler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Toddler"))
    integratedToddler += data[i].Author + '<br>';
}
tippy('#integrated_toddler', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integratedToddler,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let integratedPreschooler = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Preschooler"))
  integratedPreschooler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Preschooler"))
    integratedPreschooler += data[i].Author + '<br>';
}
tippy('#integrated_preschooler', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integratedPreschooler,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let integratedOther = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Other"))
  integratedOther += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Integrated" && data[i].Outcomes.includes("Other"))
    integratedOther += data[i].Author + '<br>';
}
tippy('#integrated_other', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: integratedOther,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let qualityAfrica = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Africa"))
  qualityAfrica += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Africa"))
    qualityAfrica += data[i].Author + '<br>';

}
tippy('#quality_africa', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: qualityAfrica,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let qualityEast = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("East Asia"))
  qualityEast += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("East Asia"))
    qualityEast += data[i].Author + '<br>';

}
tippy('#quality_east', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: qualityEast,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let qualitySouth = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("South and West Asia"))
  qualitySouth += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("South and West Asia"))
    qualitySouth += data[i].Author + '<br>';

}
tippy('#quality_south', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: qualitySouth,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let qualityLatin = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Latin"))
  qualityLatin += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Latin"))
    qualityLatin += data[i].Author + '<br>';
}
tippy('#quality_latin', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: qualityLatin,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let quality1998 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("1998"))
  quality1998 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("1998"))
    quality1998 += data[i].Author + '<br>';
}
tippy('#quality_1998', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: quality1998,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let quality2006 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("2006"))
  quality2006 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("2006"))
    quality2006 += data[i].Author + '<br>';
}
tippy('#quality_2006', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: quality2006,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});



let quality2010 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("2010"))
  quality2010 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("2010"))
    quality2010 += data[i].Author + '<br>';
}
tippy('#quality_2010', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: quality2010,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let quality2014 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("2014"))
  quality2014 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("2014"))
    quality2014 += data[i].Author + '<br>';
}
tippy('#quality_2014', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: quality2014,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let qualityNewborn = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Newborn"))
  qualityNewborn += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Newborn"))
    qualityNewborn += data[i].Author + '<br>';
}
tippy('#quality_newborn', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: qualityNewborn,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let qualityInfant = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Infant"))
  qualityInfant += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Infant"))
    qualityInfant += data[i].Author + '<br>';
}
tippy('#quality_infant', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: qualityInfant,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let qualityToddler = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Toddler"))
  qualityToddler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Toddler"))
    qualityToddler += data[i].Author + '<br>';
}
tippy('#quality_toddler', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: qualityToddler,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let qualityPreschooler = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Preschooler"))
  qualityPreschooler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Preschooler"))
    qualityPreschooler += data[i].Author + '<br>';
}
tippy('#quality_preschooler', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: qualityPreschooler,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let qualityOther = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Other"))
  qualityOther += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Quality" && data[i].Outcomes.includes("Other"))
    qualityOther += data[i].Author + '<br>';
}
tippy('#quality_other', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: qualityOther,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

////comparative


let comparativeAfrica = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("Africa"))
  comparativeAfrica += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("Africa"))
    comparativeAfrica += data[i].Author + '<br>';

}
tippy('#comparative_africa', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: comparativeAfrica,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let comparativeEast = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("East Asia"))
  comparativeEast += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("East Asia"))
    comparativeEast += data[i].Author + '<br>';

}
tippy('#comparative_east', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: comparativeEast,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let comparativeLatin = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("Latin"))
  comparativeLatin += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("Latin"))
    comparativeLatin += data[i].Author + '<br>';
}
tippy('#comparative_latin', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: comparativeLatin,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});

let comparative1998 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("1998"))
  comparative1998 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("1998"))
    comparative1998 += data[i].Author + '<br>';
}
tippy('#comparative_1998', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: comparative1998,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let comparative2006 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("2006"))
  comparative2006 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("2006"))
    comparative2006 += data[i].Author + '<br>';
}
tippy('#comparative_2006', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: comparative2006,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});



let comparative2014 = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("2014"))
  comparative2014 += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("2014"))
    comparative2014 += data[i].Author + '<br>';
}
tippy('#comparative_2014', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: comparative2014,
  allowHTML: true,
  appendTo: document.body,
  boundary: 'window',
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
  interactive: true
});


let comparativePreschooler = '';
// for(var i = 0; i < data.length; i++){      
for(var i = 0; i < 109; i++){
  
  if(data[i].Link != "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("Preschooler"))
  comparativePreschooler += "<a target=_blank" + ' href=' + data[i].Link + '>' + data[i].Author +'</a>' + '<br>';
    else if(data[i].Link === "" && data[i].Intervention === "Comparative" && data[i].Outcomes.includes("Preschooler"))
    comparativePreschooler += data[i].Author + '<br>';
}
tippy('#comparative_preschooler', {
  maxWidth: '9',
  trigger: 'mouseenter focus',
  hideOnClick: 'false',
  content: comparativePreschooler,
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
