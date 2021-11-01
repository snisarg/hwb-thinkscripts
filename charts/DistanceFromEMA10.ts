input price = close;
input length = 10;
def ExpAvg = ExpAverage(price, length);
def D10 = (price/ExpAvg)-1;
AddLabel(1, "D10: " + AsPercent(D10), if (D10 >= 0 and D10 < 0.025)
then Color.GREEN
else if (D10 >= 0.025 and D10 < 0.10) then Color.LIGHT_ORANGE
else Color.RED);
