---
title: "RHYTHMLOGIC: Arquitectura de Microservicios Aplicada a la Gestión de Competencias de Danza"
description: "Transformación de un proceso manual de gestión de competencias de danza a una arquitectura distribuida tolerante a fallos parciales."
summary: "Transformación de un proceso manual de gestión de competencias de danza a una arquitectura distribuida tolerante a fallos parciales."
student: "Araceli Florencia Aguilar"
students: ["Araceli Florencia Aguilar"]
course: "Trabajo Final de Carrera - Ingeniería en Informática"
role: "Director de Trabajo Final de Carrera"
academicYear: "2024"
category: "Arquitectura de Software"
tags: ["Microservices", "React", "Django", "Flask", "Docker", "MinIO"]
featured: true
pubDate: 2024-03-15
---

## Resumen del Proyecto

La gestión de competencias de danza presenta un escenario operativo crítico caracterizado por alta volatilidad de datos, concurrencia en picos temporales e interdependencia de procesos en tiempo real. 

Tradicionalmente, la organización de estos eventos dependía de un flujo de trabajo manual y fragmentado: planillas de cálculo descentralizadas, acreditaciones en papel, procesamiento manual de música en carpetas locales y tabulación física de puntuaciones. Este esquema generaba cuellos de botella operativos, pérdida de trazabilidad y vulnerabilidad ante fallos puntuales que paralizaban el evento.

**RHYTHMLOGIC** reencauza esta problemática mediante la transformación del dominio funcional en una **arquitectura distribuida de microservicios orientada al negocio**, garantizando alta disponibilidad, aislamiento de fallos e interoperabilidad entre los diferentes actores de una competencia.

---

## El Problema Operativo

El flujo operativo estándar de un certamen de danza exige coordinar múltiples variables simultáneamente:

- **Inscripciones y Categorización:** Registro de participantes, academias, bailarines independientes, modalidades, categorías y niveles de disciplina.
- **Generación de Cronogramas:** Ordenamiento de presentaciones contemplando restricciones de cambio de vestuario, tiempos de descanso, categorías y edades sin solapamientos.
- **Gestión de Pistas de Audio:** Recepción, validación, almacenamiento persistente, ordenamiento automatizado y reproducción sin latencia de la música asociada a cada rutina.
- **Juzgamiento en Tiempo Real:** Carga continua de evaluaciones por parte del jurado mediante dispositivos móviles con cómputo instantáneo de puntajes y desempates.
- **Acreditación y Notificaciones:** Control de acceso en puerta y emisión de alertas segmentadas según el contexto del evento.

---

## Componentes Principales de la Solución

1. **Frontend Móvil y Web (React PWA):** Interfaz adaptativa orientada a participantes, organizadores y jurados.
2. **API Gateway (Flask REST API):** Punto único de entrada encargado del enrutamiento, límites de tasa y validación de peticiones.
3. **Autenticación (Google OAuth 2.0):** Seguridad desacoplada para gestión de roles e identidades.
4. **Ecosistema de Microservicios:**
   - **Microservicio de Seguridad:** Gestión de credenciales y permisos.
   - **Microservicio de Inscripción:** Administración de registros y academias.
   - **Microservicio de Cronograma:** Algoritmo dinámico de ordenamiento de presentaciones.
   - **Microservicio de Evaluación:** Tabulación en tiempo real de puntuaciones.
   - **Microservicio de Notificación:** Integración con Firebase Cloud Messaging (FCM) para alertas push.
   - **Microservicio Dashboard:** Métricas consolidadas para la dirección del evento.
5. **Persistencia Aislada (MySQL):** Esquema *Database-per-Service* para evitar acoplamiento a nivel de datos.
6. **Almacenamiento de Objetos (MinIO S3):** Buckets independientes para música de inscripciones, reglamentos y devoluciones del jurado.

---

## Decisiones Técnicas y Tolerancia a Fallos

- **Aislamiento de Persistencia:** Cada microservicio gestiona su propia base de datos, eliminando puntos únicos de falla (SPOF).
- **Contenerización:** Despliegue estandarizado mediante **Docker** asegurando reproducibilidad entre ambientes de desarrollo y producción.
- **Seguridad en Comunicaciones:** Transporte seguro con JWT, aislamiento de puertos y políticas CORS estrictas entre el Gateway y los servicios internos.