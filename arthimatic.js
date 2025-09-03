

package com.mycompany.arithamatic;
import java.util.Scanner;

public class Arithamatic {

    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the first number");
      int n1=sc.nextInt();
      System.out.println("Enter the second number");
      int n2=sc.nextInt();
      int add = n1+n2;
      System.out.println("Addition is"+add);
      int sub = n1-n2;
      System.out.println("Substraction is"+sub);
      int mul = n1*n2;
      System.out.println("Multiplication is"+mul);
      int div = n1/n2;
      System.out.println("Division is"+div);
      int mode = n1%n2;
      System.out.println("Mod divisiom is"+mul);
         
      
    }
}
