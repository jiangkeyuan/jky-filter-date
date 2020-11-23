const filterDate = (date,type)=>{
    try {
        const dateValue = new Date(date);
        const DD = fillZero(dateValue.getDate());
        const MM = fillZero(dateValue.getMonth() + 1);
        const YYYY = dateValue.getFullYear(); 

        const ss = fillZero(dateValue.getSeconds());
        const hh = fillZero(dateValue.getHours());
        const mm = fillZero(dateValue.getMinutes());
        return type.replace("DD",DD).replace("YYYY",YYYY).replace("MM",MM).replace("ss",ss).replace("mm",mm).replace("hh",hh)
    } catch (error) {
        throw new Error(error);
    }
}

const fillZero = (numbers)=>{
    return numbers < 10 ? "0" + numbers : numbers
}

export default filterDate;
