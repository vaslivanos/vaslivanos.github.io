var arr = ["images/vasilis1.jpg", "images/vasilis2.jpg"];

function getRandomImage() {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

$("#img").hover(
  function() {
    var image = getRandomImage();
    $("#profile_img").attr("src", image);
    console.log(image);
  });