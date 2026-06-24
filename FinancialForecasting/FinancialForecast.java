public class FinancialForecast {

    public static double predict(
            double value,
            double growth,
            int years) {

        if(years == 0) {
            return value;
        }

        return predict(
                value *
                (1 + growth),
                growth,
                years - 1
        );
    }

    public static void main(
            String[] args) {

        double current =
                10000;

        double growth =
                0.10;

        int years =
                3;

        double future =
                predict(
                        current,
                        growth,
                        years
                );

        System.out.println(
                "Future Value = "
                + future
        );

    }

}