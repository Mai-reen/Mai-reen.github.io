// Reseptidata kategorioineen, ohjeineen ja määrineen
const recipes = [
    {
        id: 1,
        title: "牛丼",
        description: "x minuuttia",
        ingredientAmounts: [
            "200g udon",
            "200g ohut naudan suikale",
            "600ml dashi",
            "1,5rkl soijakastike",
            "1rkl mirin",
            "1tl sokeri",
            "1tl suola"
        ],
        categories: ["pääruoka", "aasialainen"],
        image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Gyuu-don_001.jpg",
        instructions: [
            "Keitä dashi, soijakastike, mirin, sokeri ja suola.",
            "Paista lihat ja kevätsipuli rapeaksi pannulla.",
            "Keitä nuudelit.",
            "Yhdistä liemi nuudelit ja liha kulhoon"
        ]
    },
    {
        id: 2,
        title: "Hot honey halloumi-pasta",
        description: "15 minuuttia",
        ingredientAmounts: [
            "200g halloumi",
            "200g tuorepasta",
            "2dl kerma",
            "chilihiutale",
            "tomaattipyre",
            "kasvisliemikuutio",
            "hunaja",
            "valkosipuli",
            "valkosipulijauhe",
            "pippuri"
        ],
        categories: ["pääruoka", "kasvisruoka"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYZRn9_QqODOVIbP-qESltgyiQaKZO6-j8Q&s",
        instructions: [
            "Kuutioi halloumi ja paista pinta rapeaksi.",
            "Lisää mausteet, tomaattipyre, hunaja ja kerma.",
            "Keitä pasta."
        ]
    },
    {
        id: 3,
        title: "Kasviswokki",
        description: "15 minuuttia",
        ingredientAmounts: [
            "200g kiinankaali",
            "30g kevätsipuli",
            "2 porkkanaa",
            "200g munanuudeli",
            "Golden&green suikale",
            "sipuli",
            "inkivääri",
            "valkosipuli",
            "soijakastike",
            "valkosipulijauhe",
            "kasvisfondue",
            "hunaja",
            "osterikastike"
        ],
        categories: ["pääruoka", "kasvisruoka"],
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        instructions: [
            "Pilko vihannekset sopivan kokoisiksi paloiksi.",
            "Kuullota valkosipuli ja inkivääri seesamiöljyssä.",
            "Lisää goldengreen ja paista kunnes rapeaa.",
            "Lisää vihannekset ja wokkaa nopeasti korkealla lämmöllä.",
            "Mausta soijakastikkeella.",
            "Tarjoile heti."
        ]
    },
    {
        id: 4,
        title: "Mapo tofu",
        description: "15 minuuttia ja riisi",
        ingredientAmounts: [
            "200g jauheliha",
            "400g tofu",
            "valkosipuli",
            "inkivääri",
            "1rkl doubanjang",
            "2rkl mirin",
            "1rkl osterikastike",
            "1rkl soijakastike",
            "1tl perunajauho",
            "vettä"
        ],
        categories: ["pääruoka", "aasialainen"],
        image: "https://www.marionskitchen.com/wp-content/uploads/2019/08/Mapo-Tofu4-1200x1500.jpg",
        instructions: [
            "Ruskista jauheliha ja lisää mausteet",
            "Hauduta keskilämmöllä ja lisää tofu",
            "Keitä riisi."
        ]
    },
    {
        id: 5,
        title: "Omenapiirakka",
        description: "30 min",
        ingredientAmounts: [
            "3 muna",
            "2,5dl sokeri",
            "100g margariini",
            "1,5dl maito",
            "4,5dl vehnäjauho",
            "1,5tl leivinjauhe",
            "3-4 omena"
        ],
        categories: ["jälkiruoka", "leivonnainen"],
        image: "https://kotiliesi.fi/suklaapossu/wp-content/uploads/sites/12/2017/09/Mehev%C3%A4-omenapiirakka-683x1024.jpg",
        instructions: [
            "Pane uuni kuumenemaan 225 asteeseen ja vuoraa uunipelti leivinpaperilla.",
            "Kiehauta neste ja rasva.",
            "Vatkaa munat ja sokeri vaahdoksi.",
            "Lisää vaahtoon kuuma neste-rasvaseos ja jauhot, joihin on sekoitettu leivinjauhe.",
            "Kaada taikina pellille ja lisää pinnalle omenaviipaleet",
            "Paista 225°C:ssä 15-20 minuuttia.",
            "Anna jäähtyä ennen tarjoilua."
        ]
    },
    {
        id: 6,
        title: "Shanghai tacot",
        description: "2 henkilölle, 30 minuuttia",
        ingredientAmounts: [
            "4 sipuliparathaleipä",
            "200g proteiinia esim tofua tai kanaa",
            "Alfalfa silmusalaatti",
            "salaattisekoitus",
            "paahdettu sipulirouhe",
            "hoisinkastike",
            "majoneesi",
            "sriracha",
            "limemehu"
        ],
        categories: ["pääruoka", "aasialainen"],
        image: "https://images.deliveryhero.io/image/fd-po/Products/1046654425.jpg?width=%s",
        instructions: [
            "Ruskista proteiini pannulla.",
            "Paista parathaleipiä hetki pannulla niin että ne ovat kullanruskeita.",
            "Kasaa tacot: levitä leivälle majoneesia, hoisinkastiketta ja srirachaa, lisää salaatti, proteiini, silmusalaatti ja sipulirouhe.",
            "Purista vielä päälle limemehua ja halutessasi chiliä, sekä korianteria"
        ]
    },
    {
        id: 7,
        title: "Tteokbokki",
        description: "kahdelle, 20 minuuttia",
        ingredientAmounts: [
            "300g tteok",
            "100g juustoa",
            "1rkl gochuchang",
            "1rkl sokeri",
            "liemikuutio",
            "1rkl soijakastike"
        ],
        categories: ["pääruoka", "aasialainen"],
        image: "https://christieathome.com/wp-content/uploads/2021/11/Rose-Tteokbokki-14.jpg",
        instructions: [
            "Huuhdo tteok.",
            "Lisää pannulle vettä ja mausteet.",
            "Lisää tteok ja keitä kunnes kastike on halutun paksuista."
        ]
    },
    {
        id: 8,
        title: "Kaalilaatikko",
        description: "",
        ingredientAmounts: [
            "400g naudan jauhelihaa",
            "1,5dl puuroriisiä",
            "4 dl lihalientä",
            "kerä- tai varhaiskaalia",
            "0,5dl siirappia",
            "1tl suolaa",
            "1 sipuli",
            "1tl mustapippuria",
            "2dl kerma",
            "1rkl öljyä"
        ],
        categories: ["pääruoka"],
        image: "https://images.ctfassets.net/0yf82hjfqumz/JYrUMedqScWqqUQQ0esiU/91dbd6855cccff640e33278f7a58c09b/655df651-fade-561e-b6ee-39a010f1e869.jpg",
        instructions: [
            "Paista jauheliha pannulla.",
            "Lisää taco-mausteseos ja vettä ohjeen mukaan.",
            "Lämmitä tacokuoret uunissa tai mikroaaltouunissa.",
            "Pilko täytteet: salaatti, tomaatit, sipuli.",
            "Raasta juusto ja laita kermaviili pöytään.",
            "Täytä tacokuoret ja tarjoile."
        ]
    },
    {
        id: 9,
        title: "Matchavalkosuklaavadelmakeksit",
        description: "Vauvasuut voivat jättää matchan pois",
        ingredientAmounts: [
            "180g voi",
            "160g valkosuklaa",
            "90g fariinisokeri",
            "70g sokeri",
            "0,5rkl vaniljasokeri",
            "13g matchajauhe",
            "1 muna",
            "5g suola",
            "1tl leivinjauhe",
            "1rkl perunajauho",
            "275g vehnäjauho",
            "vadelma"
        ],
        categories: ["jälkiruoka", "leivonnainen"],
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
        instructions: [
            "Ruskista voi kattilassa matalalla lämmöllä samalla koko ajan sekoittaen.",
            "Pilko suklaa.",
            "Sekoita kulhossa fariinisokeri, sokeri, vaniljasokeri, matcha ja muna.",
            "Lisää joukkoon ruskistettu voi ja sekoita hyvin.",
            "Lisää joukkoon leivinjauhe, perunajauho ja suola.",
            "Lisää vehnäjauho vähän kerrallaan ja sekoita taikina tasaiseksi.",
            "Kääntele valkosuklaapalat taikinan joukkoon.",
            "Muotoile keksitaikinat litteiksi kiekoiksi leivinpaperin päälle pellille.",
            "Paina jokaisen keksin keskelle muutama vadelma.",
            "Paista 175-190 asteessa noin 12-14 minuuttia, kunnes keksit ovat saaneet hiukan väriä reunoihin.",
            "Anna jäähtyä ennen tarjoilua."
        ]
    },
    {
        id: 10,
        title: "Appelsiinikana",
        description: "",
        ingredientAmounts: [
            "2rkl soijakastike",
            "valkosipuli",
            "seesamiöljy",
            "1tl sipulijauhe",
            "mustapippuri",
            "5rkl soijakastike",
            "2rkl hunaja",
            "1dl appelsiinimehu",
            "2tl maissitärkkelys",
            "kana"
        ],
        categories: ["pääruoka"],
        image: "https://images.ctfassets.net/0yf82hjfqumz/JYrUMedqScWqqUQQ0esiU/91dbd6855cccff640e33278f7a58c09b/655df651-fade-561e-b6ee-39a010f1e869.jpg",
        instructions: [
            "Marinoi kana, keitä kastike.",
            "Pyörittele kanat maissitärkkelyksessä ja paista.",
            "Lisää kanat kastikkeen joukkoon."
        ]
    },
     {
        id: 11,
        title: "Teriyakikana",
        description: "20 min",
        ingredientAmounts: [
            "kananrinta",
            "1/2dl soijakastike",
            "1/2dl mirin",
            "parirkl sokeri",
            "1rkl valkosipuli",
            "1rkl inkivääri",
            "1rkl perunajauho"
        ],
        categories: ["pääruoka", "aasialainen"],
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,chicken-teriyaki.jpg",
        instructions: [
            "Paista kana pannulla.",
            "Lisää mausteet ja keitä kastike.",
            "Tarjoile riisin kanssa."
        ]
    },
    {
    id: 12,
    title: "Cola ribsit",
    description: "",
    ingredientAmounts: [
        "1kg porsaan kylkiluita rivinä",
        "2rkl ruokosokeria tai fariinisokeria",
        "1rkl paprikamaustetta/savupaprikaa",
        "1rkl mustapippuria",
        "1rkl suolaa",
        "1rkl chilijauhetta",
        "1rkl valkosipulijauhetta",
        "1rkl sipulijauhetta",
        "1tl cayennepippuria",
        "1l pullo Coca Colaa",
        "1l omenamehua"
    ],
    categories: ["pääruoka"],
    image: "https://www.parastapoytaan.fi/assets/recipes/shutterstock-1125576632-scaled-e0898afa.webp",
    instructions: [
        "Hieroi mausteseos ribseille ja anna maustua jääkaapissa muutama tunti, mieluiten yön yli.",
        "Hauduta ribsit Coca Colassa ja omenamehussa miedolla lämmöllä kunnes liha on mureaa.",
        "Viimeistele grillaamalla ja sivele glaseerauskastikkeella ennen tarjoilua."
    ]
},
    {
        id: 13,
        title: "Omenastruudeli",
        description: "noin 40 minuuttia",
        ingredientAmounts: [
            "1 lehtitaikinalevy",
            "2-3 omenaa",
            "200g kinuskikreemiä",
            "1 tl kanelia",
            "voisulaa (pinnalle)",
            "tomusokeria (pinnalle)"
        ],
        categories: ["jälkiruoka", "leivonnainen"],
        image: "https://images.unsplash.com/photo-1599599810694-b0e8bfb1f0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        instructions: [
            "1. Kauli sulanut lehtitaikina hieman ohuemmaksi ja lämmitä uuni 200 asteeseen.",
            "2. Poista omenista siemenkodat ja kuutioi ne. Yhdistä omenakuutiot kinuskikreemin ja kanelin kanssa ja sekoita hyvin.",
            "3. Levitä omenatäyte tasaisesti lehtitaikinalevyn päälle. Rullaa taikina kääretortun tyyliin. Sivele taikinan pinta voisulalla ja paista uunissa noin 20 minuuttia.",
            "4. Kun struudeli on valmis, ripottele sen päälle tomusokeria. Tarjoile struudeli esimerkiksi vaniljajäätelön tai -kastikkeen kera.",
            "Anna jäähtyä hieman ennen tarjoilua."
        ]
    },
    {
        id: 14,
        title: "Vadelma-valkosuklaakakku",
        description: "noin 60 minuuttia",
        ingredientAmounts: [
            "0,75 dl rypsiöljyä",
            "2 kananmunaa",
            "1,5 dl maustamatonta jogurttia",
            "1,5 dl sokeria",
            "0,75 dl fariinisokeria",
            "2,75 dl vehnäjauhoja",
            "0,75 dl tummaa kaakaojauhetta",
            "1 tl ruokasoodaa",
            "1 tl leivinjauhetta",
            "Ripaus suolaa",
            "1,25 dl kuumaa vettä",
            "250 g pakastevadelmia",
            "1-2 rkl sokeria (vadelmatäytteeseen)",
            "1,5 tl perunajauhoja",
            "150 g valkosuklaata",
            "0,5 dl vispikermaa",
            "400 g maustamatonta tuorejuustoa",
            "50 g ranskankermaa",
            "0,5 dl tomusokeria",
            "tuoreita vadelmia koristeeksi"
        ],
        categories: ["jälkiruoka", "leivonnainen"],
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        instructions: [
            "Valmista kakkupohja: sekoita öljy, kananmunat ja jogurtti keskenään. Sekoita kuivat aineet erikseen ja lisää märkien aineiden joukkoon (älä sekoita liikaa). Lisää lopuksi kuuma vesi. Jaa taikina kahteen osaan, toinen jää tummanruskeaksi ja toinen saadaan valkeammaksi vähemmällä kaakaojauholla.",
            "Kaada taikinayhdistelmät uunivuokaan leivinpaperin kanssa ja paista 175 asteessa noin 20-25 minuuttia kunnes paistot ovat kypsiä.",
            "Valmista vadelmatäyte: kuumenna vadelmat ja sokeri kattilassa kunnes pehmenevät. Sekoita perunajauho pieneen tilkkaan vettä ja lisää varovasti sekoittaen kunnes seos jähmettyy hieman. Jätä jäähtymään.",
            "Valmista valkosuklaatäyte: sulata valkosuklaa vesihauteessa ja jätä hetkiseksi jäähtymään. Vatkaa kerma löysäksi vaahdoksi, lisää tuorejuusto, ranskankerma ja tomusokeri, sekoita tasaiseksi. Lisää jäähtynyt valkosuklaa varovasti sekoittaen.",
            "Kokoa kakku: kostuta paistopohja halutessasi. Levitä puolet valkosuklaatäytteestä ensimmäisen pohjan päälle, lisää puolet vadelmista. Aseta toinen pohja ja toista. Koristele tuoreilla vadelmoilla ja halutessa valkosuklaarasteella."
        ]
    }
];

