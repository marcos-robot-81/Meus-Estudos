/**
 * You can edit, run, and share this code.
 * play.kotlinlang.org
 */
val name = listOf("Marcos","Juali","paulo","bia","Maria","Joaõa","pedreo","sofia")
val idade = listOf("22","30","40","50","70","12","8","2",)
var roleta = 0
var indecado = 0

fun main() {
    
 for(pri in name){
     roleta +=1
     
     for(ano in idade){
         indecado +=1
         if(roleta == indecado){
    		 println(pri+" tem "+ano+" anos")
         }
     }
  indecado = 0    
 }
 }
