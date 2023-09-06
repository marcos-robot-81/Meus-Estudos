package br.com.javacore.classer.Aula025test;

//import

public class CorroTest {
    public static  void main(String[] args){
        Carro carro = new Carro();
        carro.modelo = "camaro";
        carro.placa = "2004-fh";
        carro.vls = (float) 250.52;
        System.out.println(carro.modelo);
        System.out.println(carro.placa);
        System.out.println(carro.vls);
    }
}
