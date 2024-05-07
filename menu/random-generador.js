// Function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var sections = document.getElementsByClassName("menu-subsection");
  
  var randomX = 0;
  for (var sectionId = 0; sectionId < sections.length; sectionId++) {
    if (sectionId%2 !== 0) {randomX = 200; console.log("id was " + sectionId)}
    else{randomX = -200; console.log("id was odd")};

    var imgs = sections[sectionId].getElementsByClassName("menu-img");
    for (var i = 0; i < imgs.length; i++) 
    {
        imgs[i].style.transform = "translateX(" + randomX + "px)";
    }
  }
  
  
  