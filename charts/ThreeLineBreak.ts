def Condition = if close[1] <= close[2] && close[2] <= close[3] && close > close[3] then 1 else 0;
AddLabel(Condition, "3BBU", Color.CYAN);

def Condition2 = if close[1] >= close[2] && close[2] >= close[3] && close < close[3] then 1 else 0;
AddLabel(Condition2, "3BBD", Color.VIOLET);

