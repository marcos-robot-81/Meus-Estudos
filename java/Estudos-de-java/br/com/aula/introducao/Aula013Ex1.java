package br.com.aula.introdução;

import java.util.Random;
public class Aula013Ex1 {
    public static void main(String[] args){
        Random gerado = new Random();
        int dia = gerado.nextInt(7);
        dia += 1;

        switch(dia){
            default: System.out.println("Numero ivalidor"+dia);break;
            case 7:System.out.println("Sábador não e um dia util");break;
            case 6:System.out.println("Sexta e um dia util");break;
            case 5:System.out.println("Quinta e um dia util");break;
            case 4:System.out.println("Quarta e um dia util");break;
            case 3:System.out.println("Terça e um dia util");break;
            case 2:System.out.println("Segunda e um dia util");break;
            case 1:System.out.println("Domingo não e um dia util");break;
        }
    }
}
