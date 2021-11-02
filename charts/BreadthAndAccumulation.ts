# Ace18

declare lower;
#def CloseSPX = close("SPX");
#def RS = if CloseSPX == 0 then 0 else (close / CloseSPX);
#def HighestAllRS = HighestAll(RS);
#def LowestAllRS = LowestAll(RS);
#plot RS1 = RS-LowestAllRS;
#plot RS1 = RS-(HighestAllRS/2);
#RS1.AssignValueColor(Color.GRAY);
#RS1.SetLineWeight(1);

#def ATR20 = MovingAverage(AverageType.WILDERS, TrueRange(high, close, low), 20);
#def ATR5 = MovingAverage(AverageType.WILDERS, TrueRange(high, close, low), 5);
#def ATRRatio = ATR5 / ATR20;
#plot ATRP = Log(ATRRatio) * HighestAllRS;
plot ZeroLine = 0.5;
ZeroLine.AssignValueColor(Color.DARK_GRAY);
#ATRP.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
#ATRP.AssignValueColor (if ATRP < 0 then Color.CYAN else Color.MAGENTA);

def SPXchng = (close("SPX") - open("SPX")) / open("SPX");
def NDXchng = (close("NDX") - open("NDX")) / open("NDX");
def RUTchng = (close("RUT") - open("RUT")) / open("RUT");
def VIXchng = (close("VIX") - open("VIX")) / open("VIX");
def VXNchng = (close("VXN") - open("VXN")) / open("VXN");
def NetNewHighs = close("$NYHGH") - close("$NYLOW");
def NetNewHighs1 = close("$NYHGH")[1] - close("$NYLOW")[1];
def NetNewHighs2 = close("$NYHGH")[2] - close("$NYLOW")[2];

def QNetNewHighs = close("$NAHGH") - close("$NALOW");
def QNetNewHighs1 = close("$NAHGH")[1] - close("$NALOW")[1];
def QNetNewHighs2 = close("$NAHGH")[2] - close("$NALOW")[2];

AddLabel (yes, "SPX: " + AsPercent(SPXchng), if SPXchng > 0 then Color.GREEN else Color.RED);
AddLabel (yes, "NDX: " + AsPercent(NDXchng), if NDXchng > 0 then Color.GREEN else Color.RED);
AddLabel (yes, "RUT: " + AsPercent(RUTchng), if RUTchng > 0 then Color.GREEN else Color.RED);
AddLabel (yes, "VIX: " + close("VIX") + " (" + AsPercent(VIXchng) + ")", if close("VIX") > 24 or VIXchng > 0.1 then Color.VIOLET else Color.GRAY);
#AddLabel (yes, "VXN: " + close("VXN") + " (" + AsPercent(VXNchng) + ")", if close("VXN") > 24 or VXNchng > 0.1 then Color.VIOLET else Color.GRAY);
#AddLabel ( if (close / CloseSPX) >= Highest(HighestAllRS) then yes else no, "RS High", Color.LIGHT_ORANGE);

AddLabel (yes, "NYSE: " + NetNewHighs2 + ", " + NetNewHighs1 + ", " + NetNewHighs, if NetNewHighs < 0 or NetNewHighs1 < 0 or NetNewHighs2 < 0 then Color.LIGHT_ORANGE else if NetNewHighs > 0 and NetNewHighs1 > 0 and NetNewHighs2 > 0 then Color.GREEN else Color.RED);
AddLabel (yes, "NASD: " + QNetNewHighs2 + ", " + QNetNewHighs1 + ", " + QNetNewHighs, if QNetNewHighs < 0 or QNetNewHighs1 < 0 or QNetNewHighs2 < 0 then Color.LIGHT_ORANGE else if QNetNewHighs > 0 and QNetNewHighs1 > 0 and QNetNewHighs2 > 0 then Color.GREEN else Color.RED);
#plot temp = if (close/CloseSPX) >= highest(HighestAllRS) then close/CloseSPX else lowest(LowestAllRS);
#AddChartBubble ((close/CloseSPX) >= highest(HighestAllRS), close/CloseSPX, Round(close/CloseSPX, 2), Color.GRAY, yes);

input Symb = {default "NYSE", "NASDQ", "AMEX", "ARCA", "ETF"};
def length = 10;
#def OverSold = -0.3 * HighestAllRS;
#def OverBought = 0.3 * HighestAllRS;
def OverSold = 0.2;
def OverBought = 0.8;

def AvgType = AverageType.HULL;

#def agg = AggregationPeriod.Day;
def NYSEH  = close(Symbol = "$NYHGH");
def NYSEL  = close(Symbol = "$NYLOW");
def NASDQH = close(Symbol = "$NAHGH");
def NASDQL = close(Symbol = "$NALOW");
def AMEXH  = close(Symbol = "$AMHGH");
def AMEXL  = close(Symbol = "$AMLOW");
def ARCAH  = close(Symbol = "$ARHGH");
def ARCAL  = close(Symbol = "$ARLOW");
def ETFH   = close(Symbol = "$ETFHGH");
def ETFL   = close(Symbol = "$ETFLOW");
def P;
switch (Symb){
case "NYSE":
    P = NYSEH / (NYSEH + NYSEL);
case "NASDQ":
    P = NASDQH / (NASDQH + NASDQL);
case "AMEX":
    P = AMEXH / (AMEXH + AMEXL);
case "ARCA":
    P = ARCAH / (ARCAH + ARCAL);
case "ETF":
    P = ETFH / (ETFH + ETFL);
}
def price = if IsNaN(P) then price[1] else P;
#def data = if IsNaN(close) then Double.NaN else (price - 0.5) * HighestAllRS;
def data = if IsNaN(close) then Double.NaN else price;
plot avg = MovingAverage(AvgType, data, length);
avg.SetPaintingStrategy(PaintingStrategy.POINTS);
avg.EnableApproximation();
avg.AssignValueColor(if Between(avg, OverSold, OverBought)
                     then Color.DARK_ORANGE
                     else if avg >= OverBought
                          then Color.DARK_GREEN
                          else Color.RED);

