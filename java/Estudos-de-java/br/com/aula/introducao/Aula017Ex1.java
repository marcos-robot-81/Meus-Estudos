package br.com.aula.introdução;

public class Aula017Ex1 {
    public static void main(String[] args){
        //preso do carra
        int pcarro = 64500;
        //valor por passela
        float vdpcarro = pcarro;
        int npasselas = 0;
        while(vdpcarro > 1000){
            npasselas++;
            vdpcarro = (float) pcarro/npasselas;
        }
        npasselas--;
        vdpcarro = (float) pcarro/npasselas;

        System.out.println(
                " Numero de passelas : "+npasselas+
                " volo de cada passela : R$"+vdpcarro+
                " volor total do carro R$: "+pcarro
                );
    }
}