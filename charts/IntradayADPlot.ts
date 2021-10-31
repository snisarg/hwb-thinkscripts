def UVOL = close("$UVOL");
def DVOL = close("$DVOL");
def ADVN = close("$ADVN");
def DECN = close("$DECN");
plot Data1 = (ADVN/(ADVN+DECN))*(UVOL/(UVOL+DVOL));
Data1.SetDefaultColor(Color.GREEN);
plot Data2 = (DECN/(ADVN+DECN))*(DVOL/(UVOL+DVOL));
Data1.SetDefaultColor(Color.RED);
