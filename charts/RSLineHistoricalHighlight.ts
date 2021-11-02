# Ace18
# Teal dot = RS made a new high before price looking back 3 months
# Green line = momentum burts

#def CloseSPX = close("SPX");
#def SF1 = HighestAll(CloseSPX)/1.75;
#def RS = if CloseSPX == 0 then 0 else (close * SF1 / CloseSPX);
#def HighestAllRS = HighestAll(RS);
#plot RS1 = RS;
#RS1.AssignValueColor(Color.GRAY);
#RS1.SetLineWeight(1);

#AddChartBubble ((close * SF/CloseSPX) >= highest(HighestAllRS), close * SF/CloseSPX, "RS High", if (Average(RS1, 30) > Average(RS1, 30)[30]) then Color.LIGHT_ORANGE else Color.RED, yes);

input TimeFrame = {default "Three_Months", "Six_Months", "1_Year"};
def isLastBar = BarNumber() == HighestAll(if !IsNaN(close) then BarNumber() else Double.NaN);

def Length = if TimeFrame == TimeFrame.Three_Months then 63 else if TimeFrame == TimeFrame.Six_Months then 126 else 252;

def indexclose = close("SPX", AggregationPeriod.DAY);
def SF = HighestAll(indexclose) / 1.75;
def RSclose = close * SF / indexclose;

#def barCount = IF !IsNaN(close) THEN IF IsNaN(barCount[1]) THEN 1 ELSE barCount[1] + 1 ELSE barCount[1];

#Normalize Relative Strength
def newRngMax = 99; #Maximum normalized value
def newRngMin = 1; #Minimum normalized value

def HHDataclose = HighestAll(RSclose);
def LLDataclose = LowestAll(RSclose);
def normalizeRSclose = ((( newRngMax - newRngMin ) * ( RSclose - LLDataclose )) / ( HHDataclose - LLDataclose )) + newRngMin;

#Chart RS Line and set appearence:
plot RSLine = RSclose;
RSLine.SetLineWeight(1);
#MomentumBurst Color
def MB = if (((close - open) >= .90 and volume > 100000) or (close/close[1] >= 1.04 and volume > volume[1] and volume >= 100000)) then 1 else 0;
RSLine.AssignValueColor(if MB then Color.GREEN else Color.GRAY);

#Get Highest RS Value
def highestRS = Highest(RSclose, Length);

#RSNHBPCondition
def RSNHBPcondition = if RSclose >= highestRS and close < Highest(close, Length) then highestRS else no;

plot RSNHBP = if RSNHBPcondition == highestRS then highestRS else Double.NaN;
plot RSNH = if RSNHBPcondition == no and RSclose == highestRS and isLastBar then highestRS else Double.NaN;
RSNHBP.SetPaintingStrategy(PaintingStrategy.POINTS);
RSNHBP.SetLineWeight(2);
RSNHBP.SetDefaultColor(Color.GREEN);
RSNHBP.HideBubble();
RSNH.SetPaintingStrategy(PaintingStrategy.POINTS);
RSNH.SetDefaultColor(Color.CYAN);
RSNH.SetLineWeight(5);
RSNH.HideBubble();

#Add Chart Bubble for RS Rating
#AddChartBubble(RS_Rating_ChartBubble and isLastBar, RSclose, "RS: " + Round(normalizeRSclose, 0), Color.GRAY, yes);
#AddLabel (yes, "RS: " + Round(normalizeRSclose, 0), if Round(normalizeRSclose, 0) >= 80 then Color.CYAN else Color.MAGENTA);
#AddChartBubble (RSLine >= HighestAll(highestRS), RSLine, "RS High", Color.GRAY, yes);
