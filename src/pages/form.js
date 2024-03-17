var input=  document.getElementById('document');
input.addEventListener('input',function(){
  if (this.value.length > 10) 
     this.value = this.value.slice(0,10); 
})