// DOM-elementit (valitut elementit voivat puuttua; käsitellään turvallisesti)
const recipeContainer = document.getElementById('recipe-container');
const groceryList = document.getElementById('grocery-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearListBtn = document.getElementById('clear-list-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

// Nykyinen suodatin
let currentFilter = 'kaikki';
let currentSearch = '';

// Helper: jäsentää ainesosan määrän ja nimen
function parseIngredient(str) {
    const raw = (str || '').trim();
    if (!raw) return { name: '', amount: '', raw: '' };
    const tokens = raw.split(/\s+/);
    // jos ensimmäinen token sisältää numeron, pidetään se määränä
    if (/\d/.test(tokens[0])) {
        const amount = tokens.shift();
        const name = tokens.join(' ');
        return { name: name || amount, amount, raw };
    }
    // ei määrä-alkua
    return { name: raw, amount: '', raw };
}

// Lataa ostoslista localStoragesta ja normalisoi formaatti (voi sisältää vanhaa string-formaattia)
function loadGroceryFromStorage() {
    const data = JSON.parse(localStorage.getItem('groceryList')) || [];
    if (data.length === 0) return [];
    if (typeof data[0] === 'string') {
        return data.map(s => parseIngredient(s));
    }
    // Oletetaan että objektimuodossa on name/amount/raw
    return data.map(item => ({ name: item.name || item.raw || '', amount: item.amount || '', raw: item.raw || (item.name + (item.amount ? ' - ' + item.amount : '')) }));
}

function saveGroceryToStorage(list) {
    localStorage.setItem('groceryList', JSON.stringify(list));
}

// Alusta sovellus
function init() {
    displayRecipes(recipes);
    displayGroceryList();

    // Tapahtumakuuntelijat vain jos elementit löytyvät
    if (searchBtn) searchBtn.addEventListener('click', handleSearch);
    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                handleSearch();
            }
        });
    }
    if (clearListBtn) clearListBtn.addEventListener('click', clearGroceryList);

    // Suodatinpainikkeet
    if (filterBtns && filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.getAttribute('data-category');
                applyFilters();
            });
        });
    }

    // ESC-näppäin sulkee modalin
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modal = document.getElementById('recipe-modal');
            if (modal) modal.style.display = 'none';
        }
    });
}

