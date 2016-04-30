#include<iostream>
#include<stdlib.h>
using namespace std;
class game{
	int matrix[4][4];
	public:
		game(){
			for(int i=0;i<=3;i++){
				for(int j=0;j<=3;j++){
					matrix[i][j]=0;
				}
			}
		}
		void print(){
			for(int i=0;i<=3;i++){
				for(int j=0;j<=3;j++){
					cout<<"  "<<matrix[i][j];
				}
				cout<<endl;
			}
		}
		bool moveLeft(){
			bool flag=0;
			for(int i=1;i<=3;i++){
				for(int j=0;j<=3;j++){
					while(matrix[j][i-1]==0&&i>0&&i<=3&&matrix[j][i]!=0){
						matrix[j][i-1]=matrix[j][i];
						matrix[j][i]=0;
						i--;
						flag=1;
						}
					while(matrix[j][i]==matrix[j][i-1]&&i>0&&i<=3&&matrix[j][i]!=0){
						matrix[j][i-1]*=2;
						matrix[j][i]=0;
						if(matrix[j][i-1]==2048){
							char c;
							cout<<"2048 is completed do you want to continue :";
							cin>>c;
							if(c=='N'||c=='n'){
								return true; 
							}
						}
						flag=1;
						i--;
					}
					
				}
			}
			if(flag==1){
				addNew();
			}
			return false;
		}
		bool moveRight(){
			bool flag=0;
			for(int i=2;i>=0;i--){
				for(int j=0;j<=3;j++){
					while(matrix[j][i+1]==0&&i<3&&i>=0&&matrix[j][i]!=0){
						matrix[j][i+1]=matrix[j][i];
						matrix[j][i]=0;
						i++;
						flag=1;
					}
					while(matrix[j][i]==matrix[j][i+1]&&i>=0&&i<3&&matrix[j][i]!=0){
						matrix[j][i+1]*=2;
						matrix[j][i]=0;
						if(matrix[j][i+1]==2048){
							char c;
							cout<<"2048 is completed do you want to continue :";
							cin>>c;
							if(c=='N'||c=='n'){
								return true; 
							}
						}
						i++;
						flag=1;
					}
				}
			}
			if(flag==1){
				addNew();
			}
			return false;
		}
		bool moveTop(){
			bool flag=0;
			for(int i=1;i<=3;i++){
				
				for(int j=0;j<=3;j++){
					while(matrix[i-1][j]==0&&i>0&&i<=3&&matrix[i][j]!=0){
						matrix[i-1][j]=matrix[i][j];
						matrix[i][j]=0;
						i--;
						flag=1;
						
					}
					while(matrix[i][j]==matrix[i-1][j]&&i<=3&&i>0&&matrix[i][j]!=0){
						matrix[i-1][j]*=2;
						matrix[i][j]=0;
						if(matrix[i-1][j]==2048){
							char c;
							cout<<"2048 is completed do you want to continue :";
							cin>>c;
							if(c=='N'||c=='n'){
								return true; 
							}
						}
						i--;
						flag=1;
					}
					
				}
			}
			if(flag==1){
				addNew();
			}
			return false;
		}
		
		bool moveDown(){
			int flag=0;
			for(int i=2;i>=0;i--){
				for(int j=0;j<=3;j++){
					while(matrix[i+1][j]==0&&i<3&&matrix[i][j]!=0&&i>=0){
						matrix[i+1][j]=matrix[i][j];
						matrix[i][j]=0;
						i++;
						flag=1;
					}
					while(matrix[i][j]==matrix[i+1][j]&&i<3&&matrix[i][j]!=0&&i>=0){
						matrix[i+1][j]*=2;
						matrix[i][j]=0;
						if(matrix[i+1][j]==2048){
							char c;
							cout<<"2048 is completed do you want to continue :";
							cin>>c;
							if(c=='N'||c=='n'){
								return true; 
							}
						}
						i++;
						flag=1;
					}
					
				}
			}
			if(flag==1){
				addNew();
			}
			
			return false;
		}
		bool checkGameOver(){
			for(int i=0;i<=3;i++){
				for(int j=0;j<=3;j++){
					if(matrix[i][j]==0){
						return false;
					}
					if(i>0&&j>0&&(matrix[i][j]==matrix[i][j-1]||matrix[i][j]==matrix[i][j+1]||matrix[i][j]==matrix[i-1][j]||matrix[i][j]==matrix[i+1][j])){
						return false;
					}
				}
			}
			return true;
		}
		void addNew(){
			int posi,posj,n;
			posi=rand()%4;
			posj=rand()%4;
			n=rand()%10;
			if(n<9) n=2;
			else n=4;
			int f=1;
			for(int i=0;i<=3;i++){
				for(int j=0;j<=3;j++){
					if(matrix[i][j]==0){
						f=0;
					}
				}
			}
			if(f==1){
				return;
			}
			while(!check(posi,posj)){
				posi=rand()%4;
				posj=rand()%4;
			}
			matrix[posi][posj]=n;
		}
		bool check(int i, int j){
			if(matrix[i][j]==0){
				return true;
			}
			else return false;
		}
};
int main(){
	game a;
	a.addNew();
	a.print();
	char ch;
	bool f=false;
	
	while(f!=true){
		cout<<"enter your move : ";
		cin>>ch;
		switch (ch){
			case 'w':
				f=a.moveTop();
				a.print();
				break;
			case 's':
				f=a.moveDown();
				a.print();
				break;
			case 'a':
				f=a.moveLeft();
				a.print();
				break;
			case 'd':
				f=a.moveRight();
				a.print();
				break;
		}
		if(a.checkGameOver()){
			break;
		}
	}
	cout<<"\ngame over";
	
	
	return 0;
}
