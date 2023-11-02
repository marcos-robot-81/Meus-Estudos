package br.com.aula.introdução;

public class Aula020 {
    public static void main(String[] args){
        // As 3 maneiras defini quantas cassas tem uma arry são.
        int[] x = new int[5];
        int[] w = {1,2,3,4,5};
        int[] y = new int[] {1,3,4,5,2};
        //novo tipor de for forit
        System.out.println('-');
        for(int aux : y){
            System.out.println(aux);
        }
    }
}