// Näytä reseptit ruudukossa
function displayRecipes(recipesToShow) {
    if (!recipeContainer) {
        console.warn('Puuttuu #recipe-container — reseptit eivät näy.');
        return;
    }
    recipeContainer.innerHTML = '';

    if (!recipesToShow || recipesToShow.length === 0) {
        recipeContainer.innerHTML = '<p class="empty-list">Reseptejä ei löytynyt. Kokeile toista hakusanaa tai suodatinta.</p>';
        return;
    }

    recipesToShow.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        recipeCard.innerHTML = `
            <div class="recipe-image" style="background-image: url('${recipe.image}')"></div>
            <div class="recipe-category">${recipe.categories.map(cat => getCategoryName(cat)).join(', ')}</div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <button class="add-to-list-btn" data-id="${recipe.id}">Lisää ostoslistaan</button>
                <button class="show-instructions-btn" data-id="${recipe.id}">Näytä ohje</button>
            </div>
        `;

        recipeContainer.appendChild(recipeCard);
    });

    // Lisää tapahtumakuuntelijat "Lisää ostoslistaan" -painikkeisiin
    document.querySelectorAll('.add-to-list-btn').forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = parseInt(this.getAttribute('data-id'));
            addRecipeToGroceryList(recipeId);
        });
    });

    // Lisää tapahtumakuuntelijat ohjenappeihin
    document.querySelectorAll('.show-instructions-btn').forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = parseInt(this.getAttribute('data-id'));
            showRecipeInstructions(recipeId);
        });
    });
}

