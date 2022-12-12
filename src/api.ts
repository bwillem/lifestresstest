const API_VERSION: Number = 1

const SURVEYID = function () {
    switch (API_VERSION) {
        case 1: { return '691287' };
        case 2: { return '686833' };
        default: { return '691287' };
    }
}()

const PHQGID = function(){ 
    switch(API_VERSION) {
        case 1: { return '147' };
        case 2: { return '6980' };
        default: { return '147' };
    }
}()

const STRAINBODY1GID = function(){ 
    switch(API_VERSION) {
        case 1: { return '146' };
        case 2: { return '6979' };
        default: { return '146' };
    }
}()

const STRAINBODY2GID = function(){ 
    switch(API_VERSION) {
        case 1: { return '145' };
        case 2: { return '6978' };
        default: { return '145' };
    }
}()

const STRAINBODY3GID = function(){ 
    switch(API_VERSION) {
        case 1: { return '144' };
        case 2: { return '6977' };
        default: { return '144' };
    }
}()

const STRAINBODY4GID = function(){ 
    switch(API_VERSION) {
        case 1: { return '143' };
        case 2: { return '6976' };
        default: { return '143' };
    }
}()

const STRAINBODY5GID = function(){ 
    switch(API_VERSION) {
        case 1: { return '142' };
        case 2: { return '6975' };
        default: { return '142' };
    }
}()

const STRAINBODY6GID = function(){ 
    switch(API_VERSION) {
        case 1: { return '139' };
        case 2: { return '6972' };
        default: { return '139' };
    }
}()

const STRAINBODY7GID = function(){ 
    switch(API_VERSION) {
        case 1: { return '140' };
        case 2: { return '6973' };
        default: { return '140' };
    }
}()

const STRAINBODY8GID = function(){ 
    switch(API_VERSION) {
        case 1: { return '141' };
        case 2: { return '6974' };
        default: { return '141' };
    }
}()

const STRAINDEMOGRAPHICSGID = function(){ 
    switch(API_VERSION) {
        case 1: { return '138' };
        case 2: { return '6971' };
        default: { return '138' };
    }
}()

const STRAINGID = function(){ 
    switch(API_VERSION) {
        case 1: { return '137' };
        case 2: { return '6970' };
        default: { return '137' };
    }
}()

const K6GID = function(){ 
    switch(API_VERSION) {
        case 1: { return '148' };
        case 2: { return '6981' };
        default: { return '148' };
    }
}()

const SUMMARYGID = function(){ 
    switch(API_VERSION) {
        case 1: { return '149' };
        case 2: { return '6982' };
        default: { return '149' };
    }
}()

const ACEGID = function(){ 
    switch(API_VERSION) {
        case 1: { return '' };
        case 2: { return '6972' };
        default: { return '6972' };
    }
}()

const PHQ = {
    [`${SURVEYID}X${PHQGID}X5124`]: 'PHQInfo',
    [`${SURVEYID}X${PHQGID}X5125`]: 'PHQ1',
    [`${SURVEYID}X${PHQGID}X5126`]: 'PHQ2',
    [`${SURVEYID}X${PHQGID}X5127`]: 'PHQ3',
    [`${SURVEYID}X${PHQGID}X5128`]: 'PHQ4',
    [`${SURVEYID}X${PHQGID}X5129`]: 'PHQ5',
    [`${SURVEYID}X${PHQGID}X5130`]: 'PHQ6',
    [`${SURVEYID}X${PHQGID}X5131`]: 'PHQ7',
    [`${SURVEYID}X${PHQGID}X5132`]: 'PHQ8',
    [`${SURVEYID}X${PHQGID}X5133`]: 'PHQ9',
    [`${SURVEYID}X${PHQGID}X5134`]: 'PHQ10',
    [`${SURVEYID}X${PHQGID}X5135`]: 'PHQ11',
    [`${SURVEYID}X${PHQGID}X5136`]: 'PHQ12',
    [`${SURVEYID}X${PHQGID}X5137`]: 'PHQ13',
    [`${SURVEYID}X${PHQGID}X5138`]: 'PHQ14',
}

const strainBody1 = {
    [`${SURVEYID}X${STRAINBODY1GID}X5122`]: 'S439StYN',
    [`${SURVEYID}X${STRAINBODY1GID}X5123`]: 'S440StWT',
}

const strainBody2 = {
    [`${SURVEYID}X${STRAINBODY2GID}X5063`]: 'E374XD',
    [`${SURVEYID}X${STRAINBODY2GID}X5064`]: 'E375XDF',
    [`${SURVEYID}X${STRAINBODY2GID}X5065`]: 'E376XDS',
    [`${SURVEYID}X${STRAINBODY2GID}X5066`]: 'E377XDT',
    [`${SURVEYID}X${STRAINBODY2GID}X5067`]: 'E378XDA',
    [`${SURVEYID}X${STRAINBODY2GID}X5068`]: 'E379XDX',
    [`${SURVEYID}X${STRAINBODY2GID}X5069`]: 'E380XDY',
    [`${SURVEYID}X${STRAINBODY2GID}X5070`]: 'E381XDZ',
    [`${SURVEYID}X${STRAINBODY2GID}X5071`]: 'D382XD',
    [`${SURVEYID}X${STRAINBODY2GID}X5072`]: 'D383CDC',
    [`${SURVEYID}X${STRAINBODY2GID}X5073A`]: 'D384XDDA',
    [`${SURVEYID}X${STRAINBODY2GID}X5073B`]: 'D384XDDB',
    [`${SURVEYID}X${STRAINBODY2GID}X5074`]: 'D385XDS',
    [`${SURVEYID}X${STRAINBODY2GID}X5075`]: 'D386XDT',
    [`${SURVEYID}X${STRAINBODY2GID}X5076`]: 'D387XDA',
    [`${SURVEYID}X${STRAINBODY2GID}X5038`]: 'INFO1',
    [`${SURVEYID}X${STRAINBODY2GID}X4938`]: 'D224OR',
    [`${SURVEYID}X${STRAINBODY2GID}X4939A`]: 'D225ORDA',
    [`${SURVEYID}X${STRAINBODY2GID}X4939B`]: 'D225ORDB',
    [`${SURVEYID}X${STRAINBODY2GID}X4940`]: 'D226ORS',
    [`${SURVEYID}X${STRAINBODY2GID}X4941`]: 'D227ORT',
    [`${SURVEYID}X${STRAINBODY2GID}X4942`]: 'D228ORA',
    [`${SURVEYID}X${STRAINBODY2GID}X5039`]: 'E350XR',
    [`${SURVEYID}X${STRAINBODY2GID}X5040`]: 'E351XRF',
    [`${SURVEYID}X${STRAINBODY2GID}X5041`]: 'E352XRS',
    [`${SURVEYID}X${STRAINBODY2GID}X5042`]: 'E353XRT',
    [`${SURVEYID}X${STRAINBODY2GID}X5043`]: 'E354XRA',
    [`${SURVEYID}X${STRAINBODY2GID}X5044`]: 'E355XRX',
    [`${SURVEYID}X${STRAINBODY2GID}X5045`]: 'E356XRY',
    [`${SURVEYID}X${STRAINBODY2GID}X5046`]: 'E357XRZ',
    [`${SURVEYID}X${STRAINBODY2GID}X5047`]: 'E358DL',
    [`${SURVEYID}X${STRAINBODY2GID}X5048`]: 'E359DLF',
    [`${SURVEYID}X${STRAINBODY2GID}X5049`]: 'E360DLS',
    [`${SURVEYID}X${STRAINBODY2GID}X5050`]: 'E361DLT',
    [`${SURVEYID}X${STRAINBODY2GID}X5051`]: 'E362DLA',
    [`${SURVEYID}X${STRAINBODY2GID}X5052`]: 'E363DLX',
    [`${SURVEYID}X${STRAINBODY2GID}X5053`]: 'E364DLY',
    [`${SURVEYID}X${STRAINBODY2GID}X5054`]: 'E365DLZ',
    [`${SURVEYID}X${STRAINBODY2GID}X5055`]: 'E366OL',
    [`${SURVEYID}X${STRAINBODY2GID}X5056`]: 'E367OLF',
    [`${SURVEYID}X${STRAINBODY2GID}X5057`]: 'E368OLS',
    [`${SURVEYID}X${STRAINBODY2GID}X5058`]: 'E369OLT',
    [`${SURVEYID}X${STRAINBODY2GID}X5059`]: 'E370OLA',
    [`${SURVEYID}X${STRAINBODY2GID}X5060`]: 'E371OLX',
    [`${SURVEYID}X${STRAINBODY2GID}X5061`]: 'E372OLY',
    [`${SURVEYID}X${STRAINBODY2GID}X5062`]: 'E373OLZ',
}

const strainBody3 = {
    [`${SURVEYID}X${STRAINBODY3GID}X5013`]: 'E317LR',
    [`${SURVEYID}X${STRAINBODY3GID}X5014`]: 'E318LRF',
    [`${SURVEYID}X${STRAINBODY3GID}X5015`]: 'E319LRS',
    [`${SURVEYID}X${STRAINBODY3GID}X5016`]: 'E320LRT',
    [`${SURVEYID}X${STRAINBODY3GID}X5017`]: 'E321LRA',
    [`${SURVEYID}X${STRAINBODY3GID}X5018`]: 'E322LRX',
    [`${SURVEYID}X${STRAINBODY3GID}X5019`]: 'E323LRY',
    [`${SURVEYID}X${STRAINBODY3GID}X5020`]: 'E324LRZ',
    [`${SURVEYID}X${STRAINBODY3GID}X4997`]: 'E301XD',
    [`${SURVEYID}X${STRAINBODY3GID}X4998`]: 'E302XDF',
    [`${SURVEYID}X${STRAINBODY3GID}X4999`]: 'E303XDS',
    [`${SURVEYID}X${STRAINBODY3GID}X5000`]: 'E304XDT',
    [`${SURVEYID}X${STRAINBODY3GID}X5001`]: 'E305XDA',
    [`${SURVEYID}X${STRAINBODY3GID}X5002`]: 'E306XDX',
    [`${SURVEYID}X${STRAINBODY3GID}X5003`]: 'E307XDY',
    [`${SURVEYID}X${STRAINBODY3GID}X5004`]: 'E308XDZ',
    [`${SURVEYID}X${STRAINBODY3GID}X5021`]: 'E333XD',
    [`${SURVEYID}X${STRAINBODY3GID}X5022`]: 'E334XDQ',
    [`${SURVEYID}X${STRAINBODY3GID}X5023`]: 'E335XDF',
    [`${SURVEYID}X${STRAINBODY3GID}X5024`]: 'E336XDS',
    [`${SURVEYID}X${STRAINBODY3GID}X5025`]: 'E337XDT',
    [`${SURVEYID}X${STRAINBODY3GID}X5026`]: 'E338XDA',
    [`${SURVEYID}X${STRAINBODY3GID}X5027`]: 'E339XDX',
    [`${SURVEYID}X${STRAINBODY3GID}X5028`]: 'E340XDY',
    [`${SURVEYID}X${STRAINBODY3GID}X5029`]: 'E341XDZ',
}

const strainBody4 = {
    [`${SURVEYID}X${STRAINBODY4GID}X4955`]: 'D246ML',
    [`${SURVEYID}X${STRAINBODY4GID}X4956A`]: 'D247MLDA',
    [`${SURVEYID}X${STRAINBODY4GID}X4956B`]: 'D247MLDB',
    [`${SURVEYID}X${STRAINBODY4GID}X4957`]: 'D248MLS',
    [`${SURVEYID}X${STRAINBODY4GID}X4958`]: 'D249MLT',
    [`${SURVEYID}X${STRAINBODY4GID}X4959`]: 'D250MLA',
}

const strainBody5 = {
    [`${SURVEYID}X${STRAINBODY5GID}X4899`]: 'X500Q',
    [`${SURVEYID}X${STRAINBODY5GID}X4900`]: 'X501Q',
    [`${SURVEYID}X${STRAINBODY5GID}X4901`]: 'X192Q',
    [`${SURVEYID}X${STRAINBODY5GID}X4912`]: 'D203ML',
    [`${SURVEYID}X${STRAINBODY5GID}X4913A`]: 'D204MLDA',
    [`${SURVEYID}X${STRAINBODY5GID}X4913B`]: 'D204MLDB',
    [`${SURVEYID}X${STRAINBODY5GID}X4914`]: 'D205MLS',
    [`${SURVEYID}X${STRAINBODY5GID}X4915`]: 'D206MLT',
    [`${SURVEYID}X${STRAINBODY5GID}X4916`]: 'D207MLA',
    [`${SURVEYID}X${STRAINBODY5GID}X4917`]: 'E208MD',
    [`${SURVEYID}X${STRAINBODY5GID}X4918`]: 'E209MDF',
    [`${SURVEYID}X${STRAINBODY5GID}X4919`]: 'E210MDS',
    [`${SURVEYID}X${STRAINBODY5GID}X4920`]: 'E211MDT',
    [`${SURVEYID}X${STRAINBODY5GID}X4921`]: 'E212MDA',
    [`${SURVEYID}X${STRAINBODY5GID}X4922`]: 'E213MDX',
    [`${SURVEYID}X${STRAINBODY5GID}X4923`]: 'E214MDY',
    [`${SURVEYID}X${STRAINBODY5GID}X4924`]: 'E215MDZ',
    [`${SURVEYID}X${STRAINBODY5GID}X4925`]: 'E216MH',
    [`${SURVEYID}X${STRAINBODY5GID}X4926`]: 'E217MHF',
    [`${SURVEYID}X${STRAINBODY5GID}X4927`]: 'E218MHS',
    [`${SURVEYID}X${STRAINBODY5GID}X4928`]: 'E219MHT',
    [`${SURVEYID}X${STRAINBODY5GID}X4929`]: 'E220MHA',
    [`${SURVEYID}X${STRAINBODY5GID}X4930`]: 'E221MHX',
    [`${SURVEYID}X${STRAINBODY5GID}X4931`]: 'E222MHY',
    [`${SURVEYID}X${STRAINBODY5GID}X4932`]: 'E223MHZ',
    [`${SURVEYID}X${STRAINBODY5GID}X4902`]: 'E193ML',
    [`${SURVEYID}X${STRAINBODY5GID}X4903`]: 'E194MLF',
    [`${SURVEYID}X${STRAINBODY5GID}X4904`]: 'E195MLS',
    [`${SURVEYID}X${STRAINBODY5GID}X4905`]: 'E196MLT',
    [`${SURVEYID}X${STRAINBODY5GID}X4906`]: 'E197MLA',
    [`${SURVEYID}X${STRAINBODY5GID}X4907`]: 'E198MLQ',
    [`${SURVEYID}X${STRAINBODY5GID}X4908`]: 'E199MLX',
    [`${SURVEYID}X${STRAINBODY5GID}X4909`]: 'E200MLY',
    [`${SURVEYID}X${STRAINBODY5GID}X4910`]: 'E201MLZ',
    [`${SURVEYID}X${STRAINBODY5GID}X4911`]: 'E202MLQ',
    [`${SURVEYID}X${STRAINBODY5GID}X4933`]: 'D510LR',
    [`${SURVEYID}X${STRAINBODY5GID}X4934A`]: 'D511LRDA',
    [`${SURVEYID}X${STRAINBODY5GID}X4934B`]: 'D511LRDB',
    [`${SURVEYID}X${STRAINBODY5GID}X4935`]: 'D512LRS',
    [`${SURVEYID}X${STRAINBODY5GID}X4936`]: 'D513LRT',
    [`${SURVEYID}X${STRAINBODY5GID}X4937`]: 'D514LRA',
    [`${SURVEYID}X${STRAINBODY5GID}X4943`]: 'D229OH',
    [`${SURVEYID}X${STRAINBODY5GID}X4944`]: 'D230CHC',
    [`${SURVEYID}X${STRAINBODY5GID}X4945A`]: 'D231OHDA',
    [`${SURVEYID}X${STRAINBODY5GID}X4945B`]: 'D231OHDB',
    [`${SURVEYID}X${STRAINBODY5GID}X4946`]: 'D232OHS',
    [`${SURVEYID}X${STRAINBODY5GID}X4947`]: 'D233OHT',
    [`${SURVEYID}X${STRAINBODY5GID}X4948`]: 'D234OHA',
    [`${SURVEYID}X${STRAINBODY5GID}X4949`]: 'D235XD',
    [`${SURVEYID}X${STRAINBODY5GID}X4950`]: 'D236CDC',
    [`${SURVEYID}X${STRAINBODY5GID}X4951A`]: 'D237XDDA',
    [`${SURVEYID}X${STRAINBODY5GID}X4951B`]: 'D237XDDB',
    [`${SURVEYID}X${STRAINBODY5GID}X4952`]: 'D238XDS',
    [`${SURVEYID}X${STRAINBODY5GID}X4953`]: 'D239XDT',
    [`${SURVEYID}X${STRAINBODY5GID}X4954`]: 'D240XDA',
}

const strainBody6 = {
    [`${SURVEYID}X${STRAINBODY6GID}X4960`]: 'X251Q',
    [`${SURVEYID}X${STRAINBODY6GID}X4961`]: 'X252Q',
    [`${SURVEYID}X${STRAINBODY6GID}X4962`]: 'D253RR',
    [`${SURVEYID}X${STRAINBODY6GID}X4963A`]: 'D254RRDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4963B`]: 'D254RRDB',
    [`${SURVEYID}X${STRAINBODY6GID}X4964`]: 'D255RRS',
    [`${SURVEYID}X${STRAINBODY6GID}X4965`]: 'D256RRT',
    [`${SURVEYID}X${STRAINBODY6GID}X4966`]: 'D257RRA',
    [`${SURVEYID}X${STRAINBODY6GID}X4983`]: 'X282Q',
    [`${SURVEYID}X${STRAINBODY6GID}X4967`]: 'E528TD',
    [`${SURVEYID}X${STRAINBODY6GID}X4968`]: 'E529TDF',
    [`${SURVEYID}X${STRAINBODY6GID}X4969`]: 'E530TDS',
    [`${SURVEYID}X${STRAINBODY6GID}X4970`]: 'E531TDT',
    [`${SURVEYID}X${STRAINBODY6GID}X4971`]: 'E532TDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4972`]: 'E533TDX',
    [`${SURVEYID}X${STRAINBODY6GID}X4973`]: 'E534TDY',
    [`${SURVEYID}X${STRAINBODY6GID}X4974`]: 'E535TDZ',
    [`${SURVEYID}X${STRAINBODY6GID}X4984`]: 'D549OE',
    [`${SURVEYID}X${STRAINBODY6GID}X4985A`]: 'D550OEDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4985B`]: 'D550OEDB',
    [`${SURVEYID}X${STRAINBODY6GID}X4986`]: 'D551OES',
    [`${SURVEYID}X${STRAINBODY6GID}X4987`]: 'D552OET',
    [`${SURVEYID}X${STRAINBODY6GID}X4988`]: 'D553OEA',
    [`${SURVEYID}X${STRAINBODY6GID}X4975`]: 'E266RD',
    [`${SURVEYID}X${STRAINBODY6GID}X4976`]: 'E267RDF',
    [`${SURVEYID}X${STRAINBODY6GID}X4977`]: 'E268RDS',
    [`${SURVEYID}X${STRAINBODY6GID}X4978`]: 'E269RDT',
    [`${SURVEYID}X${STRAINBODY6GID}X4979`]: 'E270RDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4980`]: 'E271RDX',
    [`${SURVEYID}X${STRAINBODY6GID}X4981`]: 'E272RDY',
    [`${SURVEYID}X${STRAINBODY6GID}X4982`]: 'E273RDZ',
    [`${SURVEYID}X${STRAINBODY6GID}X4989`]: 'E283OL',
    [`${SURVEYID}X${STRAINBODY6GID}X4990`]: 'E284OLF',
    [`${SURVEYID}X${STRAINBODY6GID}X4991`]: 'E285OLS',
    [`${SURVEYID}X${STRAINBODY6GID}X4992`]: 'E286OLT',
    [`${SURVEYID}X${STRAINBODY6GID}X4993`]: 'E287OLA',
    [`${SURVEYID}X${STRAINBODY6GID}X4994`]: 'E288OLX',
    [`${SURVEYID}X${STRAINBODY6GID}X4995`]: 'E289OLY',
    [`${SURVEYID}X${STRAINBODY6GID}X4996`]: 'E290OLZ',
    [`${SURVEYID}X${STRAINBODY6GID}X5077`]: 'D388OE',
    [`${SURVEYID}X${STRAINBODY6GID}X5078A`]: 'D389OEDA',
    [`${SURVEYID}X${STRAINBODY6GID}X5078B`]: 'D389OEDB',
    [`${SURVEYID}X${STRAINBODY6GID}X5079`]: 'D390OES',
    [`${SURVEYID}X${STRAINBODY6GID}X5080`]: 'D392OEA',
    [`${SURVEYID}X${STRAINBODY6GID}X5086`]: 'E541OL',
    [`${SURVEYID}X${STRAINBODY6GID}X5087`]: 'E542OLF',
    [`${SURVEYID}X${STRAINBODY6GID}X5088`]: 'E543OLS',
    [`${SURVEYID}X${STRAINBODY6GID}X5089`]: 'E544OLA',
    [`${SURVEYID}X${STRAINBODY6GID}X5090`]: 'E545OLX',
    [`${SURVEYID}X${STRAINBODY6GID}X5091`]: 'E546OLZ',
    [`${SURVEYID}X${STRAINBODY6GID}X5081`]: 'D393OLC',
    [`${SURVEYID}X${STRAINBODY6GID}X5082A`]: 'D394OLDA',
    [`${SURVEYID}X${STRAINBODY6GID}X5082B`]: 'D394OLDB',
    [`${SURVEYID}X${STRAINBODY6GID}X5083`]: 'D395OLQ',
    [`${SURVEYID}X${STRAINBODY6GID}X5084`]: 'D396OLS',
    [`${SURVEYID}X${STRAINBODY6GID}X5085`]: 'D398OLA',
    [`${SURVEYID}X${STRAINBODY6GID}X5092`]: 'D413OHC',
    [`${SURVEYID}X${STRAINBODY6GID}X5093`]: 'D414OHF',
    [`${SURVEYID}X${STRAINBODY6GID}X5094A`]: 'D415OHDA',
    [`${SURVEYID}X${STRAINBODY6GID}X5094B`]: 'D415OHDB',
    [`${SURVEYID}X${STRAINBODY6GID}X5095`]: 'D416OHS',
    [`${SURVEYID}X${STRAINBODY6GID}X5096`]: 'D418OHA',
    [`${SURVEYID}X${STRAINBODY6GID}X5097`]: 'D419OHC',
    [`${SURVEYID}X${STRAINBODY6GID}X5098A`]: 'D420OHDA',
    [`${SURVEYID}X${STRAINBODY6GID}X5098B`]: 'D420OHDB',
    [`${SURVEYID}X${STRAINBODY6GID}X5099`]: 'D421OHS',
    [`${SURVEYID}X${STRAINBODY6GID}X5100`]: 'D423OHA',
    [`${SURVEYID}X${STRAINBODY6GID}X4778`]: 'E028EH',
    [`${SURVEYID}X${STRAINBODY6GID}X4779`]: 'E029EHF',
    [`${SURVEYID}X${STRAINBODY6GID}X4780`]: 'E030EHS',
    [`${SURVEYID}X${STRAINBODY6GID}X4781`]: 'E031EHT',
    [`${SURVEYID}X${STRAINBODY6GID}X4782`]: 'E032EHA',
    [`${SURVEYID}X${STRAINBODY6GID}X4783`]: 'E033EHX',
    [`${SURVEYID}X${STRAINBODY6GID}X4784`]: 'E034EHY',
    [`${SURVEYID}X${STRAINBODY6GID}X4785`]: 'E035EHZ',
    [`${SURVEYID}X${STRAINBODY6GID}X4786`]: 'E037WH',
    [`${SURVEYID}X${STRAINBODY6GID}X4787`]: 'E038WHF',
    [`${SURVEYID}X${STRAINBODY6GID}X4788`]: 'E039WHS',
    [`${SURVEYID}X${STRAINBODY6GID}X4789`]: 'E040WHT',
    [`${SURVEYID}X${STRAINBODY6GID}X4790`]: 'E041WHA',
    [`${SURVEYID}X${STRAINBODY6GID}X4791`]: 'E042WHX',
    [`${SURVEYID}X${STRAINBODY6GID}X4792`]: 'E043WHY',
    [`${SURVEYID}X${STRAINBODY6GID}X4793`]: 'E044WHZ',
    [`${SURVEYID}X${STRAINBODY6GID}X4794`]: 'D045WR',
    [`${SURVEYID}X${STRAINBODY6GID}X4795A`]: 'D046WRDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4795B`]: 'D046WRDB',
    [`${SURVEYID}X${STRAINBODY6GID}X4796`]: 'D047WRS',
    [`${SURVEYID}X${STRAINBODY6GID}X4797`]: 'D048WRT',
    [`${SURVEYID}X${STRAINBODY6GID}X4798`]: 'D049WRA',
    [`${SURVEYID}X${STRAINBODY6GID}X4799`]: 'D050WE',
    [`${SURVEYID}X${STRAINBODY6GID}X4800A`]: 'D051WEDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4800B`]: 'D051WEDB',
    [`${SURVEYID}X${STRAINBODY6GID}X4801`]: 'D052WES',
    [`${SURVEYID}X${STRAINBODY6GID}X4802`]: 'D053WET',
    [`${SURVEYID}X${STRAINBODY6GID}X4803`]: 'D054WEA',
    [`${SURVEYID}X${STRAINBODY6GID}X4804`]: 'D060WH',
    [`${SURVEYID}X${STRAINBODY6GID}X4805A`]: 'D061WHDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4805B`]: 'D061WHDB',
    [`${SURVEYID}X${STRAINBODY6GID}X4806`]: 'D062WHS',
    [`${SURVEYID}X${STRAINBODY6GID}X4807`]: 'D063WHT',
    [`${SURVEYID}X${STRAINBODY6GID}X4808`]: 'D064WHA',
    [`${SURVEYID}X${STRAINBODY6GID}X4809`]: 'D065FE',
    [`${SURVEYID}X${STRAINBODY6GID}X4810A`]: 'D066FEDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4810B`]: 'D066FEDB',
    [`${SURVEYID}X${STRAINBODY6GID}X4811`]: 'D067FES',
    [`${SURVEYID}X${STRAINBODY6GID}X4812`]: 'D068FET',
    [`${SURVEYID}X${STRAINBODY6GID}X4813`]: 'D069FEA',
    [`${SURVEYID}X${STRAINBODY6GID}X4824`]: 'E090HR',
    [`${SURVEYID}X${STRAINBODY6GID}X4832`]: 'E095CRC',
    [`${SURVEYID}X${STRAINBODY6GID}X4825`]: 'E091HRF',
    [`${SURVEYID}X${STRAINBODY6GID}X4826`]: 'E092HRS',
    [`${SURVEYID}X${STRAINBODY6GID}X4827`]: 'E093HRT',
    [`${SURVEYID}X${STRAINBODY6GID}X4828`]: 'E094HRA',
    [`${SURVEYID}X${STRAINBODY6GID}X4829`]: 'E096HRX',
    [`${SURVEYID}X${STRAINBODY6GID}X4830`]: 'E097HRY',
    [`${SURVEYID}X${STRAINBODY6GID}X4831`]: 'E098HRZ',
    [`${SURVEYID}X${STRAINBODY6GID}X4833`]: 'E107HR',
    [`${SURVEYID}X${STRAINBODY6GID}X4834`]: 'E108HRQ',
    [`${SURVEYID}X${STRAINBODY6GID}X4835`]: 'E109HRF',
    [`${SURVEYID}X${STRAINBODY6GID}X4836`]: 'E110HRS',
    [`${SURVEYID}X${STRAINBODY6GID}X4837`]: 'E111HRT',
    [`${SURVEYID}X${STRAINBODY6GID}X4838`]: 'E112HRA',
    [`${SURVEYID}X${STRAINBODY6GID}X4839`]: 'E113HRX',
    [`${SURVEYID}X${STRAINBODY6GID}X4840`]: 'E114HRY',
    [`${SURVEYID}X${STRAINBODY6GID}X4841`]: 'E115HRZ',
    [`${SURVEYID}X${STRAINBODY6GID}X4842`]: 'E116HR',
    [`${SURVEYID}X${STRAINBODY6GID}X4843`]: 'E117HRF',
    [`${SURVEYID}X${STRAINBODY6GID}X4844`]: 'E118HRS',
    [`${SURVEYID}X${STRAINBODY6GID}X4845`]: 'E119HRT',
    [`${SURVEYID}X${STRAINBODY6GID}X4846`]: 'E120HRA',
    [`${SURVEYID}X${STRAINBODY6GID}X4847`]: 'E121HRX',
    [`${SURVEYID}X${STRAINBODY6GID}X4848`]: 'E122HRY',
    [`${SURVEYID}X${STRAINBODY6GID}X4849`]: 'E123HRZ',
    [`${SURVEYID}X${STRAINBODY6GID}X4814`]: 'D070HE',
    [`${SURVEYID}X${STRAINBODY6GID}X4815A`]: 'D071HEDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4815B`]: 'D071HEDB',
    [`${SURVEYID}X${STRAINBODY6GID}X4816`]: 'D072HES',
    [`${SURVEYID}X${STRAINBODY6GID}X4817`]: 'D073HET',
    [`${SURVEYID}X${STRAINBODY6GID}X4818`]: 'D074HEA',
    [`${SURVEYID}X${STRAINBODY6GID}X4819`]: 'D075HD',
    [`${SURVEYID}X${STRAINBODY6GID}X4820A`]: 'D076HDDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4820B`]: 'D076HDDA',
    [`${SURVEYID}X${STRAINBODY6GID}X4821`]: 'D077HDS',
    [`${SURVEYID}X${STRAINBODY6GID}X4822`]: 'D078HDT',
    [`${SURVEYID}X${STRAINBODY6GID}X4823`]: 'D079HDA',
    [`${SURVEYID}X${STRAINBODY6GID}X5005`]: 'E309PD',
    [`${SURVEYID}X${STRAINBODY6GID}X5006`]: 'E310PDF',
    [`${SURVEYID}X${STRAINBODY6GID}X5007`]: 'E311PDS',
    [`${SURVEYID}X${STRAINBODY6GID}X5008`]: 'E312PDT',
    [`${SURVEYID}X${STRAINBODY6GID}X5009`]: 'E313PDA',
    [`${SURVEYID}X${STRAINBODY6GID}X5010`]: 'E314PDX',
    [`${SURVEYID}X${STRAINBODY6GID}X5011`]: 'E315PDY',
    [`${SURVEYID}X${STRAINBODY6GID}X5012`]: 'E316PDZ',
    [`${SURVEYID}X${STRAINBODY6GID}X5030`]: 'E342FR',
    [`${SURVEYID}X${STRAINBODY6GID}X5031`]: 'E343FRF',
    [`${SURVEYID}X${STRAINBODY6GID}X5032`]: 'E344FRS',
    [`${SURVEYID}X${STRAINBODY6GID}X5033`]: 'E345FRT',
    [`${SURVEYID}X${STRAINBODY6GID}X5034`]: 'E346FRA',
    [`${SURVEYID}X${STRAINBODY6GID}X5035`]: 'E347FRX',
    [`${SURVEYID}X${STRAINBODY6GID}X5036`]: 'E348FRY',
    [`${SURVEYID}X${STRAINBODY6GID}X5037`]: 'E349FRZ',
}

const strainBody7 = {
    [`${SURVEYID}X${STRAINBODY7GID}X4850`]: 'E124OL',
    [`${SURVEYID}X${STRAINBODY7GID}X4851`]: 'E125OLF',
    [`${SURVEYID}X${STRAINBODY7GID}X4852`]: 'E126OLS',
    [`${SURVEYID}X${STRAINBODY7GID}X4853`]: 'E127OLT',
    [`${SURVEYID}X${STRAINBODY7GID}X4854`]: 'E128OLA',
    [`${SURVEYID}X${STRAINBODY7GID}X4855`]: 'E129OLX',
    [`${SURVEYID}X${STRAINBODY7GID}X4856`]: 'E130OLY',
    [`${SURVEYID}X${STRAINBODY7GID}X4857`]: 'E131OLZ',
}

const strainBody8 = {
    [`${SURVEYID}X${STRAINBODY8GID}X4866`]: 'D148TD',
    [`${SURVEYID}X${STRAINBODY8GID}X4867A`]: 'D149TDDA',
    [`${SURVEYID}X${STRAINBODY8GID}X4867B`]: 'D149TDDB',
    [`${SURVEYID}X${STRAINBODY8GID}X4868`]: 'D150TDS',
    [`${SURVEYID}X${STRAINBODY8GID}X4869`]: 'D151TDT',
    [`${SURVEYID}X${STRAINBODY8GID}X4870`]: 'D152TDA',
    [`${SURVEYID}X${STRAINBODY8GID}X4871`]: 'D153TR',
    [`${SURVEYID}X${STRAINBODY8GID}X4872A`]: 'D154TRDA',
    [`${SURVEYID}X${STRAINBODY8GID}X4872B`]: 'D154TRDB',
    [`${SURVEYID}X${STRAINBODY8GID}X4873`]: 'D155TRS',
    [`${SURVEYID}X${STRAINBODY8GID}X4874`]: 'D156TRT',
    [`${SURVEYID}X${STRAINBODY8GID}X4875`]: 'D157TRA',
    [`${SURVEYID}X${STRAINBODY8GID}X4858`]: 'E140TD',
    [`${SURVEYID}X${STRAINBODY8GID}X4859`]: 'E141TDF',
    [`${SURVEYID}X${STRAINBODY8GID}X4860`]: 'E142TDS',
    [`${SURVEYID}X${STRAINBODY8GID}X4861`]: 'E143TDT',
    [`${SURVEYID}X${STRAINBODY8GID}X4862`]: 'E144TDA',
    [`${SURVEYID}X${STRAINBODY8GID}X4863`]: 'E145TDX',
    [`${SURVEYID}X${STRAINBODY8GID}X4864`]: 'E146TDY',
    [`${SURVEYID}X${STRAINBODY8GID}X4865`]: 'E147TDZ',
    [`${SURVEYID}X${STRAINBODY8GID}X5110`]: 'D424TR',
    [`${SURVEYID}X${STRAINBODY8GID}X5111A`]: 'D425TRDA',
    [`${SURVEYID}X${STRAINBODY8GID}X5111B`]: 'D425TRDB',
    [`${SURVEYID}X${STRAINBODY8GID}X5112`]: 'D426TRS',
    [`${SURVEYID}X${STRAINBODY8GID}X5113`]: 'D427TRT',
    [`${SURVEYID}X${STRAINBODY8GID}X5114`]: 'D428TRA',
    [`${SURVEYID}X${STRAINBODY8GID}X4876`]: 'D164OE',
    [`${SURVEYID}X${STRAINBODY8GID}X4877A`]: 'D165OEDA',
    [`${SURVEYID}X${STRAINBODY8GID}X4877B`]: 'D165OEDB',
    [`${SURVEYID}X${STRAINBODY8GID}X4878`]: 'D166OES',
    [`${SURVEYID}X${STRAINBODY8GID}X4879`]: 'D167OET',
    [`${SURVEYID}X${STRAINBODY8GID}X4880`]: 'D168OEA',
    [`${SURVEYID}X${STRAINBODY8GID}X4881`]: 'D174TD',
    [`${SURVEYID}X${STRAINBODY8GID}X4882A`]: 'D175TDDA',
    [`${SURVEYID}X${STRAINBODY8GID}X4882B`]: 'D175TDDB',
    [`${SURVEYID}X${STRAINBODY8GID}X4883`]: 'D176TDS',
    [`${SURVEYID}X${STRAINBODY8GID}X4884`]: 'D177TDT',
    [`${SURVEYID}X${STRAINBODY8GID}X4885`]: 'D178TDA',
    [`${SURVEYID}X${STRAINBODY8GID}X4886`]: 'D179TR',
    [`${SURVEYID}X${STRAINBODY8GID}X4887A`]: 'D180TRDA',
    [`${SURVEYID}X${STRAINBODY8GID}X4887B`]: 'D180TRDB',
    [`${SURVEYID}X${STRAINBODY8GID}X4888`]: 'D181TRS',
    [`${SURVEYID}X${STRAINBODY8GID}X4889`]: 'D182TRT',
    [`${SURVEYID}X${STRAINBODY8GID}X4890`]: 'D183TRA',
    [`${SURVEYID}X${STRAINBODY8GID}X4891`]: 'E184TD',
    [`${SURVEYID}X${STRAINBODY8GID}X4892`]: 'E185TDF',
    [`${SURVEYID}X${STRAINBODY8GID}X4893`]: 'E186TDS',
    [`${SURVEYID}X${STRAINBODY8GID}X4894`]: 'E187TDT',
    [`${SURVEYID}X${STRAINBODY8GID}X4895`]: 'E188TDA',
    [`${SURVEYID}X${STRAINBODY8GID}X4896`]: 'E189TDX',
    [`${SURVEYID}X${STRAINBODY8GID}X4897`]: 'E190TDY',
    [`${SURVEYID}X${STRAINBODY8GID}X4898`]: 'E191TDZ',
    [`${SURVEYID}X${STRAINBODY8GID}X5115`]: 'D434TR',
    [`${SURVEYID}X${STRAINBODY8GID}X5116A`]: 'D435TRDA',
    [`${SURVEYID}X${STRAINBODY8GID}X5116B`]: 'D435TRDB',
    [`${SURVEYID}X${STRAINBODY8GID}X5117`]: 'D436TRS',
    [`${SURVEYID}X${STRAINBODY8GID}X5118`]: 'D437TRT',
    [`${SURVEYID}X${STRAINBODY8GID}X5119`]: 'D438TRA',
    [`${SURVEYID}X${STRAINBODY8GID}X5120`]: 'D547TR',
    [`${SURVEYID}X${STRAINBODY8GID}X5121`]: 'D548TR',
    [`${SURVEYID}X${STRAINBODY8GID}X5101`]: 'E535DL',
    [`${SURVEYID}X${STRAINBODY8GID}X5107`]: 'X554OL',
    [`${SURVEYID}X${STRAINBODY8GID}X5108`]: 'X555OL',
    [`${SURVEYID}X${STRAINBODY8GID}X5102`]: 'E536DLA',
    [`${SURVEYID}X${STRAINBODY8GID}X5103`]: 'E537DLS',
    [`${SURVEYID}X${STRAINBODY8GID}X5104`]: 'E538DL',
    [`${SURVEYID}X${STRAINBODY8GID}X5105`]: 'X556OL',
    [`${SURVEYID}X${STRAINBODY8GID}X5106`]: 'X557OL',
    [`${SURVEYID}X${STRAINBODY8GID}X5145`]: 'E539DLA',
    [`${SURVEYID}X${STRAINBODY8GID}X5109`]: 'E540DLS',
}

const strainDemographics = {
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X4768`]: 'S002SuNm',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X4769`]: 'S003SUID',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X4770`]: 'S004DAT',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X4771`]: 'X005DOB',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X4772`]: 'X006AGE',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X4773`]: 'X007SEX',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X4775`]: 'X009RELA',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X4774`]: 'E008CD',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X4777`]: 'X011BRTH',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X4776`]: 'X010CHLD',
}

const strain = {
    [`${SURVEYID}X${STRAINGID}X4766`]: 'S000INTR',
    [`${SURVEYID}X${STRAINGID}X4767`]: 'S001INST',
}

const k6 = {
    [`${SURVEYID}X${K6GID}X5139`]: 'K61',
    [`${SURVEYID}X${K6GID}X5140`]: 'K62',
    [`${SURVEYID}X${K6GID}X5141`]: 'K63',
    [`${SURVEYID}X${K6GID}X5144`]: 'K64',
    [`${SURVEYID}X${K6GID}X5142`]: 'K65',
    [`${SURVEYID}X${K6GID}X5143`]: 'K66',
    [`${SURVEYID}X${K6GID}X217717`]: 'K67',
    [`${SURVEYID}X${K6GID}X217718`]: 'K68',
    [`${SURVEYID}X${K6GID}X217719`]: 'K69',
    [`${SURVEYID}X${K6GID}X217720`]: 'K70',
    [`${SURVEYID}X${K6GID}X217721`]: 'K71',
    [`${SURVEYID}X${K6GID}X217722`]: 'K72',
    [`${SURVEYID}X${K6GID}X217723`]: 'K73',
}

