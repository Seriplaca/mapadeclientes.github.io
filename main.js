const apiKey = 'pk.eyJ1IjoiYW55b25lZ290YW15a2UiLCJhIjoiY2wwdW5jdmJoMDkzajNkbzhjNjQ0ZWtzMiJ9.HgsGZ-9TkjarQ1kBZIBZrw';

const map = L.map('map').setView([40, -18], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);


const marker = L.marker([38.704381, -8.973168]).addTo(map); // Beltauto Comércio de Automóveis
const marker2 = L.marker([38.951188, -9.333114]).addTo(map); // Carlos Simões
const marker3 = L.marker([39.268092, -7.437679]).addTo(map); // EVORACAR
const marker4 = L.marker([41.521298, -8.576929]).addTo(map); // Stand Las Vegas
const marker5 = L.marker([37.118538, -8.136519]).addTo(map); // Carrus
const marker6 = L.marker([38.757127, -9.221903]).addTo(map); // Auto Continente
const marker7 = L.marker([39.938134, -8.796347]).addTo(map); // Gopecauto
const marker8 = L.marker([38.963274, -8.818689]).addTo(map); // Mecanica Agricola
const marker9 = L.marker([41.696746, -8.827237]).addTo(map); // Rb Motor Comercio Automovel
const marker10 = L.marker([39.731972, -8.826453]).addTo(map); // Auto Industrial Leiria
const marker11 = L.marker([38.941874, -9.251054]).addTo(map); // Auto Industrial Malveira
const marker12 = L.marker([38.720999, -9.214284]).addTo(map); // Auto Industrial Alfragide
const marker13 = L.marker([41.726620, -8.860191]).addTo(map); // Auto Rabal S.A.
const marker14 = L.marker([38.862391, -9.079290]).addTo(map); // Somecânica
const marker15 = L.marker([38.704464, -9.174123]).addTo(map); // Gilauto
const marker16 = L.marker([38.932478, -9.328380]).addTo(map); // Moticristo
const marker17 = L.marker([38.633258, -9.142931]).addTo(map); // Auto Monumental de Almada
const marker18 = L.marker([40.162380, -8.335180]).addTo(map); // Arnaut & Filhos
const marker19 = L.marker([38.820820, -9.246020]).addTo(map); // Palinjoflás 
const marker20 = L.marker([38.841398, -7.581726]).addTo(map); // Auto Sog 
const marker21 = L.marker([38.709790, -9.434490]).addTo(map); // Auto Chico
const marker22 = L.marker([38.844095, -7.578165]).addTo(map); // Lapão
const marker23 = L.marker([38.548770, -8.882860]).addTo(map); // Auto Avenida
const marker24 = L.marker([40.362070, -8.031350]).addTo(map); // Travassos Automoveis
const marker25 = L.marker([41.007092, -8.549260]).addTo(map); // Lua Crescente
const marker26 = L.marker([38.722431, -9.217380]).addTo(map); // Motolusa
const marker27 = L.marker([41.558924, -8.657844]).addTo(map); // Benjamim Araújo
const marker28 = L.marker([38.790271, -9.195037]).addTo(map); // Mendinhas Car
const marker29 = L.marker([39.911809, -8.366569]).addTo(map); // A. Rodrigues & Filhos
const marker30 = L.marker([38.837455, -9.093544]).addTo(map); // Iriacar
const marker73 = L.marker([40.657546, -8.617705]).addTo(map); // Mercentro
const marker54 = L.marker([38.019045, -8.694834]).addTo(map); // Auto Charrete
const marker84 = L.marker([38.540370, -8.871032]).addTo(map); // Basil Cars Center
const marker87 = L.marker([38.738263, -9.142255]).addTo(map); // Carros de Selecção
const marker88 = L.marker([41.110191, -8.576324]).addTo(map); // Citiauto
const marker89 = L.marker([38.899794, -9.036916]).addTo(map); // Auto Laranja Brava
const marker93 = L.marker([38.555208, -7.915002]).addTo(map); // Picarodinhas
const marker98 = L.marker([38.726549, -9.413614]).addTo(map); // CAM
const marker99 = L.marker([38.65655517443191, -27.210376811267086]).addTo(map); //  Loureiro Almeida & Filhos, Lda
const marker100 = L.marker([38.84913961579673, -9.07819880851857]).addTo(map); //  Henrique Gomes & Filhos - Oficina Auto
const marker101 = L.marker([38.732096737428115, -9.397727982941351]).addTo(map); // DunasMotor
const marker102 = L.marker([39.85753790511107, -8.884772301804452]).addTo(map); // Emídio C. Branco, Lda 
const marker103 = L.marker([38.79621793889017, -9.169701530985668]).addTo(map); // António Sousa Lima
const marker104 = L.marker([38.83138231393405, -9.17249002401213]).addTo(map); // Gaulicar
const marker105 = L.marker([38.7223272358691, -7.985631307986344]).addTo(map); // J.M. Delgado Automóveis 
const marker106 = L.marker([38.05429629874746, -8.788765075814581]).addTo(map); // Stand Os Putos Lda Santo André
const marker107 = L.marker([37.96059774481567, -8.858073107547868]).addTo(map); // Stand Os Putos Lda Sines
const marker108 = L.marker([39.68527178997252, -8.89541445564748]).addTo(map); // Vipomcar - Comércio de Automóveis LDA
const marker109 = L.marker([38.554951760278136, -7.908899963661593]).addTo(map); // Gestauto
const marker110 = L.marker([39.73135214048167, -8.826494363961858]).addTo(map); //  A. Braz Heleno - BMW e Mini Service 
const marker111 = L.marker([38.677471643293984, -9.317677298444975]).addTo(map); // West Coast
const marker112 = L.marker([37.74099507226541, -25.675166776605046]).addTo(map); // Horácio Silva Garcia
const marker113 = L.marker([38.554893193971076, -7.914660077795347]).addTo(map); // Motévora 
const marker114 = L.marker([38.788314178640555, -9.118591239293869]).addTo(map); // ACP 
const marker115 = L.marker([38.72916097512627, -9.162566959450274]).addTo(map); // Motorway 
const marker116 = L.marker([38.78517577211607, -9.222357695634944]).addTo(map); // Rame Moto
const marker117 = L.marker([40.155806653305845, -8.113448349017343]).addTo(map); // Moto Castanheira
const marker118 = L.marker([38.89289720158055, -7.150214017888977]).addTo(map); // Boutigest
const marker119 = L.marker([38.84537937674573, -7.5787562070287855]).addTo(map); // Pestana & Pestana
const marker120 = L.marker([38.69794365610325, -9.303129558274275]).addTo(map); // Oeirascar
const marker121 = L.marker([38.84410493413496, -9.376801740803536]).addTo(map); // Conventauto
const marker122 = L.marker([38.79432864754992, -9.167742128167351]).addTo(map); // Auto 70
const marker123 = L.marker([38.770242539518755, -9.293281266662225]).addTo(map); // GSF
const marker124 = L.marker([38.729516298967845, -9.162973666833619]).addTo(map); // HJR Car
const marker125 = L.marker([38.73816925600398, -9.142108149731904]).addTo(map); // FS Automóveis
const marker126 = L.marker([39.10348560156309, -9.231606330416666]).addTo(map); // Evoperformance
const marker127 = L.marker([37.95956297035084, -8.851273077161041]).addTo(map); // Centro Ciclista Sineense
const marker128 = L.marker([38.7410411279202, -9.134269655116245]).addTo(map); // LCA Motors
const marker129 = L.marker([38.55901774176555, -7.91338937731938]).addTo(map); // VLR cars
const marker130 = L.marker([38.786405593077895, -9.224270882834276]).addTo(map); // Impactotal
const marker131 = L.marker([39.47457888912671, -8.552362759794736]).addTo(map); //  Alves da Luz