// Kategorian nimi suomeksi
function getCategoryName(category) {
    const categories = {
        'pääruoka': 'Pääruoka',
        'jälkiruoka': 'Jälkiruoka',
        'kasvisruoka': 'Kasvisruoka',
        'alkupala': 'Alkupala',
        'leivonnainen': 'Leivonnainen',
        'aasialainen': 'Aasialainen'
    };
    return categories[category] || category;
}

// Käsittele hakutoiminto
function handleSearch() {
    if (!searchInput) return;
    currentSearch = searchInput.value.toLowerCase().trim();
    applyFilters();
}

// Käytä suodattimia
function applyFilters() {
    let filteredRecipes = recipes.slice();

    // Tekstihaku
    if (currentSearch) {
        filteredRecipes = filteredRecipes.filter(recipe => 
            (recipe.title || '').toLowerCase().includes(currentSearch) ||
            (recipe.description || '').toLowerCase().includes(currentSearch) ||
            (Array.isArray(recipe.ingredientAmounts) && recipe.ingredientAmounts.some(ingredient => 
                ingredient.toLowerCase().includes(currentSearch)
            ))
        );
    }

    // Kategoriasuodatin
    if (currentFilter !== 'kaikki') {
        filteredRecipes = filteredRecipes.filter(recipe => 
            Array.isArray(recipe.categories) && recipe.categories.includes(currentFilter)
        );
    }

    displayRecipes(filteredRecipes);
}

