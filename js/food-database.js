/* ══════════════════════════════════════
   tayyibatfood.com — Food Database & Lookup
   ══════════════════════════════════════ */

const FOODS = [
  // ── GRAINS & STARCHES (مسموح) ──
  {id:"rice",name_ar:"الأرز",name_en:"Rice",cat:"grains",status:"allowed",note_ar:"مسموح بجميع أنواعه وأشكاله",note_en:"All types allowed",aliases:["رز","ارز","rice","basmati"]},
  {id:"wheat",name_ar:"القمح",name_en:"Wheat",cat:"grains",status:"allowed",note_ar:"برغل، بليلة، فريكة",note_en:"Bulgur, freekeh, whole wheat",aliases:["قمح","برغل","فريكة","بليلة","wheat","bulgur"]},
  {id:"potato",name_ar:"البطاطس",name_en:"Potatoes",cat:"grains",status:"allowed",note_ar:"مسلوقة أو مشوية",note_en:"Boiled or roasted preferred",aliases:["بطاطس","بطاطا","potato","potatoes"]},
  {id:"corn",name_ar:"الذرة",name_en:"Corn",cat:"grains",status:"allowed",note_ar:"مسموح بجميع أشكاله",note_en:"All forms allowed",aliases:["ذرة","corn","فشار","popcorn"]},
  {id:"oats",name_ar:"الشوفان",name_en:"Oats",cat:"grains",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["شوفان","oats"]},
  {id:"pasta",name_ar:"المكرونة",name_en:"Pasta",cat:"grains",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["مكرونة","باستا","pasta","spaghetti","معكرونة"]},

  // ── BREAD (مسموح بشروط) ──
  {id:"wholebread",name_ar:"توست كامل الحبة بالردة",name_en:"Whole grain bread with bran",cat:"bread",status:"allowed",note_ar:"مثل ريتشي بيك كامل الحبة بالردة",note_en:"Like Rich Bake whole grain with bran",aliases:["توست","خبز اسمر","whole bread","brown bread"]},
  {id:"whitebread",name_ar:"الخبز الأبيض",name_en:"White bread",cat:"bread",status:"restricted",note_ar:"الدقيق الأبيض المكرر ممنوع",note_en:"Refined white flour is restricted",alt_ar:"توست كامل الحبة بالردة",alt_en:"Whole grain bread with bran",aliases:["خبز ابيض","عيش","فينو","white bread","عيش فينو"]},
  {id:"pastries",name_ar:"المخبوزات والمعجنات",name_en:"Pastries & baked goods",cat:"bread",status:"restricted",note_ar:"الكرواسون، الدونات، الكيك — ممنوع",note_en:"Croissants, donuts, cake — restricted",alt_ar:"توست بالعسل",alt_en:"Whole toast with honey",aliases:["كرواسون","دونات","كيك","croissant","donut","cake","معجنات"]},

  // ── SUGARS & SWEETS ──
  {id:"honey",name_ar:"العسل",name_en:"Honey",cat:"sugars",status:"allowed",note_ar:"مسموح ومُشجع — مصدر طاقة أساسي",note_en:"Allowed and encouraged — primary energy source",aliases:["عسل","نحل","honey"]},
  {id:"sugar_white",name_ar:"السكر الأبيض",name_en:"White sugar",cat:"sugars",status:"allowed",note_ar:"مسموح — خلافاً للأنظمة الأخرى",note_en:"Allowed — unlike other diet systems",aliases:["سكر","sugar"]},
  {id:"molasses",name_ar:"العسل الأسود",name_en:"Molasses",cat:"sugars",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["عسل اسود","molasses"]},
  {id:"jam",name_ar:"المربى",name_en:"Jam",cat:"sugars",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["مربى","jam","مربة"]},
  {id:"chips",name_ar:"الشيبسي",name_en:"Chips/Crisps",cat:"sugars",status:"allowed",note_ar:"مسموح — خلافاً للتوقعات",note_en:"Allowed — surprisingly",aliases:["شيبسي","chips","crisps","بطاطس شيبسي"]},
  {id:"artificial_sweet",name_ar:"السكر المصنع (سويتال)",name_en:"Artificial sweeteners",cat:"sugars",status:"restricted",note_ar:"سويتال وما شابه — ممنوع",note_en:"Sweetex and similar — restricted",alt_ar:"سكر أبيض أو عسل",alt_en:"White sugar or honey",aliases:["سويتال","sweetener","دايت","sugar free"]},

  // ── FATS & OILS ──
  {id:"ghee",name_ar:"السمن البلدي",name_en:"Ghee (clarified butter)",cat:"fats",status:"allowed",note_ar:"مسموح ومُشجع — دهن طبيعي",note_en:"Allowed and encouraged — natural fat",aliases:["سمن","سمنة","ghee","سمن بلدي"]},
  {id:"olive_oil",name_ar:"زيت الزيتون",name_en:"Olive oil",cat:"fats",status:"allowed",note_ar:"مسموح — من أفضل الزيوت",note_en:"Allowed — one of the best oils",aliases:["زيت زيتون","olive oil","زيتون"]},
  {id:"coconut_oil",name_ar:"زيت جوز الهند",name_en:"Coconut oil",cat:"fats",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["زيت جوز الهند","coconut oil"]},
  {id:"butter",name_ar:"الزبدة",name_en:"Butter",cat:"fats",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["زبدة","زبد","butter"]},
  {id:"veg_oils",name_ar:"الزيوت النباتية المصنعة",name_en:"Processed vegetable oils",cat:"fats",status:"restricted",note_ar:"زيت الصويا وزيت الذرة المكرر — ممنوع",note_en:"Soybean oil, refined corn oil — restricted",alt_ar:"زيت زيتون أو سمن بلدي",alt_en:"Olive oil or ghee",aliases:["زيت صويا","زيت ذرة","soybean oil","vegetable oil"]},

  // ── DAIRY & EGGS ──
  {id:"processed_cheese",name_ar:"الجبن المطبوخ",name_en:"Processed cheese",cat:"dairy",status:"allowed",note_ar:"مثلثات، كوبات — مسموح",note_en:"Triangles, cups — allowed",aliases:["جبنة مطبوخة","مثلثات","processed cheese","جبنة نستو"]},
  {id:"cheddar",name_ar:"جبنة شيدر",name_en:"Cheddar cheese",cat:"dairy",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["شيدر","cheddar"]},
  {id:"white_cheese",name_ar:"الجبنة البيضاء",name_en:"White cheese",cat:"dairy",status:"restricted",note_ar:"كل الأجبان البيضاء ممنوعة",note_en:"All white cheeses restricted",alt_ar:"جبنة شيدر أو جبنة مطبوخة",alt_en:"Cheddar or processed cheese",aliases:["جبنة بيضاء","جبنة قريش","فيتا","white cheese","feta","قريش"]},
  {id:"milk",name_ar:"اللبن / الحليب",name_en:"Milk",cat:"dairy",status:"restricted",note_ar:"كل الألبان ممنوعة",note_en:"All dairy milk restricted",alt_ar:"عصير طبيعي أو ماء",alt_en:"Natural juice or water",aliases:["لبن","حليب","milk","لبن رايب"]},
  {id:"yogurt",name_ar:"الزبادي",name_en:"Yogurt",cat:"dairy",status:"restricted",note_ar:"ممنوع",note_en:"Restricted",alt_ar:"لا يوجد بديل مباشر",alt_en:"No direct alternative",aliases:["زبادي","يوجرت","yogurt","yoghurt","روب"]},
  {id:"eggs",name_ar:"البيض",name_en:"Eggs",cat:"dairy",status:"restricted",note_ar:"ممنوع — بنية جنينية كاملة",note_en:"Restricted — complete embryonic structure",alt_ar:"جبنة شيدر أو جبنة مطبوخة",alt_en:"Cheddar or processed cheese",aliases:["بيض","بيضة","eggs","egg"]},
  {id:"kiri",name_ar:"جبنة كيري",name_en:"Kiri cheese",cat:"dairy",status:"restricted",note_ar:"ممنوع مع لبنيتا وطعمة والولد",note_en:"Restricted along with La Vache Qui Rit spreads",alt_ar:"جبنة مطبوخة (مثلثات)",alt_en:"Processed cheese (triangles)",aliases:["كيري","kiri","لبنيتا","طعمة"]},

  // ── MEAT & POULTRY ──
  {id:"beef",name_ar:"لحم البقر",name_en:"Beef",cat:"meat",status:"allowed",note_ar:"مسموح — مرة في الأسبوع تقريباً",note_en:"Allowed — about once per week",aliases:["لحم بقر","لحمة","beef","steak"]},
  {id:"lamb",name_ar:"لحم الضأن",name_en:"Lamb",cat:"meat",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["لحم ضأن","لحم غنم","خروف","lamb"]},
  {id:"camel",name_ar:"لحم الجمل",name_en:"Camel meat",cat:"meat",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["لحم جمل","camel"]},
  {id:"liver",name_ar:"الكبدة",name_en:"Liver",cat:"meat",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["كبدة","كبد","liver"]},
  {id:"chicken",name_ar:"الدجاج / الفراخ",name_en:"Chicken",cat:"meat",status:"restricted",note_ar:"لحوم الدواجن وأي طائر لا يطير — ممنوع",note_en:"Poultry and flightless birds — restricted",alt_ar:"لحم بقر أو سمك",alt_en:"Beef or fish",aliases:["فراخ","دجاج","فرخة","chicken","دواجن","poultry"]},
  {id:"duck",name_ar:"البط",name_en:"Duck",cat:"meat",status:"restricted",note_ar:"ممنوع — طائر لا يطير",note_en:"Restricted — flightless bird",alt_ar:"لحم بقر أو ضأن",alt_en:"Beef or lamb",aliases:["بط","duck","وز"]},
  {id:"pigeon",name_ar:"الحمام",name_en:"Pigeon",cat:"meat",status:"allowed",note_ar:"مسموح — طائر يطير",note_en:"Allowed — flying bird",aliases:["حمام","pigeon"]},

  // ── SEAFOOD ──
  {id:"sea_fish",name_ar:"سمك البحر",name_en:"Sea fish",cat:"seafood",status:"allowed",note_ar:"أسماك البحر الطبيعية مسموحة",note_en:"Natural sea fish allowed",aliases:["سمك","سمكة","fish","بلطي بحر"]},
  {id:"farm_fish",name_ar:"سمك المزارع",name_en:"Farm fish",cat:"seafood",status:"restricted",note_ar:"ممنوع",note_en:"Restricted",alt_ar:"سمك بحر طبيعي",alt_en:"Natural sea fish",aliases:["سمك مزارع","farm fish","بلطي"]},
  {id:"shrimp",name_ar:"الجمبري",name_en:"Shrimp",cat:"seafood",status:"restricted",note_ar:"ممنوع",note_en:"Restricted",alt_ar:"سمك بحر",alt_en:"Sea fish",aliases:["جمبري","shrimp","قريدس"]},
  {id:"calamari",name_ar:"الكاليماري / السبيط",name_en:"Calamari / Squid",cat:"seafood",status:"restricted",note_ar:"ممنوع",note_en:"Restricted",alt_ar:"سمك بحر",alt_en:"Sea fish",aliases:["كاليماري","سبيط","squid","calamari"]},
  {id:"tuna",name_ar:"التونة",name_en:"Tuna",cat:"seafood",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["تونة","تونا","tuna"]},

  // ── VEGETABLES ──
  {id:"cooked_veg",name_ar:"الخضروات المطبوخة",name_en:"Cooked vegetables",cat:"vegetables",status:"allowed",note_ar:"الخضروات المطبوخة مسموحة",note_en:"Cooked vegetables are allowed",aliases:["خضار مطبوخ","cooked vegetables"]},
  {id:"raw_veg",name_ar:"الخضروات النيئة (السلطة)",name_en:"Raw vegetables (Salad)",cat:"vegetables",status:"restricted",note_ar:"السلطة الخضراء النيئة ممنوعة",note_en:"Raw green salad restricted",alt_ar:"خضار مطبوخ",alt_en:"Cooked vegetables",aliases:["سلطة","سلطه","خس","خيار","salad","lettuce","raw"]},
  {id:"onion",name_ar:"البصل",name_en:"Onion",cat:"vegetables",status:"restricted",note_ar:"ممنوع — يعتبره النظام غير مناسب",note_en:"Restricted — considered unsuitable",alt_ar:"بهارات وتوابل",alt_en:"Spices and seasonings",aliases:["بصل","بصلة","onion","onions"]},
  {id:"garlic",name_ar:"الثوم",name_en:"Garlic",cat:"vegetables",status:"restricted",note_ar:"ممنوع",note_en:"Restricted",alt_ar:"بهارات أخرى",alt_en:"Other spices",aliases:["ثوم","garlic"]},
  {id:"tomato",name_ar:"الطماطم",name_en:"Tomato",cat:"vegetables",status:"allowed",note_ar:"مسموح — مطبوخة أفضل",note_en:"Allowed — cooked preferred",aliases:["طماطم","قوطة","tomato"]},
  {id:"orange_veg",name_ar:"الخضروات البرتقالية",name_en:"Orange vegetables",cat:"vegetables",status:"restricted",note_ar:"كل ما لونه برتقالي من الخضار — ممنوع",note_en:"All orange vegetables restricted",alt_ar:"خضروات مطبوخة أخرى",alt_en:"Other cooked vegetables",aliases:["جزر","carrot","قرع","يقطين","pumpkin","بطاطا حلوة","sweet potato"]},

  // ── FRUITS ──
  {id:"fruits",name_ar:"الفواكه",name_en:"Fruits",cat:"fruits",status:"allowed",note_ar:"مسموح — يُفضل بدون قشور أو بذور. عصير أو مربى أو مجففة",note_en:"Allowed — preferred without skin/seeds. As juice, jam, or dried",aliases:["فواكه","فاكهة","fruit","fruits"]},
  {id:"dates",name_ar:"التمر",name_en:"Dates",cat:"fruits",status:"allowed",note_ar:"مسموح ومُشجع",note_en:"Allowed and encouraged",aliases:["تمر","بلح","dates"]},
  {id:"orange_fruit",name_ar:"الفواكه البرتقالية",name_en:"Orange fruits",cat:"fruits",status:"restricted",note_ar:"كل ما لونه برتقالي — ممنوع",note_en:"All orange-colored fruits restricted",alt_ar:"فواكه أخرى",alt_en:"Other fruits",aliases:["برتقال","مانجو","مشمش","orange","mango","apricot"]},

  // ── BEVERAGES ──
  {id:"water",name_ar:"الماء",name_en:"Water",cat:"beverages",status:"allowed",note_ar:"أساسي — لكن ممنوع أثناء الأكل",note_en:"Essential — but not during meals",aliases:["ماء","مية","water"]},
  {id:"tea",name_ar:"الشاي",name_en:"Tea",cat:"beverages",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["شاي","tea","شاي اخضر"]},
  {id:"coffee",name_ar:"القهوة",name_en:"Coffee",cat:"beverages",status:"allowed",note_ar:"مسموح بدون لبن",note_en:"Allowed without milk",aliases:["قهوة","نسكافيه","coffee"]},
  {id:"juice",name_ar:"العصائر الطبيعية",name_en:"Natural juices",cat:"beverages",status:"allowed",note_ar:"مسموح",note_en:"Allowed",aliases:["عصير","juice","عصائر"]},
  {id:"soda",name_ar:"المشروبات الغازية",name_en:"Soda / soft drinks",cat:"beverages",status:"allowed",note_ar:"مسموح — خلافاً للأنظمة الأخرى",note_en:"Allowed — unlike other systems",aliases:["بيبسي","كوكاكولا","سفن اب","pepsi","cola","soda","sprite"]},

  // ── LEGUMES ──
  {id:"beans",name_ar:"البقوليات",name_en:"Legumes",cat:"legumes",status:"restricted",note_ar:"الفول واللوبيا والعدس — ممنوع أو محدود",note_en:"Beans, lentils — restricted or limited",alt_ar:"أرز أو بطاطس",alt_en:"Rice or potatoes",aliases:["فول","عدس","لوبيا","فاصوليا","حمص","beans","lentils","chickpeas","legumes"]},
];

