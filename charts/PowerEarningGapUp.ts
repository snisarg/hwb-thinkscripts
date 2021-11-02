# Ace18
# http://theimpatienttrader.blogspot.com/2019/02/what-is-power-earnings-gap-and-how-to.html

	#hint: SCAN (only) for "PEG" stands for power earnings gap. looking for a pullback from a previous gap and the stock is in a consolidation phase.

declare upper;
input wthn = 63; # periods to look for gap
def x = 1.02;
def y = 1.03;
def z = 1.04;

def cl = close;
def lo = low;
def hi = high;
def op = open;
def vo = volume;
def vo50 = Average(volume, 50);
def barnumber = BarNumber();

def gapup = lo > hi[1] * x or cl > cl[1] * y;
def epgapup = op > hi[1] and cl > cl[1] * z;

def sign_up = if gapup then barnumber else 0;
def sign_up2 = if epgapup then barnumber else 0;
def vol_up = if vo > 1.5 * vo[1] then 1 else 0;
def vol_up2 = if vo > 2 * vo50 then 1 else 0;
def EarningsDate = if HasEarnings(EarningTime.ANY) then 1 else 0;

def PParrow = sign_up*vol_up*(EarningsDate+EarningsDate[1]) or sign_up2*vol_up2;
plot PP = PParrow;
PP.SetPaintingStrategy(PaintingStrategy.BOOLEAN_WEDGE_UP);
PP.SetLineWeight(2);
PP.AssignValueColor(if sign_up*vol_up*(EarningsDate+EarningsDate[1]) and sign_up2*vol_up2 then Color.GREEN else if sign_up*vol_up*(EarningsDate+EarningsDate[1]) then Color.MAGENTA else Color.ORANGE);

def anchorBar = HighestAll(sign_up * vol_up * (EarningsDate + EarningsDate[1]));
def anchorBar2 = if anchorBar then anchorBar else Double.NaN;
def barNumber2 = if IsNaN(close) then Double.NaN else BarNumber();
def isLastBar = if !IsNaN(close) and IsNaN(close[-1]) then BarNumber() else Double.NaN;
def highestBar = HighestAll(isLastBar);
def postAnchorDate = if barNumber2 <= highestBar and barNumber2 >= anchorBar2 then 1 else 0;
#plot anchoredVWAP = TotalSum(if postAnchorDate then ((high + low + close) / 3) * (volume) else 0) / TotalSum(if postAnchorDate then volume else 0);

#anchoredVWAP.SetStyle(Curve.POINTS);
#anchoredVWAP.SetLineWeight(1);
#anchoredVWAP.SetDefaultColor(Color.LIGHT_ORANGE);
