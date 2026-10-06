const cases = {
  orders: { title: 'Orquestación de órdenes', sections: [['Contexto', 'El ecosistema de e-commerce necesita conectar la recepción de pedidos, sus eventos y las integraciones que acompañan el flujo de órdenes.'], ['Mi aporte', 'Trabajé en la evolución del flujo de estados, la recepción de eventos y las integraciones con JANIS V2 e Instaleap Colombia. También participé en mejoras de infraestructura con Terraform.'], ['Tecnologías y foco', 'Node.js, NestJS, TypeScript, SNS, SQS, Lambda, DynamoDB y Aurora. Trazabilidad de eventos y diagnóstico con Coralogix y New Relic.']] },
  quality: { title: 'Automatización de calidad', sections: [['Contexto', 'Centralizar la validación de código y configuración, y facilitar la consulta del avance y los resultados de las ejecuciones.'], ['Mi aporte', 'Desarrollé funcionalidades de backend y frontend para comparar variables de respaldo, configuración y código. Integré repositorios, S3 y SonarQube; construí flujos de autenticación y un proceso asíncrono para automatizar actividades en Jira.'], ['Tecnologías y foco', 'TypeScript, NestJS, Next.js, React, S3, CodeCommit, DocumentDB, SonarQube y AWS Bedrock. Estados de ejecución, resultados y seguimiento de avances desde el portal.']] },
  cbc: { title: 'Servicios para PepsiChat', sections: [['Contexto', 'Sistemas de pedidos y derivaciones para embotelladoras del sector de consumo masivo. Proyecto por contrato con Apex Global Mobility / CBC Guatemala en 2024.'], ['Mi aporte', 'Participé como Full Stack Developer Senior en la modernización del backend de PepsiChat y en las integraciones de los sistemas de derivación de pedidos.'], ['Tecnologías y foco', 'Go, Java, NestJS, AWS y PostgreSQL. Integración de servicios y evolución de los flujos de pedidos.']] }
};
Object.assign(cases, {
  "insurance": {
    "title": "Servicios para seguros",
    "sections": [
      [
        "Proyecto y período",
        "MindTech / Nubity · 2025–2026"
      ],
      [
        "Contexto",
        "Proyecto del sector seguros y transaccional, con APIs, procesamiento batch y una interfaz Angular."
      ],
      [
        "Mi aporte",
        "Desarrollé y mejoré APIs REST con Lambda y API Gateway, mantuve funcionalidades Angular y trabajé con DynamoDB, Step Functions y Kinesis."
      ],
      [
        "Mejoras y logros",
        "Mejoré procesos de clasificación de productos e inventario global. Participé en la evolución hacia múltiples aseguradoras, reduciendo configuraciones y lógica específica de un único cliente."
      ],
      [
        "Tecnologías",
        "Python, Angular, Lambda, API Gateway, DynamoDB, Step Functions, Kinesis, Glue, CloudFront, CDK y Azure AD/SSO."
      ]
    ]
  },
  "smart": {
    "title": "Operaciones financieras y activos digitales",
    "sections": [
      [
        "Proyecto y período",
        "GlobalTask / SMART PLUS · 2025–2026"
      ],
      [
        "Contexto",
        "Plataforma financiera y de activos digitales con compras, pagos, notificaciones y comunicación en tiempo real."
      ],
      [
        "Mi aporte",
        "Desarrollé soluciones transaccionales y participé en la evolución de la arquitectura para concurrencia y comunicación en tiempo real."
      ],
      [
        "Mejoras y logros",
        "Automaticé procesos operativos y transaccionales. Trabajé en trazabilidad y resiliencia mediante procesamiento asíncrono y control de transacciones."
      ],
      [
        "Tecnologías",
        "C#, .NET Core, PostgreSQL, Lambda, SNS, SQS, Kafka, WebSockets, DDD, CQRS, arquitectura hexagonal y pruebas unitarias."
      ]
    ]
  },
  "payments": {
    "title": "Integraciones de medios de pago",
    "sections": [
      [
        "Proyecto y período",
        "Acid Labs / Embonor Chile · 2024–2025"
      ],
      [
        "Contexto",
        "Plataforma de medios de pago para el sector retail de Coca-Cola Embonor."
      ],
      [
        "Mi aporte",
        "Lideré la implementación de integraciones con FLOW, Kiphu y Cybersource. Trabajé con el equipo en el proceso de compra y las validaciones de pagos."
      ],
      [
        "Mejoras y logros",
        "Mejoramos los flujos críticos de validación y la escalabilidad del sistema de pagos, con foco en el procesamiento de órdenes y el manejo de errores transaccionales."
      ],
      [
        "Tecnologías",
        "NestJS, Angular, Node.js, AWS IAM/SNS/SQS/S3, PostgreSQL, Docker y Terraform."
      ]
    ]
  },
  "coinshop": {
    "title": "Onboarding para comercio digital",
    "sections": [
      [
        "Proyecto y período",
        "Banco Azteca / COINSHOP · 2024–2025"
      ],
      [
        "Contexto",
        "Plataforma de comercio digital orientada a clientes minoristas en un entorno bancario."
      ],
      [
        "Mi aporte",
        "Diseñé microservicios para el onboarding de clientes, con foco en seguridad y en el flujo de registro."
      ],
      [
        "Mejoras y logros",
        "Trabajé en la evolución del proceso de onboarding y en prácticas orientadas a eventos para apoyar la disponibilidad de los servicios."
      ],
      [
        "Tecnologías",
        "Go, JavaScript, NestJS, PostgreSQL y AWS SNS/SQS."
      ]
    ]
  },
  "retail": {
    "title": "Automatización de pedidos en LATAM",
    "sections": [
      [
        "Proyecto y período",
        "Acid Labs / Cencosud · 2022–2024"
      ],
      [
        "Contexto",
        "Flujo de pedidos de e-commerce retail para Cencosud LATAM."
      ],
      [
        "Mi aporte",
        "Participé en la automatización de pedidos e incorporé trazabilidad de eventos críticos con SNS y SQS. Acompañé técnicamente a nuevos integrantes del equipo."
      ],
      [
        "Mejoras y logros",
        "Evolucioné procesos operativos y el seguimiento de eventos para facilitar monitoreo y alertas. Contribuí a la incorporación técnica de nuevos desarrolladores."
      ],
      [
        "Tecnologías",
        "Node.js, NestJS, Lambda, SNS, SQS, IAM, PostgreSQL, Docker, Go y Python."
      ]
    ]
  },
  "rappi": {
    "title": "Herramientas para operaciones financieras",
    "sections": [
      [
        "Proyecto y período",
        "Avalith / Rappi Bank México · 2021–2022"
      ],
      [
        "Contexto",
        "Herramientas internas para operaciones financieras de RappiPay / Rappi Bank México."
      ],
      [
        "Mi aporte",
        "Desarrollé funcionalidades de tarjetas y pagos, y participé en la automatización de procesos de soporte financiero."
      ],
      [
        "Mejoras y logros",
        "Con el equipo implementamos SonarQube y CI/CD para incorporar controles de calidad a las releases. Automatizamos procesos internos de atención a soporte."
      ],
      [
        "Tecnologías",
        "Node.js, NestJS, PostgreSQL, Redis, GraphQL, AWS, Jenkins, Docker y SonarQube."
      ]
    ]
  },
  "panacash": {
    "title": "Procesos de préstamo y migración de datos",
    "sections": [
      [
        "Proyecto y período",
        "Panainvest / Panacash · 2020–2021"
      ],
      [
        "Contexto",
        "Aplicación financiera para adelantos de salario en el sector fintech."
      ],
      [
        "Mi aporte",
        "Trabajé en procesos de préstamo mediante control y revisión de logs. Participé en la migración de registros con procesos ETL automatizados en Pentaho."
      ],
      [
        "Mejoras y logros",
        "Mejoré el diagnóstico de errores en préstamos y coordiné con soporte y QA para establecer flujos de resolución más ágiles."
      ],
      [
        "Tecnologías",
        "Node.js, NestJS, PostgreSQL, AWS, GraphQL, Docker y Pentaho."
      ]
    ]
  },
  "skf": {
    "title": "Automatización de sistemas heredados",
    "sections": [
      [
        "Proyecto y período",
        "Avalith / SKF Brasil · 2020"
      ],
      [
        "Contexto",
        "Proyecto por contrato para automatizar procesos de sistemas heredados de SKF Brasil."
      ],
      [
        "Mi aporte",
        "Me desempeñé como Tech Lead e implementé soluciones RPA para el ingreso de documentos Excel y PDF a sistemas internos."
      ],
      [
        "Mejoras y logros",
        "Automaticé tareas de carga documental y consolidé documentación técnica para facilitar futuras migraciones."
      ],
      [
        "Tecnologías",
        "Python, Django, AWS, Docker y Git."
      ]
    ]
  },
  "cooperative": {
    "title": "Reportes e integración bancaria",
    "sections": [
      [
        "Proyecto y período",
        "Cooperativa Once de Junio · 2019–2020"
      ],
      [
        "Contexto",
        "Entidad cooperativa financiera en Machala, Ecuador."
      ],
      [
        "Mi aporte",
        "Desarrollé soluciones financieras e integré APIs REST para conectar subsistemas del entorno bancario."
      ],
      [
        "Mejoras y logros",
        "Mejoré los reportes financieros con visualización de datos y Power Query. Conecté funcionalidades de distintos subsistemas mediante APIs."
      ],
      [
        "Tecnologías",
        "C#, JavaScript, Django, React, SQL Server, Node.js y Power Query."
      ]
    ]
  },
  "eds": {
    "title": "Modernización de aplicaciones de negocio",
    "sections": [
      [
        "Proyecto y período",
        "Enterprise Data System · 2015–2019"
      ],
      [
        "Contexto",
        "Aplicaciones para hotelería, contabilidad, portafolio y retail en Ecuador."
      ],
      [
        "Mi aporte",
        "Implementé sistemas personalizados y desarrollé dashboards analíticos en tiempo real para apoyar la consulta de información de negocio."
      ],
      [
        "Mejoras y logros",
        "Participé en la digitalización de procesos y en la migración y el rediseño de sistemas heredados hacia plataformas modernas."
      ],
      [
        "Tecnologías",
        "Java, Python, C#, Laravel, PostgreSQL, ASP.NET, Arduino y React."
      ]
    ]
  }
});
cases.orders.sections.splice(2, 0, ['Mejoras y logros', 'Evolución de transiciones de estado, integración de proveedores y mejoras en infraestructura de despliegue. Trabajo sobre flujos de recepción y facturación de órdenes.']);
cases.quality.sections.splice(2, 0, ['Mejoras y logros', 'Centralización de validaciones en un portal, detección de variables faltantes o sin uso y diferencias de valores. Seguimiento de ejecuciones asíncronas y automatización de actividades de Jira.']);
cases.cbc.sections.splice(2, 0, ['Mejoras y logros', 'Modernización del backend de PepsiChat y evolución de integraciones para el procesamiento y la derivación de pedidos.']);
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  let count = 0;
  cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
  document.getElementById('filter-status').textContent = `${count} proyectos visibles`;
}));
const dialog = document.getElementById('case-dialog');
let trigger;
document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => {
  const item = cases[button.dataset.case]; trigger = button;
  document.getElementById('case-title').textContent = item.title;
  const content = document.getElementById('case-content'); content.replaceChildren();
  item.sections.forEach(([heading, description]) => { const h = document.createElement('h3'); h.textContent = heading; const p = document.createElement('p'); p.textContent = description; content.append(h, p); });
  dialog.showModal(); document.body.classList.add('modal-open');
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); });
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); trigger?.focus(); });
document.getElementById('year').textContent = new Date().getFullYear();
