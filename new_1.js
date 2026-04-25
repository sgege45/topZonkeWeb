function display()
{
	let name = document.getElementById("studName").value ;
	
	let pass = document.getElementsByName("studentCourse") ;
	
	let studReg ;
	
	for(let i = 0 ; i < pass.length ; i++){
		
		if(pass[i].checked){
			
			studReg = pass[i].value ;
		}
	}
	
	document.write( " your course is : " + studReg);
	
}
const d = new Date() ;
document.getElementById("time").innerHTML = d ;