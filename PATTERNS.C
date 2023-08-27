

void Pattern2(int N)
{
 int i,j,k=65;
 for(i=1;i<=N;i++)
 {
 for(j=1;j<=N;j++)
 {
 if(i==1||i==N||j==1||j==N)
 {
 printf("* ");
 }
 else
 {
 printf("%c",k);
 k++;
 }

 }

 printf("\n");

 }


}

void main()
{
int N;
printf("Enter the Number");
scanf("%d",&N);
//Pattern(N);
  Pattern2(N);
getch();
}