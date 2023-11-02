#include <stdio.h>
#include <string.h>

int fff(char text[]){

text = text+(50000000-4214896);
printf("o text e:%d",text);
return 0;
}

int main() {
    fff("a");
    return 0;
}