// Litocar

const marker31 = L.marker([39.254912, -8.713332]).addTo(map); // Litocar Santarém
const marker32 = L.marker([39.465684, -8.547260]).addTo(map); // Litocar Torres Novas
const marker33 = L.marker([40.145116, -8.465875]).addTo(map); // Litocar Coimbra
const marker34 = L.marker([40.237647, -8.435461]).addTo(map); // Litocar Coimbra
const marker45 = L.marker([40.145385, -8.465721]).addTo(map); // Litocar Coimbra
const marker51 = L.marker([40.237816, -8.435361]).addTo(map); // Litocar Coimbra
const marker35 = L.marker([40.179797, -8.828837]).addTo(map); // Litocar Figueira da Foz
const marker36 = L.marker([40.355129, -8.608399]).addTo(map); // Litocar Cantanhede
const marker37 = L.marker([39.808366, -7.518822]).addTo(map); // Renault Castelo Branco
const marker38 = L.marker([40.135943, -8.487672]).addTo(map); // Litocar Cernache
const marker39 = L.marker([39.807921, -7.519306]).addTo(map); // Litocar Castelo Branco
const marker40 = L.marker([40.918461, -8.574390]).addTo(map); // Litocar Santa Maria da Feira
const marker41 = L.marker([40.265911, -7.494656]).addTo(map); // Litocar Covilhã
const marker42 = L.marker([40.360597, -7.837660]).addTo(map); // Litocar Oliveira do Hospital
const marker43 = L.marker([40.918773, -8.573837]).addTo(map); // Litocar Santa Maria da Feira
const marker44 = L.marker([40.179386, -8.828829]).addTo(map); // Litocar Figueira da Foz
const marker46 = L.marker([40.534928, -7.244120]).addTo(map); // Litocar Guarda
const marker47 = L.marker([39.811069, -7.518459]).addTo(map); // Litocar Castelo Branco
const marker48 = L.marker([40.266056, -7.494911]).addTo(map); // Litocar Covilhã 
const marker49 = L.marker([40.635958, -7.845667]).addTo(map); // Litocar Viseu
const marker50 = L.marker([38.837455, -9.093544]).addTo(map); // Litocar Viseu
const marker52 = L.marker([40.636162, -7.844921]).addTo(map); // Litocar Viseu


