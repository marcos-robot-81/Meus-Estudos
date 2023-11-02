class pessoa(var nome: String, var yeat: Int)  { 
    fun pntyeat(){
        println(yeat)
    }
    fun pntnome(){
        println(nome)
    }
    fun setyeat(i1:Int) {
        yeat = i1
    };
    fun setnome(n1:String){
        nome = n1
    }
    fun getyeat():Int{
        return yeat
    }
    fun getnome():String{
        return nome
    }
}

fun main(){

val pessoa1 = pessoa(nome = "Marcos", yeat = 23);
pessoa1.pntnome()   
pessoa1.pntyeat()
pessoa1.setnome("Sofia")
pessoa1.setyeat(20)
println(pessoa1.getnome())
println(pessoa1.getyeat())
}