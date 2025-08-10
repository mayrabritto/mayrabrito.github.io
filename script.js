// Definição dos textos por idioma
const translations = {
  pt: {
    "Home": "Início",
    "About": "Sobre",
    "Skills": "Habilidades",
    "Projects": "Projetos",
    "Contact": "Contato",
    "Hi, I'm Mayra": "Olá, eu sou Mayra",
    "SAP Developer passionate about building efficient and scalable enterprise solutions using ABAP, Fiori, and SAP BTP.": "Desenvolvedora SAP apaixonada por criar soluções corporativas eficientes e escaláveis usando ABAP, Fiori e SAP BTP.",
    "About Me": "Sobre Mim",
    "I am a SAP developer with solid technical knowledge in ABAP OO, CDS Views, Fiori Elements, SAP Gateway, SAP BTP, and SAP HANA. Although I have experience as an end-user in SAP FI, I am now fully focused on development, building modern and integrated enterprise applications. I am committed to clean code, usability, and performance optimization in the SAP ecosystem.": "Sou desenvolvedora SAP com sólidos conhecimentos técnicos em ABAP OO, CDS Views, Fiori Elements, SAP Gateway, SAP BTP e SAP HANA. Embora tenha experiência como usuária final em SAP FI, agora estou totalmente focada em desenvolvimento, criando aplicações corporativas modernas e integradas. Sou comprometida com código limpo, usabilidade e otimização de performance no ecossistema SAP.",
    "Technical Skills": "Habilidades Técnicas",
    "Projects": "Projetos",
    "Contact Me": "Contato",
    "Feel free to reach out for collaborations or opportunities!": "Sinta-se à vontade para entrar em contato para colaborações ou oportunidades!"
  },
  en: {
    "Início": "Home",
    "Sobre": "About",
    "Habilidades": "Skills",
    "Projetos": "Projects",
    "Contato": "Contact",
    "Olá, eu sou Mayra": "Hi, I'm Mayra",
    "Desenvolvedora SAP apaixonada por criar soluções corporativas eficientes e escaláveis usando ABAP, Fiori e SAP BTP.": "SAP Developer passionate about building efficient and scalable enterprise solutions using ABAP, Fiori, and SAP BTP.",
    "Sobre Mim": "About Me",
    "Sou desenvolvedora SAP com sólidos conhecimentos técnicos em ABAP OO, CDS Views, Fiori Elements, SAP Gateway, SAP BTP e SAP HANA. Embora tenha experiência como usuária final em SAP FI, agora estou totalmente focada em desenvolvimento, criando aplicações corporativas modernas e integradas. Sou comprometida com código limpo, usabilidade e otimização de performance no ecossistema SAP.": "I am a SAP developer with solid technical knowledge in ABAP OO, CDS Views, Fiori Elements, SAP Gateway, SAP BTP, and SAP HANA. Although I have experience as an end-user in SAP FI, I am now fully focused on development, building modern and integrated enterprise applications. I am committed to clean code, usability, and performance optimization in the SAP ecosystem.",
    "Habilidades Técnicas": "Technical Skills",
    "Projetos": "Projects",
    "Contact Me": "Contact Me",
    "Sinta-se à vontade para entrar em contato para colaborações ou oportunidades!": "Feel free to reach out for collaborations or opportunities!"
  }
};

// Função para trocar idioma
function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    const key = el.getAttribute(`data-${lang}`);
    if (key) el.textContent = key;
  });

  // Atualiza o atributo html
  document.getElementById("html-tag").lang = lang === 'pt' ? 'pt-BR' : 'en-US';
  localStorage.setItem("language", lang);
}

// Carregar idioma salvo
window.onload = () => {
  const savedLang = localStorage.getItem("language") || "pt";
  setLanguage(savedLang);
};

