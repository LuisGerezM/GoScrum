import React from "react"

export const TaskCards = () => {
  return (
    <section className="wrapper_list">
      <div className="list_header">
        <div>Mis tareas</div>
      </div>
      <div className="filters">
        <div>
          <div className="search">
            <input type="text" placeholder="Seleccionar por titulo..." />
          </div>

          {/* AÑADIR CONTROL A ESTE SELECT.. PARA QUE NO SE PUEDA SELECCIONAR "" */}
          <div className="select">
            <select
              className="importance"
              name="importance"
            >
              <option value="" disabled>
                Seleccionar una prioridad
              </option>
              <option value="ALL">Todas</option>
              <option value="LOW">Baja</option>
              <option value="MEDIUM">Media</option>
              <option value="HIGH">Alta</option>
            </select>
          </div>
        </div>
      </div>

      <div className="list_group">
        <div className="list">
          <div>Nuevas</div>
        </div>

        <div className="list">
          <div>En proceso</div>
        </div>

        <div className="list">
          <div>Finalizadas</div>
        </div>
      </div>
    </section>
  )
}
