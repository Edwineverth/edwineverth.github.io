const cases = {
  orders: { title: 'Orquestación de órdenes', sections: [['Contexto', 'El ecosistema de e-commerce necesita conectar la recepción de pedidos, sus eventos y las integraciones que acompañan el flujo de órdenes.'], ['Mi aporte', 'Trabajé en la evolución del flujo de estados, la recepción de eventos y las integraciones con JANIS V2 e Instaleap Colombia. También participé en mejoras de infraestructura con Terraform.'], ['Tecnologías y foco', 'Node.js, NestJS, TypeScript, SNS, SQS, Lambda, DynamoDB y Aurora. Trazabilidad de eventos y diagnóstico con Coralogix y New Relic.']] },
  quality: { title: 'Automatización de calidad', sections: [['Contexto', 'Centralizar la validación de código y configuración, y facilitar la consulta del avance y los resultados de las ejecuciones.'], ['Mi aporte', 'Desarrollé funcionalidades de backend y frontend para comparar variables de respaldo, configuración y código. Integré repositorios, S3 y SonarQube; construí flujos de autenticación y un proceso asíncrono para automatizar actividades en Jira.'], ['Tecnologías y foco', 'TypeScript, NestJS, Next.js, React, S3, CodeCommit, DocumentDB, SonarQube y AWS Bedrock. Estados de ejecución, resultados y seguimiento de avances desde el portal.']] },
  cbc: { title: 'Servicios para PepsiChat', sections: [['Contexto', 'Sistemas de pedidos y derivaciones para embotelladoras del sector de consumo masivo. Proyecto por contrato con Apex Global Mobility / CBC Guatemala en 2024.'], ['Mi aporte', 'Participé como Full Stack Developer Senior en la modernización del backend de PepsiChat y en las integraciones de los sistemas de derivación de pedidos.'], ['Tecnologías y foco', 'Go, Java, NestJS, AWS y PostgreSQL. Integración de servicios y evolución de los flujos de pedidos.']] }
};
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
