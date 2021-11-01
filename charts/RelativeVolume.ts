# Relative Volume
input length = 50;
def RelVol = volume(period = AggregationPeriod.DAY) / Average(volume(period = AggregationPeriod.DAY), length);

AddLabel(1, "RVOLD: " +
AsPercent(round(RelVol)),
if (volume(period = AggregationPeriod.DAY)
> Average(volume(period =
AggregationPeriod.DAY), length) and close > close[1]) 
then Color.GREEN
else if (volume(period = AggregationPeriod.DAY)
> Average(volume(period =
AggregationPeriod.DAY), length) and close < close[1])
then Color.RED
else Color.GRAY);
#End of Label Code#