// A MatosCar

const marker55 = L.marker([38.550655, -7.912422]).addTo(map); // A MatosCar Évora
const marker56 = L.marker([38.549895, -7.913253]).addTo(map); // A MatosCar Évora
const marker57 = L.marker([38.550195, -7.911947]).addTo(map); // A MatosCar Évora
const marker58 = L.marker([38.550560, -7.911945]).addTo(map); // A MatosCar Évora
const marker59 = L.marker([38.549854, -7.912371]).addTo(map); // A MatosCar Évora
const marker60 = L.marker([38.550651, -7.912206]).addTo(map); // A MatosCar Évora
const marker61 = L.marker([38.550486, -7.912483]).addTo(map); // A MatosCar Évora
const marker62 = L.marker([40.550470, -7.244630]).addTo(map); // A MatosCar Guarda
const marker63 = L.marker([38.022026, -7.858469]).addTo(map); // A MatosCar Beja
const marker64 = L.marker([39.824243, -7.519186]).addTo(map); // A MatosCar Castelo Branco
const marker65 = L.marker([39.808871, -7.517935]).addTo(map); // A MatosCar Castelo Branco
const marker66 = L.marker([39.812657, -7.519397]).addTo(map); // A MatosCar Castelo Branco
const marker67 = L.marker([40.148219, -7.499146]).addTo(map); // A MatosCar Fundão
const marker68 = L.marker([39.267055, -7.431401]).addTo(map); // A MatosCar Portalegre
const marker69 = L.marker([39.299399, -7.432002]).addTo(map); // A MatosCar Portalegre
const marker70 = L.marker([39.287444, -7.431894]).addTo(map); // A MatosCar Portalegre
const marker71 = L.marker([39.268401, -7.438969]).addTo(map); // A MatosCar Portalegre
const marker72 = L.marker([39.295918, -7.432662]).addTo(map); // A MatosCar Portalegre

// Multiato

const marker74 = L.marker([38.757834, -9.110243]).addTo(map); // Multiauto Lisboa
const marker75 = L.marker([38.864661, -9.100084]).addTo(map); // Multiauto Lisboa
const marker76 = L.marker([38.550687, -8.885653]).addTo(map); // Multiauto Setúbal
const marker77 = L.marker([37.956319, -8.847670]).addTo(map); // Multiauto Sines
const marker78 = L.marker([38.557364, -7.912249]).addTo(map); // Multiauto Évora

// Motorex

const marker79 = L.marker([38.021364, -7.856735]).addTo(map); // Motorex Beja
const marker80 = L.marker([38.838271, -7.580506]).addTo(map); // Motorex Estremoz 
const marker81 = L.marker([38.558511, -7.917775]).addTo(map); // Motorex Évora 
const marker82 = L.marker([39.268343, -7.438031]).addTo(map); // Motorex Portalegre 
const marker83 = L.marker([37.956373, -8.847861]).addTo(map); // Motorex Sines 

// Forumotor 

const marker85 = L.marker([38.786445, -9.193379]).addTo(map); // Forumotor Odivelas 
const marker86 = L.marker([38.898664, -9.037618]).addTo(map); // Forumotor Ribatejo

// Sodicentro

const marker90 = L.marker([39.763303, -8.789368]).addTo(map); // Sodicentro Leiria
const marker91 = L.marker([39.761836, -8.791405]).addTo(map); // Sodicentro Leiria
const marker92 = L.marker([40.232447, -8.438656]).addTo(map); // Sodicentro Coimbra

// SobralCar

const marker94 = L.marker([39.023035, -8.975886]).addTo(map); // SobralCar Carregado
const marker95 = L.marker([39.027142, -9.144207]).addTo(map); // SobralCar Sobral de Monte Agraço
const marker96 = L.marker([38.937382, -9.166062]).addTo(map); // SobralCar Sobral de Monte Agraço
const marker97 = L.marker([38.925845, -8.881488]).addTo(map); // SobralCar Samora Correia

// Marcadores 

let template = `
<div style="text-align:center">
    <h2> Beltauto Comércio de Automóveis </h2>
    <image width="150" height="100" src="Beltauto Comércio de Automóveis.jpg"/>
</div>
`
marker.bindPopup(template);

