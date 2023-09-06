package br.com.aula.introdução;

public class Aula017Ex1l3 {
    public static void main(String[] main){
        float pcarro = 64500;
        float vpacelas = pcarro;
        int np = 0;

        for(int npaselas = 1; pcarro/npaselas > 1000 ; ++npaselas){
            vpacelas =  pcarro/npaselas;
            np = npaselas;
        }
        System.out.println("Quatidades de paseças : "+np+
                " Valor por paserla : R$"+vpacelas+
                " volor cheinho do carro : R$"+pcarro);
}}