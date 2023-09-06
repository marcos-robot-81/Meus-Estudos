package br.com.aula.introdução;

public class Aula016Ex01 {
    public static void main(String[] args){
        //exeolo com while:
        /*
        int numero = -1;
        while(numero < 100){
            System.out.println(++numero);
        }
        */

        //exeplo com for:
        /*
        for(int numero = 0 ; numero < 101 ; ++numero){
            System.out.println(numero);
         */

        // exeplo com do while
        int numero = 0;
        do{
            if(numero%2==0){
            System.out.println(numero);
        }numero++;
        }while(numero<101);
    }
}
