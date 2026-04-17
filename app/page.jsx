export default function BrainLabWebsite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <a
        href="https://wa.me/50768671253?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20tutor%C3%ADas"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-xl transition hover:scale-105 hover:bg-emerald-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 text-white"
        >
          <path d="M12 2a10 10 0 0 0-8.72 14.9L2 22l5.25-1.25A10 10 0 1 0 12 2Zm5.16 14.34c-.21.6-1.2 1.11-1.66 1.18-.43.06-.97.09-1.56-.1-.36-.12-.83-.27-1.43-.53-2.52-1.09-4.16-3.63-4.29-3.8-.13-.17-1.02-1.36-1.02-2.6 0-1.24.65-1.85.88-2.1.23-.25.5-.31.67-.31h.48c.15 0 .35-.06.54.39.21.5.72 1.73.78 1.86.06.12.1.27.02.44-.08.17-.12.27-.25.41-.12.14-.26.31-.37.42-.12.12-.24.25-.1.49.13.23.59.97 1.27 1.57.87.77 1.6 1.01 1.83 1.12.23.12.37.1.5-.06.17-.21.67-.78.85-1.05.17-.27.35-.23.58-.14.23.08 1.47.69 1.72.81.25.12.42.18.48.27.06.08.06.5-.15 1.1Z" />
        </svg>
      </a>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
          <div className="absolute top-32 -left-16 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <nav className="mb-14 flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                <span className="text-xl font-bold">B</span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-xl font-black tracking-tight">
                  BrainLab
                </p>
                <p className="text-sm text-slate-500">
                  Tutorías que sí se entienden
                </p>
              </div>
            </div>

            <a
              href="#contacto"
              className="shrink-0 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 sm:px-5"
            >
              Reservar clase
            </a>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <div className="mb-5 inline-flex max-w-full items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Tutorías presenciales en David, Chiriquí y virtuales
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Aprender con claridad puede marcar la diferencia.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 text-justify sm:text-lg sm:leading-8">
                En BrainLab ayudamos a estudiantes a reforzar temas, recuperar
                confianza y avanzar con clases claras, directas y adaptadas a su
                ritmo, tanto en tutorías académicas como en apoyo de idiomas.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#servicios"
                  className="rounded-2xl bg-emerald-500 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5"
                >
                  Ver servicios
                </a>
                <a
                  href="#contacto"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Escribir por WhatsApp
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["Clases claras", "Explicación paso a paso"],
                  ["A tu ritmo", "Sin presión innecesaria"],
                  ["Resultados reales", "Más comprensión y confianza"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <p className="font-bold">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-200 to-sky-200 opacity-50 blur-2xl" />
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
                <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white sm:p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                    BrainLab
                  </p>
                  <h2 className="mt-3 max-w-lg text-2xl font-black leading-tight sm:text-3xl">
                    No se trata de memorizar.
                    <br />
                    Se trata de entender.
                  </h2>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      "Tutorías académicas",
                      "Idiomas",
                      "Refuerzo personalizado",
                      "Acompañamiento virtual y presencial",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
                      >
                        <p className="font-semibold leading-6">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-emerald-50 p-5">
                    <p className="text-sm font-semibold text-emerald-700">
                      Ideal para
                    </p>
                    <p className="mt-2 text-slate-700 text-justify leading-7">
                      Estudiantes que quieren reforzar, nivelarse o prepararse
                      mejor para exámenes y avanzar con mayor seguridad.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-sky-50 p-5">
                    <p className="text-sm font-semibold text-sky-700">
                      Modalidad
                    </p>
                    <p className="mt-2 text-slate-700 text-justify leading-7">
                      Presencial en David, Chiriquí, y virtual para estudiantes
                      de otras zonas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <h3 className="text-2xl font-black">Quiénes somos</h3>
            <p className="mt-4 leading-7 text-slate-600 text-justify">
              BrainLab es un espacio de tutorías creado para estudiantes que
              necesitan algo más que una explicación rápida. Nacimos con la idea
              de enseñar de forma clara, directa y sin complicaciones,
              adaptándonos al ritmo de cada estudiante. Nuestro enfoque no es
              solo que el estudiante pase la materia, sino que realmente
              entienda lo que está haciendo y gane confianza en el proceso.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <h3 className="text-2xl font-black">Objetivo</h3>
            <p className="mt-4 leading-7 text-slate-600 text-justify">
              Lograr que cada estudiante comprenda los temas desde la base,
              eliminando la frustración y fortaleciendo su seguridad académica.
              Buscamos que el aprendizaje sea progresivo, real y sostenible,
              para que puedan enfrentar clases, evaluaciones y nuevos retos con
              mayor tranquilidad y dominio.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <h3 className="text-2xl font-black">Plan de trabajo</h3>
            <p className="mt-4 leading-7 text-slate-600 text-justify">
              Primero identificamos en qué punto está el estudiante y qué temas
              le generan dificultad. A partir de ahí, organizamos las clases de
              forma progresiva, comenzando desde lo necesario para construir una
              base sólida. Cada sesión se enfoca en explicar, practicar y
              reforzar, asegurando que el estudiante entienda antes de avanzar.
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-500">
            Servicios
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight leading-tight">
            Apoyo académico pensado para que el estudiante avance de verdad.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 text-justify sm:text-lg sm:leading-8">
            Desde temas básicos hasta contenidos más exigentes, cada clase se
            adapta a la necesidad real del estudiante.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Matemáticas",
              text: "Álgebra, geometría, funciones, trigonometría y refuerzo para exámenes.",
            },
            {
              title: "Física",
              text: "Conceptos, ejercicios guiados y resolución paso a paso sin enredos.",
            },
            {
              title: "Química",
              text: "Desde fundamentos hasta temas que suelen costar más en clase.",
            },
            {
              title: "Refuerzo básico",
              text: "Matemáticas básicas, lectura, escritura y comprensión para los más pequeños.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-slate-900" />
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 text-justify">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="idiomas" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
  <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-xl sm:p-10">
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-500">
        Idiomas
      </p>
      <h2 className="mt-3 text-4xl font-black tracking-tight leading-tight sm:text-5xl">
        También ofrecemos apoyo en idiomas.
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 text-justify sm:text-lg sm:leading-8">
        Contamos con acompañamiento en idiomas para estudiantes que desean
        fortalecer su nivel, practicar con mayor seguridad y avanzar de forma
        clara y progresiva según sus objetivos.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {[
        {
          title: "Inglés",
          level: "Nivel C2",
          text: "Acompañamiento avanzado con refuerzo en gramática, comprensión, vocabulario, lectura y expresión según el nivel del estudiante.",
          accent: "bg-sky-100 text-sky-700",
        },
        {
          title: "Portugués",
          level: "Hasta B2",
          text: "Clases orientadas a fortalecer la base, mejorar la comprensión y avanzar con mayor seguridad en el uso del idioma.",
          accent: "bg-emerald-100 text-emerald-700",
        },
        {
          title: "Italiano",
          level: "Intermedio avanzado",
          text: "Apoyo enfocado en comprensión, estructura, vocabulario y desarrollo progresivo para seguir subiendo de nivel.",
          accent: "bg-amber-100 text-amber-700",
        },
        {
          title: "Japonés",
          level: "N5 - N4",
          text: "Introducción y refuerzo en lectura básica, vocabulario, estructura y comprensión de forma guiada y progresiva.",
          accent: "bg-rose-100 text-rose-700",
        },
      ].map((card) => (
        <div
          key={card.title}
          className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
              <span className="text-lg font-bold">
                {card.title.charAt(0)}
              </span>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide ${card.accent}`}
            >
              {card.level}
            </span>
          </div>

          <h3 className="text-2xl font-black tracking-tight">
            {card.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600 text-justify">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
                Por qué BrainLab
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Menos frustración. Más claridad.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 text-justify sm:text-lg sm:leading-8">
                Aquí el objetivo no es llenar al estudiante de información, sino
                explicarle bien, detectar qué le está frenando y ayudarlo a
                avanzar con seguridad.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Clases personalizadas",
                "Ambiente paciente y claro",
                "Explicación desde la base",
                "Enfoque en comprensión real",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="font-semibold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-500">
              Contacto
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Reserva tu clase
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 text-justify sm:text-lg sm:leading-8">
              Escríbenos y cuéntanos qué área necesitas reforzar. Te orientamos
              según el nivel y el objetivo del estudiante.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">WhatsApp</p>
                <p className="mt-2 text-lg font-bold">6867-1253</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">
                  Ubicación
                </p>
                <p className="mt-2 text-lg font-bold">David, Chiriquí</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-emerald-500 to-sky-500 p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-black">¿Listo para empezar?</h3>
            <p className="mt-4 text-white/90 text-justify leading-7">
              Presencial o virtual. Tutorías académicas, refuerzo básico e
              idiomas en un espacio pensado para aprender con más claridad.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=50768671253&text=Hola%2C%20quiero%20empezar%20con%20las%20tutor%C3%ADas"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3.5 text-base font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
            >
              Ir a WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
