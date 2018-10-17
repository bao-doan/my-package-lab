const type = 'pie' || 'bar' || '...';
const data = {
  labels: ['string_1', 'string_2', 'string_3'],
  datasets: [
    {
      data: [0, 10, 20, 30, 40],
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 1
    }
  ]
};
const options = {
  hover: {
    mode: 'index'
  },
  legend: {
    display: true,
    position: 'top' || 'bottom' || 'left' || 'right',
    fullWidth: true,
    onClick: function() {} || null,
    onHover: function() {} || null,
    reverse: true,
    labels: {
      fontSize: 12,
      fontStyle: 'normal',
      fontColor: 'black',
      defaultFontColor: '#666',
      defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      defaultFontSize: 12,
      defaultFontStyle: 'normal',
      boxWidth: 40,
      padding: 10,
      generateLabels: function() {},
      filter: function() {} || null,
      usePointStyle: false
    }
  },
  title: {
    display: true,
    position: 'top' || 'bottom' || 'left' || 'right',
    fontSize: 12,
    fontStyle: 'normal',
    fontColor: 'black',
    fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    padding: 10,
    lineHeight: 1.2,
    text: ['chart_title_1']
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  responsive: true,
  responsiveAnimationDuration: 0,
  maintainAspectRatio: true,
  aspectRatio: 2,
  onResize: function() {} || null,
  devicePixelRatio: window.devicePixelRatio,
  events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove', 'touchend'],
  onHover: function() {} || null,
  onClick: function() {} || null,
  tooltips: {
    mode: 'point' || 'nearest' || 'index' || 'dataset' || 'x' || 'y'
    // See more: http://www.chartjs.org/docs/latest/configuration/tooltip.html
  },
  animation: {
    duration: 1000,
    easing: 'linear' || 'easeInQuad' || 'easeOutQuad' || '...',
    onProgress: function() {} || null,
    onComplete: function() {} || null
  },
  layout: {
    padding: {
      left: 50,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  legendCallback: function(chart) { /* Return the HTML string here. */},
  elements: 'see more http://www.chartjs.org/docs/latest/configuration/elements.html'
};
