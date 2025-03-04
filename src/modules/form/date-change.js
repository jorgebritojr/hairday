import { schedulesDay } from "../schedules/load"

// Selecionar o input de data
const selectedDAte = document.getElementById("date")

// Recarregar a lista de horarios quando o input de data mudar.
selectedDAte.onchange = () => schedulesDay()