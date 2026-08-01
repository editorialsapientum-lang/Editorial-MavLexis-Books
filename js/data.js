/* =========================================================================
   CATÁLOGO DE LIBROS — Editorial MavLexis Books
   =========================================================================
   Esta es la "base de datos" del sitio. No requiere programación: es una
   lista de libros. Para AGREGAR UN LIBRO NUEVO, copia uno de los bloques
   { ... } de abajo, pégalo antes del corchete final "];" y cambia los datos.

   Estos datos fueron cargados desde la plantilla de catálogo (Excel) que
   nos compartiste. Las categorías y los sellos ("MavLexis Books" /
   "Sapientum") corresponden exactamente a las listas desplegables de esa
   plantilla, para que sea fácil seguir llenándola en el futuro y volver
   a generar este archivo.

   CAMPOS DE CADA LIBRO:
   - id:        código único, sin espacios (ej: "libro-022")
   - titulo:    título del libro
   - autores:   lista de autores, entre corchetes y comillas
   - sello:     "MavLexis Books"  ó  "Sapientum"
   - categoria: uno de los slugs listados en CATEGORIAS (abajo)
   - fecha:     fecha de publicación, texto libre (ej: "27/02/2026")
   - anio:      año de publicación (número), se usa para ordenar/mostrar
   - isbn:      ISBN si ya está asignado, o "" si aún no
   - portada:   nombre del archivo de imagen dentro de assets/portadas/
   - sinopsis:  descripción del libro
   - amazon:    enlace de compra en Amazon (o "" si no aplica)
   - destacado: true / false  → true = aparece en "Novedades" de la portada
   - disponible: true / false → false = "Próximamente"

   Para AGREGAR una categoría nueva, súmala también al arreglo CATEGORIAS.
   ========================================================================= */

const CATEGORIAS = [
  { slug: "derecho",            nombre: "Derecho" },
  { slug: "administrativas",    nombre: "Ciencias Administrativas" },
  { slug: "logistica",          nombre: "Operaciones y Logística" },
  { slug: "cadena-suministros", nombre: "Cadena de Suministros" },
  { slug: "salud",              nombre: "Ciencias de la Salud" },
  { slug: "sociales",           nombre: "Ciencias Sociales" },
  { slug: "tecnologia",         nombre: "Tecnología" },
  { slug: "educacion",          nombre: "Educación" },
  { slug: "humanidades",        nombre: "Humanidades" },
  { slug: "comunicacion",       nombre: "Comunicación Social" },
];

const SELLOS = [
  { slug: "mavlexis",  nombre: "Editorial MavLexis Books" },
  { slug: "sapientum", nombre: "Sapientum" },
];

