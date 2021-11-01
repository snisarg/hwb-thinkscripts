def len = 20;
def ADRp = Round(100*(Average(high,len)/Average(low,len)-1),1);
AddLabel (yes, "ADR: "+ADRp+"%", if ADRp > 4 then color.GREEN else if ADRp < 3 then Color.RED else color.LIGHT_ORANGE);
