//immediately invoked functions

(function()
{
    var sc=Math.random()*10;
    console.log(sc);
    console.log(sc>=5);
})();
(function(z){
    var sc=Math.random()*10;
    console.log(sc);
    console.log(sc>=50-z);
})(10);
function myf(){
    (function()
    {
        var sc=Math.random()*10;
        console.log(sc);
        console.log(sc>=5);
    })(); 
}
myf();