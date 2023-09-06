package br.com.aula.introdução;

public class Aula017Ex1l2 {
    public static void main(String[] main){
        float pcarro = 64500;
        int npacelas = 0;
        float vpcarros =pcarro;
        while (vpcarros > 1000){
            npacelas++;
            if( pcarro/npacelas < 1000){
                npacelas--;
                vpcarros = pcarro/npacelas;
                System.out.println("valor do carra : R$"+pcarro
                        +" quatiddade de pacelas : "+npacelas
                        +" valor por pacelas : R$"+vpcarros);
                break;
            }else{vpcarros = pcarro/npacelas;}
        }
        System.out.print("finn");
    }
}