export const  pi = 3.14159;

export const Circle = (props) =>
{
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