// Projetos
const projects = [
  {
    title: { en: "Fiori App: Purchase Order Monitor", pt: "App Fiori: Monitor de Pedidos de Compra" },
    tech: { en: "Fiori Elements, CDS Views, OData, SAP Gateway", pt: "Fiori Elements, CDS Views, OData, SAP Gateway" },
    desc: {
      en: "Built a List Report and Object Page application to monitor purchase orders in real time using CDS views and OData services.",
      pt: "Desenvolvi um app List Report e Object Page para monitorar pedidos de compra em tempo real usando CDS Views e serviços OData."
    },
    code: `@AbapCatalog.sqlViewName: 'ZPO_MONITOR'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Purchase Order Monitor'
define view Z_I_PurchaseOrder_Monitor as select from ekko as header
association [1..*] to Z_I_PO_Item_Monitor as item on item.ebeln = header.ebeln {
  key header.ebeln as PurchaseOrder,
      header.ernam as CreatedBy,
      header.erdat as CreatedOn,
      header.lifnr as Vendor,
      item.NetValue,
      item.Currency
}`
  },
  {
    title: { en: "ABAP OO: Invoice Processor", pt: "ABAP OO: Processador de Notas Fiscais" },
    tech: { en: "ABAP OO, Classes, Interfaces", pt: "ABAP OO, Classes, Interfaces" },
    desc: {
      en: "Developed an object-oriented invoice processing system using polymorphism and encapsulation principles.",
      pt: "Desenvolvi um sistema orientado a objetos para processamento de notas fiscais usando polimorfismo e encapsulamento."
    },
    code: `CLASS zcl_invoice_processor DEFINITION.
  PUBLIC SECTION.
    INTERFACES if_invoice.
    METHODS process_invoice REDEFINITION.
ENDCLASS.

CLASS zcl_invoice_processor IMPLEMENTATION.
  METHOD if_invoice~process_invoice.
    IF invoice_type = 'NFC'.
      " Processar NFC
    ELSE.
      " Processar NF-e
    ENDIF.
  ENDMETHOD.
ENDCLASS.`
  },
  {
    title: { en: "SAP BTP: Notification Service Integration", pt: "BTP: Integração com Serviço de Notificação" },
    tech: { en: "SAP BTP, REST API, Node.js, Cloud Foundry", pt: "SAP BTP, REST API, Node.js, Cloud Foundry" },
    desc: {
      en: "Integrated an ABAP system with SAP BTP to send email notifications using a serverless function.",
      pt: "Integrei um sistema ABAP com SAP BTP para enviar notificações por e-mail usando uma função serverless."
    },
    code: `// Node.js function on BTP
app.post('/send-notification', (req, res) => {
  const { email, message } = req.body;
  // Send via SAP Build Work Zone or Email Service
  transporter.sendMail({ to: email, subject: 'Alert', text: message });
  res.status(200).send('Sent');
});`
  },
  {
    title: { en: "HANA SQLScript: Sales Analytics", pt: "SQLScript HANA: Análise de Vendas" },
    tech: { en: "SAP HANA, SQLScript, Calculation Views", pt: "SAP HANA, SQLScript, Calculation Views" },
    desc: {
      en: "Created a high-performance analytical view using SQLScript for real-time sales reporting.",
      pt: "Criei uma view analítica de alto desempenho usando SQLScript para relatórios de vendas em tempo real."
    },
    code: `CREATE VIEW "SALES_ANALYTICS" AS
SELECT 
  PRODUCT,
  SUM(REVENUE) as TOTAL_REVENUE,
  COUNT(*) as ORDER_COUNT
FROM "SALES_DATA"
GROUP BY PRODUCT
HAVING SUM(REVENUE) > 10000;`
  }
];

// Inserir projetos dinamicamente
function loadProjects() {
  const container = document.querySelector(".projects-grid");
  const lang = localStorage.getItem("language") || "pt";

  projects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${proj.title[lang]}</h3>
      <p class="tech"><strong>Tech:</strong> ${proj.tech[lang]}</p>
      <p>${proj.desc[lang]}</p>
      <pre><code>${proj.code}</code></pre>
    `;
    container.appendChild(card);
  });
}

// Carregar projetos
document.addEventListener("DOMContentLoaded", loadProjects);
