<script>
function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 100;
var span = document.querySelector('span');
var pre = document.querySelector('pre');
var delay = span.innerHTML.length * speed + speed;

// type affect to header
typeEffect(span, speed);

// type affect to body
setTimeout(function(){
  pre.style.display = "inline-block";
  typeEffect(pre, speed);
}, delay);

</script>