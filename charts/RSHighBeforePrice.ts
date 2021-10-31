# ace18
declare lower;
def CloseSPX = close("SPX");
plot RS = if CloseSPX == 0 then 0 else close/CloseSPX;
def HighestAllRS = HighestAll(RS);
def LowestAllRS = LowestAll(RS);

def SPXchng = (close("SPX") - open("SPX"))/open("SPX");
def NDXchng = (close("NDX") - open("NDX"))/open("NDX");
def RUTchng = (close("RUT") - open("RUT"))/open("RUT");
def VIXchng = (close("VIX") - open("VIX"))/open("VIX");
def NetNewHighs = close("$NYHGH")-close("$NYLOW");
def NetNewHighs1 = close("$NYHGH")[1]-close("$NYLOW")[1];
def NetNewHighs2 = close("$NYHGH")[2]-close("$NYLOW")[2];

def QNetNewHighs = close("$NAHGH")-close("$NALOW");
def QNetNewHighs1 = close("$NAHGH")[1]-close("$NALOW")[1];
def QNetNewHighs2 = close("$NAHGH")[2]-close("$NALOW")[2];

AddLabel (yes, "SPX: " + AsPercent(SPXChng), if SPXchng > 0 then Color.GREEN else Color.RED);
AddLabel (yes, "NDX: " + AsPercent(NDXchng), if NDXchng > 0 then Color.GREEN else Color.RED);
AddLabel (yes, "RUT: " + AsPercent(RUTchng), if RUTchng > 0 then Color.GREEN else Color.RED);
AddLabel (yes, "VIX: " + close("VIX") + " (" + AsPercent(VIXchng) + ")", if close("VIX") > 24 or VIXchng > 0.1 then Color.VIOLET else Color.GRAY);
AddLabel ( if (close/CloseSPX) >= highest(HighestAllRS) then yes else no, "RS High", Color.LIGHT_ORANGE);
AddLabel (yes, "NYSE NNH: " + NetNewHighs2 + ", " + NetNewHighs1 + ", " + NetNewHighs, if NetNewHighs < 0 or NetNewHighs1 < 0 or NetNewHighs2 < 0 then Color.LIGHT_ORANGE else if NetNewHighs > 0 and NetNewHighs1 > 0 and NetNewHighs2 > 0 then Color.GREEN else Color.RED);
AddLabel (yes, "NASD NNH: " + QNetNewHighs2 + ", " + QNetNewHighs1 + ", " + QNetNewHighs, if QNetNewHighs < 0 or QNetNewHighs1 < 0 or QNetNewHighs2 < 0 then Color.LIGHT_ORANGE else if QNetNewHighs > 0 and QNetNewHighs1 > 0 and QNetNewHighs2 > 0 then Color.GREEN else Color.RED);
#plot temp = if (close/CloseSPX) >= highest(HighestAllRS) then close/CloseSPX else lowest(LowestAllRS);
#AddChartBubble ((close/CloseSPX) >= highest(HighestAllRS), close/CloseSPX, Round(close/CloseSPX, 2), Color.GRAY, yes);