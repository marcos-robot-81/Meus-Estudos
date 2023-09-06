package test.calculadora;

public class Calcula {
     public static void main(String[] args){
          byte n0 = 4;
          float numero0 = 250;
          float numero1 = 50;
          //sum
          if(n0 == 0) {
               Soma soma = new Soma();
               soma.mais(numero0, numero1);
          }else if(n0 == 1) {//sbtract
               Subitrai sob = new Subitrai();
               sob.sbtract(numero0,numero1);
          }else if(n0 == 2){ //Mutiplite
               Mustiplica must = new Mustiplica();
               must.musti(numero0,numero1);
          }else if (n0 == 3){  //dividi
               Dividi divi = new Dividi();
               divi.dividi(numero0,numero1);
          }else{//Erro
               System.out.println("Erro");
          }





     }
}
