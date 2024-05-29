#include <stdio.h>
#include <stdlib.h>

int main(){
    float valor = 0;
    int messes = 0;
    printf("Dgite o valor: ");
    scanf("%d",&valor);
    while(valor <= 10000){
        messes = messes + 1;
        valor = valor + valor*0.1;
    }
    printf("O numero de meses para o seu patrimonio chega a 1.000.000 e: %d ",messes);
    printf("\nO valor a comulado e : %0.2f",valor);

}