$(window).on('load', function ()  {
  $('.loader').delay(700).fadeOut('slow');
  });

var themeSwitch = document.getElementById('modetoggle');
if(themeSwitch) {
initTheme(); // on page load, if user has already selected a specific theme -> apply it

  modetoggle.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });
  
  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    // update checkbox
    modetoggle.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  };
  
  function resetTheme() {
    if(modetoggle.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
  }
};