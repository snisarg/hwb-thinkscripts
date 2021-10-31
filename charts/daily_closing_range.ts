# Daily Closing Range
# ace18? 

def agg = AggregationPeriod.DAY;
def DCR = (close(period = agg) - low(period=agg))/(high(period=agg) - low(period=agg));
AddLabel(1, "DCR: " +
AsPercent(round(DCR)),
if DCR >= 0.5
then Color.GREEN
else Color.RED);
#End of Label Code#