let template2 = `
<div style="text-align:center">
    <h2> Carlos Simões </h2>
    <image width="100" height="100" src="Carlos Simões.jpg"/>
</div>
`
marker2.bindPopup(template2);

let template3 = `
<div style="text-align:center">
    <h2> EVORACAR </h2>
    <image width="100" height="100" src="EVORACAR.jpg"/>
</div>
`
marker3.bindPopup(template3);

let template4 = `
<div style="text-align:center">
    <h2> Stand Las Vegas </h2>
    <image width="150" height="100" src="Stand Las Vegas.png"/>
</div>
`
marker4.bindPopup(template4);

let template5 = `
<div style="text-align:center">
    <h2> Carrus </h2>
    <image width="100" height="100" src="Carrus.jpg"/>
</div>
`
marker5.bindPopup(template5);

let template6 = `
<div style="text-align:center">
    <h2> Auto Continente </h2>
    <image width="100" height="100" src="Auto Continente.png"/>
</div>
`
marker6.bindPopup(template6);

let template7 = `
<div style="text-align:center">
    <h2> Gopecauto </h2>
    <image width="100" height="100" src="Gopecauto.jpg"/>
</div>
`
marker7.bindPopup(template7);

let template8 = `
<div style="text-align:center">
    <h2> Mecanica Agricola </h2>
    <image width="150" height="150" src="Mecanica Agricola.jpg"/>
</div>
`
marker8.bindPopup(template8);

let template9 = `
<div style="text-align:center">
    <h2> Rb Motor Comercio Automovel </h2>
    <image width="150" height="100" src="Rb Motor Comercio Automovel.png"/>
</div>
`
marker9.bindPopup(template9);

let template10 = `
<div style="text-align:center">
    <h2> Auto Industrial Leiria </h2>
    <image width="100" height="100" src="Auto-Industrial S.A.jpg"/>
</div>
`
marker10.bindPopup(template10);

let template11 = `
<div style="text-align:center">
    <h2> Auto Industrial Malveira </h2>
    <image width="100" height="100" src="Auto-Industrial S.A.jpg"/>
</div>
`
marker11.bindPopup(template11);

let template12 = `
<div style="text-align:center">
    <h2> Auto Industrial Alfragide </h2>
    <image width="100" height="100" src="Auto-Industrial S.A.jpg"/>
</div>
`
marker12.bindPopup(template12);

let template13 = `
<div style="text-align:center">
    <h2> Auto Rabal S.A. </h2>
    <image width="100" height="100" src="Auto Rabal S.A.jpg"/>
</div>
`
marker13.bindPopup(template13);

let template14 = `
<div style="text-align:center">
    <h2> Somecânica </h2>
    <image width="125" height="85" src="Somecânica - Comércio e Reparação de Automóveis.png"/>
</div>
`
marker14.bindPopup(template14);

let template15 = `
<div style="text-align:center">
    <h2> Gilauto </h2>
    <image width="100" height="100" src="Gilauto.jpg"/>
</div>
`
marker15.bindPopup(template15);

let template16 = `
<div style="text-align:center">
    <h2> Moticristo </h2>
    <image width="100" height="100" src="Moticristo.png"/>
</div>
`
marker16.bindPopup(template16);

let template17 = `
<div style="text-align:center">
    <h2> Auto Monumental de Almada </h2>
    <image width="100" height="100" src="Auto Monumental de Almada.png"/>
</div>
`
marker17.bindPopup(template17);

let template18 = `
<div style="text-align:center">
    <h2> Arnaut & Filhos </h2>
    <image width="100" height="100" src="Arnaut & Filhos.jpg"/>
</div>
`
marker18.bindPopup(template18);

let template19 = `
<div style="text-align:center">
    <h2> Palinjoflás </h2>
    <image width="100" height="100" src="Palinjoflás.png"/>
</div>
`
marker19.bindPopup(template19);

let template20 = `
<div style="text-align:center">
    <h2> Auto Sog </h2>
    <image width="100" height="100" src="Auto Sog.png"/>
</div>
`
marker20.bindPopup(template20);

let template21 = `
<div style="text-align:center">
    <h2> Auto Chico </h2>
    <image width="100" height="100" src="Auto Chico.jpg"/>
</div>
`
marker21.bindPopup(template21);

let template22 = `
<div style="text-align:center">
    <h2> Lapão </h2>
    <image width="100" height="100" src="Lapão, Comércio e Indústria de Veículos Automóveis.png"/>
</div>
`
marker22.bindPopup(template22);

let template23 = `
<div style="text-align:center">
    <h2> Auto Avenida </h2>
    <image width="100" height="100" src="Auto Avenida.png"/>
</div>
`
marker23.bindPopup(template23);

let template24 = `
<div style="text-align:center">
    <h2> Travassos Automoveis </h2>
    <image width="100" height="100" src="Travassos Automoveis.png"/>
</div>
`
marker24.bindPopup(template24);

let template25 = `
<div style="text-align:center">
    <h2> Lua Crescente </h2>
    <image width="100" height="100" src="Lua Crescente.jpg"/>
</div>
`
marker25.bindPopup(template25);

let template26 = `
<div style="text-align:center">
    <h2> Motolusa </h2>
    <image width="150" height="100" src="Motolusa.png"/>
</div>
`
marker26.bindPopup(template26);

let template27 = `
<div style="text-align:center">
    <h2> Benjamim Araújo </h2>
    <image width="100" height="100" src="Benjamim Araújo.png"/>
</div>
`
marker27.bindPopup(template27);

let template28 = `
<div style="text-align:center">
    <h2> Mendinhas Car </h2>
    <image width="100" height="100" src="Mendinhas Car.png"/>
</div>
`
marker28.bindPopup(template28);

let template29 = `
<div style="text-align:center">
    <h2> A. Rodrigues & Filhos </h2>
    <image width="100" height="100" src="A. Rodrigues & Filhos.png"/>
</div>
`
marker29.bindPopup(template29);

let template30 = `
<div style="text-align:center">
    <h2> Iriacar </h2>
    <image width="100" height="100" src="Iriacar.png"/>
</div>
`
marker30.bindPopup(template30);

// Litocar //

let template31 = `
<div style="text-align:center">
    <h2> Litocar Santarém </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker31.bindPopup(template31);

let template32 = `
<div style="text-align:center">
    <h2> Litocar Torres Novas </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker32.bindPopup(template32);

let template33 = `
<div style="text-align:center">
    <h2> Litocar Coimbra </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker33.bindPopup(template33);

let template34 = `
<div style="text-align:center">
    <h2> Litocar Coimbra </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker34.bindPopup(template34);

let template35 = `
<div style="text-align:center">
    <h2> Litocar Figueira da Foz  </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker35.bindPopup(template35);

let template36 = `
<div style="text-align:center">
    <h2> Litocar Cantanhede </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker36.bindPopup(template36);

let template37 = `
<div style="text-align:center">
    <h2> Litocar Castelo Branco </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker37.bindPopup(template37);

let template38 = `
<div style="text-align:center">
    <h2> Litocar Cernache </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker38.bindPopup(template38);

let template39 = `
<div style="text-align:center">
    <h2> Litocar Castelo Branco </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker39.bindPopup(template39);

let template40 = `
<div style="text-align:center">
    <h2> Litocar Santa Maria da Feira </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker40.bindPopup(template40);

let template41 = `
<div style="text-align:center">
    <h2> Litocar Covilhã </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker41.bindPopup(template41);

let template42 = `
<div style="text-align:center">
    <h2> Litocar Oliveira do Hospital </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker42.bindPopup(template42);

let template43 = `
<div style="text-align:center">
    <h2> Litocar Santa Maria da Feira </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker43.bindPopup(template43);

let template44 = `
<div style="text-align:center">
    <h2> Litocar Figueira da Foz </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker44.bindPopup(template44);

let template45 = `
<div style="text-align:center">
    <h2> Litocar Coimbra </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker45.bindPopup(template45);

let template46 = `
<div style="text-align:center">
    <h2> Litocar Guarda </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker46.bindPopup(template46);

let template47 = `
<div style="text-align:center">
    <h2> Litocar Castelo Branco </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker47.bindPopup(template47);

let template48 = `
<div style="text-align:center">
    <h2> Litocar Covilhã </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker48.bindPopup(template48);

let template49 = `
<div style="text-align:center">
    <h2> Litocar Viseu </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker49.bindPopup(template49);

let template50 = `
<div style="text-align:center">
    <h2> Litocar Viseu  </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker50.bindPopup(template50);

let template51 = `
<div style="text-align:center">
    <h2> Litocar Coimbra  </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker51.bindPopup(template51);

let template52 = `
<div style="text-align:center">
    <h2> Litocar Viseu  </h2>
    <image width="100" height="100" src="Litocar.png"/>
</div>
`
marker52.bindPopup(template52);

//

let template54 = `
<div style="text-align:center">
    <h2> Auto Charrete </h2>
    <image width="100" height="100" src="Auto Charrete.jpg"/>
</div>
`
marker54.bindPopup(template54);

// A MatosCar

let template55 = `
<div style="text-align:center">
    <h2> A MatosCar </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker55.bindPopup(template55);

let template56 = `
<div style="text-align:center">
    <h2> A MatosCar Évora </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker56.bindPopup(template56);

let template57 = `
<div style="text-align:center">
    <h2> A MatosCar Évora </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker57.bindPopup(template57);

let template58 = `
<div style="text-align:center">
    <h2> A MatosCar Évora </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker58.bindPopup(template58);

let template59 = `
<div style="text-align:center">
    <h2> A MatosCar Évora </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker59.bindPopup(template59);

let template60 = `
<div style="text-align:center">
    <h2> A MatosCar Évora </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker60.bindPopup(template60);

let template61 = `
<div style="text-align:center">
    <h2> A MatosCar Évora </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker61.bindPopup(template61);

let template62 = `
<div style="text-align:center">
    <h2> A MatosCar Guarda </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker62.bindPopup(template62);

let template63 = `
<div style="text-align:center">
    <h2> A MatosCar Beja </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker63.bindPopup(template63);

let template64 = `
<div style="text-align:center">
    <h2> A MatosCar Castelo Branco </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker64.bindPopup(template64);

let template65 = `
<div style="text-align:center">
    <h2> A MatosCar Castelo Branco </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker65.bindPopup(template65);

let template66 = `
<div style="text-align:center">
    <h2> A MatosCar Castelo Branco </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker66.bindPopup(template66);

let template67 = `
<div style="text-align:center">
    <h2> A MatosCar Fundão </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker67.bindPopup(template67);

let template68 = `
<div style="text-align:center">
    <h2> A MatosCar Portalegre </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker68.bindPopup(template68);

let template69 = `
<div style="text-align:center">
    <h2> A MatosCar Portalegre </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker69.bindPopup(template69);

let template70 = `
<div style="text-align:center">
    <h2> A MatosCar Portalegre </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker70.bindPopup(template70);

let template71 = `
<div style="text-align:center">
    <h2> A MatosCar Portalegre </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker71.bindPopup(template71);

let template72 = `
<div style="text-align:center">
    <h2> A MatosCar Portalegre </h2>
    <image width="100" height="100" src="A MatosCar.jpg"/>
</div>
`
marker72.bindPopup(template72);

//

let template73 = `
<div style="text-align:center">
    <h2> Mercentro </h2>
    <image width="100" height="100" src="Mercentro.jpg"/>
</div>
`
marker73.bindPopup(template73);

// Multiato

let template74 = `
<div style="text-align:center">
    <h2> Multiato Lisboa </h2>
    <image width="100" height="100" src="Multiauto.jpg"/>
</div>
`
marker74.bindPopup(template74);

let template75 = `
<div style="text-align:center">
    <h2> Multiato Lisboa </h2>
    <image width="100" height="100" src="Multiauto.jpg"/>
</div>
`
marker75.bindPopup(template75);

let template76 = `
<div style="text-align:center">
    <h2> Multiato Setúbal </h2>
    <image width="100" height="100" src="Multiauto.jpg"/>
</div>
`
marker76.bindPopup(template76);

let template77 = `
<div style="text-align:center">
    <h2> Multiato Sines </h2>
    <image width="100" height="100" src="Multiauto.jpg"/>
</div>
`
marker77.bindPopup(template77);

let template78 = `
<div style="text-align:center">
    <h2> Multiato Évora </h2>
    <image width="100" height="100" src="Multiauto.jpg"/>
</div>
`
marker78.bindPopup(template78);

// Motorex 

let template79 = `
<div style="text-align:center">
    <h2> Motorex Beja </h2>
    <image width="100" height="100" src="Grupo Motorex.jpg"/>
</div>
`
marker79.bindPopup(template79);

let template80 = `
<div style="text-align:center">
    <h2> Motorex Estremoz  </h2>
    <image width="100" height="100" src="Grupo Motorex.jpg"/>
</div>
`
marker80.bindPopup(template80);

let template81 = `
<div style="text-align:center">
    <h2> Motorex Évora  </h2>
    <image width="100" height="100" src="Grupo Motorex.jpg"/>
</div>
`
marker81.bindPopup(template81);

let template82 = `
<div style="text-align:center">
    <h2> Motorex Portalegre  </h2>
    <image width="100" height="100" src="Grupo Motorex.jpg"/>
</div>
`
marker82.bindPopup(template82);

let template83 = `
<div style="text-align:center">
    <h2> Motorex Sines  </h2>
    <image width="100" height="100" src="Grupo Motorex.jpg"/>
</div>
`
marker83.bindPopup(template83);

//

let template84 = `
<div style="text-align:center">
    <h2> Basil Cars Center </h2>
    <image width="100" height="100" src="Basil Cars Center.jpg"/>
</div>
`
marker84.bindPopup(template84);

// Forumotor


let template85 = `
<div style="text-align:center">
    <h2> Forumotor Odivelas </h2>
    <image width="125" height="125" src="Forumotor.jpg"/>
</div>
`
marker85.bindPopup(template85);

