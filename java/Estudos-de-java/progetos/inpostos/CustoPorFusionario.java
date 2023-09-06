package progetos.inpostos;

public class CustoPorFusionario {
    public static void main(String[] args) {
        float salario = (float) 1200.00;
        int tdinpusto = 1;
        float vdi = 0;
        if (tdinpusto == 0) {
            System.out.println("Tipo de inpostu e siplis.");
            vdi = salario + salario * 300 / 1000;
            System.out.println("O custo do fusionario e : R$" + vdi + " o salario de e : R$" + salario
                    + " o inposto e de : R$" + salario * 325 / 1000);
        } else if (tdinpusto == 1) {
            System.out.println("tipo de inpostu e prisomido.");
            vdi = salario + salario * 600 / 1000;
            System.out.println("O custo do fusionario e : R$" + vdi + " o salario de e : R$" + salario
                    + " o inposto e de : R$" + salario * 631 / 1000);
        } else {
            System.out.println("Erro");
        }
    }
}
