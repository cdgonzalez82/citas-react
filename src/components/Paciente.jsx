const Paciente = ({paciente, setpaciente, eliminarPaciente}) => {

  const {nombre, prop, email, fecha, sintomas, id} = paciente

  const HandleEliminar = () => {
      const respuesta = confirm("Desea eliminar este paciente?")

      if (respuesta) {
        eliminarPaciente(id)
      }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{ nombre }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{ prop }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{ email }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">{ fecha }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{ sintomas }</span>
        </p>

        <div className="flex justify-between">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={() => setpaciente(paciente)}>
                Editar
            </button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" onClick={HandleEliminar}>
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente