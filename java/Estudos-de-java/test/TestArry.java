package test;

public class TestArry {
    public static void main(String[] args){
        byte[] x = new byte[2];
        x[0] = 2;
        x[1] = 3;
        for(byte y = 0; y< x.length; y++) {
            System.out.println(x[y]+" "+y);
        }
        byte z = 126;
        // add valores arry
        for(byte[] y = new byte[x.length]; true != ((x.length) > (y.length)); ){

            for(byte w = 0; w< x.length; w++) {
                y[w] = x[w];
            }

            for(byte w = 0; w< y.length; w++) {
                System.out.println(y[w] + " " + w);
            }

            //  byte[] x = new byte[1+(y.length)];

            for(byte w = 0; w < x.length ; w++){
                if(y.length < x.length){
                x[w] = y[w];
                }else{
                    x[w] = z;
                }
            }
            System.out.println("tudo setor");
        }
        for(byte y = 0; y< x.length; y++) {
            System.out.println(x[y] + " " + y);
        }
    }
}
