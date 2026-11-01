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
            "400 g jauheliha",
            "1,5 dl puuroriisi",
            "5 dl vesi",
            "1 kg kerä- tai varhaiskaali",
            "0,5 dl siirappi",
            "1 tl suola",
            "mausteita",
            "1rkl öljy"
        ],
        categories: ["pääruoka"],
        image: "https://images.ctfassets.net/0yf82hjfqumz/JYrUMedqScWqqUQQ0esiU/91dbd6855cccff640e33278f7a58c09b/655df651-fade-561e-b6ee-39a010f1e869.jpg",
        instructions: [
            "Silppua kaali. Kannan kovimman osan voi jättää pois.",
            "Kuumenna vesi laakeassa kattilassa. Lisää suola ja kaalit. Sekoittele silloin tällöin. Anna kiehua puolisen tuntia.",
            "Ruskista jauheliha. Lisää mausteet.",
            "Voitele iso uunivuoka. Ripottele vuoan pohjalle riisit ja kaada kaaliseos liemineen vuokaan. Lisää vuoan pinnalle siirappi.",
            "Kypsennä 200 asteessa alimmalla tasolla noin 50 minuuttia. Tarjoa puolukkahillon kanssa."
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
        image: "images/Näyttökuva 2026-10-20 205043.png",
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
            "Pohja:",
            "0,75dl rypsiöljyä",
            "2 kananmunaa",
            "1,5dl maustamatonta jogurttia",
            "1,5dl sokeria",
            "0,75dl fariinisokeria",
            "2,75dl vehnäjauhoja",
            "0,75dl tummaa kaakaojauhetta",
            "1tl ruokasoodaa",
            "1tl leivinjauhetta",
            "Ripaus suolaa",
            "1,25dl kuumaa vettä",
            "Vadelmatäyte:",
            "250g pakastevadelmia",
            "1-2rkl sokeria (vadelmatäytteeseen)",
            "1,5tl perunajauhoja",
            "Valkosuklaatäyte:",
            "150g valkosuklaata",
            "1,5dl vispikermaa",
            "200g maustamatonta tuorejuustoa",
            "100g ranskankermaa",
            "0,5dl tomusokeria",
            "tuoreita vadelmia koristeeksi"
        ],
        categories: ["jälkiruoka", "leivonnainen"],
        image: "images/20260917_122339.jpg",
        instructions: [
            "Valmista kakkupohja: sekoita öljy, kananmunat ja jogurtti keskenään. Sekoita kuivat aineet erikseen ja lisää märkien aineiden joukkoon (älä sekoita liikaa). Lisää lopuksi joukkoon kuuma vesi.",
            "Kaada taikinayhdistelmät uunivuokaan leivinpaperin kanssa ja paista 175 asteessa noin 20-25 minuuttia kunnes paistot ovat kypsiä.",
            "Valmista vadelmatäyte: kuumenna vadelmat ja sokeri kattilassa kunnes pehmenevät. Sekoita perunajauho pieneen tilkkaan vettä ja lisää varovasti sekoittaen kunnes seos jähmettyy. Ota pois liedeltä ja anna jäähtyä.",
            "Valmista valkosuklaatäyte: sulata valkosuklaa vesihauteessa ja jätä hetkeksi jäähtymään. Vatkaa kerma löysäksi vaahdoksi, lisää tuorejuusto, ranskankerma ja tomusokeri, vatkaa keskenään.",
            "Kokoa kakku: kostuta paistopohja halutessasi. Levitä puolet valkosuklaatäytteestä ensimmäisen pohjan päälle, lisää puolet vadelmista. Aseta toinen pohja ja toista. Koristele tuoreilla vadelmilla ja suklaarouheella."
        ]
    },
    {
        id: 15,
        title: "Misokeitto",
        description: "15 minuuttia",
        ingredientAmounts: [
            "1l vettä",
            "1pala kombu-merilevää (10 × 10 cm)",
            "1–1½tl dashijauhetta",
            "300g pehmeää tofua kuutioituna",
            "4rkl misotahnaa",
            "Kevätsipulia"
        ],
        categories: ["aasialainen"],
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
        instructions: [
            "Liota pesemätöntä kombua kylmässä vedessä 20–30 minuuttia.",
            "Kuumenna hitaasti ja nosta kombu pois juuri ennen kiehumista.",
            "Lisää dashijauhe ja tofu, ja hauduta 2 minuuttia.",
            "Ota kattila pois liedeltä. Liuota miso keittoon siivilän läpi.",
            "Älä anna keiton kiehua enää misen lisäämisen jälkeen.",
            "Koristele kevätsipulilla."
        ]
    },
    {
        id: 16,
        title: "Rahkamurupiirakka",
        description: "1 h",
        ingredientAmounts: [
            "5 dl vehnäjauho",
            "2,5 dl sokeri",
            "1 tl leivinjauhe",
            "1 tl ruokasooda",
            "1 tl vaniljasokeri",
            "1 dl rasva",
            "1 dl piimä",
            "1 kananmuna",
            "marjat tai hedelmät",
            "Täyte:",
            "150 g rahka",
            "1,25 dl sokeri",
            "1 kananmuna",
            "1 tl vaniljasokeri",
            "0,3 dl sitruunanmehu"
        ],
        categories: ["jälkiruoka", "leivonnainen"],
        image: "images/20261028_122432.jpg",
        instructions: [
            "Sekoita kuivat aineet kulhossa.",
            "Lisää joukkoon rasva ja sekoita murumaiseksi.",
            "Jaa taikina kahteen osaan ja lisää piimä ja kananmuna. Tästä tulee pohja.",
            "Tee täyte ja lisää täyte pohjan päälle, lisää myös marjat/hedelmät ja muruseos päälle, paista 200 asteessa 35-40min alatasolla."
        ]
    },
    {
        id: 17,
        title: "Uusi jälkiruoka",
        description: "15–20 minuuttia",
        ingredientAmounts: [
            "2 kananmunaa",
            "1 dl maitoa",
            "2 rkl sokeria",
            "1 tl vaniljasokeria",
            "jauhoja",
            "maustetta"
        ],
        categories: ["jälkiruoka", "leivonnainen"],
        image: "https://via.placeholder.com/600x400?text=Uusi+j%C3%A4lkiruoka",
        instructions: [
            "Sekoita ainekset.",
            "Paista tai kypsennä uunissa.",
            "Anna jäähtyä ja tarjoile."
        ]
    },
    {
        id: 18,
        title: "Uusi salaatti",
        description: "10 minuuttia",
        ingredientAmounts: [
            "1 salaattia",
            "1 kurkku",
            "1 tomaatti",
            "1 dl oliiveja",
            "kastike",
            "mausteet"
        ],
        categories: ["alkupala"],
        image: "https://via.placeholder.com/600x400?text=Uusi+salaatti",
        instructions: [
            "Leikkaa kasvikset.",
            "Sekoita kulhossa.",
            "Lisää kastike ja mausteet.",
            "Tarjoile heti."
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

function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function normalizeIngredientEntry(entry) {
    if (entry && typeof entry === 'object' && !Array.isArray(entry)) {
        if (entry.type === 'section' || entry.section || entry.label || entry.title) {
            return {
                type: 'section',
                label: (entry.label || entry.title || entry.name || '').trim()
            };
        }

        const raw = (entry.raw || [entry.amount, entry.name].filter(Boolean).join(' ')).trim();
        return {
            type: 'ingredient',
            value: raw
        };
    }

    const text = String(entry || '').trim();
    if (!text) {
        return { type: 'ingredient', value: '' };
    }

    if (text.endsWith(':') || /^\[(.*)\]$/.test(text) || /^\{(.*)\}$/.test(text)) {
        return {
            type: 'section',
            label: text.replace(/^\[|\]$|^\{|\}$|:$/g, '').trim()
        };
    }

    if (/^\s*(täyte|kastike|pohja|kuorrute|täytteet|kastikkeet|marinadi|mausteseos|liemi|muroseos|muru)\s*:?\s*$/i.test(text)) {
        return {
            type: 'section',
            label: text.replace(/:$/, '').trim()
        };
    }

    return { type: 'ingredient', value: text };
}

function isIngredientSection(entry) {
    return normalizeIngredientEntry(entry).type === 'section';
}

// Helper: jäsentää ainesosan määrän ja nimen
function parseIngredient(str) {
    const normalized = normalizeIngredientEntry(str);
    if (normalized.type === 'section') {
        return { name: '', amount: '', raw: '' };
    }

    const raw = (normalized.value || '').trim();
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

        // Jos image sisältää placeholder-merkinnän kuten "%s", korvataan se vakioarvolla
        const rawImage = recipe.image || '';
        const imageSrc = rawImage.includes('%s') ? rawImage.replace('%s', '600') : rawImage || 'https://via.placeholder.com/600x400?text=No+Image';

        recipeCard.innerHTML = `
            <div class="recipe-image-wrapper">
                <img class="recipe-image" src="${imageSrc}" alt="${recipe.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/600x400?text=No+Image';" />
            </div>
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
            (Array.isArray(recipe.ingredientAmounts) && recipe.ingredientAmounts.some(ingredient => {
                const normalized = normalizeIngredientEntry(ingredient);
                const target = normalized.type === 'section' ? normalized.label : normalized.value;
                return (target || '').toLowerCase().includes(currentSearch);
            }))
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
        const visibleIngredients = (recipe.ingredientAmounts || [])
            .filter(item => !isIngredientSection(item))
            .map(item => normalizeIngredientEntry(item).value)
            .join('\n');

        let text = recipe.title + "\n\nAinekset:\n" + visibleIngredients + "\n\nOhjeet:\n" + (recipe.instructions || []).join('\n');
        alert(text);
        return;
    }

    // Valmistele kuvalähde ja korvaa mahdollinen "%s"
    const rawImage = recipe.image || '';
    const imageSrc = rawImage.includes('%s') ? rawImage.replace('%s', '900') : rawImage || 'https://via.placeholder.com/900x600?text=No+Image';

    // Luo ohjesisältö
    modalContent.innerHTML = `
        <h2>${escapeHtml(recipe.title)}</h2>
        <div class="modal-recipe-image-wrapper">
            <img class="modal-recipe-image" src="${imageSrc}" alt="${escapeHtml(recipe.title)}" onerror="this.onerror=null;this.src='https://via.placeholder.com/900x600?text=No+Image';" />
        </div>
        
        <div class="ingredients-with-amounts">
            <h4>Ainekset:</h4>
            <ul class="amount-list">
                ${ (recipe.ingredientAmounts || []).map(entry => {
                    const normalized = normalizeIngredientEntry(entry);
                    if (normalized.type === 'section') {
                        return `<li class="ingredient-section"><strong>${escapeHtml(normalized.label)}</strong></li>`;
                    }
                    return `<li>${escapeHtml(normalized.value)}</li>`;
                }).join('') }
            </ul>
        </div>
        
        <div class="recipe-instructions">
            <h3>Valmistusohje:</h3>
            <ol class="instruction-steps">
                ${ (recipe.instructions || []).map(instruction => `
                    <li class="instruction-step">${escapeHtml(instruction)}</li>
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

    recipe.ingredientAmounts.forEach(entry => {
        const normalized = normalizeIngredientEntry(entry);
        if (normalized.type === 'section') return;

        const parsed = parseIngredient(normalized.value);
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
