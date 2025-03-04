import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"

export function hoursLoad({ date }){
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora.
    // console.log(hour)
    const [scheduleHour] = hour.split(":")
    // console.log(scheduleHour)


    // Adicionar a hora na data e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    // console.log(isHourPast)
    // console.log(scheduleHour, isHourPast)


    // console.log ({
    //   hour,
    //   available: isHourPast,
      
    // })
    return {
      hour,
      available: isHourPast,
      
    }
  })
  console.log(opening)
}