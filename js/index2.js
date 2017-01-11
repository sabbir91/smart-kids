window.onload = function () {
 
  var i = 0,
      menuContainer = document.querySelector('.menu-container'),
      togBtn = document.querySelector('.tog-menu'),
      liLen = document.querySelectorAll('li').length ,
      listItem,
      animationInt,
      resetInt;
  
      /* demo for show case */
      menuContainer.classList.add('active');
      toggleStyle();

  togBtn.addEventListener('click', function () {
    toggleActiveClass();
    toggleStyle();
  });


  function toggleActiveClass() {
    if ( menuContainer.getAttribute('class').indexOf('active') === -1 ) {
      menuContainer.classList.add('active');
    } else {
      menuContainer.classList.remove('active');
    }
  }

  function toggleStyle() {
      // menuContainer.classList.contains('active')
      // (/active/gi).test(menuContainer.classList)
    if ( menuContainer.getAttribute('class').indexOf('active') != -1 ) {
      i = 0;
      animationtIntervel();
    } else {
      i = liLen;
      resetLiInterval();
    }
  }

  /* --------------------
      Start Animating LI 
    -------------------- */

  function liAnimation() {
    if (i < liLen) {
      i++;
      listItem = document.getElementsByTagName('li')[i];
      
   /* https://datatables.net/forums/discussion/19874/uncaught-typeerror-cannot-read-property-style-of-undefined-while-using-colspan */
      if (listItem !== undefined) {
        listItem.style.transform = 'translateY(' + 60 * i + 'px) rotate(0deg)';
      }

    } else {
      stopAnimationIntervel();
    }
  }

  function animationtIntervel() {
    animationInt = window.setInterval(liAnimation, 50);
  }

  function stopAnimationIntervel() {
    clearInterval(animationInt);
  }

  /* ---------------
        Reset LI
    ---------------- */

  function resetLiAnimation() {
    if (i > 1) {
      i--;
      document.getElementsByTagName('li')[i].style.transform = '';
    } else {
      stopResetInterval();
    } 
  }

  function resetLiInterval() {
    resetInt = window.setInterval(resetLiAnimation, 50);
  }

  function stopResetInterval() {
    clearInterval(resetInt);
  }

};