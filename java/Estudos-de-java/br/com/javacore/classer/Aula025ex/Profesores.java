package br.com.javacore.classer.Aula025ex;

public class Profesores {
    public static void main(String[] args){
        Professor prof = new Professor();
        // inpurt prof 1
        prof.name = "Bia";
        prof.registratio = 2605;
        prof.rg = 10040592;
        prof.cpf = 11111111;
        //inpurt prof2
        Professor prof2 = new Professor();
        prof2.name = "fabricio";
        prof2.registratio = 188304;
        prof2.rg = 00100101;
        prof.cpf = 0301331;

        //print prof 1
        System.out.println(prof.name);
        System.out.println(prof.registratio);
        System.out.println(prof.rg);
        System.out.println(prof.cpf);
        //print prof 2
        System.out.println("______");
        System.out.println(prof2.name);
        System.out.println(prof2.registratio);
        System.out.println(prof2.rg);
        System.out.println(prof2.cpf);
    }
}

