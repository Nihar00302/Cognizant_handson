public class Computer {

    String cpu;
    String ram;
    String storage;

    private Computer(Builder builder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
    }

    static class Builder {

        String cpu;
        String ram;
        String storage;

        Builder setCPU(String cpu) {
            this.cpu = cpu;
            return this;
        }

        Builder setRAM(String ram) {
            this.ram = ram;
            return this;
        }

        Builder setStorage(String storage) {
            this.storage = storage;
            return this;
        }

        Computer build() {
            return new Computer(this);
        }

    }

    void display() {
        System.out.println(cpu);
        System.out.println(ram);
        System.out.println(storage);
    }

}