let template86 = `
<div style="text-align:center">
    <h2> Forumotor Ribatejo </h2>
    <image width="125" height="125" src="Forumotor.jpg"/>
</div>
`
marker86.bindPopup(template86);

let template87 = `
<div style="text-align:center">
    <h2> Carros de Selecção </h2>
    <image width="200" height="50" src="Carros de Selecção.webp"/>
</div>
`
marker87.bindPopup(template87);

let template88 = `
<div style="text-align:center">
    <h2> Citiauto </h2>
    <image width="100" height="100" src="Citiauto.jpg"/>
</div>
`
marker88.bindPopup(template88);

let template89 = `
<div style="text-align:center">
    <h2> Auto Laranja Brava </h2>
    <image width="200" height="20" src="Auto Laranja Brava.png"/>
</div>
`
marker89.bindPopup(template89);

let template90 = `
<div style="text-align:center">
    <h2> Sodicentro Leiria </h2>
    <image width="200" height="50" src="Sodicentro.webp"/>
</div>
`
marker90.bindPopup(template90);

let template91 = `
<div style="text-align:center">
    <h2> Sodicentro Leiria </h2>
    <image width="200" height="50" src="Sodicentro.webp"/>
</div>
`
marker91.bindPopup(template91);

let template92 = `
<div style="text-align:center">
    <h2> Sodicentro Coimbra </h2>
    <image width="200" height="50" src="Auto Laranja Brava.png"/>
</div>
`
marker92.bindPopup(template92);

let template93 = `
<div style="text-align:center">
    <h2> Picarodinhas </h2>
    <image width="125" height="100" src="Picarodinhas.jpg"/>
</div>
`
marker93.bindPopup(template93);

let template94 = `
<div style="text-align:center">
    <h2> SobralCar Carregado </h2>
    <image width="125" height="100" src="Sobralcar.png"/>
</div>
`
marker94.bindPopup(template94);

let template95 = `
<div style="text-align:center">
    <h2> SobralCar Sobral de Monte Agraço </h2>
    <image width="125" height="100" src="Sobralcar.png"/>
</div>
`
marker95.bindPopup(template95);

let template96 = `
<div style="text-align:center">
    <h2> SobralCar Sobral de Monte Agraço </h2>
    <image width="125" height="100" src="Sobralcar.png"/>
</div>
`
marker96.bindPopup(template96);

let template97 = `
<div style="text-align:center">
    <h2> SobralCar Samora Correia </h2>
    <image width="125" height="100" src="Sobralcar.png"/>
</div>
`
marker97.bindPopup(template97);

let template98 = `
<div style="text-align:center">
    <h2> C.A.M </h2>
    <image width="100" height="100" src="CAM.jpg"/>
</div>
`
marker98.bindPopup(template98);

let template99 = `
<div style="text-align:center">
    <h2>  Loureiro Almeida & Filhos, Lda </h2>
    <image width="100" height="100" src="LAF.jpg"/>
</div>
`
marker99.bindPopup(template99);

let template100 = `
<div style="text-align:center">
    <h2>  Henrique Gomes E Filhos, Lda </h2>
    <image width="100" height="100" src="Henrique Gomes E Filhos.png"/>
</div>
`
marker100.bindPopup(template100);

let template101 = `
<div style="text-align:center">
    <h2> DunasMotor </h2>
    <image width="100" height="100" src="DunasMotor.png"/>
</div>
`
marker101.bindPopup(template101);

let template102 = `
<div style="text-align:center">
    <h2> Emídio C. Branco, Lda  </h2>
    <image width="125" height="85" src="Emídio C. Branco, Lda.png"/>
</div>
`
marker102.bindPopup(template102);

let template103 = `
<div style="text-align:center">
    <h2> ASL Automóveis </h2>
    <image width="175" height="80" src="ASL.png"/>
</div>
`
marker103.bindPopup(template103);

let template104 = `
<div style="text-align:center">
    <h2> Gaulicar </h2>
    <image width="150" height="65" src="Gaulicar.png"/>
</div>
`
marker104.bindPopup(template104);

let template105 = `
<div style="text-align:center">
    <h2>  J.M. Delgado Automóveis </h2>
    <image width="100" height="100" src="J.M. Delgado Automóveis.jpg"/>
</div>
`
marker105.bindPopup(template105);

let template106 = `
<div style="text-align:center">
    <h2> Stand Os Putos Santo André </h2>
    <image width="100" height="100" src="Stand Os Putos Lda.png"/>
</div>
`
marker106.bindPopup(template106);

let template107 = `
<div style="text-align:center">
    <h2> Stand Os Putos Sines </h2>
    <image width="100" height="100" src="Stand Os Putos Lda.png"/>
</div>
`
marker107.bindPopup(template107);

