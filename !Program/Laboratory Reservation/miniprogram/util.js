export function overTime(year,month,day,dayNum) {
    let orderTime = new Date(`${year}/${month}/${day} 12:00:00`).getTime();
    let now = new Date().getTime();
    let isOver = now - orderTime - dayNum*24*60*60*1000;
    if (isOver > 0) {
        return true;
    } else {
        return false; 
    }
}

export function over(time,dayNum) {
    let isOver = new Date().getTime() - time - dayNum*24*60*60*1000;
    if (isOver > 0) {
        return true;
    } else {
        return false; 
    }
}
