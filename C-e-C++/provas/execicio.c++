#include <stdio.h>
#include <stdlib.h>
//Profesor:Desenvolva um programa que leia 15 números inteiros e positivos e mostre o maior deles.
//Aluno: Desidi trabalha com os valores lixos e mostra o manhor deles.

int main(){
    int n[15]; 
    int d = -9999999;
    int v;
   
    for(int m = 0;m <= (sizeof(n)/sizeof(n[0]));m++){
        printf("%d nomero: ",m);
        scanf("%d",&n[m]);  
    }
    for(int m = 0;m <= (sizeof(n)/sizeof(n[0]));m++){
        for(int b = 0;b <= (sizeof(n)/sizeof(n[0]));b++){
                if(n[m] > n[b]){
                    if(n[m] >= d){
                    d = n[m];
                    }
                }
        }
    }
    v = d;
    printf("\nO manhor valor e: %d",v);
}
 
 