let template108 = `
<div style="text-align:center">
    <h2> Vipomcar </h2>
    <image width="200" height="70" src="Vipomcar.jpg"/>
</div>
`
marker108.bindPopup(template108);

let template109 = `
<div style="text-align:center">
    <h2> Gestauto </h2>
</div>
`
marker109.bindPopup(template109);

let template110 = `
<div style="text-align:center">
    <h2> A. Braz Heleno </h2>
    <image width="100" height="100" src="A Braz Heleno.png"/>
</div>
`
marker110.bindPopup(template110);

let template111 = `
<div style="text-align:center">
    <h2> West Coast </h2>
    <image width="300" height="75" src="West Coast.png"/>
</div>
`
marker111.bindPopup(template111);

let template112 = `
<div style="text-align:center">
    <h2> Horacio Da Silva Garcia </h2>
    <image width="150" height="100" src="Horacio Da Silva Garcia.jpg"/>
</div>
`
marker112.bindPopup(template112);

let template113 = `
<div style="text-align:center">
    <h2> Motévora </h2>
    <image width="100" height="100" src="Motévora.jpg"/>
</div>
`
marker113.bindPopup(template113);

let template114 = `
<div style="text-align:center">
    <h2> ACP </h2>
    <image width="100" height="100" src="ACP.jpg"/>
</div>
`
marker114.bindPopup(template114);

let template115 = `
<div style="text-align:center">
    <h2> Motorway </h2>
    <image width="250" height="65" src="motorway.jpg"/>
</div>
`
marker115.bindPopup(template115);

let template116 = `
<div style="text-align:center">
    <h2> Rame Moto </h2>
    <image width="225" height="45" src=" Ramemoto.webp"/>
</div>
`
marker116.bindPopup(template116);

let template117 = `
<div style="text-align:center">
    <h2> Moto Castanheira </h2>
    <image width="225" height="45" src=" Logo MC WORK.png"/>
</div>
`
marker117.bindPopup(template117);

let template118 = `
<div style="text-align:center">
    <h2> Boutigest </h2>
    <image width="225" height="45" src="Boutigest.png"/>
</div>
`
marker118.bindPopup(template118);

let template119 = `
<div style="text-align:center">
    <h2> Pestana & Pestana </h2>
    <image width="225" height="45" src="Pestana Automoveis.png"/>
</div>
`
marker119.bindPopup(template119);

let template120 = `
<div style="text-align:center">
    <h2> Oeirascar </h2>
    <image width="100" height="100" src="Oeirascar.jpg"/>
</div>
`
marker120.bindPopup(template120);

let template121 = `
<div style="text-align:center">
    <h2> Conventauto </h2>
    <image width="250" height="100" src="Conventauto.png"/>
</div>
`
marker121.bindPopup(template121);

let template122 = `
<div style="text-align:center">
    <h2> Auto 70 </h2>
    <image width="100" height="100" src="Auto 70.png"/>
</div>
`
marker122.bindPopup(template122);

let template123 = `
<div style="text-align:center">
    <h2> Garagem Santa Filomena </h2>
    <image width="150" height="100" src="GSF.png"/>
</div>
`
marker123.bindPopup(template123);

let template124 = `
<div style="text-align:center">
    <h2> HJR Car </h2>
    <image width="225" height="100" src="HJR.png"/>
</div>
`
marker124.bindPopup(template124);

let template125 = `
<div style="text-align:center">
    <h2> FS Automóveis </h2>
    <image width="100" height="100" src="FS Automóveis.jpg"/>
</div>
`
marker125.bindPopup(template125);

let template126 = `
<div style="text-align:center">
    <h2>  Evoperformance </h2>
    <image width="100" height="100" src=" Evoperformance.png"/>
</div>
`
marker126.bindPopup(template126);

let template127 = `
<div style="text-align:center">
    <h2> Centro Ciclista Sineense </h2>
    <image width="100" height="100" src=" CCS.png"/>
</div>
`
marker127.bindPopup(template127);

let template128 = `
<div style="text-align:center">
    <h2> LCA Motors </h2>
    <image width="100" height="100" src="LCA Motors.png"/>
</div>
`
marker128.bindPopup(template128);

let template129 = `
<div style="text-align:center">
    <h2> VLR cars </h2>
    <image width="100" height="100" src="VLR.jpg"/>
</div>
`
marker129.bindPopup(template129);

let template130 = `
<div style="text-align:center">
    <h2> Impactotal </h2>
    <image width="100" height="100" src="Impactotal.png"/>
</div>
`
marker130.bindPopup(template130);

let template131 = `
<div style="text-align:center">
    <h2> Impactotal </h2>
    <image width="100" height="100" src="Impactotal.png"/>
</div>
`
marker131.bindPopup(template131);