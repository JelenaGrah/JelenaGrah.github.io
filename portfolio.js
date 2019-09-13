  function toggleReadMore(buttonId) {
      var readMoreDiv = document.getElementById('readmore' + buttonId);
      var readMoreButton = document.getElementById('readmorebutton' + buttonId);
      if (readMoreDiv.style.height == '150px' || !readMoreDiv.style.height) {
          readMoreDiv.style.height = '100%';
          readMoreButton.innerHTML = 'Läs mindre';
      } else {
          readMoreDiv.style.height = '150px';
          readMoreButton.innerHTML = 'Läs mer';
      }
  }

  var mybutton;
  window.onload = function() {
      mybutton = document.getElementById("topbutton");
  }

  window.onscroll = function() {
      scrollFunction()
  };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }

  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }