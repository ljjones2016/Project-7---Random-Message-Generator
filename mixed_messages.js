function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num);
}

let nouns = ['people','history','way','art','world','information','map','two','family','government','health','system','computer','meat','year','thanks','music','person','reading','method','data','food','understanding','theory','law','bird','literature','problem','software','control','knowledge','power','ability','economics','love','internet','television','science','library','nature','fact','product','idea','temperature','investment','area','society','activity','story','industry','media','thing','oven','community','definition','safety','quality','development','language','management','player','variety','video','week','security','country','exam','movie','organization','equipment','physics','analysis','policy','series','thought','basis','boyfriend','direction','strategy','technology','army','camera','freedom','paper','environment','child','instance','month','truth','marketing','university','writing','article','department','difference','goal','news','audience','fishing','growth','income','marriage','user','combination','failure','meaning','medicine','philosophy','teacher','communication','night','chemistry','disease','disk','energy','nation','road','role','soup','advertising','location','success','addition','apartment','education','math','moment','painting','politics','attention','decision','event','property','shopping','student','wood','competition','distribution','entertainment','office','population','president','unit','category','cigarette','context','introduction','opportunity','performance','driver','flight','length','magazine','newspaper','relationship','teaching','cell','dealer','finding','lake','member','message','phone','scene','appearance','association','concept','customer','death','discussion','housing','inflation','insurance','mood','woman','advice','blood','effort','expression','importance','opinion','payment','reality'];
let verbs = ['is','are','has','get','see','need','know','would','find','take','want','does','learn','become','come','include','thank','provide','create','add','understand','consider','choose','develop','remember','determine','grow','allow','supply','bring','improve','maintain','begin','exist','tend','enjoy','perform','decide','identify','continue','protect','require','occur','write','approach','avoid','prepare','build','achieve','believe','receive','seem','discuss','realize','contain','follow','refer','solve','describe','prefer','prevent','discover','ensure','expect','invest','reduce','speak','appear','explain','explore','involve','lose','afford','agree','hear','remain','represent','apply','forget','recommend','rely','vary','generate','obtain','accept','communicate','complain','depend','enter','happen','indicate','suggest','survive','appreciate','compare','imagine','manage','differ','encourage','expand','prove','react','recognize','relax','replace','borrow','earn','emphasize','enable','operate','reflect','send','anticipate','assume','engage','enhance','examine','install','participate','intend','introduce','relate','settle','assure','attract','distribute','overcome','owe','succeed','suffer','throw','acquire','adapt','adjust','argue','arise','confirm','encouraging','incorporate','justify','organize','ought','possess','relieve','retain','shut','calculate','compete','consult','deliver','extend','investigate','negotiate','qualify','retire','rid','weigh','arrive','attach','behave','celebrate','convince','disagree','establish','ignore','imply','insist','pursue','remaining','specify','warn','accuse','admire','admit','adopt','announce','apologize','approve','attend','belong','commit','criticize','deserve','destroy','hesitate','illustrate','inform','manufacturing','persuade','pour','propose','remind','shall','submit','suppose','translate'];
let adjectives = ['different','used','important','every','large','available','popular','able','basic','known','various','difficult','several','united','historical','hot','useful','mental','scared','additional','emotional','old','political','similar','healthy','financial','medical','traditional','federal','entire','strong','actual','significant','successful','electrical','expensive','pregnant','intelligent','interesting','poor','happy','responsible','cute','helpful','recent','willing','nice','wonderful','impossible','serious','huge','rare','technical','typical','competitive','critical','electronic','immediate','aware','educational','environmental','global','legal','relevant','accurate','capable','dangerous','dramatic','efficient','powerful','foreign','hungry','practical','psychological','severe','suitable','numerous','sufficient','unusual','consistent','cultural','existing','famous','pure','afraid','obvious','careful','latter','unhappy','acceptable','aggressive','boring','distinct','eastern','logical','reasonable','strict','administrative','automatic','civil','former','massive','southern','unfair','visible','alive','angry','desperate','exciting','friendly','lucky','realistic','sorry','ugly','unlikely','anxious','comprehensive','curious','impressive','informal','inner','pleasant','sexual','sudden','terrible','unable','weak','wooden','asleep','confident','conscious','decent','embarrassed','guilty','lonely','mad','nervous','odd','remarkable','substantial','suspicious','tall','tiny'];

let noun1 = nouns[generateRandomNumber(nouns.length)];
let noun2 = nouns[generateRandomNumber(nouns.length)];

let adj1 = adjectives[generateRandomNumber(adjectives.length)];
let adj2 = adjectives[generateRandomNumber(adjectives.length)];

let verb1 = verbs[generateRandomNumber(verbs.length)];
let verb2 = verbs[generateRandomNumber(verbs.length)];

if (verb1.slice(-1) === "e") verb1 = verb1.slice(0,verb1.length - 1);

console.log(`The very ${adj1} ${noun1} ${verb1}ed to ${verb2} the ${noun2}, but the ${noun2} was ${adj2}`);