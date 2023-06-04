import img02 from "../../assets/images_meteo/meteo_02.png";
import img08 from "../../assets/images_meteo/meteo_08.png";
import img11 from "../../assets/images_meteo/meteo_11.png";
import img12 from "../../assets/images_meteo/meteo_12.png";
import img23 from "../../assets/images_meteo/meteo_23.png";
import img24 from "../../assets/images_meteo/meteo_24.png";
import img32 from "../../assets/images_meteo/meteo_32.jpg";

export const meteorologia = [
	{
		id: 1,
		image: null,
		question: "Stosunkowo długie i umiarkowane opady występują zazwyczaj:",
		options: [
			"Przy przechodzeniu frontu chłodnego",
			"Przy przechodzeniu frontu ciepłego ",
			"Na obszarach wyżowych",
		],
		answer: "Przy przechodzeniu frontu ciepłego ",
	},

	{
		id: 2,
		image: img02,
		question:
			"Pojawiające się rano i nieznacznie rozbudowujące się drobne chmury Cumulus pokazane na rysunku zwiastują:",
		options: [
			"ładniejszą, słoneczną pogodę",
			"nadejście długotrwałych opadów deszczu ",
			"nadejście burz i silnych wiatrów",
		],
		answer: "ładniejszą, słoneczną pogodę",
	},
	{
		id: 3,
		image: null,
		question: "Zagęszczenie izobar na mapie pogody informuje:",
		options: [
			"O słabnięciu wiatru",
			"Zmianie zachmurzenia ",
			"Wystąpieniu silnego wiatru",
		],
		answer: "Wystąpieniu silnego wiatru",
	},

	{
		id: 4,
		image: null,
		question: "Wiatr przyziemny w wyżu wieje (półkula północna):",
		options: [
			"Prostopadle do izobar od centrum wyżu",
			"Do centrum wyżu z zewnątrz",
			"Od środka wyżu odchylony zgodnie z ruchem wskazówek zegara, kąt 20°-40° do izobary",
		],
		answer:
			"Od środka wyżu odchylony zgodnie z ruchem wskazówek zegara, kąt 20°-40° do izobary",
	},
	{
		id: 5,
		image: null,
		question: "Krótkotrwałe i gwałtowne opady występują zazwyczaj:",
		options: [
			"Przy przechodzeniu frontu chłodnego ",
			"Przy przechodzeniu frontu ciepłego",
			"Na obszarach o podwyższonym ciśnieniu",
		],
		answer: "Przy przechodzeniu frontu chłodnego ",
	},
	{
		id: 6,
		image: null,
		question: "Front zokludowany powstaje na skutek:",
		options: [
			"Nasunięcie się frontu ciepłego na front chłodny ze względu na jego szybsze przemieszczanie się ",
			"Nasunięcie się frontu chłodnego na front ciepły ze względu na jego szybsze przemieszczanie się ",
			"Wzrostu ciśnienia na obszarze niżowym",
		],
		answer:
			"Nasunięcie się frontu chłodnego na front ciepły ze względu na jego szybsze przemieszczanie się ",
	},
	{
		id: 7,
		image: null,
		question:
			"Wzrostu siły wiatru podczas żeglugi wzdłuż nawietrznego brzegu można się spodziewać w miejscach:",
		options: [
			"Gdzie brzeg jest wysoki lub zalesiony ",
			"W miejscach obniżenia (przerwach) wysokiej linii brzegowej",
			"Ukształtowanie terenu nie ma wpływu na szybkość wiatru",
		],
		answer: "W miejscach obniżenia (przerwach) wysokiej linii brzegowej",
	},
	{
		id: 8,
		image: img08,
		question: "Na mapie synoptycznej taki symbol oznacza:",
		options: ["Front ciepły ", "Front zokludowany", "Front chłodny"],
		answer: "Front chłodny",
	},
	{
		id: 9,
		image: null,
		question: "Pogoda występująca w wyżu barycznym to:",
		options: [
			"Pogoda zmienna",
			"Pogoda pochmurna - deszczowa",
			"Pogoda z małym zachmurzeniem - bez opadów",
		],
		answer: "Pogoda z małym zachmurzeniem - bez opadów",
	},
	{
		id: 10,
		image: null,
		question: "Izobary kreślone na mapach pogody są to:",
		options: [
			"Linie łączące punkty o jednakowej temperaturze",
			"Linie łączące punkty o jednakowej wilgotności powietrza",
			"Linie łączące punkty o jednakowej wartości ciśnienia",
		],
		answer: "Linie łączące punkty o jednakowej wartości ciśnienia",
	},
	{
		id: 11,
		image: img11,
		question: `Na polskiej mapie synoptycznej poszczególne skróty " N, W, " oznaczają kolejno:`,
		options: [
			"Wiatr północny (North), wiatr zachodni (West) ",
			"Centrum niżu, centrum wyżu",
			"Chmury niskie, chmury wysokie",
		],
		answer: "Centrum niżu, centrum wyżu",
	},
	{
		id: 12,
		image: img12,
		question:
			"W ciągu dnia obserwowano chmury jak na rysunku. Po południu wiatr osłabł, a chmury powoli zanikają, ciśnienie nie zmieniało się. Jakiej pogody można się spodziewać?",
		options: [
			"Podobnej pogody bez opadów i niewielkim zachmurzeniu ",
			"Wzrostu zachmurzenia, przelotnych opadów ",
			"Bardzo silnego wiatru przy niewielkim zachmurzeniu",
		],
		answer: "Podobnej pogody bez opadów i niewielkim zachmurzeniu ",
	},
    {
		id:13,
		image: null,
		question:
			"Przy dobrej pogodzie zaobserwowano chmury cirrus i cirrostratus, zwiastuje to:",
		options: [
			"Dalsze utrzymywanie się dobrej pogody ",
			"Zbliżanie się frontu chłodnego ",
			"Zbliżanie się frontu ciepłego",
		],
		answer: "Zbliżanie się frontu ciepłego",
	},
    {
		id:14,
		image: null,
		question:
			"Podczas bryzy nocnej wiatr wieje:",
		options: [
			"Od lądu do wody ",
			"Od wody do lądu ",
			"Zmienia kierunek na równoległy do linii brzegowej",
		],
		answer: "Od wody do lądu ",
	},
    {
		id:15,
		image: null,
		question:
			"Podczas bryzy dziennej wiatr wieje:",
		options: [
			"Od lądu do wody ",
			"Od wody do lądu ",
			"Zmienia kierunek na równoległy do linii brzegowej",
		],
		answer: "Od lądu do wody ",
	},
    {
		id:16,
		image: null,
		question:
			"System Sygnalizacji Ostrzegawczej na szlaku Wielkich Jezior Mazurskich nadaje sygnały świetlne z częstotliwością 40 błysków na minutę. Oznacza to:",
		options: [
			"Uwaga - spodziewane burze i wiatr, należy zachować ostrożność",
			"Bezpośrednie niebezpieczeństwo - występowanie burzy oraz silnego wiatru ",
			"Brak spodziewanych niebezpiecznych zjawisk meteorologicznych",
		],
		answer: "Uwaga - spodziewane burze i wiatr, należy zachować ostrożność",
	},
    {
		id:17,
		image: null,
		question:
			"System Sygnalizacji Ostrzegawczej na szlaku Wielkich Jezior Mazurskich nadaje sygnały świetlne z częstotliwością 90 błysków na minutę. Oznacza to:",
		options: [
			"Uwaga - spodziewane burze i wiatr, należy zachować ostrożność",
			"Bezpośrednie niebezpieczeństwo - występowanie burzy oraz silnego wiatru",
			"Brak spodziewanych niebezpiecznych zjawisk meteorologicznych",
		],
		answer: "Bezpośrednie niebezpieczeństwo - występowanie burzy oraz silnego wiatru",
	},
    {
		id:18,
		image: null,
		question:
			"Wiatr przyziemny w wyżu wieje (półkula południowa):",
		options: [
			"Prostopadle do izobar od centrum wyżu ",
			"Do centrum wyżu z zewnątrz",
			"Od środka wyżu odchylony odwrotnie do ruchu wskazówek zegara, kąt 20°-40° do izobary",
		],
		answer: "Od środka wyżu odchylony odwrotnie do ruchu wskazówek zegara, kąt 20°-40° do izobary",
	},
    {
		id:19,
		image: null,
		question:
			"Wiatr określony w komunikacie meteorologicznym jako 6 - 7 w skali Beauforta to:",
		options: [
			"Sztorm",
			"Wiatr umiarkowany",
			"Wiatr bardzo silny",
		],
		answer: "Wiatr bardzo silny",
	},
    {
		id:20,
		image: null,
		question:
			"Halo wokół słońca zwiastuje:",
		options: [
			"Zbliżanie się frontu ciepłego i pogorszenie się pogody ",
			"Polepszenie pogody",
			"Możliwość wystąpienia mgły",
		],
		answer: "Zbliżanie się frontu ciepłego i pogorszenie się pogody ",
	},
    {
		id:21,
		image: null,
		question:
			"Silne szkwały mogą towarzyszyć chmurom:",
		options: [
			"Nimbostratus",
			"Cumulonimbus",
			"Stratus",
		],
		answer: "Cumulonimbus",
	},
    {
		id:22,
		image: null,
		question:
			"W jakim układzie barycznym mogą występować obszary o silniejszym wietrze?",
		options: [
			"Tylko w wyżu barycznym",
			"Tylko w niżu barycznym ",
			"Zarówno w wyżu jak i niżu bo zależy to od gradientu ciśnienia",
		],
		answer: "Zarówno w wyżu jak i niżu bo zależy to od gradientu ciśnienia",
	},
    {
		id:23,
		image: img23,
		question:
			"Na rysunku pokazano diagram kierunku i siły wiatru dla jednej doby ( godziny od 08.00 do 08.00). Prognoza ICM. Jak zmieni się kierunek i siła wiatru w stopniach Beauforta w ciągu tej doby?",
		options: [
			"na początku okresu SE 3°B na końcu S-SW 2°B ",
			"na początku okresu SW 2°B na końcu S-SW 3°B ",
			"na początku okresu NW 3°B na końcu SE 2°B",
		],
		answer: "na początku okresu SE 3°B na końcu S-SW 2°B ",
	},
    {
		id:24,
		image: img24,
		question:
			"Symbol na mapie synoptycznej jak na rysunku, oznacza:",
		options: [
			"Front chłodny ",
			"Front ciepły ",
			"Front zokludowany",
		],
		answer: "Front zokludowany",
	},
    {
		id:25,
		image: null,
		question:
			`W prognozie określono wiatr jako "słaby"`,
		options: [
			"W skali Beauforta to 7°B ",
			"W skali Beauforta to 2°B",
			"W skali Beauforta to 5°B",
		],
		answer: "W skali Beauforta to 2°B",
	},
        {
		id:26,
		image: null,
		question:
			"Z których chmur można spodziewać się opadów deszczu?",
		options: [
			"Nimbostratus, Cumulonimbus",
			"Cirrus i cirrostratus",
			"Stratocumulus, Cirrocumulus",
		],
		answer: "Nimbostratus, Cumulonimbus",
	},
        {
		id:27,
		image: null,
		question:
			"Gdzie w układzie niżowym występuje największe i najmniejsze ciśnienie atmosferyczne?",
		options: [
			"Najmniejsze w środku, a największe na zewnątrz",
			"Największe w środku a najmniejsze na zewnątrz",
			"Największe w części północnej, a najmniejsze w południowej",
		],
		answer: "Najmniejsze w środku, a największe na zewnątrz",
	},
        {
		id:28,
		image: null,
		question:
			"Radiowy morski komunikat meteorologiczny posiada następujący schemat:",
		options: [
			"Prognoza na następne 24 godziny",
			"Ostrzeżenia, sytuacja baryczna, prognoza na 12 godzin, orientacyjna prognoza na następne 12 godzin",
			"Omówienie sytuacji barycznej, prognoza na 12 godzin",
		],
		answer: "Ostrzeżenia, sytuacja baryczna, prognoza na 12 godzin, orientacyjna prognoza na następne 12 godzin",
	},    {
		id:29,
		image: null,
		question:
			"Ile wynosi normalne ciśnienie atmosferyczne?",
		options: [
			"1013 hPa",
			"1000 hPa",
			"950 hPa",
		],
		answer: "1013 hPa",
	},
    {
		id:30,
		image: null,
		question:
			"4° w skali Beauforta to:",
		options: [
			"Umiarkowany wiatr",
			"Słaby wiatr",
			"Porywisty wiatr",
		],
		answer: "Porywisty wiatr",
	},
    {
		id:31,
		image: null,
		question:
			"Skala Beauforta ma:",
		options: [
			"10 stopni",
			"12 stopni",
			"13 stopni",
		],
		answer: "13 stopni",
	},

    {
		id:32,
		image: img32,
		question:
			"Chmura widoczna na zdjęciu to:",
		options: [
			"Statocumulus",
			"Nimbostratus",
			"Cumulonimbus",
		],
		answer: "Cumulonimbus",
	},    {
		id:33,
		image: null,
		question:
			"Anemometr to:",
		options: [
			"Przyrząd do mierzenia temperatury powietrza",
			"Przyrząd do mierzenia siły wiatru",
			"Przyrząd do mierzenia ciśnienia",
		],
		answer: "Przyrząd do mierzenia siły wiatru",
	},

    {
		id:34,
		image: null,
		question:
			"Wzrost ciśnienia zwiastuje:",
		options: [
			"Poprawę pogody",
			"Pogorszenie pogody",
			"Nie ma wpływu na pogodę",
		],
		answer: "Pogorszenie pogody",
	},
    {
		id:35,
		image: null,
		question:
			"Na czym polega zjawisko dyszy?",
		options: [
			"Zmniejszenie siły wiatru z uwagi na osłonięcie terenu",
			"Zwiększenie siły wiatru spowodowane różnicą ciśnień nad powierzchnią wody",
			"Zwiększenie siły wiatru spowodowane przepływem powietrza przez zwężoną przestrzeń",
		],
		answer: "Zwiększenie siły wiatru spowodowane przepływem powietrza przez zwężoną przestrzeń",
	},
    {
		id:36,
		image: null,
		question:
			"Szkwał to:",
		options: [
			"Wiatr o średniej sile",
			"Nagły wzrost prędkości wiatru",
			"Lekki podmuch wiatru",
		],
		answer: "Nagły wzrost prędkości wiatru",
	},
    {
		id:37,
		image: null,
		question:
			"Jednostką ciśnienia jest:",
		options: [
			"K",
			"hPa",
			"m/s",
		],
		answer: "hPa",
	},
    {
		id:38,
		image: null,
		question:
			"Zjawisko dyszy można spotkać:",
		options: [
			"Na środku jeziora",
			"W przesmyku między dwoma wyspami z wysokim brzegiem",
			"Między kardynałkami",
		],
		answer: "W przesmyku między dwoma wyspami z wysokim brzegiem",
	},
    {
		id:39,
		image: null,
		question:
			"Barometr to:",
		options: [
			"Przyrząd do mierzenia temperatury powietrza",
			"Przyrząd do mierzenia siły wiatru",
			"Przyrząd do mierzenia ciśnienia",
		],
		answer: "Przyrząd do mierzenia ciśnienia",
	},
    {
		id:40,
		image: null,
		question:
			"Wiatr powstaje przez: ",
		options: [
			"Różnicę ciśnień",
			"Ruch obrotowy Ziemi ",
			"Różnicę temperatur",
		],
		answer: "Różnicę ciśnień ",
	},
    {
		id:41,
		image: null,
		question:
			"8 w skali Beauforta to:",
		options: [
			"Bardzo silny wiatr",
			"Sztorm",
			"Silny sztorm",
		],
		answer: "Sztorm",
	},
    {
		id:42,
		image: null,
		question:
			"Chmura w kształcie kowadła to:",
		options: [
			"Cumulonimbus",
			"Nimbostatus",
			"Stratocumulus",
		],
		answer: "Cumulonimbus",
	},
    {
		id:43,
		image: null,
		question:
			"Zjawisko odbicia wiatru można spotkać",
		options: [
			"Przy wysokim brzegu",
			"Przy niskim brzegu ",
			"Na środku jeziora",
		],
		answer: "Przy wysokim brzegu",
	},
    {
		id:44,
		image: null,
		question:
			"Czynniki atmosferyczne to",
		options: [
			"Ciśnienie, wilgotność, temperatura powietrza",
			"Ciśnienie, temperatura wody",
			"Ciśnienie, wilgotność, temperatura wody",
		],
		answer: "Ciśnienie, wilgotność, temperatura powietrza",
	},
    {
		id:45,
		image: null,
		question:
			"Chmury piętra niskiego to:",
		options: [
			"Stratusy",
			"Cirrusy",
			"Cumulusy",
		],
		answer: "Cirrusy",
	},
    {
		id:46,
		image: null,
		question:
			"Chmury piętra wysokiego to:",
		options: [
			"Stratusy",
			"Cirrusy",
			"Cumulusy",
		],
		answer: "Cirrusy",
	},
    {
		id:47,
		image: null,
		question:
			"Cumulonimbus to chmura:",
		options: [
			"Piętra średniego",
			"Piętra najwyższego",
			"Wypiętrzająca się (obejmuje wszystkie warstwy)",
		],
		answer: "Wypiętrzająca się (obejmuje wszystkie warstwy)",
	},
    {
		id:48,
		image: null,
		question:
			"Stan morza opisuje skala:",
		options: [
			"Beauforta",
			"Pedersena",
			"Celsjusza",
		],
		answer: "Pedersena",
	},
    {
		id:49,
		image: null,
		question:
			"Na wodzie pojawiają się małe fale z pianą na grzbietach, słychać plusk. Wiemy, że wieje:",
		options: [
			"7°B ",
			"2°B ",
			"4°B ",
		],
		answer: "4°B ",
	},
    {
		id:50,
		image: null,
		question:
			"Flauta to:",
		options: [
			"Krótkie podmuchy wiatru",
			"Brak wiatru",
			"Regularny wiatr",
		],
		answer: "Brak wiatru",
	},

];