// Näytä reseptin ohjeet
function showRecipeInstructions(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const modal = document.getElementById('recipe-modal');
    const modalContent = document.getElementById('modal-recipe-content');

    // Jos modal ei ole määritelty, näytetään yksinkertainen alert-teksti varalta
    if (!modal || !modalContent) {
        let text = recipe.title + "\n\nAinekset:\n" + (recipe.ingredientAmounts || []).join('\n') + "\n\nOhjeet:\n" + (recipe.instructions || []).join('\n');
        alert(text);
        return;
    }

    // Luo ohjesisältö
    modalContent.innerHTML = `
        <h2>${recipe.title}</h2>
        <div class="modal-recipe-image" style="background-image: url('${recipe.image}')"></div>
        
        <div class="ingredients-with-amounts">
            <h4>Ainekset:</h4>
            <ul class="amount-list">
                ${ (recipe.ingredientAmounts || []).map(amount => `<li>${amount}</li>`).join('') }
            </ul>
        </div>
        
        <div class="recipe-instructions">
            <h3>Valmistusohje:</h3>
            <ol class="instruction-steps">
                ${ (recipe.instructions || []).map(instruction => `
                    <li class="instruction-step">${instruction}</li>
                `).join('') }
            </ol>
        </div>
    `;

    // Näytä modal
    modal.style.display = 'block';

    // Sulje modal klikkaamalla x-painiketta
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) closeBtn.onclick = function() { modal.style.display = 'none'; };

    // Sulje modal klikkaamalla taustaa
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}

