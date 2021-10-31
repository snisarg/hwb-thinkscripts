# ace18

 declare upper;

 input XLY    = "XLY";
 input XLK    = "XLK";
 input XLI    = "XLI";
 input XLB    = "XLB";
 input XLE    = "XLE";
 input XLP    = "XLP";
 input XLV    = "XLV";
 input XLU    = "XLU";
 input XLF    = "XLF";
 input XLC    = "XLC";
 input XLRE   = "XLRE";

 def aggregationPeriod = AggregationPeriod.DAY; #
# def aggregationPeriod = GetAggregationPeriod(); 

# % below are how much of S&P each sector makes
 def XLKprice = open(XLK, period = aggregationPeriod);
 def XLKdiff = close (XLK) - open(XLK, period = aggregationPeriod);
 def XLK_d_pct = 100 * XLKdiff / XLKprice;
 AddLabel(yes, "InfoTech 28.2%: " + XLK_d_pct, (if XLKdiff > 0 then
 Color.GREEN else if XLKdiff<0 then color.red else Color.gray ));

 def XLVprice = open(XLV, period = aggregationPeriod);
 def XLVdiff = close (XLV) - open(XLV, period = aggregationPeriod);
 def XLV_d_pct = 100 * XLVdiff / XLVprice;
 AddLabel(yes, "Healthcare 14.2%: " + XLV_d_pct, (if XLVdiff > 0 then
 Color.GREEN else if XLVdiff<0 then color.red else Color.gray ));

 def XLYprice = open(XLY, period = aggregationPeriod);
 def XLYdiff = close (XLY) - open(XLY, period = aggregationPeriod);
 def XLY_d_pct = 100 * XLYdiff / XLYprice;
 AddLabel(yes, "ConsDisc 11.6%: " + XLY_d_pct, (if XLYdiff > 0 then
 Color.GREEN else if XLYdiff<0 then color.red else Color.gray ));

 def XLCprice = open(XLC, period = aggregationPeriod);
 def XLCdiff = close (XLC) - open(XLC, period = aggregationPeriod);
 def XLC_d_pct = 100 * XLCdiff / XLCprice;
 AddLabel(yes, "Comms 10.8%: " + XLC_d_pct, (if XLCdiff > 0 then
 Color.GREEN else if XLCdiff<0 then color.red else Color.gray ));

 def XLFprice = open(XLF, period = aggregationPeriod);
 def XLFdiff = close (XLF) - open(XLF, period = aggregationPeriod);
 def XLF_d_pct = 100 * XLFdiff / XLFprice;
 AddLabel(yes, "Financials 9.7%: " + XLF_d_pct, (if XLFdiff > 0 then
 Color.GREEN else if XLFdiff<0 then color.red else Color.gray ));

 def XLIprice = open(XLI, period = aggregationPeriod);
 def XLIdiff = close (XLI) - open(XLI, period = aggregationPeriod);
 def XLI_d_pct = 100 * XLIdiff / XLIprice;
 AddLabel(yes, "Industrials 8.3%: " + XLI_d_pct, (if XLIdiff > 0 then
 Color.GREEN else if XLIdiff<0 then color.red else Color.gray ));

 def XLPprice = open(XLP, period = aggregationPeriod);
 def XLPdiff = close (XLP) - open(XLP, period = aggregationPeriod);
 def XLP_d_pct = 100 * XLPdiff / XLPprice;
 AddLabel(yes, "ConsStaples 7%: " + XLP_d_pct, (if XLPdiff > 0 then
 Color.GREEN else if XLPdiff<0 then color.red else Color.gray ));

 def XLUprice = open(XLU, period = aggregationPeriod);
 def XLUdiff = close (XLU) - open(XLU, period = aggregationPeriod);
 def XLU_d_pct = 100 * XLUdiff / XLUprice;
 AddLabel(yes, "Utilities 3%: " + XLU_d_pct, (if XLUdiff > 0 then
 Color.GREEN else if XLUdiff<0 then color.red else Color.gray ));

 def XLREprice = open(XLRE, period = aggregationPeriod);
 def XLREdiff = close (XLRE) - open(XLRE, period = aggregationPeriod);
 def XLRE_d_pct = 100 * XLREdiff / XLREprice;
 AddLabel(yes, "RealEstate 2.6%: " + XLRE_d_pct, (if XLREdiff > 0 then
 Color.GREEN else if XLREdiff<0 then color.red else Color.gray ));

 def XLBprice = open(XLB, period = aggregationPeriod);
 def XLBdiff = close (XLB) - open(XLB, period = aggregationPeriod);
 def XLB_d_pct = 100 * XLBdiff / XLBprice;
 AddLabel(yes, "Materials 2.6%: " + XLB_d_pct, (if XLBdiff > 0 then
 Color.GREEN else if XLBdiff<0 then color.red else Color.gray ));

 def XLEprice = open(XLE, period = aggregationPeriod);
 def XLEdiff = close (XLE) - open(XLE, period = aggregationPeriod);
 def XLE_d_pct = 100 * XLEdiff / XLEprice;
 AddLabel(yes, "Energy 2%: " + XLE_d_pct, (if XLEdiff > 0 then
 Color.GREEN else if XLEdiff<0 then color.red else Color.gray ));

 def FBprice = open("FB", period = aggregationPeriod);
 def FBdiff = close ("FB") - open("FB", period = aggregationPeriod);
 def FB_d_pct = 100 * FBdiff / FBprice;
 AddLabel(yes, "FB: " + FB_d_pct, (if FBdiff > 0 then
 Color.GREEN else if FBdiff<0 then color.red else Color.gray ));

 def AMZNprice = open("AMZN", period = aggregationPeriod);
 def AMZNdiff = close ("AMZN") - open("AMZN", period = aggregationPeriod);
 def AMZN_d_pct = 100 * AMZNdiff / AMZNprice;
 AddLabel(yes, "AMZN: " + AMZN_d_pct, (if AMZNdiff > 0 then
 Color.GREEN else if AMZNdiff<0 then color.red else Color.gray ));

 def NFLXprice = open("NFLX", period = aggregationPeriod);
 def NFLXdiff = close ("NFLX") - open("NFLX", period = aggregationPeriod);
 def NFLX_d_pct = 100 * NFLXdiff / NFLXprice;
 AddLabel(yes, "NFLX: " + NFLX_d_pct, (if NFLXdiff > 0 then
 Color.GREEN else if NFLXdiff<0 then color.red else Color.gray ));

 def GOOGprice = open("GOOG", period = aggregationPeriod);
 def GOOGdiff = close ("GOOG") - open("GOOG", period = aggregationPeriod);
 def GOOG_d_pct = 100 * GOOGdiff / GOOGprice;
 AddLabel(yes, "GOOG: " + GOOG_d_pct, (if GOOGdiff > 0 then
 Color.GREEN else if GOOGdiff<0 then color.red else Color.gray ));


 def MSFTprice = open("MSFT", period = aggregationPeriod);
 def MSFTdiff = close ("MSFT") - open("MSFT", period = aggregationPeriod);
 def MSFT_d_pct = 100 * MSFTdiff / MSFTprice;
 AddLabel(yes, "MSFT: " + MSFT_d_pct, (if MSFTdiff > 0 then
 Color.GREEN else if MSFTdiff<0 then color.red else Color.gray ));

 def AAPLprice = open("AAPL", period = aggregationPeriod);
 def AAPLdiff = close ("AAPL") - open("AAPL", period = aggregationPeriod);
 def AAPL_d_pct = 100 * AAPLdiff / AAPLprice;
 AddLabel(yes, "AAPL: " + AAPL_d_pct, (if AAPLdiff > 0 then
 Color.GREEN else if AAPLdiff<0 then color.red else Color.gray ));

 def NVDAprice = open("NVDA", period = aggregationPeriod);
 def NVDAdiff = close ("NVDA") - open("NVDA", period = aggregationPeriod);
 def NVDA_d_pct = 100 * NVDAdiff / NVDAprice;
 AddLabel(yes, "NVDA: " + NVDA_d_pct, (if NVDAdiff > 0 then
 Color.GREEN else if NVDAdiff<0 then color.red else Color.gray ));

 def TSLAprice = open("TSLA", period = aggregationPeriod);
 def TSLAdiff = close ("TSLA") - open("TSLA", period = aggregationPeriod);
 def TSLA_d_pct = 100 * TSLAdiff / TSLAprice;
 AddLabel(yes, "TSLA: " + TSLA_d_pct, (if TSLAdiff > 0 then
 Color.GREEN else if TSLAdiff<0 then color.red else Color.gray ));

 def TLTprice = open("TLT", period = aggregationPeriod);
 def TLTdiff = close ("TLT") - open("TLT", period = aggregationPeriod);
 def TLT_d_pct = 100 * TLTdiff / TLTprice;
 AddLabel(yes, "TLT: " + TLT_d_pct, (if TLTdiff > 0 then
 Color.red else if TLTdiff<0 then color.red else Color.green ));


