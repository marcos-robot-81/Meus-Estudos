package test.carros;

public class Car {
    public static void main(String[] args){
    CarInfor lam = new CarInfor();
    lam.carcolor = "red";
    lam.carmax = (float) 200.50;
    lam.carmodel = "lamborghini";

    System.out.println("color of car: "+lam.carcolor+", max velocity car: "+lam.carmax+"KM/H, model of car: "+lam.carmodel);

    }
}
