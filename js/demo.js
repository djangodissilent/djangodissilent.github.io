
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    // dotColor: '#5cbdaa',
    // lineColor: '#5cbdaa',
    
    dotColor: '#0392cf',
    lineColor: '#ff0938',
    density:10000 - 0,
    // proximity:105,
    // particleRadius:2,
    // Dotsize:15,
    // parallax:0,
    
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


