export const Circle = (props) =>
{
var pi = 3.14
   var d = props.diameter;
   var r = d/2;
   var area = r * r * pi;
   var per = d * pi;
   return <div>
	   The circle has a diameter of {d} <br />
	   The area of the circle is {area} <br />
	   The perimeter of the circle is: {per} <br />
	   
	   
	 </div>
}