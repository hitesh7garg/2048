function game(){
//var th = ['','thousand','million', 'billion','trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];
var map={
	0:'zero',
	1:'one',
	2:'two',
	3:'three',
	4:'four',
	8:'eight',
	16:'sixteen',
	32:'thirtytwo',
	64:'sixtyfour',
	128:'onetwoeight',
	256:'twofivesix',
	512:'fiveonetwo',
	1024:'onezerotwofour',
	2048:'twozerofoureight'

};

//var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine']; 
//var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']; 
//var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']; 
//function toWords(s){s = s.toString(); s = s.replace(/[\, ]/g,''); if (s != parseFloat(s)) return 'not a number'; var x = s.indexOf('.'); if (x == -1) x = s.length; if (x > 15) return 'too big'; var n = s.split(''); var str = ''; var sk = 0; for (var i=0; i < x; i++) {if ((x-i)%3==2) {if (n[i] == '1') {str += tn[Number(n[i+1])] ; i++; sk=1;} else if (n[i]!=0) {str += tw[n[i]-2];sk=1;}} else if (n[i]!=0) {str += dg[n[i]]; if ((x-i)%3==0) str += 'hundred ';sk=1;} if ((x-i)%3==1) {if (sk) str += th[(x-i-1)/3] ;sk=0;}} if (x != s.length) {var y = s.length; str += 'point '; for (var i=x+1; i<y; i++) str += dg[n[i]];} return str.replace(/\s+/g,' ');}
	var el=document.getElementById('start');
	var matrix=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var matrixold=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var score=0;

	function moveLeft(){
	var mat=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var flag=0;
	for(var i=0;i<=3;i++){
		for(var j=0;j<=3;j++){
			matrixold[i][j]=matrix[i][j];
		}
	}
	
			for(var i=1;i<=3;i++){
				for(var j=0;j<=3;j++){
					while(i>0&&matrix[j][i-1]===0&&i<=3&&matrix[j][i]!=0){
						matrix[j][i-1]+=matrix[j][i];
						matrix[j][i]=0;
						i--;
						flag=1;
					}
					
					if(i>0&&mat[j][i-1]===0&&matrix[j][i]===matrix[j][i-1]&&i<=3&&matrix[j][i]!=0){
						matrix[j][i-1]*=2;
						matrix[j][i]=0;
						if(matrix[j][i-1]===2048){
							alert("2048 is completed do you wish to continue")
							var charcode=window.onkeypress;
							var c=String.fromCharCode(charcode);
							if(c==='N'||c==='n'){
								return 1; 
							}

						}
						flag=1;
						mat[j][i-1]=1;
						score+=matrix[j][i-1];
						//i--;
					}
					
					
				}
			}
			if(flag===1){
				addNew();
			}
			return 0;
	}
	function moveRight(){
		var mat=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var flag=0;
	for(var i=0;i<=3;i++){
			for(var j=0;j<=3;j++){
				matrixold[i][j]=matrix[i][j];
			}
		}				for(var i=2;i>=0;i--){
					for(var j=0;j<=3;j++)
					{
						while(i<3&&matrix[j][i+1]===0&&i<3&&i>=0&&matrix[j][i]!=0){
							matrix[j][i+1]+=matrix[j][i];
							matrix[j][i]=0;
							i++;
							flag=1;
							//f2=1;
						}
						
						if(i<3&&mat[j][i+1]===0&&matrix[j][i]===matrix[j][i+1]&&i>=0&&matrix[j][i]!=0){
							matrix[j][i+1]*=2;
							matrix[j][i]=0;
							if(matrix[j][i+1]===2048){
								alert("2048 is completed do you wish to continue")
								var charcode=window.onkeypress;
								var c=String.fromCharCode(charcode);
								if(c==='N'||c==='n'){
									return 1; 
								}
							}
							//i++;
							flag=1;
							//f1=1;
							mat[j][i+1]=1;
							score+=matrix[j][i+1];
						}
						
					
					}
				}
				if(flag===1){
					addNew();
				}
				return 0;
	}
	function moveTop(){
		var mat=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
			var flag=0;
			for(var i=0;i<=3;i++){
				for(var j=0;j<=3;j++){
					matrixold[i][j]=matrix[i][j];
				}
			}
				for(var i=1;i<=3;i++){					
					for(var j=0;j<=3;j++){
						while(i>0&&(matrix[i-1][j]===0)&&i<=3&&matrix[i][j]!=0){
							matrix[i-1][j]+=matrix[i][j];
							matrix[i][j]=0;
							i--;
							flag=1;
							//f2=1;
						}
						
						if(i>0&&mat[i-1][j]===0&&matrix[i][j]===matrix[i-1][j]&&i<=3&&i>0&&matrix[i][j]!=0){
							matrix[i-1][j]*=2;
							matrix[i][j]=0;
							if(matrix[i-1][j]===2048){
								alert("2048 is completed do you wish to continue")
								var charcode=window.onkeypress;
								var c=String.fromCharCode(charcode);
								if(c==='N'||c==='n'){
									return 1; 
								}
							}
							//i--;
							flag=1;
							//f1=1;
							mat[i-1][j]=1;
							score+=matrix[i-1][j];
						}
						
						

						
						
					}
				}
				if(flag===1){
					addNew();
				}
				return 0;
	}
	function moveDown(){
		var mat=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var flag=0;
	var f1=0;
	var f2=0;
	for(var i=0;i<=3;i++){
		for(var j=0;j<=3;j++){

			matrixold[i][j]=matrix[i][j];
		}
	}
				for(var i=2;i>=0;i--){
					for(var j=0;j<=3;j++){
						while(i<3&&(matrix[i+1][j]===0)&&matrix[i][j]!=0&&i>=0){
							matrix[i+1][j]+=matrix[i][j];
							matrix[i][j]=0;
							i++;
							flag=1;
						}
						
						if(i<3&&mat[i+1][j]===0&&matrix[i][j]===matrix[i+1][j]&&matrix[i][j]!=0&&i>=0){
							matrix[i+1][j]*=2;
							matrix[i][j]=0;
							if(matrix[i+1][j]===2048){
								alert("2048 is completed do you wish to continue")
								var charcode=window.onkeypress;
								var c=String.fromCharCode(charcode);
								if(c==='N'||c==='n'){
									return 1; 
								}
							}
							//i++;
							flag=1;
							mat[i+1][j]=1;
							score+=matrix[i+1][j];
						}
						
					
						
						
					}
				}
				if(flag===1){
					addNew();
				}
				
				return 0;
	}
	function checkGameOver(){
				for(var i=0;i<=3;i++){
					for(var j=0;j<=3;j++){
						if(matrix[i][j]===0){
							return 0;
						}
						if(i>0&&j>0&&(matrix[i][j]===matrix[i][j-1]||matrix[i][j]===matrix[i-1][j])){
							return 0;
						}
						if(i<3&&j<3&&(matrix[i][j]===matrix[i][j+1]||matrix[i][j]===matrix[i+1][j])){
							return 0;
						}
					}
				}
				alert("game over");
				matrix=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	}
	function check(i,j){
				if(matrix[i][j] === 0){
					return true;
				}
				else return false;
	}
	function addNew(){
		var posi,posj,n;
				posi=Math.floor(Math.random()*5243)%4;
				posj=Math.floor(Math.random()*5243)%4;				
				n=Math.floor(Math.random()*5243)%10;
				if(n<9) n=2;
				else n=4;
				var f=1;
				for(var i=0;i<=3;i++){
					for(var j=0;j<=3;j++){
						if(matrix[i][j]===0){
							f=0;
						}
					}
				}
				if(f===1){
					return;
				}
				while(!check(posi,posj)){
					posi=Math.floor(Math.random()*5243)%4;
					posj=Math.floor(Math.random()*5243)%4;
				}
				matrix[posi][posj]=n;
	}

	function print(){
		for(var i=0;i<=3;i++){
			var a=map[i+1];
			for(var j=0;j<=3;j++){
				var b=map[j+1];
				var el=document.getElementById(a+b);
				var x=map[matrix[i][j]];
				//console.log(x);
				el.className=x;
			}
		}
		document.getElementById("scoren").innerHTML=score;
	}
	function play(){
		addNew();
		print();
		var f=0;
		
		//while(f!=1){
			function cont(e){
				var ch=String.fromCharCode(e.which);
				switch (ch){
					case 'w':
						f=moveTop();
						print();
						break;
					case 's':
						f=moveDown();
						print();
						break;
					case 'a':
						f=moveLeft();
						print();
						break;
					case 'd':
						f=moveRight();
						console.log(f);
						print();
						break;
				}
				checkGameOver();
			}

			
			
			if(f!=1){
				window.addEventListener('keypress',cont);
				}
			else{
				alert("game over");
				matrix=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
			}
		//}
	}
	function undo(){
	}
	el.addEventListener('click',play);
	var undobutton=document.getElementById("undob");
	undobutton.addEventListener('click',function undo(){
		for(var i=0;i<=3;i++){
		for(var j=0;j<=3;j++){
			matrix[i][j]=matrixold[i][j];
		}
	}
		print();
	});
	

}