const summaryScores = {
    [`${SURVEYID}X${SUMMARYGID}X5146`]: 'TotCnt',
    [`${SURVEYID}X${SUMMARYGID}X5147`]: 'EvntCnt',
    [`${SURVEYID}X${SUMMARYGID}X5148`]: 'DiffCnt',
    [`${SURVEYID}X${SUMMARYGID}X5149`]: 'TotSum',
    [`${SURVEYID}X${SUMMARYGID}X5150`]: 'EvntSum',
    [`${SURVEYID}X${SUMMARYGID}X5151`]: 'DiffSum',
    [`${SURVEYID}X${SUMMARYGID}X5152`]: 'Hous',
    [`${SURVEYID}X${SUMMARYGID}X5153`]: 'Educ',
    [`${SURVEYID}X${SUMMARYGID}X5154`]: 'Work',
    [`${SURVEYID}X${SUMMARYGID}X5155`]: 'Trea',
    [`${SURVEYID}X${SUMMARYGID}X5156`]: 'Mari',
    [`${SURVEYID}X${SUMMARYGID}X5157`]: 'Chil',
    [`${SURVEYID}X${SUMMARYGID}X5158`]: 'Repr',
    [`${SURVEYID}X${SUMMARYGID}X5159`]: 'Fina',
    [`${SURVEYID}X${SUMMARYGID}X5160`]: 'Lega',
    [`${SURVEYID}X${SUMMARYGID}X5161`]: 'Rela',
    [`${SURVEYID}X${SUMMARYGID}X5162`]: 'Deat',
    [`${SURVEYID}X${SUMMARYGID}X5163`]: 'Life',
    [`${SURVEYID}X${SUMMARYGID}X5164`]: 'Poss',
    [`${SURVEYID}X${SUMMARYGID}X5165`]: 'PHQ',
    [`${SURVEYID}X${SUMMARYGID}X5166`]: 'K6',
    [`${SURVEYID}X${SUMMARYGID}X5167`]: 'Health',
}

