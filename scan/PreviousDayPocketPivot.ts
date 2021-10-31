# ace18

input Period = 11;  # normal volume lookback period (today + 10 prior days)
input MaximumDistanceFrom10DaySMAPercent = 1.4;  # Price on pivot day should be near the 10-day SMA.  MAX = 1.6 Per FOSL1, 1.23 per PII, but RAX not extended at 1.61 and 1.64.

# Volume functions
def DownVolume = If(close < close[1], volume, 0);
def HighestDownVolume = Highest(DownVolume, Period);

def FiftyDayAverageVolume = MovingAverage(AverageType.SIMPLE, volume, 50);

def IsVolumeGreaterHighestDownVolume = if (volume > HighestDownVolume) then 1 else 0;

# Price functions
def TenDaySMA = MovingAverage(AverageType.SIMPLE, close, 10);
def FiftyDaySMA = MovingAverage(AverageType.SIMPLE, close, 50);

def IsLowPriceNear10DaySMA = if ((AbsValue(low - TenDaySMA) / TenDaySMA) <= MaximumDistanceFrom10DaySMAPercent / 100) then 1 else 0;
def DidPricePass10DaySMA = if (low <= TenDaySMA && close >= TenDaySMA) then 1 else 0;

def IsPriceNear10DaySMA = if (IsLowPriceNear10DaySMA or DidPricePass10DaySMA) then 1 else 0;

def IsPriceAtOrAbove50DaySMA = if (close >= FiftyDaySMA) then 1 else 0;

def AveragePriceChangePercent = MovingAverage(AverageType.SIMPLE, AbsValue(close[1] - close[2]) / close[2], Period);

def IsCloseInUpperHalfOfRange = close >= close[1] && close > ((high - low) * .38 + low);

def IsPriceInTheProperRange = if (IsCloseInUpperHalfOfRange && IsPriceNear10DaySMA && IsPriceAtOrAbove50DaySMA) then 1 else 0;



#Scan
def PParrow = IsVolumeGreaterHighestDownVolume[1] and IsPriceInTheProperRange[1] and close <= close[1] and close > low[1] and volume < volume[1];
plot scan = PParrow;


