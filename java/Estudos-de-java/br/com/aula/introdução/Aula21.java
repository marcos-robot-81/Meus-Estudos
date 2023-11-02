package br.com.aula.introdução;

public class Aula21 {
    public static void main(String[] args){
        //arry de uma dimeção; são arry que tem somente uma dimeção.
        int[] dia = new int[31];
        //arry dimesionau ; são arry que pode te mais de uma dimeção.
        int[] [] dias = new int [3][3];
        dias [0][0] = 10;
        dias [0][1] = 20;
        dias [0][2] = dias[0][0]+dias[0][1];
        dias [1][0] = dias[0][2];
        dias [1][1] = dias[1][0]+dias[0][1];
        dias [1][2] = dias[1][1];
        System.out.println(dias[1][2]);
        
    }
}
