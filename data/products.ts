export const PRODUCTS = [
    {
        id: 1,
        name: "Sulfa Max 87® SC",
        category: "Fitoprotectores",
        concentration: 87,
        concentrationLabel: "Azufre Elemental",
        description: "Fungicida-Acaricida micronizado con acción multisitio y efecto vapor.",
        fullDescription: "Sulfa Max 87 es un fertilizante foliar altamente concentrado en AZUFRE y nitrógeno, destinado a mejorar la nutrición de los cultivos con estos elementos y brindar protección sanitaria contra plagas y enfermedades. Este producto utiliza una fuente de azufre altamente soluble en agua, por tanto, no taponea las boquillas de las pulverizadoras a diferencia de otras fuentes.",
        composition: ["Azufre (S): 87%", "Nitrógeno (N): 15%"],
        dynamicConcentrations: [
            { value: 87, label: "Azufre" },
            { value: 15, label: "Nitrógeno" }
        ],
        usage: [
            { crop: "Ají, tomate y solanáceas", dose: "1 L – 3 L / Cil", notes: "Aplicar desde crecimiento vegetativo hasta inicio de floración." },
            { crop: "Arándano", dose: "2 L – 3 L / Cil", notes: "1ra aplicación desde brotamiento hasta la cosecha." },
            { crop: "Arroz", dose: "1 L / Cil", notes: "1ra aplicación a partir de los 30 días después del trasplante." }
        ],
        dose: "200-300 g/200L",
        price: 45.00
    },
    {
        id: 2,
        name: "Duo Mix Oil®",
        category: "Fitoprotectores",
        concentration: 40,
        concentrationLabel: "Ext. Ajo + Ají",
        description: "Insecticida natural a base de extracto de ajo y oleorresina de ají.",
        fullDescription: "DUO MIX OIL® es un insecticida natural formulado a base de extracto de ajo y oleorresina de ají. La oleorresina de ají actúa causando la muerte de las plagas mediante la alteración de su metabolismo. Por su parte, el extracto de ajo ejerce un efecto tóxico por contacto.",
        composition: ["Aceite de Allium sativum: 40%", "Aceite de Capsicum frutescens: 40%", "Aditivos: 1.5%"],
        dynamicConcentrations: [
            { value: 40, label: "Ext. Ajo" },
            { value: 40, label: "Ext. Ají" }
        ],
        usage: [
            { crop: "Cítricos", dose: "200–700 mL/200L", notes: "Aplicar al detectar indicios de plaga." },
            { crop: "Frutales", dose: "200–700 mL/200L", notes: "Realizar hasta 2 aplicaciones por campaña." },
            { crop: "Palto, mango, café", dose: "200–700 mL/200L", notes: "Intervalo de 8 a 12 días entre aplicaciones." }
        ],
        dose: "200–700 mL/200L",
        price: 42.00
    },
    {
        id: 3,
        name: "Kanelo Oil 2.0®",
        category: "Fitoprotectores",
        concentration: 20,
        concentrationLabel: "Aceite de Canela",
        description: "Aceite de canela con acción insecticida y acaricida de contacto.",
        fullDescription: "KANELO OIL 2.0® es un aceite de canela con acción insecticida y acaricida de contacto. Incorpora sustancias naturales como el cinamaldehído, que generan repelencia y disuasión en la alimentación de los insectos.",
        composition: ["Aceite de Cinnamon Zeylanicum: 20%", "Aditivos: 1%"],
        usage: [
            { crop: "Cítricos", dose: "200–700 mL/200L", notes: "Control de arañita roja, mosca blanca y ácaros." },
            { crop: "Frutales", dose: "200–700 mL/200L", notes: "Compatible con casi todos los agroquímicos." },
            { crop: "Palto, mango, café", dose: "200–700 mL/200L", notes: "No mezclar con materiales alcalinos." }
        ],
        dose: "200–700 mL/200L",
        price: 44.00
    },
    {
        id: 4,
        name: "Proteccion Cu 270",
        category: "Fitoprotectores",
        concentration: 27,
        concentrationLabel: "Sulfato de Cobre",
        description: "Fungicida – bactericida sistémico, con acción preventiva y curativa.",
        fullDescription: "PROTECCION Cu 270 es un fungicida – bactericida sistémico, con acción preventiva y curativa. Se dispersa y adhiere con mucha afinidad en la superficie de las plantas tratadas, logrando una mejor cobertura y más uniforme.",
        composition: ["Sulfato de cobre pentahidratado: 27%", "Salicilato de cobre: 2.5%", "Fosfito de cobre: 0.5%"],
        usage: [
            { crop: "Palto", dose: "0.4 – 0.5 L/200L", notes: "1ra aplicar cada 14 días de la germinación." },
            { crop: "Espárrago", dose: "0.75 – 1.0 L/200L", notes: "1ra aplicar cada 3 días de la germinación." }
        ],
        dose: "0.4 – 0.5 L/200L",
        price: 38.00
    },
    {
        id: 5,
        name: "Omega Oil 369",
        category: "Fitoprotectores",
        concentration: 14,
        concentrationLabel: "Omega 3",
        description: "Aceite natural de origen marino con propiedades bioestimulantes y antioxidantes.",
        fullDescription: "OMEGA-OIL 369 es un aceite natural de origen marino con propiedades bioestimulantes, antioxidantes e inductor de defensas. Disminuye el estrés de las plantas provocado por ácidos grasos polinsaturados Omega.",
        composition: ["Proteínas: 81.5%", "Omega 3: 14%", "Omega 6: 22%", "Omega 9: 46%"],
        usage: [
            { crop: "Palta", dose: "1.5 – 2 L/Cil", notes: "Control de Queresas." },
            { crop: "Cítricos", dose: "1 – 1.5 L/Cil", notes: "Control de Arañita Roja." },
            { crop: "Fresa", dose: "1 – 1.5 L/Cil", notes: "Control de Mosca Blanca." }
        ],
        dose: "1 – 1.5 L/CL",
        price: 50.00
    },
    {
        id: 6,
        name: "Boro B15 + M.E",
        category: "Nutrientes",
        concentration: 15,
        concentrationLabel: "Boro",
        description: "Fertilizante foliar con alta concentración de Boro para transporte de azúcares.",
        fullDescription: "BORO B15 es un fertilizante foliar que contiene una alta concentración de BORO. Participa activamente en el transporte de azúcares y es esencial para mantener la integridad estructural de las membranas.",
        composition: ["Boro (B2O3): 15%", "Zinc (Zn): 0.4%", "Nitrógeno (N): 2%", "Magnesio (Mg): 2%"],
        usage: [
            { crop: "Ají, tomate", dose: "500 mL – 1 L / Cil", notes: "Prefloración, cuajado y crecimiento de fruto." },
            { crop: "Arándano", dose: "500 mL – 1 L / Cil", notes: "Prefloración y repetir cada 15 días." },
            { crop: "Brócoli, coliflor", dose: "500 mL – 1 L / Cil", notes: "Antes de la formación de la cabeza." }
        ],
        dose: "500 mL – 1 L/200L",
        price: 30.00
    },
    {
        id: 7,
        name: "Zinc Zn14 + EDTA",
        category: "Nutrientes",
        concentration: 14,
        concentrationLabel: "Zinc",
        description: "Fitonutriente a base de Zinc líquido para prevenir deficiencias.",
        fullDescription: "ZINC Zn14 es un fitonutriente a base de ZINC líquido, complejado con EDTA. Importante en la activación enzimática y síntesis de auxinas. Evita la pérdida de dominancia apical y clorosis internerval.",
        composition: ["Zinc (Zn) quelatado: 14%", "Hierro (Fe) quelatado: 3%", "Ácidos carboxílicos: 10%"],
        usage: [
            { crop: "Ají, tomate", dose: "500 mL – 1 L / Cil", notes: "15 días post-trasplante, prefloración, formación fruto." },
            { crop: "Arándano", dose: "500 mL – 1 L / Cil", notes: "Inicio brotamiento y prefloración." },
            { crop: "Brócoli, coliflor", dose: "500 mL – 1 L / Cil", notes: "Antes de 1ra fertilización y 15 días de prefloración." }
        ],
        dose: "500 mL – 1 L/200L",
        price: 28.00
    },
    {
        id: 8,
        name: "Magnesio Mg11 + M.E",
        category: "Nutrientes",
        concentration: 11,
        concentrationLabel: "Magnesio",
        description: "Complejo natural líquido de Magnesio quelatizado para fotosíntesis.",
        fullDescription: "MAGNESIO Mg11 es un complejo natural líquido de MAGNESIO quelatizado. Potencia la producción de clorofila para la fotosíntesis. El ácido carboxílico actúa como agente dispersante.",
        composition: ["Magnesio (Mg) quelatado: 11%", "Hierro (Fe) quelatado: 2%", "Ácidos carboxílicos: 30%"],
        usage: [
            { crop: "Ají, tomate", dose: "500 mL – 1 L / Cil", notes: "30 días post-trasplante y pleno desarrollo fruto." },
            { crop: "Alcachofa", dose: "500 mL – 1 L / Cil", notes: "Inicio del brotamiento." }
        ],
        dose: "500 mL – 1 L/200L",
        price: 26.00
    },
    {
        id: 9,
        name: "Equilibra NPK 20-20-20",
        category: "Nutrientes",
        concentration: 20,
        concentrationLabel: "Nitrógeno",
        description: "Fertilizante foliar balanceado para cualquier etapa del cultivo.",
        fullDescription: "EQUILIBRA NPK es un fertilizante foliar de macroelementos primarios N-P-K en suspensión concentrada. Recomendado para complementar la nutrición en cualquier etapa, promoviendo enraizamiento, crecimiento y floración.",
        composition: ["Nitrógeno (N): 20%", "Fósforo (P2O5): 20%", "Potasio (K2O): 20%"],
        dynamicConcentrations: [
            { value: 20, label: "Nitrógeno" },
            { value: 20, label: "Fósforo" },
            { value: 20, label: "Potasio" }
        ],
        usage: [
            { crop: "Ají, tomate", dose: "1 L – 2 L / Cil", notes: "7 días post-trasplante, prefloración, desarrollo fruto." }
        ],
        dose: "1 L – 2 L/200L",
        price: 35.00
    },
    {
        id: 10,
        name: "Fósforo P45 + M.E",
        category: "Nutrientes",
        concentration: 45,
        concentrationLabel: "Fósforo",
        description: "Fertilizante líquido mineral para desarrollo radicular y floración.",
        fullDescription: "FOSFORO P45 es un fertilizante foliar con alta concentración de fósforo. Recomendado en estados iniciales para estimular el desarrollo radicular y floración, incluso en bajas temperaturas.",
        composition: ["Fósforo (P2O5): 45%", "Nitrógeno (N): 9%", "Zinc (Zn) quelatado: 5%", "Magnesio (MgO): 5%"],
        usage: [
            { crop: "Ajo", dose: "500 ml – 1 lt / Cil", notes: "30 días post-siembra, repetir cada 15 días." },
            { crop: "Cebolla", dose: "500 ml – 1 lt / Cil", notes: "20 días post-trasplante, repetir cada 15 días." },
            { crop: "Cítricos, palto", dose: "500 ml – 1 lt / Cil", notes: "Brotamiento, botón floral y/o floración." }
        ],
        dose: "500 ml – 1 L/200L",
        price: 40.00
    },
    {
        id: 11,
        name: "Calcio Ca35",
        category: "Nutrientes",
        concentration: 35,
        concentrationLabel: "Calcio",
        description: "Bionutriente de calcio y aminoácidos para firmeza y calidad de fruto.",
        fullDescription: "CALCIO Ca35 es un bionutriente formulado a base de calcio y L-aminoácidos libres. Indicado para prevenir y corregir carencias de calcio con máxima rapidez y durante momentos de estrés.",
        composition: ["Calcio (CaO): 35%", "Aminoácidos: 7%", "Ácidos carboxílicos: 5%"],
        usage: [
            { crop: "Capsicum", dose: "1 L / Ha", notes: "Antes de floración, después de cuajado y crecimiento." },
            { crop: "Cítricos", dose: "500 ml – 1 Lt / Ha", notes: "Aplicar antes de la floración." },
            { crop: "Cucurbitáceas", dose: "1 L / Ha", notes: "Inicio floración, post-cuajado y crecimiento." }
        ],
        dose: "500 ml – 1 L/200L",
        price: 32.00
    },
    {
        id: 12,
        name: "Duo Algas Forte",
        category: "Bioestimulantes",
        concentration: 30,
        concentrationLabel: "Ext. Algas",
        description: "Extracto de algas marinas con propiedades fertilizantes y bioestimulantes.",
        fullDescription: "Es un extracto de algas marinas de alta calidad (Ascophyllum nodosum y Ecklonia maxima). Aporta macro y micro elementos, fitohormonas, proteínas y vitaminas. Favorece el equilibrio fisiológico integral.",
        composition: ["Ascophyllum nodosum: 30%", "Ecklonia maxima: 20%", "Auxinas, Fósforo: 4%"],
        usage: [
            { crop: "Frutales", dose: "500 ml – 1 lt / Cil", notes: "Floración, caída de pétalos, fruto cuajado." },
            { crop: "Cucurbitáceas", dose: "500 ml – 1 lt / Cil", notes: "Prefloración, repetir a los 15 y 30 días." },
            { crop: "Tomate, pimiento", dose: "500 ml – 1 lt / Cil", notes: "Inicio floración, repetir cada 20 días." }
        ],
        dose: "500 ml – 1 L/200L",
        price: 45.00
    },
    {
        id: 13,
        name: "Potasio K50",
        category: "Nutrientes",
        concentration: 50,
        concentrationLabel: "Potasio",
        description: "Formulación rica en potasio para maduración y calidad de frutos.",
        fullDescription: "POTASIO K50 es una formulación rica en potasio diseñada para favorecer la maduración de los frutos. Las aplicaciones finales favorecen el tamaño y calidad.",
        composition: ["Potasio (K2O): 50%", "Magnesio (MgO): 5%", "Nitrógeno (N): 5%", "Algas marinas: 5%"],
        usage: [
            { crop: "Alcachofa", dose: "500 ml – 1 Lt / Cil", notes: "Aparición de primeros capítulos." },
            { crop: "Arroz", dose: "500 ml – 1 Lt / Cil", notes: "Después de floración, repetir cada 14 días." },
            { crop: "Cebolla/ajo", dose: "500 ml – 1 Lt / Cil", notes: "Inicio del bulbo. Repetir a los 14 días." }
        ],
        dose: "500 ml – 1 L/200L",
        price: 38.00
    },
    {
        id: 14,
        name: "Amarre 3.5",
        category: "Nutrientes",
        concentration: 16,
        concentrationLabel: "Calcio",
        description: "Fertilizante con Ca, B y Zn para mejorar el amarre y cuajado.",
        fullDescription: "Es un fertilizante foliar con alto contenido de CALCIO, BORO y ZINC. Mejora el amarre en la planta, aumenta peso, tamaño y calidad. Fortalece paredes celulares y mejora el cuajado.",
        composition: ["Calcio (CaO): 16%", "Boro (B2O3): 2.5%", "Zinc (Zn) quelatado: 3%"],
        usage: [
            { crop: "Ají, tomate", dose: "500 ml – 1 lt / Cil", notes: "Prefloración e iniciación de cuajado." },
            { crop: "Alcachofa", dose: "500 ml – 1 lt / Cil", notes: "Inducción de escapos florales." },
            { crop: "Arándano", dose: "500 ml – 1 lt / Cil", notes: "10 días post-trasplante, 20 días después, inicio cuajado." }
        ],
        dose: "500 ml – 1 L/200L",
        price: 36.00
    },
    {
        id: 15,
        name: "Amarre 3",
        category: "Nutrientes",
        concentration: 12,
        concentrationLabel: "Calcio",
        description: "Induce crecimiento radicular, floración y amarre de fruto.",
        fullDescription: "Fertilizante con CALCIO, BORO Y ZINC. Induce crecimiento radicular, floración y amarre. Reduce la producción de etileno mejorando la retención de frutos.",
        composition: ["Calcio (CaO): 12%", "Boro (B2O3): 2.5%", "Zinc (Zn) quelatado: 3%"],
        usage: [
            { crop: "Ají, tomate", dose: "500 ml – 1 lt / Cil", notes: "Prefloración e iniciando cuajado." },
            { crop: "Arándano", dose: "500 ml – 1 lt / Cil", notes: "10 días post-trasplante, 20 días después, inicio cuajado." }
        ],
        dose: "500 ml – 1 L/200L",
        price: 34.00
    },
    {
        id: 16,
        name: "AminoZ V32",
        category: "Bioestimulantes",
        concentration: 32,
        concentrationLabel: "Aminoácidos",
        description: "Fitonutriente con alta riqueza en nitrógeno, aminoácidos y materia orgánica.",
        fullDescription: "AMINOZ V32 es un fitonutriente con alta riqueza en nitrógeno + Aminoácidos. Contiene geles aminos que mejoran la solubilidad y asimilación.",
        composition: ["Aminoácidos totales: 32%", "Aminoácidos Libres: 25%", "Nitrógeno: 12.5%", "Materia orgánica: 40.5%"],
        dynamicConcentrations: [
            { value: 32, label: "Aminoácidos" },
            { value: 12, label: "Nitrógeno" }
        ],
        usage: [
            { crop: "Papa", dose: "500 ml – 1 lt / Cil", notes: "Inicio estolonamiento, desarrollo tubérculo, 30 días antes cosecha." },
            { crop: "Frutales", dose: "500 ml – 1 lt / Cil", notes: "Inicio desarrollo fruto, repetir a 15 días." }
        ],
        dose: "500 ml – 1 L/200L",
        price: 32.50
    },
    {
        id: 17,
        name: "AminoPez ++Plus",
        category: "Bioestimulantes",
        concentration: 26,
        concentrationLabel: "Aminoácidos",
        description: "Fertilizante y bioestimulante a partir de proteínas de salmón.",
        fullDescription: "Fertilizante y bioestimulante líquido obtenido de proteínas de salmón hidrolizadas. Rico en aminoácidos libres y péptidos de bajo peso molecular. Favorece el ahorro de energía en la planta.",
        composition: ["Aminoácidos Totales: 26%", "Aminoácidos Libres: 18.8%", "Algas marinas: 18%", "Ac. Fúlvicos: 10.5%"],
        usage: [
            { crop: "Cítricos, Paltos", dose: "300 – 500 ml Foliar", notes: "Semanal desde brotamiento hasta 30 días antes cosecha." },
            { crop: "Vides y Frutales", dose: "300 – 500 ml Foliar", notes: "Semanal durante todo el crecimiento." }
        ],
        dose: "300 ml – 500 ml/200L",
        price: 48.00
    },
    {
        id: 18,
        name: "+ Raiz",
        category: "Bioestimulantes",
        concentration: 24,
        concentrationLabel: "Ác. Orgánicos",
        description: "Bioestimulante fisiológico para regular el metabolismo nitrogenado.",
        fullDescription: "+RAIZ es un Bioestimulante Fisiológico diseñado para REGULAR EL METABOLISMO NITROGENADO. Activa la formación de hormonas auxínicas para desarrollo equilibrado.",
        composition: ["Ácidos Orgánicos: 24.6%", "Peptidatos: 120 mg/L", "Hierro: 5%", "Fósforo: 5%"],
        usage: [
            { crop: "Frutales", dose: "500 ml – 1 lt / Cil", notes: "Inicio de campaña y después del cuajado." },
            { crop: "Hortalizas", dose: "300 – 500 ml / Cil", notes: "Inicio floración y crecimiento de entrenudos." }
        ],
        dose: "500 ml – 1 L/200L",
        price: 42.00
    },
    {
        id: 19,
        name: "Globo Gib",
        category: "Bioestimulantes",
        concentration: 40,
        concentrationLabel: "Giberelinas",
        description: "Regulador de crecimiento que estimula el tamaño de células y frutos.",
        fullDescription: "GLOBO GIB estimula y regula el ritmo de crecimiento. Produce incremento del tamaño celular, induce floración, mejora cuajado y agranda frutos.",
        composition: ["Giberelinas: 40%"],
        usage: [
            { crop: "Alcachofa", dose: "30 – 125 ml / Cil", notes: "Durante desarrollo vegetativo (60, 75 y 90 días)." },
            { crop: "Cebolla", dose: "30 – 125 ml / Cil", notes: "40 días después del trasplante." }
        ],
        dose: "30 – 125 ml/200L",
        price: 55.00
    },
    {
        id: 20,
        name: "Súper Fólico 5.7",
        category: "Bioestimulantes",
        concentration: 18,
        concentrationLabel: "Ext. Algas",
        description: "Estimula germinación, desarrollo vegetativo y floración.",
        fullDescription: "SÚPER FÓLICO 5.7® es un bioestimulante a base de extracto de algas, aminoácidos y Ácido fólico. Estimula procesos bioquímicos en etapas críticas.",
        composition: ["Extracto de Algas: 180 g/L", "Aminoácidos Libres: 60 g/L", "Ácido Fólico: 5.7 g/L"],
        usage: [
            { crop: "Cítricos", dose: "250 – 500 ml / Cil", notes: "Floración y 21 días post-cuajado." },
            { crop: "Frutales", dose: "250 – 500 ml / Cil", notes: "Inicio crecimiento, 21 días post-cuajado, repetir cada 3 semanas." }
        ],
        dose: "250 – 500 ml/200L",
        price: 46.00
    },
    {
        id: 21,
        name: "Cytoking Power 22",
        category: "Bioestimulantes",
        concentration: 2,
        concentrationLabel: "Citoquinina",
        description: "Regulador de crecimiento natural para incremento de rendimientos.",
        fullDescription: "Regulador de crecimiento de origen natural. La Citoquinina promueve división celular, elongación de entrenudos y amarre de frutos.",
        composition: ["Citoquinina (kinetina): 2.2 g/l", "Materia orgánica: 15 g/l", "Elementos mayores: 6 g/l"],
        usage: [
            { crop: "Arveja, Frijol", dose: "300 – 500 ml / Cil", notes: "Inicio floración, repetir cada 21 días." },
            { crop: "Ajo, Cebolla", dose: "250 – 500 ml / Cil", notes: "Inicio crecimiento bulbo." }
        ],
        dose: "250 ml – 500 ml/200L",
        price: 52.00
    },
    {
        id: 22,
        name: "Brote Max NPK 40-10-10",
        category: "Nutrientes",
        concentration: 40,
        concentrationLabel: "Nitrógeno",
        description: "Abono foliar concentrado para etapas iniciales de crecimiento.",
        fullDescription: "BROTE MAX NPK es un Abono Foliar concentrado con nitrógeno asimilable. Estimula división celular y desarrollo de órganos vegetativos. Corrige deficiencias de nitrógeno.",
        composition: ["Nitrógeno (N): 40%", "Fósforo (P2O5): 10%", "Potasio (K2O): 10%"],
        dynamicConcentrations: [
            { value: 40, label: "Nitrógeno" },
            { value: 10, label: "Fósforo" },
            { value: 10, label: "Potasio" }
        ],
        usage: [
            { crop: "Ajo, cebolla", dose: "500 ml – 1 lt / Cil", notes: "10 días de siembra, repetir cada 15 días." },
            { crop: "Alcachofa", dose: "500 ml – 1 lt / Cil", notes: "10 días de siembra, repetir cada 15 días." }
        ],
        dose: "500 ml – 1 L/200L",
        price: 38.00
    }
];