const CATEGORIES = [
  {id:"all",name_ar:"الكل",name_en:"All",icon:"📋"},
  {id:"grains",name_ar:"النشويات",name_en:"Grains",icon:"🌾"},
  {id:"bread",name_ar:"الخبز",name_en:"Bread",icon:"🍞"},
  {id:"sugars",name_ar:"السكريات",name_en:"Sugars",icon:"🍯"},
  {id:"fats",name_ar:"الدهون",name_en:"Fats",icon:"🫒"},
  {id:"dairy",name_ar:"الألبان",name_en:"Dairy",icon:"🧀"},
  {id:"meat",name_ar:"اللحوم",name_en:"Meat",icon:"🥩"},
  {id:"seafood",name_ar:"البحريات",name_en:"Seafood",icon:"🐟"},
  {id:"vegetables",name_ar:"الخضروات",name_en:"Vegetables",icon:"🥬"},
  {id:"fruits",name_ar:"الفواكه",name_en:"Fruits",icon:"🍎"},
  {id:"beverages",name_ar:"المشروبات",name_en:"Drinks",icon:"🥤"},
  {id:"legumes",name_ar:"البقوليات",name_en:"Legumes",icon:"🫘"},
];

let currentLang = 'ar';
let currentCat = 'all';

function initLookup() {
  const searchInput = document.getElementById('food-search');
  const catContainer = document.getElementById('cat-filters');
  const resultsContainer = document.getElementById('results');

  if (!searchInput || !catContainer || !resultsContainer) return;

  // Render category buttons
  renderCategories(catContainer);

  // Search event
  searchInput.addEventListener('input', () => renderResults(resultsContainer, searchInput.value));

  // Initial render
  renderResults(resultsContainer, '');
}

function renderCategories(container) {
  container.innerHTML = CATEGORIES.map(cat => {
    const name = currentLang === 'ar' ? cat.name_ar : cat.name_en;
    return `<button class="cat-btn ${cat.id === currentCat ? 'active' : ''}" onclick="filterCat('${cat.id}')">${cat.icon} ${name}</button>`;
  }).join('');
}

function filterCat(catId) {
  currentCat = catId;
  const catContainer = document.getElementById('cat-filters');
  const resultsContainer = document.getElementById('results');
  const searchInput = document.getElementById('food-search');
  renderCategories(catContainer);
  renderResults(resultsContainer, searchInput.value);
}

function renderResults(container, query) {
  const q = query.trim().toLowerCase();

  let filtered = FOODS;

  if (currentCat !== 'all') {
    filtered = filtered.filter(f => f.cat === currentCat);
  }

  if (q.length > 0) {
    filtered = filtered.filter(f => {
      const searchable = [f.name_ar, f.name_en, ...f.aliases].join(' ').toLowerCase();
      return searchable.includes(q);
    });
  }

  if (filtered.length === 0) {
    const noMsg = currentLang === 'ar' ? 'لم يتم العثور على نتائج. جرب كلمة أخرى.' : 'No results found. Try another term.';
    container.innerHTML = `<div class="no-results">${noMsg}</div>`;
    return;
  }

  // Sort: allowed first, then conditional, then restricted
  const order = { allowed: 0, conditional: 1, restricted: 2 };
  filtered.sort((a, b) => order[a.status] - order[b.status]);

  // Limit to 20 results if no query
  if (q.length === 0) filtered = filtered.slice(0, 20);

  container.innerHTML = filtered.map(food => {
    const name = currentLang === 'ar' ? food.name_ar : food.name_en;
    const note = currentLang === 'ar' ? food.note_ar : food.note_en;
    const statusIcon = food.status === 'allowed' ? '✅' : food.status === 'restricted' ? '❌' : '⚠️';
    const statusLabel = currentLang === 'ar'
      ? (food.status === 'allowed' ? 'مسموح' : food.status === 'restricted' ? 'ممنوع' : 'مشروط')
      : (food.status === 'allowed' ? 'Allowed' : food.status === 'restricted' ? 'Restricted' : 'Conditional');

    let altHtml = '';
    if (food.status === 'restricted' && (food.alt_ar || food.alt_en)) {
      const altLabel = currentLang === 'ar' ? 'البديل' : 'Alternative';
      const alt = currentLang === 'ar' ? food.alt_ar : food.alt_en;
      altHtml = `<div class="food-alt">🔄 ${altLabel}: ${alt}</div>`;
    }

    return `<div class="food-item">
      <div class="food-status ${food.status}">${statusIcon}</div>
      <div class="food-info">
        <div class="food-name">${name} <small style="color:var(--warm-gray);font-weight:400">(${statusLabel})</small></div>
        <div class="food-detail">${note}</div>
        ${altHtml}
      </div>
    </div>`;
  }).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initLookup);