// Lisää reseptin ainekset ostoslistaan
function addRecipeToGroceryList(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    // Hae nykyinen ostoslista localStorage:sta (objektit)
    let currentList = loadGroceryFromStorage();

    recipe.ingredientAmounts.forEach(ingredientWithAmount => {
        const parsed = parseIngredient(ingredientWithAmount);
        const newName = parsed.name.trim().toLowerCase();

        const existingIndex = currentList.findIndex(item => (item.name || '').trim().toLowerCase() === newName);
        if (existingIndex === -1) {
            currentList.push(parsed);
        } else {
            // yhdistetään määrät ja raw
            const existing = currentList[existingIndex];
            const combinedAmount = [existing.amount, parsed.amount].filter(Boolean).join(' + ');
            const combinedRaw = [existing.raw, parsed.raw].filter(Boolean).join(' + ');
            currentList[existingIndex] = { name: existing.name || parsed.name, amount: combinedAmount, raw: combinedRaw };
        }
    });

    saveGroceryToStorage(currentList);
    displayGroceryList();

    alert(`Reseptin "${recipe.title}" ainekset lisätty ostoslistaasi!`);
}

// Näytä ostoslista
function displayGroceryList() {
    const groceryItems = loadGroceryFromStorage();

    if (!groceryList) {
        console.warn('Puuttuu #grocery-list — ostoslista ei näy.');
        return;
    }

    if (groceryItems.length === 0) {
        groceryList.innerHTML = '<li class="empty-list">Ostoslistasi on tyhjä. Lisää aineksia resepteistä!</li>';
        return;
    }

    groceryList.innerHTML = '';
    groceryItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'grocery-item';

        const name = item.name || item.raw || '';
        const amount = item.amount || '';

        listItem.innerHTML = `
            <div class="grocery-item-content">
                <div class="grocery-item-name">${name}</div>
                ${amount ? `<div class="grocery-item-amount">${amount}</div>` : ''}
            </div>
            <button class="delete-btn" data-index="${index}">Poista</button>
        `;
        groceryList.appendChild(listItem);
    });

    // Lisää tapahtumakuuntelijat poista-painikkeisiin
    groceryList.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            removeFromGroceryList(index);
        });
    });
}

// Poista tuote ostoslistalta
function removeFromGroceryList(index) {
    let groceryItems = loadGroceryFromStorage();

    if (index >= 0 && index < groceryItems.length) {
        groceryItems.splice(index, 1);
        saveGroceryToStorage(groceryItems);
        displayGroceryList();
    }
}

// Tyhjennä koko ostoslista
function clearGroceryList() {
    if (confirm('Haluatko varmasti tyhjentää koko ostoslistan?')) {
        localStorage.removeItem('groceryList');
        displayGroceryList();
    }
}

// Alusta sovellus
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
