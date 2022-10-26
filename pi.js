<!DOCTYPE html>  
<html>  
  
<head>  
<title>  
Math.PI  
</title>  
  
</head>  
  
<body>  
<p>  
Welcome to the javaTpoint.com  
</p>  
<p id = "para"></p>  
  
  
<script>   
var r = area(8);  
document.getElementById('para').innerHTML = 'The area of circle with radius 8 is: ' + r ;  
  function area(radius)   
  {   
return Math.PI * radius * radius;  
  }   
    
</script>   
  
</body>  
  
</html>  
