#include <stdio.h>
#include <math.h>

int main()
{
    double valor;
    int notas, moedas, centavos;

    scanf("%lf", &valor);

    // Convertemos para centavos para evitar problemas com ponto flutuante
    int totalCentavos = round(valor * 100);

    printf("NOTAS:\n");

    int notas100 = totalCentavos / 10000;
    totalCentavos %= 10000;

    int notas50 = totalCentavos / 5000;
    totalCentavos %= 5000;

    int notas20 = totalCentavos / 2000;
    totalCentavos %= 2000;

    int notas10 = totalCentavos / 1000;
    totalCentavos %= 1000;

    int notas5 = totalCentavos / 500;
    totalCentavos %= 500;

    int notas2 = totalCentavos / 200;
    totalCentavos %= 200;

    printf("%d nota(s) de R$ 100.00\n", notas100);
    printf("%d nota(s) de R$ 50.00\n", notas50);
    printf("%d nota(s) de R$ 20.00\n", notas20);
    printf("%d nota(s) de R$ 10.00\n", notas10);
    printf("%d nota(s) de R$ 5.00\n", notas5);
    printf("%d nota(s) de R$ 2.00\n", notas2);

    printf("MOEDAS:\n");

    int moeda1 = totalCentavos / 100;
    totalCentavos %= 100;

    int moeda050 = totalCentavos / 50;
    totalCentavos %= 50;

    int moeda025 = totalCentavos / 25;
    totalCentavos %= 25;

    int moeda010 = totalCentavos / 10;
    totalCentavos %= 10;

    int moeda005 = totalCentavos / 5;
    totalCentavos %= 5;

    int moeda001 = totalCentavos;

    printf("%d moeda(s) de R$ 1.00\n", moeda1);
    printf("%d moeda(s) de R$ 0.50\n", moeda050);
    printf("%d moeda(s) de R$ 0.25\n", moeda025);
    printf("%d moeda(s) de R$ 0.10\n", moeda010);
    printf("%d moeda(s) de R$ 0.05\n", moeda005);
    printf("%d moeda(s) de R$ 0.01\n", moeda001);

    return 0;
}
