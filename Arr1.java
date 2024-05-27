import java.util.*;
class Arr1
{
    public static void main(String [] asdf)
    {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b[] = new int[a];
        for(int i = 0;i<a;i++)
        {
            b[i]=sc.nextInt();
        }
        for(int i = 0;i<a;i++)
        {
            System.out.print(b[i]+" ");
        }
    }
}