const ACEs = {
    [`${SURVEYID}X${ACEGID}X248478`]: 'ACE1',
    [`${SURVEYID}X${ACEGID}X248479`]: 'ACE2',
    [`${SURVEYID}X${ACEGID}X248480`]: 'ACE3',
    [`${SURVEYID}X${ACEGID}X248481`]: 'ACE4',
    [`${SURVEYID}X${ACEGID}X248482`]: 'ACE5',
    [`${SURVEYID}X${ACEGID}X248483`]: 'ACE6',
    [`${SURVEYID}X${ACEGID}X248484`]: 'ACE7',
}

const variableMapping = {
    ...PHQ,
    ...strainBody1,
    ...strainBody2,
    ...strainBody3,
    ...strainBody4,
    ...strainBody5,
    ...strainBody6,
    ...strainBody7,
    ...strainBody8,
    ...strainDemographics,
    ...strain,
    ...k6,
    ...summaryScores,
    ...ACEs,
}

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

const urls = {
    userData: (userId: string) => userId &&
        process.env.NODE_ENV === 'development' ? `https://lifestresstest.com/wp-json/lifestresstest/limesurvey/${userId}` : `/wp-json/lifestresstest/limesurvey/${userId}`,
    publicData: process.env.NODE_ENV === 'development' ? `https://lifestresstest.com/wp-json/lifestresstest/public` : `/wp-json/lifestresstest/public`,
}

export {
    urls,
    fetcher,
    variableMapping,
}
