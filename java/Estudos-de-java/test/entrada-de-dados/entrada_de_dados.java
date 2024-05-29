import java.util.Scanner;


public class entrada_de_dados{
    //variaves "global".
        String[] names = {"marcos1","marcos","marcos2","d",""};
        Scanner scanner = new Scanner(System.in);
        boolean v = true;
    // nome se ussoario    
    public void entradaName(){        
        System.out.println("vamos cadastra voce");
        System.out.println("Digite um nome de acessor");    
        String name = scanner.nextLine();  
        for(int n = 0; (names.length)-1 >= n ; n = n+1){
            if(name.equals(names[n])){
                v = false;
            }    
        };
        if(v == true){
            System.out.println("seu nome esta desponivel para urso.");
             
        }else{
            System.out.println("seu nome nao esta desponivel para urso.");
        };
    }
    //senha
    public void entradaSenha(String lixo){ 

    }
    //Inicio da execocão.
    public static void main(String[] args){
        entrada_de_dados fun = new entrada_de_dados();
        

        fun.entradaName();

    };
};