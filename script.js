<script>
let a = {id:'D10755530',name:"John Smith"};
let b = {};
a ["age"] = 12;

document.write(a["id"] + "<br>");
document.write(a["name"] + "<br>");
//search by key is fast
//search by value is slow

for (let key in b)
document.write("key =" + key +",value=" +b[key] + "<br>" );
document.write(b.length + "<br>");
b ["id"]=62321;
document.write(b.id + "<br>");
delete b["id"];
document.write(b.id + "<br>");
</script>

Use associate to create a name space
schedule task
<script>
let x =2;
var My =
{
	writeln : function(x){document.writeln(x + "<br>");},
	x:1,
	geti : function(x){return document.getElementById(x);}
}
My.writeln("abc");

//let handle = setTimeout(Nargfunctionname,2000);
//clearTimeout(handle);
setTimeout("My.writeln('1')",1000);
setTimeout("My.writeln('2')",2000);
setTimeout("My.writeln('3')",3000);
function fn(){My.writeln('A');}
handle = setInterval(fn,2000);

setTimeout('clearInterval(handle)',10000);
</script>