const LIBROS = [
  {
    id: "libro-001",
    titulo: "Administración: Fundamentos básicos",
    autores: ["Carmen Cecilia Rodríguez de Tyler", "Ariel Kapell González", "Cristian Enrique Tyler Rodríguez"],
    sello: "Sapientum",
    categoria: "administrativas",
    fecha: "27/02/2026",
    anio: 2026,
    isbn: "979-8250033749",
    portada: "Portada-1.jpg",
    sinopsis: "La administración ha existido siempre, desde los inicios de las diferentes civilizaciones y épocas, siendo aplicada y tomando en consideración sus principios básicos, como lo son la planificación, organización, dirección, coordinación y el control, aspectos fundamentales para asegurar el éxito empresarial en cualquier empresa, negocio o emprendimiento, independientemente del área o sector en que se desarrolle.",
    amazon: "https://www.amazon.com/dp/B0GQHV1T4Z",
    destacado: true,
    disponible: true
  },
  {
    id: "libro-002",
    titulo: "El Currículo: Su Relación con el Diseño y la Planificación Curricular",
    autores: ["Irasema Margarita Vega de Martínez"],
    sello: "MavLexis Books",
    categoria: "administrativas",
    fecha: "27/02/2027",
    anio: 2027,
    isbn: "979-8250839723",
    portada: "Portada-2.jpg",
    sinopsis: "La transformación constante de la sociedad contemporánea exige excelencia en los procesos educativos y sus resultados. La educación, en su papel de proceso para el crecimiento integral del ser humano, ejerce un relevante efecto social en la evolución de las comunidades y se manifiesta en la calidad de vida, ya que aporta al proceso de transformación y desarrollo de la conciencia humana.",
    amazon: "https://www.amazon.com/dp/B0GRPZB4NJ",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-003",
    titulo: "La Influencia del Partido Comunista en Panamá: Legado, Luchas y Desafíos",
    autores: ["Salomé Buitrago Fernández"],
    sello: "MavLexis Books",
    categoria: "sociales",
    fecha: "19/04/2026",
    anio: 2026,
    isbn: "979-8258029058",
    portada: "Portada-3.jpg",
    sinopsis: "La historia de los pueblos está hecha de voces, de luchas y de silencios. Luchas que marcaron generaciones enteras; y silencios impuestos por el miedo, la represión o el olvido. El comunismo en Veraguas forma parte de esa memoria colectiva que durante años permaneció fragmentada, dispersa en relatos orales, en viejos periódicos amarillentos o en la memoria de campesinos que aún recuerdan los días de organización, resistencia y esperanza.",
    amazon: "https://www.amazon.com/dp/B0GXTW26JX",
    destacado: true,
    disponible: true
  },
  {
    id: "libro-004",
    titulo: "El Poder de Comunicar para el Éxito Personal y Profesional",
    autores: ["Angélica M. Marín B. Marín B."],
    sello: "MavLexis Books",
    categoria: "humanidades",
    fecha: "15/05/2027",
    anio: 2027,
    isbn: "979-8258600424",
    portada: "Portada-4.jpg",
    sinopsis: "Comunicar es, quizás, el acto más humano que existe. Antes de que existieran las letras, las instituciones o los códigos escritos, los seres humanos ya se miraban, se tocaban, se gesticulaban y se hablaban. La comunicación no llegó después de la humanidad; llegó con ella, como parte inseparable de su esencia.",
    amazon: "https://www.amazon.com/dp/B0H1X78LHD",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-005",
    titulo: "Resolución de Problemas Propuestos de Geometría Euclidiana",
    autores: ["Leonel Sandoval M."],
    sello: "MavLexis Books",
    categoria: "administrativas",
    fecha: "06/02/2026",
    anio: 2026,
    isbn: "979-8196967313",
    portada: "Portada-5.jpg",
    sinopsis: "La geometría euclidiana ha ocupado, históricamente, un lugar fundamental en la formación matemática, no solo por el rigor lógico que exige, sino también por su capacidad para desarrollar en el estudiante habilidades de análisis, razonamiento y demostración. En el ámbito universitario, particularmente en la formación de futuros profesionales de las matemáticas, la comprensión de los conceptos geométricos constituye una base indispensable para el desarrollo de estructuras más avanzadas del pensamiento matemático.",
    amazon: "https://www.amazon.com/dp/B0H3ST2RX8",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-006",
    titulo: "Aspectos Éticos, Legales, y Humanístico: Elementos Claves en la Gestión del Cuidado de Enfermería",
    autores: ["Orlinda Esther A. De Batista", "Argelis Espinoza Cruz"],
    sello: "MavLexis Books",
    categoria: "humanidades",
    fecha: "25/07/2026",
    anio: 2026,
    isbn: "979-8188707309",
    portada: "Portada-6.jpg",
    sinopsis: "¿Qué hace que un cuidado sea verdaderamente bueno? Esta obra parte de esa pregunta y construye, capítulo a capítulo, una respuesta sólida y actual: desde los principios de la ética administrativa hasta los fundamentos filosóficos que Aristóteles y Kant legaron al pensamiento moral.",
    amazon: "https://www.amazon.com/dp/B0HBM31QKG",
    destacado: true,
    disponible: true
  },
  {
    id: "libro-007",
    titulo: "Ingeniería de Métodos de Trabajo: Fundamentos, Técnicas y Transformación Digital para la Optimización de los Sistemas Productivos",
    autores: ["Pompilio Alexis Campos Portugal"],
    sello: "MavLexis Books",
    categoria: "logistica",
    fecha: "16/07/2026",
    anio: 2026,
    isbn: "979-8187604432",
    portada: "Portada-7.jpg",
    sinopsis: "La ingeniería de métodos de trabajo constituye una de las disciplinas más antiguas y, al mismo tiempo, más vigentes dentro de la ingeniería industrial. Desde los primeros estudios de Frederick Taylor y los esposos Gilbreth hasta las aplicaciones contemporáneas de inteligencia artificial y realidad aumentada en el diseño de puestos de trabajo, esta disciplina ha demostrado una notable capacidad de adaptación a los cambios tecnológicos, sociales y económicos que han transformado la manera en que las organizaciones producen bienes y prestan servicios.",
    amazon: "https://www.amazon.com/dp/B0H96Y31VF",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-008",
    titulo: "Gestión y Dirección del Capital Humano Fundamentos, Procesos y Transformación Digital para la Administración Estratégica de las Personas en las Organizaciones",
    autores: ["Pompilio Alexis Campos Portugal"],
    sello: "MavLexis Books",
    categoria: "administrativas",
    fecha: "26/07/2026",
    anio: 2026,
    isbn: "979-8189181771",
    portada: "Portada-8.jpg",
    sinopsis: "La gestión de las personas dentro de las organizaciones ha experimentado, en las últimas dos décadas, una transformación tan profunda como acelerada. Lo que durante buena parte del siglo XX se concibió como una función eminentemente administrativa (el manejo de nóminas, expedientes y trámites laborales) se ha convertido hoy en uno de los pilares estratégicos sobre los que se construye la competitividad de las empresas. Hablar de Gestión y Dirección del Capital Humano es hablar, en definitiva, de la capacidad de una organización para atraer, organizar, conservar, desarrollar y controlar el talento que hace posible la consecución de sus objetivos.",
    amazon: "https://www.amazon.com/dp/B0HBNJKKLK",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-009",
    titulo: "Logística Empresarial Optimizando la Cadena de Valor",
    autores: ["Pompilio Alexis Campos Portugal", "Briceida Oxdalia Rodríguez Murillo"],
    sello: "MavLexis Books",
    categoria: "logistica",
    fecha: "19/02/2026",
    anio: 2026,
    isbn: "979-8249035310",
    portada: "Portada-9.jpg",
    sinopsis: "Logística Empresarial Optimizando la Cadena de Valor es una guía fundamental para quienes buscan perfeccionar sus habilidades en la gestión de la cadena de suministro. A través de un enfoque integral, este libro ofrece una visión profunda y estratégica de la logística empresarial, desde su relación con las áreas funcionales de la empresa hasta la planificación estratégica y la previsión de la demanda.",
    amazon: "https://www.amazon.com/dp/B0GPD445N9",
    destacado: true,
    disponible: true
  },
  {
    id: "libro-010",
    titulo: "La Cooperación Internacional y su Asistencia Técnica en Panamá",
    autores: ["Olmedo Caballero"],
    sello: "MavLexis Books",
    categoria: "sociales",
    fecha: "01/10/2025",
    anio: 2025,
    isbn: "979-8306516349",
    portada: "Portada-10.jpg",
    sinopsis: "En un mundo cada vez más interconectado, la cooperación internacional se ha convertido en un pilar fundamental para el desarrollo de los países. Este libro explora el papel vital que desempeña la cooperación internacional y la asistencia técnica en Panamá, un país que, gracias a su ubicación estratégica y su creciente economía, ha atraído la atención de diversas organizaciones y gobiernos alrededor del planeta.",
    amazon: "https://www.amazon.com/dp/B0DSSZRKTB",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-011",
    titulo: "Relaciones Públicas y Coaching, La Clave para el Éxito Empresarial",
    autores: ["Mavis Beli González Tejedor"],
    sello: "MavLexis Books",
    categoria: "sociales",
    fecha: "02/03/2025",
    anio: 2025,
    isbn: "979-8321771587",
    portada: "Portada-11.jpg",
    sinopsis: "\"Relaciones Públicas y Coaching, La Clave para el Éxito Empresarial\" es una obra que ofrece una mirada profunda y práctica sobre cómo fusionar dos disciplinas fundamentales para el éxito empresarial en la era moderna: las relaciones públicas y el coaching organizacional.",
    amazon: "https://www.amazon.com/dp/B0DVTFJ5L3",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-012",
    titulo: "Formando Conductores del Futuro, Clave para una Movilidad Segura y Eficiente",
    autores: ["Pompilio Alexis Campos Portugal", "Mavis Beli González Tejedor"],
    sello: "MavLexis Books",
    categoria: "educacion",
    fecha: "13/12/2024",
    anio: 2024,
    isbn: "979-8343361520",
    portada: "Portada-12.jpg",
    sinopsis: "\"Formando Conductores del Futuro: Clave para una Movilidad Segura y Eficiente\" ofrece una mirada integral al proceso de formación de conductores, resaltando la importancia de una capacitación que combina habilidades técnicas, ética y responsabilidad social.",
    amazon: "https://www.amazon.com/dp/B0DQDVHYSH",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-013",
    titulo: "Operaciones y Logística Integral, Diseño y Optimización de Sistemas Empresariales: Fundamentos y Estrategias para la Excelencia Operacional",
    autores: ["Pompilio Alexis Campos Portugal"],
    sello: "MavLexis Books",
    categoria: "logistica",
    fecha: "09/05/2025",
    anio: 2025,
    isbn: "979-8291297650",
    portada: "Portada-13.jpg",
    sinopsis: "En la era de la hiperconectividad y la transformación digital, donde los mercados globales se entrelazan en ecosistemas complejos y dinámicos, la gestión de operaciones y la logística integral ha evolucionado más allá de su concepción tradicional como funciones operativas de soporte. Hoy en día, estas disciplinas constituyen el núcleo estratégico que determina la capacidad de una organización para crear valor, adaptarse al cambio y mantener ventajas competitivas sostenibles en un entorno empresarial caracterizado por la incertidumbre y la disrupción constante.",
    amazon: "https://www.amazon.com/dp/B0FPXMV4LK",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-014",
    titulo: "Gestión Integral del Transporte: Seguridad Vial como Ventaja Competitiva en Logística",
    autores: ["Pompilio Alexis Campos Portugal"],
    sello: "MavLexis Books",
    categoria: "logistica",
    fecha: "14/06/2025",
    anio: 2025,
    isbn: "979-8288084553",
    portada: "Portada-14.jpg",
    sinopsis: "\"Gestión Integral del Transporte: Seguridad Vial como Ventaja Competitiva en Logística\" es una guía esencial para académicos, profesionales y líderes empresariales que buscan integrar la seguridad vial y la eficiencia logística en sus operaciones.",
    amazon: "https://www.amazon.com/dp/B0FD8PT5LM",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-015",
    titulo: "Cadenas de Suministro Inteligentes: Transformación Operativa y Digital para PyMEs en la Era de la Competitividad Empresarial",
    autores: ["Pompilio Alexis Campos Portugal"],
    sello: "MavLexis Books",
    categoria: "logistica",
    fecha: "14/06/2026",
    anio: 2026,
    isbn: "979-8288097560",
    portada: "Portada-15.jpg",
    sinopsis: "En un entorno empresarial de cambio acelerado, las PyMEs enfrentan el desafío de transformar sus operaciones o perder competitividad. \"Cadenas de Suministro Inteligentes\" ofrece un marco práctico para navegar hacia la transformación digital, integrando inteligencia artificial, análisis de datos y automatización en las operaciones logísticas.",
    amazon: "https://www.amazon.com/dp/B0FD8NNKDM",
    destacado: true,
    disponible: true
  },
  {
    id: "libro-016",
    titulo: "Modelos de Indicadores de Gestión Logística (KPIs)",
    autores: ["Briceida Oxdalis Rodríguez Murillo"],
    sello: "MavLexis Books",
    categoria: "logistica",
    fecha: "26/03/2025",
    anio: 2025,
    isbn: "979-8312227468",
    portada: "Portada-16.jpg",
    sinopsis: "En el dinámico y desafiante mundo de la gestión empresarial, la logística ocupa un lugar crucial para garantizar la eficiencia y sostenibilidad de las operaciones.",
    amazon: "https://www.amazon.com/dp/B0F2SS7QB6",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-017",
    titulo: "Gestión y Dirección del Capital Humano Fundamentos, Procesos y Transformación Digital para la Administración Estratégica de las Personas en las Organizaciones",
    autores: ["Pompilio Alexis Campos Portugal"],
    sello: "MavLexis Books",
    categoria: "administrativas",
    fecha: "26/07/2026",
    anio: 2026,
    isbn: "979-8189181771",
    portada: "Portada-17.jpg",
    sinopsis: "La gestión de las personas dentro de las organizaciones ha experimentado, en las últimas dos décadas, una transformación tan profunda como acelerada. Lo que durante buena parte del siglo XX se concibió como una función eminentemente administrativa (el manejo de nóminas, expedientes y trámites laborales) se ha convertido hoy en uno de los pilares estratégicos sobre los que se construye la competitividad de las empresas. Hablar de Gestión y Dirección del Capital Humano es hablar, en definitiva, de la capacidad de una organización para atraer, organizar, conservar, desarrollar y controlar el talento que hace posible la consecución de sus objetivos.",
    amazon: "https://www.amazon.com/dp/B0HBNJKKLK",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-018",
    titulo: "Comunicación Social, Medios y Sociedad. Bases Teóricas para la Comprensión del Proceso Comunicativo",
    autores: ["Angélica M. Marín B."],
    sello: "MavLexis Books",
    categoria: "comunicacion",
    fecha: "15/05/2026",
    anio: 2026,
    isbn: "979-8259040397",
    portada: "Portada-18.jpg",
    sinopsis: "La comunicación es, sin lugar a duda, el fenómeno más constitutivo de la condición humana. No existe civilización, cultura ni forma de organización social que no se articule, se sostenga y se transforme a través del acto de comunicar.",
    amazon: "https://www.amazon.com/dp/B0H1XHZ3CX",
    destacado: true,
    disponible: true
  },
  {
    id: "libro-019",
    titulo: "De la Reacción a la Prevención: El Enfoque Sistémico en Seguridad Vial",
    autores: ["Pompilio Alexis Campos Portugal", "Mavis Beli González Tejedor"],
    sello: "MavLexis Books",
    categoria: "sociales",
    fecha: "14/09/2025",
    anio: 2025,
    isbn: "979-8282413052",
    portada: "Portada-19.jpg",
    sinopsis: "La siniestralidad vial constituye uno de los flagelos más apremiantes de la sociedad contemporánea, representando no solo una crisis persistente de salud pública a escala global, sino también un considerable lastre para el desarrollo socioeconómico y el bienestar humano.",
    amazon: "https://www.amazon.com/dp/B0FR4XR2BY",
    destacado: false,
    disponible: true
  },
  {
    id: "libro-020",
    titulo: "Gestión Estratégica en Operaciones y Logística Empresarial",
    autores: ["Pompilio Alexis Campos Portugal"],
    sello: "MavLexis Books",
    categoria: "logistica",
    fecha: "23/12/2024",
    anio: 2024,
    isbn: "979-8304592789",
    portada: "Portada-20.jpg",
    sinopsis: "En un mundo donde la globalización, la digitalización y la sostenibilidad son los motores del cambio, las operaciones empresariales y la logística se han consolidado como pilares fundamentales para la competitividad y el éxito de las organizaciones.",
    amazon: "https://www.amazon.com/dp/B0DRCDSM12",
    destacado: true,
    disponible: true
  },
  {
    id: "libro-021",
    titulo: "Guía Metodológica para Presentar Trabajos de Graduación o Investigación",
    autores: ["Janeth Brugiatti Díaz"],
    sello: "MavLexis Books",
    categoria: "educacion",
    fecha: "27/10/2025",
    anio: 2025,
    isbn: "979-8264674563",
    portada: "Portada-21.jpg",
    sinopsis: "Esta guía surge de una necesidad real compartida en el ámbito universitario: ofrecer una herramienta práctica y accesible para estudiantes que enfrentan el desafío de desarrollar su trabajo de graduación. Con lenguaje sencillo y ejemplos concretos extraídos de la experiencia docente, la obra presenta los pasos fundamentales del método científico aplicados a la investigación académica.",
    amazon: "https://www.amazon.com/dp/B0FYQZZT87",
    destacado: true,
    disponible: true
  },
];
