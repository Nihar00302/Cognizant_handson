public class TestBuilder {

    public static void main(String[] args) {

        Computer c =
                new Computer.Builder()
                .setCPU("Intel i7")
                .setRAM("16GB")
                .setStorage("512GB")
                .build();

        c.display();

    }

}