import dayjs from 'dayjs'
import React from 'react'

export function getRemainingTimeUntilMsTimestamp(tiemstampMs) {

    const tiemstampDayjs = dayjs(tiemstampMs);
    const nowDayjs = dayjs();
    if (tiemstampDayjs.isBefore(nowDayjs)) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }
    return {
        seconds: getRemainingSeconds(nowDayjs, tiemstampDayjs),
        minutes: getRemainingMinutes(nowDayjs, tiemstampDayjs),
        hours: getRemainingHours(nowDayjs, tiemstampDayjs),
        days: getRemainingDays(nowDayjs, tiemstampDayjs)
    }

}

function getRemainingSeconds(nowDayjs, tiemstampDayjs) {
    const seconds = tiemstampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZero(seconds, 2);
}
function getRemainingMinutes(nowDayjs, tiemstampDayjs) {
    const minutes = tiemstampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZero(minutes, 2);
}
function getRemainingHours(nowDayjs, tiemstampDayjs) {
    const hours = tiemstampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZero(hours, 2);
}
function getRemainingDays(nowDayjs, tiemstampDayjs) {
    const days = tiemstampDayjs.diff(nowDayjs, 'days');
    return padWithZero(days, 2);
}

function padWithZero(number, minLength) {
    const numberStr = number.toString();
    if (numberStr.length >= minLength) return numberStr;
    return "0".repeat(minLength - numberStr.length) + numberStr;
}