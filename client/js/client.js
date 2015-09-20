var fontClasses = ["serif", "sans-serif", "display", "script", "handwriting", "monospace", "blackletter", "slab-serif", "typewriter","calligraphic", "all"]

var fontSizes = [12,14,16,18,24,32,44,48,64,72];

allFontDict = [{"styles": ["regular"], "class": "font-1942", "link": "http://www.fontsquirrel.com/fonts/download/1942-report", "name": "1942", "ending": "ttf"}, {"styles": ["regular"], "class": "font-20db", "link": "http://www.fontsquirrel.com/fonts/download/20-db", "name": "20db", "ending": "otf"}, {"styles": ["regular", "2d"], "class": "font-3dumb", "link": "http://www.fontsquirrel.com/fonts/download/3Dumb", "name": "3dumb", "ending": "ttf"}, {"styles": ["regular"], "class": "font-aaargh", "link": "http://www.fontsquirrel.com/fonts/download/Aaargh", "name": "aaargh", "ending": "ttf"}, {"styles": ["regular"], "class": "font-abril-fatface", "link": "http://www.fontsquirrel.com/fonts/download/abril-fatface", "name": "abril-fatface", "ending": "otf"}, {"styles": ["regular"], "class": "font-abril-fatface", "link": "http://www.fontsquirrel.com/fonts/download/abril-fatface", "name": "abril-fatface", "ending": "otf"}, {"styles": ["regular"], "class": "font-acknowledgement", "link": "http://www.fontsquirrel.com/fonts/download/Acknowledgement", "name": "acknowledgement", "ending": "otf"}, {"styles": ["regular", "italic"], "class": "font-afta-sans", "link": "http://www.fontsquirrel.com/fonts/download/afta-sans", "name": "afta-sans", "ending": "otf"}, {"styles": ["regular", "italic"], "class": "font-afta-serif", "link": "http://www.fontsquirrel.com/fonts/download/afta-serif", "name": "afta-serif", "ending": "otf"}, {"styles": ["regular"], "class": "font-aguafina-script", "link": "http://www.fontsquirrel.com/fonts/download/aguafina-script", "name": "aguafina-script", "ending": "ttf"}, {"styles": ["regular", "black-italic", "black", "bold-italic", "bold", "capital-black-italic", "capital-black", "capital-bold", "capital-italic", "capital", "italic"], "class": "font-alegreya", "link": "http://www.fontsquirrel.com/fonts/download/alegreya", "name": "alegreya", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light"], "class": "font-aleo", "link": "http://www.fontsquirrel.com/fonts/download/aleo", "name": "aleo", "ending": "otf"}, {"styles": ["regular"], "class": "font-alex-brush", "link": "http://www.fontsquirrel.com/fonts/download/alex-brush", "name": "alex-brush", "ending": "ttf"}, {"styles": ["regular"], "class": "font-alfa-slab", "link": "http://www.fontsquirrel.com/fonts/download/alfa-slab", "name": "alfa-slab", "ending": "ttf"}, {"styles": ["regular"], "class": "font-alfa-slab-one", "link": "http://www.fontsquirrel.com/fonts/download/alfa-slab", "name": "alfa-slab-one", "ending": "ttf"}, {"styles": ["regular"], "class": "font-allura", "link": "http://www.fontsquirrel.com/fonts/download/allura", "name": "allura", "ending": "otf"}, {"styles": ["regular"], "class": "font-amadeus", "link": "http://www.fontsquirrel.com/fonts/download/Amadeus", "name": "amadeus", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-amaranth", "link": "http://www.fontsquirrel.com/fonts/download/amaranth", "name": "amaranth", "ending": "otf"}, {"styles": ["regular", "bold"], "class": "font-amatic", "link": "http://www.fontsquirrel.com/fonts/download/amatic", "name": "amatic", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-condensed-italic", "light-condensed", "light-italic", "light"], "class": "font-amble", "link": "http://www.fontsquirrel.com/fonts/download/amble", "name": "amble", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "capital-bold-italic", "capital-bold", "capital-italic", "capital", "italic"], "class": "font-andada", "link": "http://www.fontsquirrel.com/fonts/download/andada", "name": "andada", "ending": "otf"}, {"styles": ["regular"], "class": "font-anonymous", "link": "http://www.fontsquirrel.com/fonts/download/Anonymous", "name": "anonymous", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-anonymous-pro", "link": "http://www.fontsquirrel.com/fonts/download/Anonymous-Pro", "name": "anonymous-pro", "ending": "ttf"}, {"styles": ["regular", "bold", "light"], "class": "font-antonio", "link": "http://www.fontsquirrel.com/fonts/download/antonio", "name": "antonio", "ending": "ttf"}, {"styles": ["regular", "italic"], "class": "font-anudaw", "link": "http://www.fontsquirrel.com/fonts/download/AnuDaw", "name": "anudaw", "ending": "ttf"}, {"styles": ["regular"], "class": "font-aquiline-two", "link": "http://www.fontsquirrel.com/fonts/download/Aquiline-two", "name": "aquiline-two", "ending": "ttf"}, {"styles": ["regular", "bold"], "class": "font-archistico", "link": "http://www.fontsquirrel.com/fonts/download/archistico", "name": "archistico", "ending": "ttf"}, {"styles": ["regular"], "class": "font-architects-daughter", "link": "http://www.fontsquirrel.com/fonts/download/architects-daughter", "name": "architects-daughter", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-arimo", "link": "http://www.fontsquirrel.com/fonts/download/arimo", "name": "arimo", "ending": "ttf"}, {"styles": ["regular"], "class": "font-arizonia", "link": "http://www.fontsquirrel.com/fonts/download/arizonia", "name": "arizonia", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-arsenal", "link": "http://www.fontsquirrel.com/fonts/download/arsenal", "name": "arsenal", "ending": "otf"}, {"styles": ["regular"], "class": "font-artifika", "link": "http://www.fontsquirrel.com/fonts/download/artifika", "name": "artifika", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-arvo", "link": "http://www.fontsquirrel.com/fonts/download/arvo", "name": "arvo", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "medium-italic", "medium"], "class": "font-asap", "link": "http://www.fontsquirrel.com/fonts/download/asap", "name": "asap", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-aurulent-sans", "link": "http://www.fontsquirrel.com/fonts/download/Aurulent-Sans", "name": "aurulent-sans", "ending": "otf"}, {"styles": ["regular"], "class": "font-bebas", "link": "http://www.fontsquirrel.com/fonts/download/Bebas", "name": "bebas", "ending": "ttf"}, {"styles": ["regular"], "class": "font-belligerent", "link": "http://www.fontsquirrel.com/fonts/download/Belligerent-Madness", "name": "belligerent", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light"], "class": "font-bellota", "link": "http://www.fontsquirrel.com/fonts/download/bellota", "name": "bellota", "ending": "otf"}, {"styles": ["regular"], "class": "font-bentham", "link": "http://www.fontsquirrel.com/fonts/download/Bentham", "name": "bentham", "ending": "otf"}, {"styles": ["regular"], "class": "font-bevan", "link": "http://www.fontsquirrel.com/fonts/download/bevan", "name": "bevan", "ending": "ttf"}, {"styles": ["regular"], "class": "font-bilbo", "link": "http://www.fontsquirrel.com/fonts/download/bilbo", "name": "bilbo", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-bitter", "link": "http://www.fontsquirrel.com/fonts/download/bitter", "name": "bitter", "ending": "otf"}, {"styles": ["regular"], "class": "font-black-jack", "link": "http://www.fontsquirrel.com/fonts/download/BlackJack", "name": "black-jack", "ending": "ttf"}, {"styles": ["regular"], "class": "font-black-rose", "link": "http://www.fontsquirrel.com/fonts/download/Black-Rose", "name": "black-rose", "ending": "ttf"}, {"styles": ["regular", "inverse"], "class": "font-blackout", "link": "http://www.fontsquirrel.com/fonts/download/Blackout", "name": "blackout", "ending": "ttf"}, {"styles": ["regular", "bold", "medium"], "class": "font-blokletters-potlood", "link": "http://www.fontsquirrel.com/fonts/download/Blokletters-Potlood", "name": "blokletters-potlood", "ending": "ttf"}, {"styles": ["regular"], "class": "font-bodonitown", "link": "http://www.fontsquirrel.com/fonts/download/Bodonitown", "name": "bodonitown", "ending": "ttf"}, {"styles": ["regular"], "class": "font-bodonixt", "link": "http://www.fontsquirrel.com/fonts/download/BodoniXT", "name": "bodonixt", "ending": "ttf"}, {"styles": ["regular"], "class": "font-bonvenocf", "link": "http://www.fontsquirrel.com/fonts/download/BonvenoCF", "name": "bonvenocf", "ending": "otf"}, {"styles": ["regular"], "class": "font-boycott", "link": "http://www.fontsquirrel.com/fonts/download/Boycott", "name": "boycott", "ending": "ttf"}, {"styles": ["regular", "bold", "diamond-bold", "diamond-light", "diamond", "light", "minus-bold", "minus", "plus-bold", "plus", "square-bold", "square-light", "square", "vertical-bold", "vertical"], "class": "font-bpdots", "link": "http://www.fontsquirrel.com/fonts/download/BPdots", "name": "bpdots", "ending": "otf"}, {"styles": ["regular", "bold", "italic"], "class": "font-bpmono", "link": "http://www.fontsquirrel.com/fonts/download/BPmono", "name": "bpmono", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold"], "class": "font-bpreplay", "link": "http://www.fontsquirrel.com/fonts/download/BPreplay", "name": "bpreplay", "ending": "otf"}, {"styles": ["regular"], "class": "font-bree-serif", "link": "http://www.fontsquirrel.com/fonts/download/bree-serif", "name": "bree-serif", "ending": "otf"}, {"styles": ["regular"], "class": "font-brushstroke-plain", "link": "http://www.fontsquirrel.com/fonts/download/Brushstroke-Plain", "name": "brushstroke-plain", "ending": "ttf"}, {"styles": ["regular"], "class": "font-bubblegum-sans", "link": "http://www.fontsquirrel.com/fonts/download/bubblegum-sans", "name": "bubblegum-sans", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "medium-italic", "medium", "semi-bold-italic", "semi-bold"], "class": "font-cabin", "link": "http://www.fontsquirrel.com/fonts/download/cabin", "name": "cabin", "ending": "otf"}, {"styles": ["regular", "bold"], "class": "font-cabinsketch", "link": "http://www.fontsquirrel.com/fonts/download/cabinsketch", "name": "cabinsketch", "ending": "otf"}, {"styles": ["regular"], "class": "font-cac-champagne", "link": "http://www.fontsquirrel.com/fonts/download/CAC-Champagne", "name": "cac-champagne", "ending": "ttf"}, {"styles": ["regular"], "class": "font-calligraffiti", "link": "http://www.fontsquirrel.com/fonts/download/calligraffiti", "name": "calligraffiti", "ending": "ttf"}, {"styles": ["regular"], "class": "font-cambo", "link": "http://www.fontsquirrel.com/fonts/download/cambo", "name": "cambo", "ending": "otf"}, {"styles": ["regular"], "class": "font-capsuula", "link": "http://www.fontsquirrel.com/fonts/download/capsuula", "name": "capsuula", "ending": "ttf"}, {"styles": ["regular"], "class": "font-carbontype", "link": "http://www.fontsquirrel.com/fonts/download/CarbonType", "name": "carbontype", "ending": "ttf"}, {"styles": ["regular", "light"], "class": "font-cardo", "link": "http://www.fontsquirrel.com/fonts/download/Cardo", "name": "cardo", "ending": "ttf"}, {"styles": ["regular"], "class": "font-carrington", "link": "http://www.fontsquirrel.com/fonts/download/Carrington", "name": "carrington", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-caudex", "link": "http://www.fontsquirrel.com/fonts/download/caudex", "name": "caudex", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-caviar-dreams", "link": "http://www.fontsquirrel.com/fonts/download/Caviar-Dreams", "name": "caviar-dreams", "ending": "ttf"}, {"styles": ["regular"], "class": "font-chantelli-antiqua", "link": "http://www.fontsquirrel.com/fonts/download/Chantelli-Antiqua", "name": "chantelli-antiqua", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-charis-sil", "link": "http://www.fontsquirrel.com/fonts/download/Charis-SIL", "name": "charis-sil", "ending": "ttf"}, {"styles": ["regular"], "class": "font-chunkfive", "link": "http://www.fontsquirrel.com/fonts/download/ChunkFive", "name": "chunkfive", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "semi-italic", "semi", "shadow"], "class": "font-cicle", "link": "http://www.fontsquirrel.com/fonts/download/Cicle", "name": "cicle", "ending": "ttf"}, {"styles": ["regular", "black", "bold", "decorative-black", "decorative-bold", "decorative"], "class": "font-cinzel", "link": "http://www.fontsquirrel.com/fonts/download/cinzel", "name": "cinzel", "ending": "otf"}, {"styles": ["regular"], "class": "font-clutchee", "link": "http://www.fontsquirrel.com/fonts/download/Clutchee", "name": "clutchee", "ending": "otf"}, {"styles": ["regular", "bold", "light", "medium", "thin"], "class": "font-colaborate", "link": "http://www.fontsquirrel.com/fonts/download/Colaborate", "name": "colaborate", "ending": "otf"}, {"styles": ["regular", "bold", "thin"], "class": "font-comfortaa", "link": "http://www.fontsquirrel.com/fonts/download/Comfortaa", "name": "comfortaa", "ending": "ttf"}, {"styles": ["regular", "bold", "italic"], "class": "font-communist", "link": "http://www.fontsquirrel.com/fonts/download/Communist", "name": "communist", "ending": "ttf"}, {"styles": ["regular"], "class": "font-condiment", "link": "http://www.fontsquirrel.com/fonts/download/condiment", "name": "condiment", "ending": "otf"}, {"styles": ["regular"], "class": "font-copse", "link": "http://www.fontsquirrel.com/fonts/download/copse", "name": "copse", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-courier-prime", "link": "http://www.fontsquirrel.com/fonts/download/courier-prime", "name": "courier-prime", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-cousine", "link": "http://www.fontsquirrel.com/fonts/download/cousine", "name": "cousine", "ending": "ttf"}, {"styles": ["regular", "italic"], "class": "font-crete-round", "link": "http://www.fontsquirrel.com/fonts/download/crete-round", "name": "crete-round", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "semi-bold-italic", "semi-bold"], "class": "font-crimson", "link": "http://www.fontsquirrel.com/fonts/download/crimson", "name": "crimson", "ending": "ttf"}, {"styles": ["regular"], "class": "font-dancing-script", "link": "http://www.fontsquirrel.com/fonts/download/dancing-script-ot", "name": "dancing-script", "ending": "otf"}, {"styles": ["regular", "medium"], "class": "font-daniel", "link": "http://www.fontsquirrel.com/fonts/download/daniel", "name": "daniel", "ending": "ttf"}, {"styles": ["regular"], "class": "font-days", "link": "http://www.fontsquirrel.com/fonts/download/Days", "name": "days", "ending": "otf"}, {"styles": ["regular", "open", "outline"], "class": "font-dearest", "link": "http://www.fontsquirrel.com/fonts/download/Dearest", "name": "dearest", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "condensed-bold-italic", "condensed-bold", "condensed-italic", "condensed", "extra-light", "italic"], "class": "font-dejavu-sans", "link": "http://www.fontsquirrel.com/fonts/download/dejavu-sans", "name": "dejavu-sans", "ending": "ttf"}, {"styles": ["regular", "bold", "condensed-bold-italic", "condensed-bold", "condensed-italic", "condensed", "italic"], "class": "font-dejavu-serif", "link": "http://www.fontsquirrel.com/fonts/download/dejavu-serif", "name": "dejavu-serif", "ending": "ttf"}, {"styles": ["regular"], "class": "font-destroy", "link": "http://www.fontsquirrel.com/fonts/download/Destroy", "name": "destroy", "ending": "ttf"}, {"styles": ["regular"], "class": "font-desyrel", "link": "http://www.fontsquirrel.com/fonts/download/Desyrel", "name": "desyrel", "ending": "ttf"}, {"styles": ["regular"], "class": "font-deutsch-gothic", "link": "http://www.fontsquirrel.com/fonts/download/Deutsch-Gothic", "name": "deutsch-gothic", "ending": "ttf"}, {"styles": ["regular", "capital"], "class": "font-devroye", "link": "http://www.fontsquirrel.com/fonts/download/Devroye", "name": "devroye", "ending": "ttf"}, {"styles": ["regular"], "class": "font-disco", "link": "http://www.fontsquirrel.com/fonts/download/DISCO", "name": "disco", "ending": "ttf"}, {"styles": ["regular"], "class": "font-dj-gross", "link": "http://www.fontsquirrel.com/fonts/download/DJ-Gross", "name": "dj-gross", "ending": "ttf"}, {"styles": ["regular"], "class": "font-dobkin", "link": "http://www.fontsquirrel.com/fonts/download/Dobkin", "name": "dobkin", "ending": "ttf"}, {"styles": ["regular", "bold", "extra-bold", "extra-light", "light", "medium", "semi-bold"], "class": "font-dosis", "link": "http://www.fontsquirrel.com/fonts/download/dosis", "name": "dosis", "ending": "otf"}, {"styles": ["regular"], "class": "font-drawveticamini", "link": "http://www.fontsquirrel.com/fonts/download/drawveticamini", "name": "drawveticamini", "ending": "ttf"}, {"styles": ["regular", "bold"], "class": "font-droid-sans", "link": "http://www.fontsquirrel.com/fonts/download/droid-sans", "name": "droid-sans", "ending": "ttf"}, {"styles": ["regular"], "class": "font-droid-sans-mono", "link": "http://www.fontsquirrel.com/fonts/download/droid-sans-mono", "name": "droid-sans-mono", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-droid-serif", "link": "http://www.fontsquirrel.com/fonts/download/droid-serif", "name": "droid-serif", "ending": "ttf"}, {"styles": ["regular", "italic"], "class": "font-dubiel", "link": "http://www.fontsquirrel.com/fonts/download/DubielPlain", "name": "dubiel", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-dustismo-roman", "link": "http://www.fontsquirrel.com/fonts/download/Dustismo-Roman", "name": "dustismo-roman", "ending": "ttf"}, {"styles": ["regular"], "class": "font-dynalight", "link": "http://www.fontsquirrel.com/fonts/download/dynalight", "name": "dynalight", "ending": "otf"}, {"styles": ["regular"], "class": "font-edo", "link": "http://www.fontsquirrel.com/fonts/download/Edo", "name": "edo", "ending": "ttf"}, {"styles": ["regular"], "class": "font-elliotsix", "link": "http://www.fontsquirrel.com/fonts/download/ElliotSix", "name": "elliotsix", "ending": "ttf"}, {"styles": ["regular", "black", "capital-black", "capital"], "class": "font-elsie", "link": "http://www.fontsquirrel.com/fonts/download/elsie", "name": "elsie", "ending": "otf"}, {"styles": ["regular"], "class": "font-england", "link": "http://www.fontsquirrel.com/fonts/download/England-Hand-DB", "name": "england", "ending": "ttf"}, {"styles": ["regular", "bold"], "class": "font-enriqueta", "link": "http://www.fontsquirrel.com/fonts/download/enriqueta", "name": "enriqueta", "ending": "otf"}, {"styles": ["regular"], "class": "font-eraser", "link": "http://www.fontsquirrel.com/fonts/download/Eraser", "name": "eraser", "ending": "ttf"}, {"styles": ["regular"], "class": "font-euphoria-script", "link": "http://www.fontsquirrel.com/fonts/download/euphoria-script", "name": "euphoria-script", "ending": "otf"}, {"styles": ["regular", "stencil", "unicase"], "class": "font-existence-light", "link": "http://www.fontsquirrel.com/fonts/download/Existence-Light", "name": "existence-light", "ending": "otf"}, {"styles": ["regular", "black-italic", "black", "bold-italic", "bold", "extra-bold-italic", "extra-bold", "extra-light-italic", "extra-light", "italic", "light-italic", "light", "medium-italic", "medium", "semi-bold-italic", "semi-bold", "thin-italic", "thin"], "class": "font-exo", "link": "http://www.fontsquirrel.com/fonts/download/exo", "name": "exo", "ending": "otf"}, {"styles": ["regular"], "class": "font-exotica", "link": "http://www.fontsquirrel.com/fonts/download/exotica", "name": "exotica", "ending": "ttf"}, {"styles": ["regular"], "class": "font-felipa", "link": "http://www.fontsquirrel.com/fonts/download/felipa", "name": "felipa", "ending": "otf"}, {"styles": ["regular", "bold"], "class": "font-fira-mono", "link": "http://www.fontsquirrel.com/fonts/download/fira-mono", "name": "fira-mono", "ending": "otf"}, {"styles": ["regular", "bold", "book", "eight", "extra-light", "italic", "medium", "ultra"], "class": "font-fira-sans", "link": "http://www.fontsquirrel.com/fonts/download/fira-sans", "name": "fira-sans", "ending": "otf"}, {"styles": ["regular", "italic"], "class": "font-florante-at-laura", "link": "http://www.fontsquirrel.com/fonts/download/Florante-at-Laura", "name": "florante-at-laura", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-flux", "link": "http://www.fontsquirrel.com/fonts/download/Flux", "name": "flux", "ending": "ttf"}, {"styles": ["regular"], "class": "font-freebooter-script", "link": "http://www.fontsquirrel.com/fonts/download/Freebooter-Script", "name": "freebooter-script", "ending": "ttf"}, {"styles": ["regular"], "class": "font-frente-h1", "link": "http://www.fontsquirrel.com/fonts/download/frente-h1", "name": "frente-h1", "ending": "otf"}, {"styles": ["regular"], "class": "font-frente-h1", "link": "http://www.fontsquirrel.com/fonts/download/frente-h1", "name": "frente-h1", "ending": "otf"}, {"styles": ["regular", "bold"], "class": "font-galatia-sil", "link": "http://www.fontsquirrel.com/fonts/download/Galatia-SIL", "name": "galatia-sil", "ending": "ttf"}, {"styles": ["regular"], "class": "font-garogier", "link": "http://www.fontsquirrel.com/fonts/download/garogier", "name": "garogier", "ending": "ttf"}, {"styles": ["regular"], "class": "font-garton", "link": "http://www.fontsquirrel.com/fonts/download/Garton", "name": "garton", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-gaspar", "link": "http://www.fontsquirrel.com/fonts/download/gaspar", "name": "gaspar", "ending": "otf"}, {"styles": ["regular", "bold", "italic"], "class": "font-gentium-basic", "link": "http://www.fontsquirrel.com/fonts/download/Gentium-Basic", "name": "gentium-basic", "ending": "ttf"}, {"styles": ["regular"], "class": "font-genzsch-et-heyse", "link": "http://www.fontsquirrel.com/fonts/download/Genzsch-Et-Heyse", "name": "genzsch-et-heyse", "ending": "ttf"}, {"styles": ["regular", "swash"], "class": "font-gondola-sd", "link": "http://www.fontsquirrel.com/fonts/download/Gondola-SD", "name": "gondola-sd", "ending": "ttf"}, {"styles": ["regular"], "class": "font-gong", "link": "http://www.fontsquirrel.com/fonts/download/Gong", "name": "gong", "ending": "ttf"}, {"styles": ["regular"], "class": "font-good-foot", "link": "http://www.fontsquirrel.com/fonts/download/Good-Foot", "name": "good-foot", "ending": "ttf"}, {"styles": ["regular"], "class": "font-gooddog", "link": "http://www.fontsquirrel.com/fonts/download/GoodDog", "name": "gooddog", "ending": "otf"}, {"styles": ["regular"], "class": "font-gothic-ultra-ot", "link": "http://www.fontsquirrel.com/fonts/download/Gothic-Ultra-OT", "name": "gothic-ultra-ot", "ending": "otf"}, {"styles": ["regular"], "class": "font-goudy-bookletter-1911", "link": "http://www.fontsquirrel.com/fonts/download/Goudy-Bookletter-1911", "name": "goudy-bookletter-1911", "ending": "otf"}, {"styles": ["regular"], "class": "font-grand-hotel", "link": "http://www.fontsquirrel.com/fonts/download/grand-hotel", "name": "grand-hotel", "ending": "otf"}, {"styles": ["regular"], "class": "font-great-vibes", "link": "http://www.fontsquirrel.com/fonts/download/great-vibes", "name": "great-vibes", "ending": "otf"}, {"styles": ["regular"], "class": "font-greatlakesnf", "link": "http://www.fontsquirrel.com/fonts/download/GreatLakesNF", "name": "greatlakesnf", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-greyscale-basic", "link": "http://www.fontsquirrel.com/fonts/download/Greyscale-Basic", "name": "greyscale-basic", "ending": "ttf"}, {"styles": ["regular"], "class": "font-grutchshaded", "link": "http://www.fontsquirrel.com/fonts/download/GrutchShaded", "name": "grutchshaded", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-hack", "link": "http://www.fontsquirrel.com/fonts/download/hack", "name": "hack", "ending": "ttf"}, {"styles": ["regular"], "class": "font-harabarahand", "link": "http://www.fontsquirrel.com/fonts/download/HarabaraHand", "name": "harabarahand", "ending": "ttf"}, {"styles": ["regular"], "class": "font-harting", "link": "http://www.fontsquirrel.com/fonts/download/Harting", "name": "harting", "ending": "ttf"}, {"styles": ["regular"], "class": "font-harting", "link": "http://www.fontsquirrel.com/fonts/download/Harting", "name": "harting", "ending": "ttf"}, {"styles": ["regular", "italic"], "class": "font-hattori-hanzo", "link": "http://www.fontsquirrel.com/fonts/download/Hattori-Hanzo", "name": "hattori-hanzo", "ending": "otf"}, {"styles": ["regular"], "class": "font-henry-morgan-hand", "link": "http://www.fontsquirrel.com/fonts/download/HenryMorganHand", "name": "henry-morgan-hand", "ending": "ttf"}, {"styles": ["regular"], "class": "font-herr-von-muellerhoff", "link": "http://www.fontsquirrel.com/fonts/download/herr-von-muellerhoff", "name": "herr-von-muellerhoff", "ending": "otf"}, {"styles": ["regular"], "class": "font-hetilica", "link": "http://www.fontsquirrel.com/fonts/download/Hetilica", "name": "hetilica", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-heuristica", "link": "http://www.fontsquirrel.com/fonts/download/heuristica", "name": "heuristica", "ending": "otf"}, {"styles": ["regular"], "class": "font-idolwild", "link": "http://www.fontsquirrel.com/fonts/download/Idolwild", "name": "idolwild", "ending": "ttf"}, {"styles": ["regular"], "class": "font-inconsolata", "link": "http://www.fontsquirrel.com/fonts/download/Inconsolata", "name": "inconsolata", "ending": "otf"}, {"styles": ["regular"], "class": "font-italianno", "link": "http://www.fontsquirrel.com/fonts/download/italianno", "name": "italianno", "ending": "otf"}, {"styles": ["regular"], "class": "font-jinky", "link": "http://www.fontsquirrel.com/fonts/download/Jinky", "name": "jinky", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light", "semi-bold-italic", "semi-bold", "thin-italic", "thin"], "class": "font-josefin-sans", "link": "http://www.fontsquirrel.com/fonts/download/josefin-sans", "name": "josefin-sans", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light", "semibold-italic", "semibold", "thin-italic", "thin"], "class": "font-josefin-slab", "link": "http://www.fontsquirrel.com/fonts/download/josefin-slab", "name": "josefin-slab", "ending": "ttf"}, {"styles": ["regular"], "class": "font-journal", "link": "http://www.fontsquirrel.com/fonts/download/Journal", "name": "journal", "ending": "ttf"}, {"styles": ["regular"], "class": "font-jr-hand", "link": "http://www.fontsquirrel.com/fonts/download/Jr-Hand", "name": "jr-hand", "ending": "ttf"}, {"styles": ["regular"], "class": "font-kaushan-script", "link": "http://www.fontsquirrel.com/fonts/download/kaushan-script", "name": "kaushan-script", "ending": "otf"}, {"styles": ["regular"], "class": "font-kawoszeh", "link": "http://www.fontsquirrel.com/fonts/download/kawoszeh", "name": "kawoszeh", "ending": "otf"}, {"styles": ["regular"], "class": "font-kells-sd", "link": "http://www.fontsquirrel.com/fonts/download/Kells-SD", "name": "kells-sd", "ending": "ttf"}, {"styles": ["regular", "italic", "light"], "class": "font-kingthings-calligraphica", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Calligraphica", "name": "kingthings-calligraphica", "ending": "ttf"}, {"styles": ["regular"], "class": "font-kingthings-exeter", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Exeter", "name": "kingthings-exeter", "ending": "ttf"}, {"styles": ["regular"], "class": "font-kingthings-foundation", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Foundation-", "name": "kingthings-foundation", "ending": "ttf"}, {"styles": ["regular"], "class": "font-kingthings-gothique", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Gothique", "name": "kingthings-gothique", "ending": "ttf"}, {"styles": ["regular"], "class": "font-kingthings-italique", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Italique", "name": "kingthings-italique", "ending": "ttf"}, {"styles": ["regular", "light"], "class": "font-kingthings-petrock", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Petrock", "name": "kingthings-petrock", "ending": "ttf"}, {"styles": ["regular"], "class": "font-kingthings-spikeless", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Spikeless", "name": "kingthings-spikeless", "ending": "ttf"}, {"styles": ["regular"], "class": "font-kingthings-typewriter", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Trypewriter", "name": "kingthings-typewriter", "ending": "ttf"}, {"styles": ["regular"], "class": "font-kingthings-wrote", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Wrote", "name": "kingthings-wrote", "ending": "ttf"}, {"styles": ["regular"], "class": "font-konstytucyja", "link": "http://www.fontsquirrel.com/fonts/download/konstytucyja", "name": "konstytucyja", "ending": "otf"}, {"styles": ["regular", "bold", "italic"], "class": "font-kontrapunkt", "link": "http://www.fontsquirrel.com/fonts/download/Kontrapunkt", "name": "kontrapunkt", "ending": "otf"}, {"styles": ["regular"], "class": "font-krazy-nights", "link": "http://www.fontsquirrel.com/fonts/download/Krazy-Nights", "name": "krazy-nights", "ending": "ttf"}, {"styles": ["regular", "bold", "light"], "class": "font-kreon", "link": "http://www.fontsquirrel.com/fonts/download/kreon", "name": "kreon", "ending": "ttf"}, {"styles": ["regular"], "class": "font-kristi", "link": "http://www.fontsquirrel.com/fonts/download/kristi", "name": "kristi", "ending": "ttf"}, {"styles": ["regular"], "class": "font-landliebe", "link": "http://www.fontsquirrel.com/fonts/download/Landliebe", "name": "landliebe", "ending": "ttf"}, {"styles": ["regular", "narrow", "posh"], "class": "font-lane", "link": "http://www.fontsquirrel.com/fonts/download/Lane", "name": "lane", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "capital-italic", "capital", "condensed-italic", "condensed", "italic", "light"], "class": "font-latin-modern-mono", "link": "http://www.fontsquirrel.com/fonts/download/Latin-Modern-Mono", "name": "latin-modern-mono", "ending": "otf"}, {"styles": ["regular", "bold", "capital", "italic"], "class": "font-latin-modern-roman", "link": "http://www.fontsquirrel.com/fonts/download/Latin-Modern-Roman", "name": "latin-modern-roman", "ending": "otf"}, {"styles": ["regular", "black", "bold", "hairline", "heavy", "italic", "light", "medium"], "class": "font-lato", "link": "http://www.fontsquirrel.com/fonts/download/lato", "name": "lato", "ending": "ttf"}, {"styles": ["regular", "condensed-italic", "condensed-regular", "italic"], "class": "font-league-gothic", "link": "http://www.fontsquirrel.com/fonts/download/League-Gothic", "name": "league-gothic", "ending": "otf"}, {"styles": ["regular"], "class": "font-league-script", "link": "http://www.fontsquirrel.com/fonts/download/league-script", "name": "league-script", "ending": "otf"}, {"styles": ["regular", "dashed"], "class": "font-learning-curve-pro", "link": "http://www.fontsquirrel.com/fonts/download/Learning-Curve-Pro", "name": "learning-curve-pro", "ending": "otf"}, {"styles": ["regular"], "class": "font-leckerli-one", "link": "http://www.fontsquirrel.com/fonts/download/leckerli-one", "name": "leckerli-one", "ending": "otf"}, {"styles": ["regular", "bold", "italic"], "class": "font-lekton", "link": "http://www.fontsquirrel.com/fonts/download/lekton", "name": "lekton", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-liberation-mono", "link": "http://www.fontsquirrel.com/fonts/download/Liberation-Mono", "name": "liberation-mono", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-liberation-serif", "link": "http://www.fontsquirrel.com/fonts/download/Liberation-Serif", "name": "liberation-serif", "ending": "ttf"}, {"styles": ["regular", "bold", "italic"], "class": "font-libre-baskerville", "link": "http://www.fontsquirrel.com/fonts/download/libre-baskerville", "name": "libre-baskerville", "ending": "otf"}, {"styles": ["regular"], "class": "font-lilly", "link": "http://www.fontsquirrel.com/fonts/download/Lilly", "name": "lilly", "ending": "ttf"}, {"styles": ["regular", "italic"], "class": "font-lindenhill", "link": "http://www.fontsquirrel.com/fonts/download/linden-hill", "name": "lindenhill", "ending": "otf"}, {"styles": ["regular"], "class": "font-lobster", "link": "http://www.fontsquirrel.com/fonts/download/Lobster", "name": "lobster", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-lobster-two", "link": "http://www.fontsquirrel.com/fonts/download/lobster-two", "name": "lobster-two", "ending": "otf"}, {"styles": ["regular", "outline", "shadow", "sketch"], "class": "font-londrina", "link": "http://www.fontsquirrel.com/fonts/download/londrina", "name": "londrina", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-lora", "link": "http://www.fontsquirrel.com/fonts/download/lora", "name": "lora", "ending": "ttf"}, {"styles": ["regular"], "class": "font-lovers-quarrel", "link": "http://www.fontsquirrel.com/fonts/download/lovers-quarrel", "name": "lovers-quarrel", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-luxi-mono", "link": "http://www.fontsquirrel.com/fonts/download/Luxi-Mono", "name": "luxi-mono", "ending": "ttf"}, {"styles": ["regular", "bold", "light", "medium", "thin"], "class": "font-m-1m", "link": "http://www.fontsquirrel.com/fonts/download/M-1m", "name": "m-1m", "ending": "ttf"}, {"styles": ["regular"], "class": "font-matchbook", "link": "http://www.fontsquirrel.com/fonts/download/Matchbook", "name": "matchbook", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-mathlete", "link": "http://www.fontsquirrel.com/fonts/download/mathlete", "name": "mathlete", "ending": "otf"}, {"styles": ["regular", "bold", "light", "ultra-bold"], "class": "font-merriweather", "link": "http://www.fontsquirrel.com/fonts/download/merriweather", "name": "merriweather", "ending": "ttf"}, {"styles": ["regular"], "class": "font-miama", "link": "http://www.fontsquirrel.com/fonts/download/Miama", "name": "miama", "ending": "otf"}, {"styles": ["regular"], "class": "font-molot", "link": "http://www.fontsquirrel.com/fonts/download/Molot", "name": "molot", "ending": "otf"}, {"styles": ["regular"], "class": "font-moms-typewriter", "link": "http://www.fontsquirrel.com/fonts/download/MomsTypewriter", "name": "moms-typewriter", "ending": "ttf"}, {"styles": ["regular"], "class": "font-monospacetypewriter", "link": "http://www.fontsquirrel.com/fonts/download/MonospaceTypewriter", "name": "monospacetypewriter", "ending": "ttf"}, {"styles": ["regular"], "class": "font-montez", "link": "http://www.fontsquirrel.com/fonts/download/montez", "name": "montez", "ending": "ttf"}, {"styles": ["regular", "black", "bold", "hairline", "light", "ultra-light"], "class": "font-montserrat", "link": "http://www.fontsquirrel.com/fonts/download/montserrat", "name": "montserrat", "ending": "otf"}, {"styles": ["regular"], "class": "font-mothproofscript", "link": "http://www.fontsquirrel.com/fonts/download/MothproofScript", "name": "mothproofscript", "ending": "ttf"}, {"styles": ["regular"], "class": "font-mountains-of-christmas", "link": "http://www.fontsquirrel.com/fonts/download/mountains-of-christmas", "name": "mountains-of-christmas", "ending": "ttf"}, {"styles": ["regular"], "class": "font-mutlu", "link": "http://www.fontsquirrel.com/fonts/download/Mutlu", "name": "mutlu", "ending": "ttf"}, {"styles": ["regular"], "class": "font-my-underwood", "link": "http://www.fontsquirrel.com/fonts/download/My-Underwood", "name": "my-underwood", "ending": "ttf"}, {"styles": ["regular"], "class": "font-my-underwood", "link": "http://www.fontsquirrel.com/fonts/download/My-Underwood", "name": "my-underwood", "ending": "ttf"}, {"styles": ["regular", "bold", "light"], "class": "font-neo-retro", "link": "http://www.fontsquirrel.com/fonts/download/NeoRetroDraw", "name": "neo-retro", "ending": "ttf"}, {"styles": ["regular", "bold", "light"], "class": "font-neuton", "link": "http://www.fontsquirrel.com/fonts/download/neuton", "name": "neuton", "ending": "ttf"}, {"styles": ["regular"], "class": "font-new-athena-unicode", "link": "http://www.fontsquirrel.com/fonts/download/New-Athena-Unicode", "name": "new-athena-unicode", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "semi"], "class": "font-new-cicle", "link": "http://www.fontsquirrel.com/fonts/download/New-Cicle", "name": "new-cicle", "ending": "ttf"}, {"styles": ["regular"], "class": "font-new-rocker", "link": "http://www.fontsquirrel.com/fonts/download/new-rocker", "name": "new-rocker", "ending": "otf"}, {"styles": ["regular"], "class": "font-nixie-one", "link": "http://www.fontsquirrel.com/fonts/download/nixie-one", "name": "nixie-one", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "medium-italic", "medium"], "class": "font-nobile", "link": "http://www.fontsquirrel.com/fonts/download/Nobile", "name": "nobile", "ending": "ttf"}, {"styles": ["regular", "bold"], "class": "font-notcouriersans", "link": "http://www.fontsquirrel.com/fonts/download/NotCourierSans", "name": "notcouriersans", "ending": "otf"}, {"styles": ["regular"], "class": "font-note-this", "link": "http://www.fontsquirrel.com/fonts/download/Note-this", "name": "note-this", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-noticia-text", "link": "http://www.fontsquirrel.com/fonts/download/noticia-text", "name": "noticia-text", "ending": "ttf"}, {"styles": ["regular", "bold", "bolditalic", "italic"], "class": "font-noto-serif", "link": "http://www.fontsquirrel.com/fonts/download/noto-serif", "name": "noto-serif", "ending": "ttf"}, {"styles": ["regular", "bold"], "class": "font-odstemplik", "link": "http://www.fontsquirrel.com/fonts/download/odstemplik", "name": "odstemplik", "ending": "otf"}, {"styles": ["regular", "bold", "italic"], "class": "font-old-standard", "link": "http://www.fontsquirrel.com/fonts/download/Old-Standard-TT", "name": "old-standard", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "extra-bold-italic", "extra-bold", "italic", "light-italic", "light", "semi-bold-italic", "semi-bold"], "class": "font-open-sans", "link": "http://www.fontsquirrel.com/fonts/download/open-sans", "name": "open-sans", "ending": "ttf"}, {"styles": ["regular", "bold", "light-italic", "light"], "class": "font-open-sans-condensed", "link": "http://www.fontsquirrel.com/fonts/download/open-sans-condensed", "name": "open-sans-condensed", "ending": "ttf"}, {"styles": ["regular", "black", "bold", "light"], "class": "font-orbitron", "link": "http://www.fontsquirrel.com/fonts/download/Orbitron", "name": "orbitron", "ending": "otf"}, {"styles": ["regular"], "class": "font-osp-din", "link": "http://www.fontsquirrel.com/fonts/download/osp-din", "name": "osp-din", "ending": "ttf"}, {"styles": ["regular", "black", "bold", "dashed", "light", "rounded"], "class": "font-ostrich", "link": "http://www.fontsquirrel.com/fonts/download/ostrich-sans", "name": "ostrich", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "demi-bold-italic", "demi-bold", "extra-light-italic", "extra-light", "heavy-italic", "heavy", "italic", "light-italic", "light", "medium-italic", "medium", "stencil"], "class": "font-oswald", "link": "http://www.fontsquirrel.com/fonts/download/oswald", "name": "oswald", "ending": "ttf"}, {"styles": ["regular"], "class": "font-otama-ep", "link": "http://www.fontsquirrel.com/fonts/download/otama-ep", "name": "otama-ep", "ending": "otf"}, {"styles": ["regular", "black-italic", "black", "bold-italic", "bold", "italic"], "class": "font-overlock", "link": "http://www.fontsquirrel.com/fonts/download/overlock", "name": "overlock", "ending": "ttf"}, {"styles": ["regular"], "class": "font-oxygen-mono", "link": "http://www.fontsquirrel.com/fonts/download/oxygen-mono", "name": "oxygen-mono", "ending": "otf"}, {"styles": ["regular"], "class": "font-pacifico", "link": "http://www.fontsquirrel.com/fonts/download/pacifico", "name": "pacifico", "ending": "ttf"}, {"styles": ["regular"], "class": "font-patua-one", "link": "http://www.fontsquirrel.com/fonts/download/patua-one", "name": "patua-one", "ending": "otf"}, {"styles": ["regular", "bold"], "class": "font-paulmaul", "link": "http://www.fontsquirrel.com/fonts/download/PaulMaul", "name": "paulmaul", "ending": "ttf"}, {"styles": ["regular"], "class": "font-pecita", "link": "http://www.fontsquirrel.com/fonts/download/Pecita", "name": "pecita", "ending": "otf"}, {"styles": ["regular"], "class": "font-permanent-marker", "link": "http://www.fontsquirrel.com/fonts/download/permanent-marker", "name": "permanent-marker", "ending": "ttf"}, {"styles": ["regular", "bold", "italic"], "class": "font-permian-slab", "link": "http://www.fontsquirrel.com/fonts/download/permian-slab", "name": "permian-slab", "ending": "otf"}, {"styles": ["regular"], "class": "font-pincoyablack", "link": "http://www.fontsquirrel.com/fonts/download/Pincoyablack", "name": "pincoyablack", "ending": "otf"}, {"styles": ["regular", "bold", "italic"], "class": "font-playfair-capital", "name": "playfair-capital", "ending": "ttf"}, {"styles": ["regular", "bold", "italic"], "class": "font-playfair-display", "link": "http://www.fontsquirrel.com/fonts/download/playfair-display", "name": "playfair-display", "ending": "otf"}, {"styles": ["regular", "italic", "outline"], "class": "font-playtime", "link": "http://www.fontsquirrel.com/fonts/download/Playtime-With-Hot-Toddies", "name": "playtime", "ending": "ttf"}, {"styles": ["regular"], "class": "font-podkova", "link": "http://www.fontsquirrel.com/fonts/download/podkova", "name": "podkova", "ending": "ttf"}, {"styles": ["regular"], "class": "font-poilet-taper", "link": "http://www.fontsquirrel.com/fonts/download/Poilet-Taper", "name": "poilet-taper", "ending": "ttf"}, {"styles": ["regular"], "class": "font-pompiere", "link": "http://www.fontsquirrel.com/fonts/download/pompiere", "name": "pompiere", "ending": "otf"}, {"styles": ["regular"], "class": "font-portcullion", "link": "http://www.fontsquirrel.com/fonts/download/Portcullion", "name": "portcullion", "ending": "ttf"}, {"styles": ["regular", "bold", "dashed"], "class": "font-print-clearly", "link": "http://www.fontsquirrel.com/fonts/download/Print-Clearly", "name": "print-clearly", "ending": "otf"}, {"styles": ["regular", "heavy", "incised"], "class": "font-proclamate", "link": "http://www.fontsquirrel.com/fonts/download/Proclamate", "name": "proclamate", "ending": "ttf"}, {"styles": ["regular"], "class": "font-promocyja", "link": "http://www.fontsquirrel.com/fonts/download/Promocyja", "name": "promocyja", "ending": "otf"}, {"styles": ["regular"], "class": "font-pt-mono", "link": "http://www.fontsquirrel.com/fonts/download/pt-mono", "name": "pt-mono", "ending": "ttf"}, {"styles": ["regular", "bold", "italic", "narrow"], "class": "font-pt-sans", "link": "http://www.fontsquirrel.com/fonts/download/PT-Sans", "name": "pt-sans", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-pt-serif", "link": "http://www.fontsquirrel.com/fonts/download/pt-serif", "name": "pt-serif", "ending": "ttf"}, {"styles": ["regular"], "class": "font-quattrocento", "link": "http://www.fontsquirrel.com/fonts/download/quattrocento-roman", "name": "quattrocento", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "dash", "italic", "light-italic", "light"], "class": "font-quicksand", "link": "http://www.fontsquirrel.com/fonts/download/quicksand", "name": "quicksand", "ending": "otf"}, {"styles": ["regular"], "class": "font-quigleywiggly", "link": "http://www.fontsquirrel.com/fonts/download/QuigleyWiggly", "name": "quigleywiggly", "ending": "ttf"}, {"styles": ["regular"], "class": "font-qumpellkano12", "link": "http://www.fontsquirrel.com/fonts/download/qumpellkano12", "name": "qumpellkano12", "ending": "otf"}, {"styles": ["regular"], "class": "font-qwigley", "link": "http://www.fontsquirrel.com/fonts/download/qwigley", "name": "qwigley", "ending": "ttf"}, {"styles": ["regular"], "class": "font-rabiohead", "link": "http://www.fontsquirrel.com/fonts/download/Rabiohead", "name": "rabiohead", "ending": "ttf"}, {"styles": ["regular", "black", "bold", "italic", "light", "lightitalic", "medium"], "class": "font-raleway", "link": "http://www.fontsquirrel.com/fonts/download/raleway", "name": "raleway", "ending": "ttf"}, {"styles": ["regular"], "class": "font-rapscallion", "link": "http://www.fontsquirrel.com/fonts/download/Rapscallion", "name": "rapscallion", "ending": "ttf"}, {"styles": ["regular", "bold", "capital", "demi-bold", "light", "ultra-light"], "class": "font-rawengulk", "link": "http://www.fontsquirrel.com/fonts/download/rawengulk", "name": "rawengulk", "ending": "otf"}, {"styles": ["regular"], "class": "font-rechtman", "link": "http://www.fontsquirrel.com/fonts/download/Rechtman", "name": "rechtman", "ending": "ttf"}, {"styles": ["regular"], "class": "font-redressed", "link": "http://www.fontsquirrel.com/fonts/download/redressed", "name": "redressed", "ending": "ttf"}, {"styles": ["regular", "black", "bold", "condensed-bold", "condensed-italic", "condensed-light", "condensed-regular", "italic", "light", "medium", "thin"], "class": "font-roboto", "link": "http://www.fontsquirrel.com/fonts/download/roboto", "name": "roboto", "ending": "ttf"}, {"styles": ["regular", "bold", "light", "thin"], "class": "font-roboto-slab", "link": "http://www.fontsquirrel.com/fonts/download/roboto-slab", "name": "roboto-slab", "ending": "ttf"}, {"styles": ["regular"], "class": "font-rochester", "link": "http://www.fontsquirrel.com/fonts/download/rochester", "name": "rochester", "ending": "otf"}, {"styles": ["regular"], "class": "font-rock-salt", "link": "http://www.fontsquirrel.com/fonts/download/rock-salt", "name": "rock-salt", "ending": "ttf"}, {"styles": ["regular"], "class": "font-rokkitt", "link": "http://www.fontsquirrel.com/fonts/download/rokkitt", "name": "rokkitt", "ending": "otf"}, {"styles": ["regular"], "class": "font-roman-caps", "link": "http://www.fontsquirrel.com/fonts/download/Roman-Caps", "name": "roman-caps", "ending": "ttf"}, {"styles": ["regular"], "class": "font-rothenburg", "link": "http://www.fontsquirrel.com/fonts/download/Rothenburg-Decorative", "name": "rothenburg", "ending": "ttf"}, {"styles": ["regular"], "class": "font-ruthie", "link": "http://www.fontsquirrel.com/fonts/download/ruthie", "name": "ruthie", "ending": "otf"}, {"styles": ["regular"], "class": "font-sail", "link": "http://www.fontsquirrel.com/fonts/download/sail", "name": "sail", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light"], "class": "font-sansation", "link": "http://www.fontsquirrel.com/fonts/download/sansation", "name": "sansation", "ending": "ttf"}, {"styles": ["regular", "extra-bold", "black-italic", "black", "bold-italic", "bold", "extra-bold-italic", "italic"], "class": "font-sansita", "link": "http://www.fontsquirrel.com/fonts/download/sansita", "name": "sansita", "ending": "otf"}, {"styles": ["regular"], "class": "font-saxmono", "link": "http://www.fontsquirrel.com/fonts/download/saxMono", "name": "saxmono", "ending": "ttf"}, {"styles": ["regular"], "class": "font-scratch", "link": "http://www.fontsquirrel.com/fonts/download/Scratch", "name": "scratch", "ending": "ttf"}, {"styles": ["regular"], "class": "font-scriptina", "link": "http://www.fontsquirrel.com/fonts/download/Scriptina", "name": "scriptina", "ending": "ttf"}, {"styles": ["regular"], "class": "font-scriptina-pro", "link": "http://www.fontsquirrel.com/fonts/download/scriptina-pro", "name": "scriptina-pro", "ending": "otf"}, {"styles": ["regular"], "class": "font-sears-tower", "link": "http://www.fontsquirrel.com/fonts/download/sears-tower", "name": "sears-tower", "ending": "ttf"}, {"styles": ["regular"], "class": "font-sears-tower", "link": "http://www.fontsquirrel.com/fonts/download/sears-tower", "name": "sears-tower", "ending": "ttf"}, {"styles": ["regular"], "class": "font-secret-typewriter", "link": "http://www.fontsquirrel.com/fonts/download/Secret-Typewriter", "name": "secret-typewriter", "ending": "ttf"}, {"styles": ["regular"], "class": "font-sevillana", "link": "http://www.fontsquirrel.com/fonts/download/sevillana", "name": "sevillana", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-sf-burlington-script", "link": "http://www.fontsquirrel.com/fonts/download/SF-Burlington-Script", "name": "sf-burlington-script", "ending": "ttf"}, {"styles": ["regular", "solid"], "class": "font-sf-collegiate", "link": "http://www.fontsquirrel.com/fonts/download/SF-Collegiate", "name": "sf-collegiate", "ending": "ttf"}, {"styles": ["regular"], "class": "font-short-stack", "link": "http://www.fontsquirrel.com/fonts/download/short-stack", "name": "short-stack", "ending": "otf"}, {"styles": ["regular", "bold", "light", "semi-bold"], "class": "font-signika", "link": "http://www.fontsquirrel.com/fonts/download/signika", "name": "signika", "ending": "otf"}, {"styles": ["regular", "bold", "italic", "light", "medium", "thin"], "class": "font-sinkin-sans", "link": "http://www.fontsquirrel.com/fonts/download/sinkin-sans", "name": "sinkin-sans", "ending": "otf"}, {"styles": ["regular"], "class": "font-six-caps", "link": "http://www.fontsquirrel.com/fonts/download/six-caps", "name": "six-caps", "ending": "ttf"}, {"styles": ["regular", "serif"], "class": "font-slabo", "link": "http://www.fontsquirrel.com/fonts/download/slabo", "name": "slabo", "ending": "ttf"}, {"styles": ["regular", "bold", "light"], "class": "font-sling", "link": "http://www.fontsquirrel.com/fonts/download/Sling", "name": "sling", "ending": "ttf"}, {"styles": ["regular"], "class": "font-snickles", "link": "http://www.fontsquirrel.com/fonts/download/Snickles", "name": "snickles", "ending": "ttf"}, {"styles": ["regular"], "class": "font-sofia", "link": "http://www.fontsquirrel.com/fonts/download/sofia", "name": "sofia", "ending": "otf"}, {"styles": ["regular", "fade"], "class": "font-soft-sugar-plain", "link": "http://www.fontsquirrel.com/fonts/download/Soft-Sugar-plain", "name": "soft-sugar-plain", "ending": "ttf"}, {"styles": ["regular", "italic"], "class": "font-sorts-mill-goudy", "link": "http://www.fontsquirrel.com/fonts/download/Sorts-Mill-Goudy", "name": "sorts-mill-goudy", "ending": "otf"}, {"styles": ["regular", "black-italic", "black", "bold-italic", "bold", "extra-light-italic", "extra-light", "italic", "light-italic", "light", "medium-italic", "medium", "semi-bold-italic", "semi-bold"], "class": "font-source-code-pro", "link": "http://www.fontsquirrel.com/fonts/download/source-code-pro", "name": "source-code-pro", "ending": "otf"}, {"styles": ["regular", "black-italic", "black", "bold", "italic", "light-italic", "light", "semi-bold"], "class": "font-source-sans-pro", "link": "http://www.fontsquirrel.com/fonts/download/source-sans-pro", "name": "source-sans-pro", "ending": "otf"}, {"styles": ["regular"], "class": "font-special-elite", "link": "http://www.fontsquirrel.com/fonts/download/special-elite", "name": "special-elite", "ending": "ttf"}, {"styles": ["regular"], "class": "font-special-elite", "link": "http://www.fontsquirrel.com/fonts/download/special-elite", "name": "special-elite", "ending": "ttf"}, {"styles": ["regular", "3d"], "class": "font-spincycle", "link": "http://www.fontsquirrel.com/fonts/download/Spin-Cycle-OT", "name": "spincycle", "ending": "otf"}, {"styles": ["regular", "capital"], "class": "font-spinwerad", "link": "http://www.fontsquirrel.com/fonts/download/spinwerad", "name": "spinwerad", "ending": "ttf"}, {"styles": ["regular"], "class": "font-st-marie", "link": "http://www.fontsquirrel.com/fonts/download/st-marie", "name": "st-marie", "ending": "otf"}, {"styles": ["regular", "bold"], "class": "font-tangerine", "link": "http://www.fontsquirrel.com/fonts/download/Tangerine", "name": "tangerine", "ending": "ttf"}, {"styles": ["regular"], "class": "font-teutonic", "link": "http://www.fontsquirrel.com/fonts/download/Teutonic-No1", "name": "teutonic", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-tex-gyre-adventor", "link": "http://www.fontsquirrel.com/fonts/download/TeX-Gyre-Adventor", "name": "tex-gyre-adventor", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-tex-gyre-cursor", "link": "http://www.fontsquirrel.com/fonts/download/TeX-Gyre-Cursor", "name": "tex-gyre-cursor", "ending": "otf"}, {"styles": ["regular"], "class": "font-theano-didot", "link": "http://www.fontsquirrel.com/fonts/download/Theano-Didot", "name": "theano-didot", "ending": "ttf"}, {"styles": ["regular", "bold", "heavy"], "class": "font-tienne", "link": "http://www.fontsquirrel.com/fonts/download/tienne", "name": "tienne", "ending": "otf"}, {"styles": ["regular"], "class": "font-tinet", "link": "http://www.fontsquirrel.com/fonts/download/Tinet", "name": "tinet", "ending": "ttf"}, {"styles": ["regular", "black", "bold-upright", "bold", "italic", "light-upright", "light", "semi-bold", "thin-upright", "thin", "upright"], "class": "font-titillium", "link": "http://www.fontsquirrel.com/fonts/download/Titillium", "name": "titillium", "ending": "otf"}, {"styles": ["regular"], "class": "font-trashhand", "link": "http://www.fontsquirrel.com/fonts/download/TrashHand", "name": "trashhand", "ending": "ttf"}, {"styles": ["regular", "bold"], "class": "font-trocchi", "link": "http://www.fontsquirrel.com/fonts/download/trocchi", "name": "trocchi", "ending": "otf"}, {"styles": ["regular"], "class": "font-typo-slab-serif", "link": "http://www.fontsquirrel.com/fonts/download/TypoSlabserif-Light", "name": "typo-slab-serif", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light"], "class": "font-ubuntu", "link": "http://www.fontsquirrel.com/fonts/download/ubuntu", "name": "ubuntu", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-ubuntu-mono", "link": "http://www.fontsquirrel.com/fonts/download/ubuntu-mono", "name": "ubuntu-mono", "ending": "ttf"}, {"styles": ["regular"], "class": "font-ubuntu-title", "link": "http://www.fontsquirrel.com/fonts/download/Ubuntu-Title", "name": "ubuntu-title", "ending": "ttf"}, {"styles": ["regular"], "class": "font-ubuntu-titling", "link": "http://www.fontsquirrel.com/fonts/download/Ubuntu-Titling", "name": "ubuntu-titling", "ending": "ttf"}, {"styles": ["regular", "italic"], "class": "font-uglyqua", "link": "http://www.fontsquirrel.com/fonts/download/UglyQua", "name": "uglyqua", "ending": "ttf"}, {"styles": ["regular"], "class": "font-ultra", "link": "http://www.fontsquirrel.com/fonts/download/ultra", "name": "ultra", "ending": "ttf"}, {"styles": ["regular"], "class": "font-underwood-champion", "link": "http://www.fontsquirrel.com/fonts/download/Underwood-Champion", "name": "underwood-champion", "ending": "ttf"}, {"styles": ["regular"], "class": "font-vag-handwritten", "link": "http://www.fontsquirrel.com/fonts/download/VAG-HandWritten", "name": "vag-handwritten", "ending": "otf"}, {"styles": ["regular"], "class": "font-vanilla", "link": "http://www.fontsquirrel.com/fonts/download/Vanilla", "name": "vanilla", "ending": "ttf"}, {"styles": ["regular", "light", "medium"], "class": "font-veggieburger", "link": "http://www.fontsquirrel.com/fonts/download/Veggieburger", "name": "veggieburger", "ending": "otf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-vera-sans", "link": "http://www.fontsquirrel.com/fonts/download/Bitstream-Vera-Sans", "name": "vera-sans", "ending": "ttf"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "class": "font-veramono", "link": "http://www.fontsquirrel.com/fonts/download/Bitstream-Vera-Sans-Mono", "name": "veramono", "ending": "ttf"}, {"styles": ["regular", "bold"], "class": "font-veraserif", "link": "http://www.fontsquirrel.com/fonts/download/Bitstream-Vera-Serif", "name": "veraserif", "ending": "ttf"}, {"styles": ["regular", "bold", "italic", "medium"], "class": "font-vollkorn", "link": "http://www.fontsquirrel.com/fonts/download/vollkorn", "name": "vollkorn", "ending": "otf"}, {"styles": ["regular"], "class": "font-wagnasty", "link": "http://www.fontsquirrel.com/fonts/download/Wagnasty", "name": "wagnasty", "ending": "ttf"}, {"styles": ["regular", "black-italic", "black", "bold-italic", "bold", "semi-bold-italic", "semi-bold", "ultra-bold-italic", "ultra-bold"], "class": "font-walkway", "link": "http://www.fontsquirrel.com/fonts/download/Walkway", "name": "walkway", "ending": "ttf"}, {"styles": ["regular", "bold"], "class": "font-wc-mano-negra", "link": "http://www.fontsquirrel.com/fonts/download/WC-Mano-Negra-Bta", "name": "wc-mano-negra", "ending": "otf"}, {"styles": ["regular"], "class": "font-windsong", "link": "http://www.fontsquirrel.com/fonts/download/Windsong", "name": "windsong", "ending": "ttf"}, {"styles": ["regular", "bold", "extra-light", "light"], "class": "font-yanone-kaffeesatz", "link": "http://www.fontsquirrel.com/fonts/download/yanone-kaffeesatz", "name": "yanone-kaffeesatz", "ending": "otf"}, {"styles": ["regular"], "class": "font-yellowtail", "link": "http://www.fontsquirrel.com/fonts/download/yellowtail", "name": "yellowtail", "ending": "otf"}, {"styles": ["regular"], "class": "font-yesterdays-meal", "link": "http://www.fontsquirrel.com/fonts/download/Yesterdays-meal", "name": "yesterdays-meal", "ending": "ttf"}, {"styles": ["regular"], "class": "font-zantroke", "link": "http://www.fontsquirrel.com/fonts/download/zantroke", "name": "zantroke", "ending": "otf"}, {"styles": ["regular"], "class": "font-zenda", "link": "http://www.fontsquirrel.com/fonts/download/Zenda", "name": "zenda", "ending": "ttf"}, {"styles": ["regular"], "class": "font-znikomit", "link": "http://www.fontsquirrel.com/fonts/download/znikomit", "name": "znikomit", "ending": "otf"}, {"styles": ["regular"], "class": "font-znikomitno24", "link": "http://www.fontsquirrel.com/fonts/download/znikomitno24", "name": "znikomitno24", "ending": "otf"}]

serifFontDict = [{"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/abril-fatface", "name": "abril-fatface", "class": "font-abril-fatface"}, {"styles": ["regular", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/afta-serif", "name": "afta-serif", "class": "font-afta-serif"}, {"styles": ["regular", "black-italic", "black", "bold-italic", "bold", "capital-black-italic", "capital-black", "capital-bold", "capital-italic", "capital", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/alegreya", "name": "alegreya", "class": "font-alegreya"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/alfa-slab", "name": "alfa-slab-one", "class": "font-alfa-slab-one"}, {"styles": ["regular", "bold-italic", "bold", "capital-bold-italic", "capital-bold", "capital-italic", "capital", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/andada", "name": "andada", "class": "font-andada"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/artifika", "name": "artifika", "class": "font-artifika"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Bentham", "name": "bentham", "class": "font-bentham"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/BodoniXT", "name": "bodonixt", "class": "font-bodonixt"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/cambo", "name": "cambo", "class": "font-cambo"}, {"styles": ["regular", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Cardo", "name": "cardo", "class": "font-cardo"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/caudex", "name": "caudex", "class": "font-caudex"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Charis-SIL", "name": "charis-sil", "class": "font-charis-sil"}, {"styles": ["regular", "black", "bold", "decorative-black", "decorative-bold", "decorative"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/cinzel", "name": "cinzel", "class": "font-cinzel"}, {"styles": ["regular", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Communist", "name": "communist", "class": "font-communist"}, {"styles": ["regular", "bold-italic", "bold", "italic", "semi-bold-italic", "semi-bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/crimson", "name": "crimson", "class": "font-crimson"}, {"styles": ["regular", "bold", "condensed-bold-italic", "condensed-bold", "condensed-italic", "condensed", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/dejavu-serif", "name": "dejavu-serif", "class": "font-dejavu-serif"}, {"styles": ["regular", "capital"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Devroye", "name": "devroye", "class": "font-devroye"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/droid-serif", "name": "droid-serif", "class": "font-droid-serif"}, {"styles": ["regular", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/DubielPlain", "name": "dubiel", "class": "font-dubiel"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Dustismo-Roman", "name": "dustismo-roman", "class": "font-dustismo-roman"}, {"styles": ["regular", "black", "capital-black", "capital"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/elsie", "name": "elsie", "class": "font-elsie"}, {"styles": ["regular", "bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Galatia-SIL", "name": "galatia-sil", "class": "font-galatia-sil"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/garogier", "name": "garogier", "class": "font-garogier"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Garton", "name": "garton", "class": "font-garton"}, {"styles": ["regular", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Gentium-Basic", "name": "gentium-basic", "class": "font-gentium-basic"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Goudy-Bookletter-1911", "name": "goudy-bookletter-1911", "class": "font-goudy-bookletter-1911"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Harting", "name": "harting", "class": "font-harting"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/heuristica", "name": "heuristica", "class": "font-heuristica"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/kawoszeh", "name": "kawoszeh", "class": "font-kawoszeh"}, {"styles": ["regular", "bold", "capital", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Latin-Modern-Roman", "name": "latin-modern-roman", "class": "font-latin-modern-roman"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Liberation-Serif", "name": "liberation-serif", "class": "font-liberation-serif"}, {"styles": ["regular", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/libre-baskerville", "name": "libre-baskerville", "class": "font-libre-baskerville"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/lora", "name": "lora", "class": "font-lora"}, {"styles": ["regular", "bold", "light", "ultra-bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/merriweather", "name": "merriweather", "class": "font-merriweather"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/My-Underwood", "name": "my-underwood", "class": "font-my-underwood"}, {"styles": ["regular", "bold", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/neuton", "name": "neuton", "class": "font-neuton"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/New-Athena-Unicode", "name": "new-athena-unicode", "class": "font-new-athena-unicode"}, {"styles": ["regular", "bold", "bolditalic", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/noto-serif", "name": "noto-serif", "class": "font-noto-serif"}, {"styles": ["regular", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Old-Standard-TT", "name": "old-standard", "class": "font-old-standard"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/otama-ep", "name": "otama-ep", "class": "font-otama-ep"}, {"styles": ["regular", "bold", "italic"], "ending": "ttf", "name": "playfair-capital", "class": "font-playfair-capital"}, {"styles": ["regular", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/playfair-display", "name": "playfair-display", "class": "font-playfair-display"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/quattrocento-roman", "name": "quattrocento", "class": "font-quattrocento"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/sears-tower", "name": "sears-tower", "class": "font-sears-tower"}, {"styles": ["regular", "bold", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Sling", "name": "sling", "class": "font-sling"}, {"styles": ["regular", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Sorts-Mill-Goudy", "name": "sorts-mill-goudy", "class": "font-sorts-mill-goudy"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/special-elite", "name": "special-elite", "class": "font-special-elite"}, {"styles": ["regular", "capital"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/spinwerad", "name": "spinwerad", "class": "font-spinwerad"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Theano-Didot", "name": "theano-didot", "class": "font-theano-didot"}, {"styles": ["regular", "bold", "italic", "medium"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/vollkorn", "name": "vollkorn", "class": "font-vollkorn"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/znikomit", "name": "znikomit", "class": "font-znikomit"}]

monospaceFontDict = [{"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Anonymous", "name": "anonymous", "class": "font-anonymous"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Anonymous-Pro", "name": "anonymous-pro", "class": "font-anonymous-pro"}, {"styles": ["regular", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/BPmono", "name": "bpmono", "class": "font-bpmono"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/cousine", "name": "cousine", "class": "font-cousine"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/droid-sans-mono", "name": "droid-sans-mono", "class": "font-droid-sans-mono"}, {"styles": ["regular", "bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/fira-mono", "name": "fira-mono", "class": "font-fira-mono"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/hack", "name": "hack", "class": "font-hack"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Inconsolata", "name": "inconsolata", "class": "font-inconsolata"}, {"styles": ["regular", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/lekton", "name": "lekton", "class": "font-lekton"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Liberation-Mono", "name": "liberation-mono", "class": "font-liberation-mono"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Luxi-Mono", "name": "luxi-mono", "class": "font-luxi-mono"}, {"styles": ["regular", "bold", "light", "medium", "thin"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/M-1m", "name": "m-1m", "class": "font-m-1m"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/MonospaceTypewriter", "name": "monospacetypewriter", "class": "font-monospacetypewriter"}, {"styles": ["regular", "bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/NotCourierSans", "name": "notcouriersans", "class": "font-notcouriersans"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/oxygen-mono", "name": "oxygen-mono", "class": "font-oxygen-mono"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/pt-mono", "name": "pt-mono", "class": "font-pt-mono"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/saxMono", "name": "saxmono", "class": "font-saxmono"}, {"styles": ["regular", "black-italic", "black", "bold-italic", "bold", "extra-light-italic", "extra-light", "italic", "light-italic", "light", "medium-italic", "medium", "semi-bold-italic", "semi-bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/source-code-pro", "name": "source-code-pro", "class": "font-source-code-pro"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/TeX-Gyre-Cursor", "name": "tex-gyre-cursor", "class": "font-tex-gyre-cursor"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/ubuntu-mono", "name": "ubuntu-mono", "class": "font-ubuntu-mono"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Bitstream-Vera-Sans-Mono", "name": "veramono", "class": "font-veramono"}]

handwritingFontDict = [{"styles": ["regular", "2d"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/3Dumb", "name": "3dumb", "class": "font-3dumb"}, {"styles": ["regular", "bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/amatic", "name": "amatic", "class": "font-amatic"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/architects-daughter", "name": "architects-daughter", "class": "font-architects-daughter"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Belligerent-Madness", "name": "belligerent", "class": "font-belligerent"}, {"styles": ["regular", "bold", "medium"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Blokletters-Potlood", "name": "blokletters-potlood", "class": "font-blokletters-potlood"}, {"styles": ["regular", "medium"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/daniel", "name": "daniel", "class": "font-daniel"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Desyrel", "name": "desyrel", "class": "font-desyrel"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/DJ-Gross", "name": "dj-gross", "class": "font-dj-gross"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/drawveticamini", "name": "drawveticamini", "class": "font-drawveticamini"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/ElliotSix", "name": "elliotsix", "class": "font-elliotsix"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Eraser", "name": "eraser", "class": "font-eraser"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Flux", "name": "flux", "class": "font-flux"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/frente-h1", "name": "frente-h1", "class": "font-frente-h1"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Gong", "name": "gong", "class": "font-gong"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Good-Foot", "name": "good-foot", "class": "font-good-foot"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/GoodDog", "name": "gooddog", "class": "font-gooddog"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/HarabaraHand", "name": "harabarahand", "class": "font-harabarahand"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Hetilica", "name": "hetilica", "class": "font-hetilica"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Idolwild", "name": "idolwild", "class": "font-idolwild"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Jinky", "name": "jinky", "class": "font-jinky"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Journal", "name": "journal", "class": "font-journal"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Jr-Hand", "name": "jr-hand", "class": "font-jr-hand"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Krazy-Nights", "name": "krazy-nights", "class": "font-krazy-nights"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/kristi", "name": "kristi", "class": "font-kristi"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/leckerli-one", "name": "leckerli-one", "class": "font-leckerli-one"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Lilly", "name": "lilly", "class": "font-lilly"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/mathlete", "name": "mathlete", "class": "font-mathlete"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/montez", "name": "montez", "class": "font-montez"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/mountains-of-christmas", "name": "mountains-of-christmas", "class": "font-mountains-of-christmas"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Note-this", "name": "note-this", "class": "font-note-this"}, {"styles": ["regular", "bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/PaulMaul", "name": "paulmaul", "class": "font-paulmaul"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Pecita", "name": "pecita", "class": "font-pecita"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/permanent-marker", "name": "permanent-marker", "class": "font-permanent-marker"}, {"styles": ["regular", "italic", "outline"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Playtime-With-Hot-Toddies", "name": "playtime", "class": "font-playtime"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Poilet-Taper", "name": "poilet-taper", "class": "font-poilet-taper"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/pompiere", "name": "pompiere", "class": "font-pompiere"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Rabiohead", "name": "rabiohead", "class": "font-rabiohead"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/redressed", "name": "redressed", "class": "font-redressed"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/rock-salt", "name": "rock-salt", "class": "font-rock-salt"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Scratch", "name": "scratch", "class": "font-scratch"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/short-stack", "name": "short-stack", "class": "font-short-stack"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Snickles", "name": "snickles", "class": "font-snickles"}, {"styles": ["regular", "fade"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Soft-Sugar-plain", "name": "soft-sugar-plain", "class": "font-soft-sugar-plain"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Tinet", "name": "tinet", "class": "font-tinet"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/TrashHand", "name": "trashhand", "class": "font-trashhand"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/VAG-HandWritten", "name": "vag-handwritten", "class": "font-vag-handwritten"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Wagnasty", "name": "wagnasty", "class": "font-wagnasty"}, {"styles": ["regular", "bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/WC-Mano-Negra-Bta", "name": "wc-mano-negra", "class": "font-wc-mano-negra"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/yellowtail", "name": "yellowtail", "class": "font-yellowtail"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Yesterdays-meal", "name": "yesterdays-meal", "class": "font-yesterdays-meal"}]

sansSerifFontDict = [{"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Aaargh", "name": "aaargh", "class": "font-aaargh"}, {"styles": ["regular", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/afta-sans", "name": "afta-sans", "class": "font-afta-sans"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/amaranth", "name": "amaranth", "class": "font-amaranth"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-condensed-italic", "light-condensed", "light-italic", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/amble", "name": "amble", "class": "font-amble"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/arimo", "name": "arimo", "class": "font-arimo"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/arsenal", "name": "arsenal", "class": "font-arsenal"}, {"styles": ["regular", "bold-italic", "bold", "italic", "medium-italic", "medium"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/asap", "name": "asap", "class": "font-asap"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Aurulent-Sans", "name": "aurulent-sans", "class": "font-aurulent-sans"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/BonvenoCF", "name": "bonvenocf", "class": "font-bonvenocf"}, {"styles": ["regular", "bold-italic", "bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/BPreplay", "name": "bpreplay", "class": "font-bpreplay"}, {"styles": ["regular", "bold-italic", "bold", "italic", "medium-italic", "medium", "semi-bold-italic", "semi-bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/cabin", "name": "cabin", "class": "font-cabin"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/capsuula", "name": "capsuula", "class": "font-capsuula"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Caviar-Dreams", "name": "caviar-dreams", "class": "font-caviar-dreams"}, {"styles": ["regular", "bold-italic", "bold", "italic", "semi-italic", "semi", "shadow"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Cicle", "name": "cicle", "class": "font-cicle"}, {"styles": ["regular", "bold", "light", "medium", "thin"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Colaborate", "name": "colaborate", "class": "font-colaborate"}, {"styles": ["regular", "bold", "thin"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Comfortaa", "name": "comfortaa", "class": "font-comfortaa"}, {"styles": ["regular", "bold-italic", "bold", "condensed-bold-italic", "condensed-bold", "condensed-italic", "condensed", "extra-light", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/dejavu-sans", "name": "dejavu-sans", "class": "font-dejavu-sans"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/DISCO", "name": "disco", "class": "font-disco"}, {"styles": ["regular", "bold", "extra-bold", "extra-light", "light", "medium", "semi-bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/dosis", "name": "dosis", "class": "font-dosis"}, {"styles": ["regular", "bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/droid-sans", "name": "droid-sans", "class": "font-droid-sans"}, {"styles": ["regular", "stencil", "unicase"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Existence-Light", "name": "existence-light", "class": "font-existence-light"}, {"styles": ["regular", "black-italic", "black", "bold-italic", "bold", "extra-bold-italic", "extra-bold", "extra-light-italic", "extra-light", "italic", "light-italic", "light", "medium-italic", "medium", "semi-bold-italic", "semi-bold", "thin-italic", "thin"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/exo", "name": "exo", "class": "font-exo"}, {"styles": ["regular", "bold", "book", "eight", "extra-light", "italic", "medium", "ultra"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/fira-sans", "name": "fira-sans", "class": "font-fira-sans"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Greyscale-Basic", "name": "greyscale-basic", "class": "font-greyscale-basic"}, {"styles": ["regular", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Hattori-Hanzo", "name": "hattori-hanzo", "class": "font-hattori-hanzo"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light", "semi-bold-italic", "semi-bold", "thin-italic", "thin"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/josefin-sans", "name": "josefin-sans", "class": "font-josefin-sans"}, {"styles": ["regular", "black", "bold", "hairline", "heavy", "italic", "light", "medium"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/lato", "name": "lato", "class": "font-lato"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Molot", "name": "molot", "class": "font-molot"}, {"styles": ["regular", "black", "bold", "hairline", "light", "ultra-light"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/montserrat", "name": "montserrat", "class": "font-montserrat"}, {"styles": ["regular", "bold-italic", "bold", "italic", "semi"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/New-Cicle", "name": "new-cicle", "class": "font-new-cicle"}, {"styles": ["regular", "bold-italic", "bold", "italic", "medium-italic", "medium"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Nobile", "name": "nobile", "class": "font-nobile"}, {"styles": ["regular", "bold-italic", "bold", "extra-bold-italic", "extra-bold", "italic", "light-italic", "light", "semi-bold-italic", "semi-bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/open-sans", "name": "open-sans", "class": "font-open-sans"}, {"styles": ["regular", "bold", "light-italic", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/open-sans-condensed", "name": "open-sans-condensed", "class": "font-open-sans-condensed"}, {"styles": ["regular", "black-italic", "black", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/overlock", "name": "overlock", "class": "font-overlock"}, {"styles": ["regular", "bold", "dashed"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Print-Clearly", "name": "print-clearly", "class": "font-print-clearly"}, {"styles": ["regular", "bold", "italic", "narrow"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/PT-Sans", "name": "pt-sans", "class": "font-pt-sans"}, {"styles": ["regular", "bold-italic", "bold", "dash", "italic", "light-italic", "light"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/quicksand", "name": "quicksand", "class": "font-quicksand"}, {"styles": ["regular", "black", "bold", "italic", "light", "lightitalic", "medium"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/raleway", "name": "raleway", "class": "font-raleway"}, {"styles": ["regular", "black", "bold", "condensed-bold", "condensed-italic", "condensed-light", "condensed-regular", "italic", "light", "medium", "thin"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/roboto", "name": "roboto", "class": "font-roboto"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/sansation", "name": "sansation", "class": "font-sansation"}, {"styles": ["regular", "bold", "light", "semi-bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/signika", "name": "signika", "class": "font-signika"}, {"styles": ["regular", "bold", "italic", "light", "medium", "thin"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/sinkin-sans", "name": "sinkin-sans", "class": "font-sinkin-sans"}, {"styles": ["regular", "black-italic", "black", "bold", "italic", "light-italic", "light", "semi-bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/source-sans-pro", "name": "source-sans-pro", "class": "font-source-sans-pro"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/TeX-Gyre-Adventor", "name": "tex-gyre-adventor", "class": "font-tex-gyre-adventor"}, {"styles": ["regular", "black", "bold-upright", "bold", "italic", "light-upright", "light", "semi-bold", "thin-upright", "thin", "upright"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Titillium", "name": "titillium", "class": "font-titillium"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/ubuntu", "name": "ubuntu", "class": "font-ubuntu"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Bitstream-Vera-Sans", "name": "vera-sans", "class": "font-vera-sans"}, {"styles": ["regular", "black-italic", "black", "bold-italic", "bold", "semi-bold-italic", "semi-bold", "ultra-bold-italic", "ultra-bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Walkway", "name": "walkway", "class": "font-walkway"}, {"styles": ["regular", "bold", "extra-light", "light"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/yanone-kaffeesatz", "name": "yanone-kaffeesatz", "class": "font-yanone-kaffeesatz"}]

scriptFontDict = [{"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/aguafina-script", "name": "aguafina-script", "class": "font-aguafina-script"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/alex-brush", "name": "alex-brush", "class": "font-alex-brush"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/allura", "name": "allura", "class": "font-allura"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/arizonia", "name": "arizonia", "class": "font-arizonia"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/bilbo", "name": "bilbo", "class": "font-bilbo"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/BlackJack", "name": "black-jack", "class": "font-black-jack"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/CAC-Champagne", "name": "cac-champagne", "class": "font-cac-champagne"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Carrington", "name": "carrington", "class": "font-carrington"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/condiment", "name": "condiment", "class": "font-condiment"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/dancing-script-ot", "name": "dancing-script", "class": "font-dancing-script"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Dobkin", "name": "dobkin", "class": "font-dobkin"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/dynalight", "name": "dynalight", "class": "font-dynalight"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/England-Hand-DB", "name": "england", "class": "font-england"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/euphoria-script", "name": "euphoria-script", "class": "font-euphoria-script"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Freebooter-Script", "name": "freebooter-script", "class": "font-freebooter-script"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/grand-hotel", "name": "grand-hotel", "class": "font-grand-hotel"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/great-vibes", "name": "great-vibes", "class": "font-great-vibes"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/HenryMorganHand", "name": "henry-morgan-hand", "class": "font-henry-morgan-hand"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/herr-von-muellerhoff", "name": "herr-von-muellerhoff", "class": "font-herr-von-muellerhoff"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/italianno", "name": "italianno", "class": "font-italianno"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/kaushan-script", "name": "kaushan-script", "class": "font-kaushan-script"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Wrote", "name": "kingthings-wrote", "class": "font-kingthings-wrote"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/konstytucyja", "name": "konstytucyja", "class": "font-konstytucyja"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Landliebe", "name": "landliebe", "class": "font-landliebe"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/league-script", "name": "league-script", "class": "font-league-script"}, {"styles": ["regular", "dashed"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Learning-Curve-Pro", "name": "learning-curve-pro", "class": "font-learning-curve-pro"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Lobster", "name": "lobster", "class": "font-lobster"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/lobster-two", "name": "lobster-two", "class": "font-lobster-two"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/lovers-quarrel", "name": "lovers-quarrel", "class": "font-lovers-quarrel"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Miama", "name": "miama", "class": "font-miama"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Mutlu", "name": "mutlu", "class": "font-mutlu"}, {"styles": ["regular", "bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/odstemplik", "name": "odstemplik", "class": "font-odstemplik"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/pacifico", "name": "pacifico", "class": "font-pacifico"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Promocyja", "name": "promocyja", "class": "font-promocyja"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/QuigleyWiggly", "name": "quigleywiggly", "class": "font-quigleywiggly"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/qumpellkano12", "name": "qumpellkano12", "class": "font-qumpellkano12"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/qwigley", "name": "qwigley", "class": "font-qwigley"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Rechtman", "name": "rechtman", "class": "font-rechtman"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/rochester", "name": "rochester", "class": "font-rochester"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/ruthie", "name": "ruthie", "class": "font-ruthie"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/sail", "name": "sail", "class": "font-sail"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Scriptina", "name": "scriptina", "class": "font-scriptina"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/scriptina-pro", "name": "scriptina-pro", "class": "font-scriptina-pro"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/sevillana", "name": "sevillana", "class": "font-sevillana"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/SF-Burlington-Script", "name": "sf-burlington-script", "class": "font-sf-burlington-script"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/sofia", "name": "sofia", "class": "font-sofia"}, {"styles": ["regular", "bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Tangerine", "name": "tangerine", "class": "font-tangerine"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Windsong", "name": "windsong", "class": "font-windsong"}]

displayFontDict = [{"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/20-db", "name": "20db", "class": "font-20db"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/abril-fatface", "name": "abril-fatface", "class": "font-abril-fatface"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Acknowledgement", "name": "acknowledgement", "class": "font-acknowledgement"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/alfa-slab", "name": "alfa-slab", "class": "font-alfa-slab"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Amadeus", "name": "amadeus", "class": "font-amadeus"}, {"styles": ["regular", "bold", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/antonio", "name": "antonio", "class": "font-antonio"}, {"styles": ["regular", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/AnuDaw", "name": "anudaw", "class": "font-anudaw"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Aquiline-two", "name": "aquiline-two", "class": "font-aquiline-two"}, {"styles": ["regular", "bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/archistico", "name": "archistico", "class": "font-archistico"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Bebas", "name": "bebas", "class": "font-bebas"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/bellota", "name": "bellota", "class": "font-bellota"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/bevan", "name": "bevan", "class": "font-bevan"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Black-Rose", "name": "black-rose", "class": "font-black-rose"}, {"styles": ["regular", "inverse"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Blackout", "name": "blackout", "class": "font-blackout"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Boycott", "name": "boycott", "class": "font-boycott"}, {"styles": ["regular", "bold", "diamond-bold", "diamond-light", "diamond", "light", "minus-bold", "minus", "plus-bold", "plus", "square-bold", "square-light", "square", "vertical-bold", "vertical"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/BPdots", "name": "bpdots", "class": "font-bpdots"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Brushstroke-Plain", "name": "brushstroke-plain", "class": "font-brushstroke-plain"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/bubblegum-sans", "name": "bubblegum-sans", "class": "font-bubblegum-sans"}, {"styles": ["regular", "bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/cabinsketch", "name": "cabinsketch", "class": "font-cabinsketch"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/ChunkFive", "name": "chunkfive", "class": "font-chunkfive"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Clutchee", "name": "clutchee", "class": "font-clutchee"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Days", "name": "days", "class": "font-days"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Destroy", "name": "destroy", "class": "font-destroy"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Edo", "name": "edo", "class": "font-edo"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/exotica", "name": "exotica", "class": "font-exotica"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/frente-h1", "name": "frente-h1", "class": "font-frente-h1"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/GreatLakesNF", "name": "greatlakesnf", "class": "font-greatlakesnf"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/GrutchShaded", "name": "grutchshaded", "class": "font-grutchshaded"}, {"styles": ["regular", "narrow", "posh"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Lane", "name": "lane", "class": "font-lane"}, {"styles": ["regular", "condensed-italic", "condensed-regular", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/League-Gothic", "name": "league-gothic", "class": "font-league-gothic"}, {"styles": ["regular", "outline", "shadow", "sketch"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/londrina", "name": "londrina", "class": "font-londrina"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Matchbook", "name": "matchbook", "class": "font-matchbook"}, {"styles": ["regular", "bold", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/NeoRetroDraw", "name": "neo-retro", "class": "font-neo-retro"}, {"styles": ["regular", "black", "bold", "light"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Orbitron", "name": "orbitron", "class": "font-orbitron"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/osp-din", "name": "osp-din", "class": "font-osp-din"}, {"styles": ["regular", "black", "bold", "dashed", "light", "rounded"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/ostrich-sans", "name": "ostrich", "class": "font-ostrich"}, {"styles": ["regular", "bold-italic", "bold", "demi-bold-italic", "demi-bold", "extra-light-italic", "extra-light", "heavy-italic", "heavy", "italic", "light-italic", "light", "medium-italic", "medium", "stencil"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/oswald", "name": "oswald", "class": "font-oswald"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Pincoyablack", "name": "pincoyablack", "class": "font-pincoyablack"}, {"styles": ["regular", "extra-bold", "black-italic", "black", "bold-italic", "bold", "extra-bold-italic", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/sansita", "name": "sansita", "class": "font-sansita"}, {"styles": ["regular", "solid"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/SF-Collegiate", "name": "sf-collegiate", "class": "font-sf-collegiate"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/six-caps", "name": "six-caps", "class": "font-six-caps"}, {"styles": ["regular", "3d"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Spin-Cycle-OT", "name": "spincycle", "class": "font-spincycle"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Ubuntu-Title", "name": "ubuntu-title", "class": "font-ubuntu-title"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Ubuntu-Titling", "name": "ubuntu-titling", "class": "font-ubuntu-titling"}, {"styles": ["regular", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/UglyQua", "name": "uglyqua", "class": "font-uglyqua"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/ultra", "name": "ultra", "class": "font-ultra"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Vanilla", "name": "vanilla", "class": "font-vanilla"}, {"styles": ["regular", "light", "medium"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Veggieburger", "name": "veggieburger", "class": "font-veggieburger"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/znikomitno24", "name": "znikomitno24", "class": "font-znikomitno24"}]

blackletterFontDict = [{"styles": ["regular", "open", "outline"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Dearest", "name": "dearest", "class": "font-dearest"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Deutsch-Gothic", "name": "deutsch-gothic", "class": "font-deutsch-gothic"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Genzsch-Et-Heyse", "name": "genzsch-et-heyse", "class": "font-genzsch-et-heyse"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Gothique", "name": "kingthings-gothique", "class": "font-kingthings-gothique"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Italique", "name": "kingthings-italique", "class": "font-kingthings-italique"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Spikeless", "name": "kingthings-spikeless", "class": "font-kingthings-spikeless"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/new-rocker", "name": "new-rocker", "class": "font-new-rocker"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Portcullion", "name": "portcullion", "class": "font-portcullion"}, {"styles": ["regular", "heavy", "incised"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Proclamate", "name": "proclamate", "class": "font-proclamate"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Rapscallion", "name": "rapscallion", "class": "font-rapscallion"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Rothenburg-Decorative", "name": "rothenburg", "class": "font-rothenburg"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Teutonic-No1", "name": "teutonic", "class": "font-teutonic"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Zenda", "name": "zenda", "class": "font-zenda"}]

slabSerifFontDict = [{"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/aleo", "name": "aleo", "class": "font-aleo"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/arvo", "name": "arvo", "class": "font-arvo"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/bitter", "name": "bitter", "class": "font-bitter"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Bodonitown", "name": "bodonitown", "class": "font-bodonitown"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/bree-serif", "name": "bree-serif", "class": "font-bree-serif"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/copse", "name": "copse", "class": "font-copse"}, {"styles": ["regular", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/crete-round", "name": "crete-round", "class": "font-crete-round"}, {"styles": ["regular", "bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/enriqueta", "name": "enriqueta", "class": "font-enriqueta"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/gaspar", "name": "gaspar", "class": "font-gaspar"}, {"styles": ["regular", "bold-italic", "bold", "italic", "light-italic", "light", "semibold-italic", "semibold", "thin-italic", "thin"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/josefin-slab", "name": "josefin-slab", "class": "font-josefin-slab"}, {"styles": ["regular", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Kontrapunkt", "name": "kontrapunkt", "class": "font-kontrapunkt"}, {"styles": ["regular", "bold", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/kreon", "name": "kreon", "class": "font-kreon"}, {"styles": ["regular", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/linden-hill", "name": "lindenhill", "class": "font-lindenhill"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/nixie-one", "name": "nixie-one", "class": "font-nixie-one"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/noticia-text", "name": "noticia-text", "class": "font-noticia-text"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/patua-one", "name": "patua-one", "class": "font-patua-one"}, {"styles": ["regular", "bold", "italic"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/permian-slab", "name": "permian-slab", "class": "font-permian-slab"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/podkova", "name": "podkova", "class": "font-podkova"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/pt-serif", "name": "pt-serif", "class": "font-pt-serif"}, {"styles": ["regular", "bold", "capital", "demi-bold", "light", "ultra-light"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/rawengulk", "name": "rawengulk", "class": "font-rawengulk"}, {"styles": ["regular", "bold", "light", "thin"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/roboto-slab", "name": "roboto-slab", "class": "font-roboto-slab"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/rokkitt", "name": "rokkitt", "class": "font-rokkitt"}, {"styles": ["regular", "serif"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/slabo", "name": "slabo", "class": "font-slabo"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/st-marie", "name": "st-marie", "class": "font-st-marie"}, {"styles": ["regular", "bold", "heavy"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/tienne", "name": "tienne", "class": "font-tienne"}, {"styles": ["regular", "bold"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/trocchi", "name": "trocchi", "class": "font-trocchi"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/TypoSlabserif-Light", "name": "typo-slab-serif", "class": "font-typo-slab-serif"}, {"styles": ["regular", "bold"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Bitstream-Vera-Serif", "name": "veraserif", "class": "font-veraserif"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/zantroke", "name": "zantroke", "class": "font-zantroke"}]

typewriterFontDict = [{"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/1942-report", "name": "1942", "class": "font-1942"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/CarbonType", "name": "carbontype", "class": "font-carbontype"}, {"styles": ["regular", "bold-italic", "bold", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/courier-prime", "name": "courier-prime", "class": "font-courier-prime"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Harting", "name": "harting", "class": "font-harting"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Trypewriter", "name": "kingthings-typewriter", "class": "font-kingthings-typewriter"}, {"styles": ["regular", "bold-italic", "bold", "capital-italic", "capital", "condensed-italic", "condensed", "italic", "light"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Latin-Modern-Mono", "name": "latin-modern-mono", "class": "font-latin-modern-mono"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/MomsTypewriter", "name": "moms-typewriter", "class": "font-moms-typewriter"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/My-Underwood", "name": "my-underwood", "class": "font-my-underwood"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/sears-tower", "name": "sears-tower", "class": "font-sears-tower"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Secret-Typewriter", "name": "secret-typewriter", "class": "font-secret-typewriter"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/special-elite", "name": "special-elite", "class": "font-special-elite"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Underwood-Champion", "name": "underwood-champion", "class": "font-underwood-champion"}]

calligraphicFontDict = [{"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/calligraffiti", "name": "calligraffiti", "class": "font-calligraffiti"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Chantelli-Antiqua", "name": "chantelli-antiqua", "class": "font-chantelli-antiqua"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/felipa", "name": "felipa", "class": "font-felipa"}, {"styles": ["regular", "italic"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Florante-at-Laura", "name": "florante-at-laura", "class": "font-florante-at-laura"}, {"styles": ["regular", "swash"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Gondola-SD", "name": "gondola-sd", "class": "font-gondola-sd"}, {"styles": ["regular"], "ending": "otf", "link": "http://www.fontsquirrel.com/fonts/download/Gothic-Ultra-OT", "name": "gothic-ultra-ot", "class": "font-gothic-ultra-ot"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Kells-SD", "name": "kells-sd", "class": "font-kells-sd"}, {"styles": ["regular", "italic", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Calligraphica", "name": "kingthings-calligraphica", "class": "font-kingthings-calligraphica"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Exeter", "name": "kingthings-exeter", "class": "font-kingthings-exeter"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Foundation-", "name": "kingthings-foundation", "class": "font-kingthings-foundation"}, {"styles": ["regular", "light"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Kingthings-Petrock", "name": "kingthings-petrock", "class": "font-kingthings-petrock"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/MothproofScript", "name": "mothproofscript", "class": "font-mothproofscript"}, {"styles": ["regular"], "ending": "ttf", "link": "http://www.fontsquirrel.com/fonts/download/Roman-Caps", "name": "roman-caps", "class": "font-roman-caps"}]

var counter = 0;
var fontListId = '#serif-list';
var fontListLength = serifFontDict.length;
var fontClassGlobal = serifFontDict[0]["class"];

var fontClassCounter = 0;
var fontClassLength = fontClasses.length;

var fontStyleCounter = 0;
var fontStyleLength = serifFontDict[0]["styles"].length;
var currentFontStyleArray = serifFontDict[0]["styles"];

var textToStyle = '';

var nightView = false;

var dummyWord = "Word";
var dummyPara = "Hey I'm a paragraph. I'm way cooler than that dull Lorem Ipsum piece of text. Atleast you know what I am saying! Look I also have some shiny numbers for you 1,2,3,4,5. Am I not way better? (subtle inclusion of a punctuation mark). Lorem ipsum had its day as did that damn brown fox but I think it's time for us to move on. You with me?\n\nAs a final little push let me throw in a joke for you as well...What did the Buffalo say to his son when he left for college? Bison. In your face fellow dummy texts"
var dummyParaShort = "Hey I'm a paragraph. I'm way cooler than that dull Lorem Ipsum piece of text. Look I also have some shiny numbers.. Ah whatever, these small boxes are really cramping my style! I'm better ok!"
var dummyWordSet = false;
var dummyParaSet = false;


function capitalize(str){
	return str.replace(/\w\S*/g, function(txt){
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	})
}

// CHANGE FONTS - open sans, droid, 20db etc
function nextFont(){
	if(counter == fontListLength-1){
		counter = 0
	} else {
		counter++
	}

	setFontOnKeyPress();
}

function prevFont(){
	if(counter == 0){
		counter = fontListLength - 1
	} else {
		counter--
	}

	setFontOnKeyPress();
}


function setFontOnKeyPress(){
	Session.set('counter',counter)
	console.log(counter);
	//get current list element
	var listElement = $(fontListId + ' li').eq(counter)[0];
	// find data attr of a tag in li to set font class and btn name
	var aElement = $(listElement).find("a")
	var fontClass = aElement.attr("data-font-class")
	var fontName = aElement.html()
	// set text of btn
	$(fontListId+"-btn").html(fontName);
	//set text of select box
	$(fontListId+"-select").val(fontName);
	// set font class
	fontClassGlobal = fontClass;

	$("#font-style-btn").html("Regular")
	setFont(fontClass);
}

//CHANGE FONT STYLES - bold, regular, italic etc
function nextFontStyle(){
	if(fontStyleCounter == fontStyleLength-1){
		fontStyleCounter = 0
	} else {
		fontStyleCounter++
	}

	setFontStyle(currentFontStyleArray[fontStyleCounter])
}

function prevFontStyle(){
	if(fontStyleCounter == 0){
		fontStyleCounter = fontStyleLength-1
	} else {
		fontStyleCounter--
	}

	setFontStyle(currentFontStyleArray[fontStyleCounter])
}

function setFontStyle(styleName){
	var fontClass = fontClassGlobal

	if(styleName != 'regular'){
		fontClass += "-"+styleName
	}
	$("#font-style-btn").html(capitalize(styleName));

	setFont(fontClass)
}

//CHANGE FONT CLASS - serif, all, sans-serif etc
function nextFontClass(){
	if(fontClassCounter == fontClassLength - 1){
		fontClassCounter = 0
	} else {
		fontClassCounter++
	}

	setFontClass(fontClasses[fontClassCounter])
}

function prevFontClass(){
	if(fontClassCounter==0){
		fontClassCounter = fontClassLength - 1
	} else {
		fontClassCounter--
	}

	setFontClass(fontClasses[fontClassCounter])
}

function setFontClass(fontClassName){

	counter = 0;
	var listToDisplay = "#"+fontClassName+ "-list";

	$("#font-type-btn").html(capitalize(fontClassName));

	// set which font class is selected
	Session.set('fontClass',fontClassName)
	Session.set('counter',counter)

	//set global variables to hold the newly displayed list
	fontListLength = window[getFontDict()].length
	fontListId = listToDisplay;

	fontClassGlobal = fontSwitchCase("class")

	// console.log("FONT LENGTH: " + fontListLength);
	// console.log("FONT LIST ID: " + fontListId)
	// console.log("FONT CLASS: " + Session.get('fontClass'))
	// console.log("FONT COUNTER: " + Session.get('counter'))
	// console.log("FONT CLASS GLOBAL: " + fontClassGlobal)

	resetFont()
}

// main function - sets the font. called by all functions
function setFont(fontClass){
	//console.log("RECEIVED FONT CLASS: " + fontClass)

	currentFontStyleArray = fontSwitchCase("styles");
	fontStyleLength = currentFontStyleArray.length;
	checkForStyles(fontStyleLength);
	$("#text").removeClass();
	$("#text").addClass(fontClass);
}

// reset font list when font class is changed
function resetFont(){

	counter = 0;
	$("#font-style-btn").html("Regular")

	var dictToUse = getFontDict()

	var fontClassToSet = window[dictToUse][0]["class"]
	var fontName = window[dictToUse][0]["name"]

	//fontName = capitalize(fontName);
	Session.set("fontName", fontName);

	// reset to empty othrwise printing double
	$(".font-btn").html('')

	setFont(fontClassToSet)
}

//return value from dict based on current font class
function fontSwitchCase(searchFor){

	var c = Session.get('counter') || counter
	return window[getFontDict()][c][searchFor]

}

function getFontDict(){
	var fontClass = Session.get('fontClass') || 'serif'
	var font_class = fontClass.split("-")

	if(font_class.length > 1){
		font_class = font_class[0] + capitalize(font_class[1]);
	} else {
		font_class = String(font_class)
	}

	return font_class + "FontDict";
}

//mute the color to show it has no styles
function checkForStyles(styleLength){
	var styleBtn = $("#font-style-btn")
	if(styleLength > 1){
		styleBtn.removeClass("no-font-styles")
	} else {
		styleBtn.addClass("no-font-styles")
	}
}

// change size of text in textarea
function setFontSizeOnKeyPress(increase){
	var currentFontSize = parseInt($("#text").css('font-size')) || parseInt($(".list-input").css('font-size'));

	if(increase){
		if(currentFontSize <= 100){
			currentFontSize+=2;
		}
	} else {
		if(currentFontSize >= 10){
			currentFontSize-=2;
		}
	}
	
	$("#text").css('font-size',currentFontSize);
	$(".list-input").css('font-size',currentFontSize);
	//set btn text to current font size
	$("#font-size-list-btn").html(currentFontSize + " px");
}

function setFontSize(size){
	console.log("SIZE SENT IN: "+ size);
	var currentFontSize = size;
	console.log("CURRENT FONT SIZE: "+ currentFontSize)
	$("#text").css('font-size',currentFontSize);
	$(".list-input").css('font-size',currentFontSize);
	//set btn text to current font size
	$("#font-size-list-btn").html(currentFontSize + " px");
}

$.fn.inView = function(inViewType){
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = this.offset().top;
    bounds.bottom = bounds.top + this.outerHeight();
    switch(inViewType){
      case 'bottomOnly':
        return ((bounds.bottom <= viewport.bottom) && (bounds.bottom >= viewport.top));
      case 'topOnly':
        return ((bounds.top <= viewport.bottom) && (bounds.top >= viewport.top));
      case 'both':
        return ((bounds.top >= viewport.top) && (bounds.bottom <= viewport.bottom));         
      default:     
        return ((bounds.top >= viewport.top) && (bounds.bottom <= viewport.bottom));        
    }
};

// HELPERS AND INITIALIZATION CODE
Template.registerHelper('capitalize', capitalize)

Template.registerHelper('equals', function(route, currentRoute){
	return route == currentRoute;
})

Template.text.onRendered(function(){
	var self = $("#text")
	self.focus();

	if(nightView){
		self.addClass('inverted')
	}

	if(dummyWordSet){
		self.val(dummyWord)
		setFontSize(64)
	}

	if(dummyParaSet){
		self.val(dummyPara)
		setFontSize(18)
	}
})

Template.list.onRendered(function(){

	var self = $(".list-input");

	if(nightView){
		self.addClass('inverted')
	}

	if(dummyWordSet){
		self.val(dummyWord)
		setFontSize(64)
	}

	if(dummyParaSet){
		self.val(dummyParaShort)
		setFontSize(18)
	}
})

Template.sidebar.onRendered(function(){
	checkForStyles(fontStyleLength);
})


// EVENTS
Template.body.events({
	"keydown": function(event){

		var route = Router.current().route.getName()
		//UP KEY
		if(event.keyCode == 38 && route=='text'){
			setFontSizeOnKeyPress(true);
		}

		if(event.keyCode == 38 && route=='list'){
			event.preventDefault()
			setFontSizeOnKeyPress(true);
		}

		// DOWN KEY
		if(event.keyCode == 40 && route=='text'){
			setFontSizeOnKeyPress(false);
		}

		if(event.keyCode == 40 && route=='list'){
			event.preventDefault();
			setFontSizeOnKeyPress(false);
		}

		// RIGHT KEY
		if(event.keyCode == 39 && route=='text'){
			event.preventDefault()
			$("#text").blur()
			nextFont()	
		}

		if(event.keyCode == 39 && route=='list'){
			event.preventDefault();
			nextFontClass()	
		}

		// LEFT KEY
		if(event.keyCode == 37 && route=='text'){
			event.preventDefault()
			$("#text").blur()
			prevFont()
		}

		if(event.keyCode == 37 && route=='list'){
			event.preventDefault();
			prevFontClass()
		}
	},

	"click .dummy-word": function(event){
		event.preventDefault();
		$("#text").val(dummyWord);
		$(".list-input").val(dummyWord);
		dummyWordSet = true;
		dummyParaSet = false;
		setFontSize(64);
	},

	"click .dummy-para": function(event){
		event.preventDefault();
		$("#text").val(dummyPara);
		$(".list-input").val(dummyParaShort);
		dummyWordSet = false;
		dummyParaSet = true;
		setFontSize(18);
	},

	"click .dummy-clear": function(event){
		event.preventDefault();
		$("#text").val("");
		$(".list-input").val("");
		dummyWordSet = false;
		dummyParaSet = false;
		setFontSize(64);
	}

})

Template.topbar.events({
	"click .img-responsive": function(event){
		//resetFont()
		if(Router.current().route.getName() != 'text'){
			counter=0;
		}
	},

	"click .view-link": function(event){
		resetFont()
	},

	"click .view-link-mobile": function(event){
		resetFont();
	},

	"click .night-view-link": function(event){
		event.preventDefault();
		var textField = $("#text");
		var textListFields = $(".list-input")
		var nightBtn = $(event.target)

		if(textField.hasClass('inverted') || textListFields.hasClass('inverted')){
			textField.removeClass('inverted')
			textListFields.removeClass('inverted')
			nightBtn.html("Night View")
			nightBtn.removeClass('day-view-link')
			nightView = false;
		} else {
			textField.addClass('inverted')
			textListFields.addClass('inverted')
			nightBtn.html("Day View")
			nightBtn.addClass('day-view-link')
			nightView = true;
		}
	}
})

Template.sidebar.events({

	"click .font-type": function(event){
		event.preventDefault();
		var self = event.target
		var fontName = self.innerHTML;
		$(self).parents("ul").siblings("button").html(fontName);

		//set counter to index of element
		counter = $(self).parent().index();
		Session.set('counter',counter);
		//console.log("COUNTER VAL: "+counter)
		var fontClass = $(self).attr("data-font-class")
		fontClassGlobal = fontClass;

		$("#font-style-btn").html("Regular")

		setFont(fontClass);
	},

	"click .next-font": function(event){
		event.preventDefault()
		//console.log("next font");
		nextFont()
	},

	"click .prev-font": function(event){
		event.preventDefault()
		//console.log("prev font")
		prevFont()
	},

	"change .sel-mob": function(event){
		var fontClass = $(event.target).children(":selected").attr("data-font-class");
		counter = $(event.target).children(":selected").index()
		Session.set('counter',counter);
		fontClassGlobal = fontClass;
		setFont(fontClass)
		//console.log(counter)
		//fontClassCounter = fontClasses.indexOf(listName);
		//setFontClass(listName);
	}
})

Template.fontClassificationList.events({
	"click .font-class-type": function(event){
		event.preventDefault();
		
		var listName = $(event.target).attr("data-font-class-type");

		fontClassCounter = fontClasses.indexOf(listName);

		setFontClass(listName);
		
	},

	"change #mobile-font-class-list":function(event){
		var listName = $(event.target).children(":selected").attr("data-font-class-type")
		fontClassCounter = fontClasses.indexOf(listName);
		setFontClass(listName);
	},

	"click .next-font-class": function(event){
		event.preventDefault()
		//console.log("next font class")
		nextFontClass();
	},

	"click .prev-font-class": function(event){
		event.preventDefault()
		//console.log("prev font class")
		prevFontClass()
	}
})


Template.fontStyleList.events({
	"click .font-style": function(event){
		event.preventDefault();
		var styleName = $(event.target).attr('data-font-style');

		fontStyleCounter = currentFontStyleArray.indexOf(styleName);

		setFontStyle(styleName);
	},

	"click .next-font-style": function(event){
		event.preventDefault();
		//console.log("next font style")
		nextFontStyle()
	},

	"click .prev-font-style": function(event){
		event.preventDefault();
		//console.log("prev font style")
		prevFontStyle()
	}

})

Template.fontSize.events({
	"click .font-size": function(event){
		event.preventDefault();
		var fontSize = parseInt(event.target.innerHTML);
		//console.log(fontSize);
		$("#text").css('font-size',fontSize);
		$(".list-input").css('font-size',fontSize);
		$(event.target).parents("ul").siblings("button").html(fontSize + " px");
	},

	"click .increase-font-size": function(event){
		event.preventDefault();
		setFontSizeOnKeyPress(true);
	},

	"click .decrease-font-size": function(event){
		event.preventDefault();
		setFontSizeOnKeyPress(false);
	}
})

Template.mobileButtons.events({
	"click .prev-font-mobile":function(event){
		event.preventDefault();
		prevFont()
	},

	"click .next-font-mobile":function(event){
		event.preventDefault();
		nextFont()
	}
})


Template.list.events({
	"keyup .list-input": function(event){
		// edit all textareas when one is edited
		textToStyle = event.target.value;
		$(".list-input").val(textToStyle);
	}
})

Template.text.events({
	"keyup #text": function(event){
		// save to global variable so that it persists between single and list view
		textToStyle = event.target.value;
	}
})


//HELPERS

Template.main.helpers({
	"route": function(){
		return Router.current().route.getName()
	}
})

Template.topbar.helpers({
	"route": function(){
		return Router.current().route.getName()
	}
})

Template.sidebar.helpers({
	"route": function(){
		return Router.current().route.getName()
	}
})

Template.list.helpers({
	"fonts": function(){
		return window[getFontDict()]
	},

	"textToStyle" : function(){
		return textToStyle;
	}
})

Template.text.helpers({
	"textToStyle":function(){
		return textToStyle;
	}
})

Template.fontClassificationList.helpers({
	"fontTypes": function(){
		return fontClasses
	},

	"firstType":function(){
		return fontClasses[0]
	}
})

// This renders the font list btn
Template.fontList.helpers({
	"fonts": function(){
		return window[getFontDict()]
	},

	"firstFont": function(){
		return window[getFontDict()][0]['name'] || Session.get('fontName')
	},

	"name": function(){
		return Session.get('fontClass') || 'serif'
	}
})

// this renders the font list select box for mobiles
Template.fontSelectMobile.helpers({
	"fonts": function(){
		return window[getFontDict()]
	},

	"name": function(){
		return Session.get('fontClass') || 'serif'
	}
})


Template.fontStyleList.helpers({
	"fontStyles": function(){
		return fontSwitchCase("styles")
	},

	"firstStyle": function(){
		return "Regular"
	}
})

Template.fontSize.helpers({
	"sizes" : function(){
		return fontSizes
	}
})

Template.downloadFont.helpers({
	"link" : function(){
		return fontSwitchCase("link")
	}
})



///////////// ROUTER //////////
Router.configure({
	"layoutTemplate": "main"
})

Router.route('/', {
	name: 'text',
	template: 'text'
})

Router.route('/list', {
	name: 'list',
	template: 'list'
})

