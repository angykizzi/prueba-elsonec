# 🚀 Proyecto: App con Next.js 14, Server Components, React Query, ShadCN y TanStack Table

## 📦 Requisitos previos

Asegúrate de tener instalado:

- Node.js (v18 o superior)
---

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/angykizzi/prueba-elsonec.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Levanta el servidor de desarrollo:

```bash
npm run dev
```

La app estará disponible en `http://localhost:3000`

---

## 🗂 Estructura del Proyecto

```
src/
├── app/
│   ├── features/
│   │   ├── posts/
│   │   │   ├── components/
│   │   │   ├── container/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── types/
│   │   └── users/
│   │       ├── components/
│   │       ├── container/
│   │       ├── hooks/
│   │       ├── services/
│   │       └── types/
│   ├── fonts/
│   ├── posts/
│   ├── providers/
│   ├── users/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── DataTable.tsx
│   ├── ErrorMessage.tsx
│   ├── LoadingOverlay.tsx
│   └── SearchInput.tsx
├── lib/
│   ├── filtersPosts.ts
└── styles/
    └── globals.css
```

---

## 🧠 Decisiones Arquitectónicas

### ✅ Server Components vs SSR
Este proyecto usa **React Server Components (RSC)** de Next.js 14, ya que:

- **Mejor rendimiento:** el renderizado ocurre en el servidor y se envía HTML optimizado al cliente.
- **Menor carga en el cliente:** evita enviar JS innecesario.
- **Mejor experiencia para datos estáticos o semiestáticos**, como `/posts` o `/users`, donde el cliente solo necesita rehidratación parcial.

Solo uso **Client Components** cuando es necesario (inputs, filtros, tablas interactivas, etc).

### 📁 Organización del directorio `/app/features`

Separación por dominio funcional:

- `features/posts` y `features/users`: contienen **componentes específicos por feature** (hooks, servicios, contenedores, etc).

Esto permite **escalabilidad y mantenibilidad**, cada feature es autónomo y fácilmente reemplazable o testeable.

### ⚙️ React Query para manejo de datos

- Los hooks de fetching (`useUsers`, `usePosts`) viven en `features/*/hooks` y usan `react-query`.
- La cache y el estado de red se manejan automáticamente.
- Decisiones claves:
  - **Refetch automático en reconexión o focus.**
  - **StaleTime y gcTime configurados para reducir peticiones innecesarias.**

```ts
useQuery({
  queryKey: ["users"],
  queryFn: getUsers,
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
})
```

---

## 🧩 Componentes reutilizables

- `ErrorMessage.tsx`: muestra errores con diseño consistente.
- `LoadingOverlay.tsx`: muestra loading global.
- `DataTable.tsx`: tabla genérica con TanStack Table.
- `SearchInput.tsx`: input reutilizable con estilo ShadCN.

---

## ✅ Mejores prácticas utilizadas

- Arquitectura por features.
- Separación de lógica de UI, fetching y utils.
- Reutilización de componentes.
- TanStack Table para tablas potentes y performantes.
- ShadCN + TailwindCSS para UI modular, limpia y moderna.
- React Query para estado asincrónico controlado.

---

# Cuestionario Teórico

A. Verdadero / Falso
✅ Verdadero
❌ Falso (useEffect se ejecuta después del renderizado)
❌ Falso (TypeScript ayuda, pero no elimina todos los errores en tiempo de ejecución)
✅ Verdadero
❌ Falso (ShadCN es para uso general, no solo dashboards empresariales)
B. Opción múltiple
6. B. Renderizar componentes en el servidor, reduciendo el JS que se envía al cliente.
7. B. Configurar revalidate al usar getStaticProps()
8. B. Permite crear interfaces y tipos para ayudar a detectar errores de forma anticipada
9. B. Cacheo y revalidación automática de datos, reduciendo llamadas innecesarias
10. A. Es una colección de componentes accesibles y personalizables para React